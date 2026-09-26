// Cloudflare Pages Function: /auth
// Handles initiation of GitHub OAuth handshake for Decap CMS
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Client ID provided by user or environment variable
  const clientId = env.GITHUB_CLIENT_ID || "Ov23liUzN2AfW07634hx";
  const redirectUri = `${url.origin}/callback`;
  const scope = "repo,user";
  const state = url.searchParams.get("state") || Math.random().toString(36).substring(2);

  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", scope);
  authUrl.searchParams.set("state", state);

  return Response.redirect(authUrl.toString(), 302);
}
