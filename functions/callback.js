// Cloudflare Pages Function: /callback
// Handles code-to-token exchange with GitHub for Decap CMS
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const clientId = env.GITHUB_CLIENT_ID || "Ov23liUzN2AfW07634hx";
  const clientSecret = env.GITHUB_CLIENT_SECRET || "";

  if (!code) {
    return new Response("Missing authorization code", { status: 400 });
  }

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Decap-CMS-Cloudflare-OAuth"
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code
      })
    });

    const data = await tokenRes.json();

    if (data.error) {
      const errHtml = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <title>Lỗi Xác Thực OAuth</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0d0e12; color: #f4f4f5; padding: 2.5rem; line-height: 1.6; }
    .box { max-width: 580px; margin: 0 auto; background: #16171d; border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 2rem; }
    h2 { color: #f87171; margin-top: 0; }
    code { background: #232530; padding: 2px 6px; border-radius: 4px; color: #38bdf8; font-size: 0.9em; }
    .tip { background: rgba(56, 189, 248, 0.08); border-left: 3px solid #38bdf8; padding: 0.75rem 1rem; margin-top: 1rem; border-radius: 4px; font-size: 0.875rem; color: #cbd5e1; }
  </style>
</head>
<body>
  <div class="box">
    <h2>⚠️ Không thể xác thực GitHub</h2>
    <p><b>Lý do:</b> ${data.error_description || data.error}</p>
    <div class="tip">
      <b>Hướng dẫn khắc phục:</b><br/>
      Nếu bạn chưa thiết lập Client Secret trên Cloudflare Pages:<br/>
      1. Vào dashboard Cloudflare &gt; <b>Pages</b> &gt; Dự án của bạn.<br/>
      2. Mở mục <b>Settings</b> &gt; <b>Environment variables</b>.<br/>
      3. Thêm biến môi trường bí mật (Secret):<br/>
         • Key: <code>GITHUB_CLIENT_SECRET</code><br/>
         • Value: <i>(Client secret lấy từ GitHub OAuth App)</i><br/>
      4. Lưu và Redeploy lại trang.
    </div>
  </div>
</body>
</html>`;
      return new Response(errHtml, {
        status: 400,
        headers: { "Content-Type": "text/html;charset=UTF-8" }
      });
    }

    const token = data.access_token;
    const content = JSON.stringify({
      token: token,
      provider: "github"
    });

    const successHtml = `<!doctype html>
<html>
<head><meta charset="utf-8"><title>Authorizing Decap CMS...</title></head>
<body style="font-family:sans-serif;padding:2rem;text-align:center;background:#0d0e12;color:#f4f4f5;">
  <p>Đang hoàn tất đăng nhập GitHub, cửa sổ sẽ tự động đóng...</p>
  <script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(
          'authorization:github:success:${content}',
          e.origin
        );
        window.removeEventListener("message", receiveMessage, false);
        setTimeout(function() { window.close(); }, 500);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
</body>
</html>`;

    return new Response(successHtml, {
      headers: { "Content-Type": "text/html;charset=UTF-8" }
    });
  } catch (err) {
    return new Response("Internal Server Error: " + err.message, { status: 500 });
  }
}
