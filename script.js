// =========================================================
// VINH KACER PORTFOLIO — INTERACTIVE ENGINE (script.js)
// =========================================================

// Embedded Complete Dataset (Strictly matching real folders)
let PORTFOLIO_DATA = {"cinematic":[{"id":"cam-bat-den.mp4","title":"Cầm — Bắt Đền [Official Music Video]","category":"cinematic","aspect":"16:9","order":1,"featured":true,"role":"Lead Video Editor • VFX Artist","badge":"OFFICIAL MV","thumbnail":"thumbnails/mv/cam_bat_den.jpg","video_src":"videos/mv/cam-bat-den-nen.mp4","has_breakdown":true,"breakdown_src":"videos/breakdown/cam-bat-den-breakdown.mp4","breakdown_thumb":"thumbnails/breakdown/cam_breakdown.jpg","url":"","platform":"Music Video","description":"MV âm nhạc chính thức của nghệ sĩ Cầm. Cắt dựng nhịp điệu bài hát tinh tế, xử lý ánh sáng và chuyển cảnh điện ảnh.","filename":"cam-bat-den-nen.mp4","breakdowns":[{"id":"cam_bd_1","title":"Breakdown 01","label":"VFX Breakdown (9:16)","src":"videos/breakdown/cam-bat-den-breakdown.mp4","thumb":"thumbnails/breakdown/cam_breakdown.jpg"}],"views":"10M"},{"id":"danmy-vi-da-la-con-gai.mp4","title":"DANMY x OSCREW — 'Vì Đã Là Con Gái' [Official MV]","category":"cinematic","aspect":"16:9","order":2,"featured":false,"role":"Lead Video Editor • Motion Graphics","badge":"OFFICIAL MV","thumbnail":"thumbnails/mv/vi_da_la_con_gai.jpg","video_src":"videos/mv/danmy-vi-da-la-con-gai-nen.mp4","has_breakdown":true,"breakdown_src":"videos/breakdown/danmy-breakdown-01.mp4","breakdown_thumb":"thumbnails/breakdown/danmy_breakdown.jpg","url":"","platform":"Music Video","description":"MV âm nhạc phong cách trẻ trung năng động, nhịp điệu bắt tai, kinetic typography và chuyển cảnh visual motion hiện đại.","filename":"danmy-vi-da-la-con-gai-nen.mp4","breakdowns":[{"id":"danmy_bd_1","title":"Breakdown 01","label":"Breakdown 01","src":"videos/breakdown/danmy-breakdown-01.mp4","thumb":"thumbnails/breakdown/danmy_breakdown.jpg"},{"id":"danmy_bd_2","title":"Breakdown 02","label":"Breakdown 02","src":"videos/breakdown/danmy-breakdown-02.mp4","thumb":"thumbnails/breakdown/danmy_breakdown_2.jpg"}],"views":"2.5M"},{"id":"wheelie-mon-qua-que.mp4","title":"@wheelie0nther0ad — Món Quà Quê ft. @ICYFAMOUSS [Official MV]","category":"cinematic","aspect":"16:9","order":3,"featured":false,"role":"Lead Video Editor • Sound Sync • VFX","badge":"OFFICIAL MV","thumbnail":"thumbnails/mv/mon_qua_que.jpg","video_src":"videos/mv/wheelie-mon-qua-que-nen.mp4","has_breakdown":true,"breakdown_src":"videos/breakdown/wheelie-mon-qua-que-breakdown.mp4","breakdown_thumb":"thumbnails/breakdown/wheelie_breakdown_2.jpg","url":"","platform":"Music Video","description":"MV Rap/Hip-hop đường phố chân thực, khớp từng beat bass uy lực và hiệu ứng chuyển cảnh kỹ xảo độc đáo.","filename":"wheelie-mon-qua-que-nen.mp4","breakdowns":[{"id":"wheelie_bd_1","title":"Breakdown 01","label":"VFX Breakdown (9:16)","src":"videos/breakdown/wheelie-mon-qua-que-breakdown.mp4","thumb":"thumbnails/breakdown/wheelie_breakdown_2.jpg"}],"views":"800K"}],"thunglong":[{"id":"7315392879562591490","title":"1 Ngày Foodtour Bất Quy Tắc 🤤","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7315392879562591490.jpg","video_src":"videos/thunglong/1-ngay-foodtour.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7315392879562591490","platform":"TikTok","filename":"1-ngay-foodtour.mp4","views":"2.1M"},{"id":"7212612550922407194","title":"1 Ngày Hoa Mắt Với Con Gái 17 Tháng Tuổi (Fatzbaby)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7212612550922407194.jpg","video_src":"videos/thunglong/1-ngay-hoa-mat-con-gai.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7212612550922407194","platform":"TikTok","filename":"1-ngay-hoa-mat-con-gai.mp4","views":"1.8M"},{"id":"7287550952079396098","title":"Ai Chẳng Muốn Mình Xênh Với Lung Lênh 🤭","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7287550952079396098.jpg","video_src":"videos/thunglong/ai-chang-muon-minh-xenh.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7287550952079396098","platform":"TikTok","filename":"ai-chang-muon-minh-xenh.mp4","views":"1.4M"},{"id":"7245623121108159749","title":"Bộ Câu Hỏi Cà Khịa Dành Cho Chị Em (Phần 1)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7245623121108159749.jpg","video_src":"videos/thunglong/bo-cau-hoi-ca-khia-phan-1.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7245623121108159749","platform":"TikTok","filename":"bo-cau-hoi-ca-khia-phan-1.mp4","views":"850K"},{"id":"7279397866169289986","title":"Bộ Câu Hỏi Cà Khịa Dành Cho Chị Em (Phần 2)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7279397866169289986.jpg","video_src":"videos/thunglong/bo-cau-hoi-ca-khia-phan-2.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7279397866169289986","platform":"TikTok","filename":"bo-cau-hoi-ca-khia-phan-2.mp4","views":"720K"},{"id":"7342870241090768130","title":"Chuẩn Bị Lên Thớt 😌 (Dance Trend)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7342870241090768130.jpg","video_src":"videos/thunglong/chuan-bi-len-thot.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7342870241090768130","platform":"TikTok","filename":"chuan-bi-len-thot.mp4","views":"950K"},{"id":"7317614770717297921","title":"Chăm Người Lớn Phức Tạp Ghê Mọi Người Ạ (Aveeno Baby)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7317614770717297921.jpg","video_src":"videos/thunglong/cham-nguoi-lon-phuc-tap.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7317614770717297921","platform":"TikTok","filename":"cham-nguoi-lon-phuc-tap.mp4","views":"1.1M"},{"id":"7307238023320603911","title":"Chạy Theo Xa Hoa Phù Du Mệt Phết 🤣","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7307238023320603911.jpg","video_src":"videos/thunglong/chay-theo-xa-hoa-phu-du.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7307238023320603911","platform":"TikTok","filename":"chay-theo-xa-hoa-phu-du.mp4","views":"1.5M"},{"id":"7281247914771483905","title":"Chị Em Chỉ Cần Mỗi Vậy Thôi Mà (Bánh Trung Thu Hữu Nghị)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7281247914771483905.jpg","video_src":"videos/thunglong/chi-em-chi-can-moi-vay-thoi.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7281247914771483905","platform":"TikTok","filename":"chi-em-chi-can-moi-vay-thoi.mp4","views":"890K"},{"id":"7291276702813064449","title":"Cuộc Thi Hoa Hậu Người Mẹ 👸🏼 (Johnson's Baby)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7291276702813064449.jpg","video_src":"videos/thunglong/cuoc-thi-hoa-hau-nguoi-me.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7291276702813064449","platform":"TikTok","filename":"cuoc-thi-hoa-hau-nguoi-me.mp4","views":"680K"},{"id":"7290173297638018311","title":"Các Bố Mẹ Mà Đập Hộp Thử Lại Lãi Đống Quà 😎","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7290173297638018311.jpg","video_src":"videos/thunglong/dap-hop-thu-lai-dong-qua.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7290173297638018311","platform":"TikTok","filename":"dap-hop-thu-lai-dong-qua.mp4"},{"id":"7332087700129877249","title":"Cô Ơi Cô Đừng Về 🥺 (Nước Giặt Xả Joins 2in1)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7332087700129877249.jpg","video_src":"videos/thunglong/co-oi-co-dung-ve.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7332087700129877249","platform":"TikTok","filename":"co-oi-co-dung-ve.mp4"},{"id":"7208891929671650587","title":"Cưng Tưởng Thế Là Hạ Được Chị Á 🙂","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7208891929671650587.jpg","video_src":"videos/thunglong/cung-tuong-the-la-ha-duoc-chi.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7208891929671650587","platform":"TikTok","filename":"cung-tuong-the-la-ha-duoc-chi.mp4","views":"540K"},{"id":"7236720841944206598","title":"Cứ Thích Thể Hiện Cho Lắm Vào 🤬","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7236720841944206598.jpg","video_src":"videos/thunglong/cu-thich-the-hien-cho-lam-nen.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7236720841944206598","platform":"TikTok","filename":"cu-thich-the-hien-cho-lam-nen.mp4","views":"610K"},{"id":"7284955655289588994","title":"Em Chỉ Ăn Mỗi Thế Thôi Mà (Bàn Chải P/S Than Bạc)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7284955655289588994.jpg","video_src":"videos/thunglong/em-chi-an-moi-the-thoi.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7284955655289588994","platform":"TikTok","filename":"em-chi-an-moi-the-thoi.mp4"},{"id":"7263072598836202760","title":"Food Tour Tại Lệ Giang - Tung Của 🍪🥐🍖","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7263072598836202760.jpg","video_src":"videos/thunglong/food-tour-tai-le-giang.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7263072598836202760","platform":"TikTok","filename":"food-tour-tai-le-giang.mp4","views":"1.2M"},{"id":"7428082811434716421","title":"Giveaway for my fans! Follow and comment, I will pick 15 friends to s... [7428082811434716421].mp4","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7428082811434716421.jpg","video_src":"videos/thunglong/giveaway-for-my-fans.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7428082811434716421","platform":"TikTok","filename":"giveaway-for-my-fans.mp4"},{"id":"7330969014832860418","title":"Hiệp Hội Phao Cứu Sinh Sẵn Sàng Phục Vụ (Phần 2)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7330969014832860418.jpg","video_src":"videos/thunglong/hiep-hoi-phao-cuu-sinh-phan-2.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7330969014832860418","platform":"TikTok","filename":"hiep-hoi-phao-cuu-sinh-phan-2.mp4"},{"id":"7302069166826179842","title":"Hiệp Hội Phao Cứu Sinh Sẵn Sàng Phục Vụ (Bosch Home VN)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7302069166826179842.jpg","video_src":"videos/thunglong/hiep-hoi-phao-cuu-sinh-phan-1.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7302069166826179842","platform":"TikTok","filename":"hiep-hoi-phao-cuu-sinh-phan-1.mp4"},{"id":"7276797810253614337","title":"Khi Bạn Biết Cách Flexing Về Nghề 🤭","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7276797810253614337.jpg","video_src":"videos/thunglong/khi-ban-biet-cach-flexing.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7276797810253614337","platform":"TikTok","filename":"khi-ban-biet-cach-flexing.mp4"},{"id":"7315758991269694721","title":"Khi Bạn Xem Massage Ấn Độ Quá 360 Phút 😵‍💫 (Sạch Gầu 5in1)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7315758991269694721.jpg","video_src":"videos/thunglong/khi-ban-xem-massage-an-do.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7315758991269694721","platform":"TikTok","filename":"khi-ban-xem-massage-an-do.mp4","views":"5.2M"},{"id":"7339135630951304449","title":"May Cho Anh Đấy Nhé 😌","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7339135630951304449.jpg","video_src":"videos/thunglong/may-cho-anh-day-nhe.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7339135630951304449","platform":"TikTok","filename":"may-cho-anh-day-nhe.mp4"},{"id":"7369216070894374162","title":"May mà thân thủ phi phàm 😅","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7369216070894374162.jpg","video_src":"videos/thunglong/may-ma-than-thu-phi-pham.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7369216070894374162","platform":"TikTok","filename":"may-ma-than-thu-phi-pham.mp4"},{"id":"7428822702070304005","title":"Me on work verson VS Me on  version","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7428822702070304005.jpg","video_src":"videos/thunglong/me-on-work-vs-halloween.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7428822702070304005","platform":"TikTok","filename":"me-on-work-vs-halloween.mp4"},{"id":"7448873288429767941","title":"Message copied! Go to Haidilao for late night snacks  ... [7448873288429767941].mp4","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7448873288429767941.jpg","video_src":"videos/thunglong/haidilao-late-night-snacks.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7448873288429767941","platform":"TikTok","filename":"haidilao-late-night-snacks.mp4"},{"id":"7291641220160326913","title":"Quan Trọng Là Cái Tấm Lòng","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7291641220160326913.jpg","video_src":"videos/thunglong/quan-trong-la-cai-tam-long.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7291641220160326913","platform":"TikTok","filename":"quan-trong-la-cai-tam-long.mp4"},{"id":"7305745167993031937","title":"Rồi Ai Là Sếp Ai Là Nhân Viên 🙃","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7305745167993031937.jpg","video_src":"videos/thunglong/roi-ai-la-sep-ai-la-nhan-vien.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7305745167993031937","platform":"TikTok","filename":"roi-ai-la-sep-ai-la-nhan-vien.mp4"},{"id":"7303888492621237506","title":"Sau Khi Xem Massage Ấn Độ Quá 180 Phút (Johnson's Baby)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7303888492621237506.jpg","video_src":"videos/thunglong/sau-khi-xem-massage-an-do.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7303888492621237506","platform":"TikTok","filename":"sau-khi-xem-massage-an-do.mp4","views":"3.8M"},{"id":"7223728609372998918","title":"Thích Ngắm Gái Không Hả 😡👊","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7223728609372998918.jpg","video_src":"videos/thunglong/thich-ngam-gai-khong-ha.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7223728609372998918","platform":"TikTok","filename":"thich-ngam-gai-khong-ha.mp4","views":"2.4M"},{"id":"7539895638197112080","title":"Thơm đến mức chị em muốn ＂động khẩu＂    ... [7539895638197112080].mp4","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7539895638197112080.jpg","video_src":"videos/thunglong/thom-den-muc-chi-em-muon-dong-khau.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7539895638197112080","platform":"TikTok","filename":"thom-den-muc-chi-em-muon-dong-khau.mp4"},{"id":"7226334534378310918","title":"Với Mỗi Món Skincare, Vợ Có Thể Viết Cả Bách Khoa Toàn Thư","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7226334534378310918.jpg","video_src":"videos/thunglong/voi-moi-mon-skincare.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7226334534378310918","platform":"TikTok","filename":"voi-moi-mon-skincare.mp4"},{"id":"7444768523089399096","title":"We have HANFU Chinese traditional clothes Try-on activities in certai... [7444768523089399096].mp4","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7444768523089399096.jpg","video_src":"videos/thunglong/hanfu-chinese-traditional-clothes.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7444768523089399096","platform":"TikTok","filename":"hanfu-chinese-traditional-clothes.mp4"},{"id":"7259733140934102280","title":"Làm Gì Có Chuyện Nối Đến Sáng Mai 🤣","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7259733140934102280.jpg","video_src":"videos/thunglong/lam-gi-co-chuyen-noi-den-sang-mai.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7259733140934102280","platform":"TikTok","filename":"lam-gi-co-chuyen-noi-den-sang-mai.mp4"},{"id":"7325298596356689153","title":"Đu Trend Hơi Muộn Tí Nên Chơi Tới Luôn 👷‍♂️","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7325298596356689153.jpg","video_src":"videos/thunglong/du-trend-hoi-muon-ti.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7325298596356689153","platform":"TikTok","filename":"du-trend-hoi-muon-ti.mp4","views":"1.6M"},{"id":"7297587094958902529","title":"Đu Trend Trong 1 Ngày Mưa Gió 🤣🌧️💦","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7297587094958902529.jpg","video_src":"videos/thunglong/du-trend-trong-1-ngay-mua-gio.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7297587094958902529","platform":"TikTok","filename":"du-trend-trong-1-ngay-mua-gio.mp4","views":"1.3M"}],"freelance":[{"id":"7435672378299944247","title":"Haidilao #APT Dance Challenge — Dance with Us!","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7435672378299944247.jpg","video_src":"videos/freelance/haidilao-apt-dance-challenge.mp4","url":"https://www.tiktok.com/@/video/7435672378299944247","platform":"Commercial","filename":"haidilao-apt-dance-challenge.mp4","views":"4.5M"},{"id":"7466795322665094406","title":"Haidilao Tomato or Potato? — Interactive Viral Choice","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7466795322665094406.jpg","video_src":"videos/freelance/haidilao-tomato-or-potato.mp4","url":"https://www.tiktok.com/@/video/7466795322665094406","platform":"Commercial","filename":"haidilao-tomato-or-potato.mp4","views":"1.9M"},{"id":"7469760253500853509","title":"Haidilao Hotpot — Always There for Your Happiness","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7469760253500853509.jpg","video_src":"videos/freelance/haidilao-hotpot-for-happiness.mp4","url":"https://www.tiktok.com/@/video/7469760253500853509","platform":"Commercial","filename":"haidilao-hotpot-for-happiness.mp4","views":"850K"},{"id":"7447014404505259270","title":"Haidilao Hotpot — Great Food, Great Mood","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7447014404505259270.jpg","video_src":"videos/freelance/haidilao-great-food-great-mood.mp4","url":"https://www.tiktok.com/@/video/7447014404505259270","platform":"Commercial","filename":"haidilao-great-food-great-mood.mp4","views":"920K"},{"id":"7441776844061281591","title":"Haidilao Wednesday Vibes — Buy You A Drink!","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7441776844061281591.jpg","video_src":"videos/freelance/haidilao-wednesday-drink.mp4","url":"https://www.tiktok.com/@/video/7441776844061281591","platform":"Commercial","filename":"haidilao-wednesday-drink.mp4","views":"780K"},{"id":"7521720993946160385","title":"Salitos x Mosvici — Cú Bắt Tay Tình Thân Mến Thân","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7521720993946160385.jpg","video_src":"videos/freelance/salitos-x-mosvici-tinh-than.mp4","url":"https://www.tiktok.com/@/video/7521720993946160385","platform":"Commercial","filename":"salitos-x-mosvici-tinh-than.mp4","views":"600K"},{"id":"7439180307032476984","title":"Haidilao Table Magic — Show You Some Magic Tricks","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7439180307032476984.jpg","video_src":"videos/freelance/haidilao-table-magic-tricks.mp4","url":"https://www.tiktok.com/@/video/7439180307032476984","platform":"Commercial","filename":"haidilao-table-magic-tricks.mp4","views":"2.8M"},{"id":"7544395711182392593","title":"Tự Hào 2 Tiếng Việt Nam 🇻🇳 (Special National Day Film)","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7544395711182392593.jpg","video_src":"videos/freelance/tu-hao-2-tieng-viet-nam.mp4","url":"https://www.tiktok.com/@/video/7544395711182392593","platform":"Commercial","filename":"tu-hao-2-tieng-viet-nam.mp4","views":"1.1M"},{"id":"7425802752959253765","title":"Haidilao Friendship Magic — Behind The Scene Fun","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7425802752959253765.jpg","video_src":"videos/freelance/haidilao-friendship-magic.mp4","url":"https://www.tiktok.com/@/video/7425802752959253765","platform":"Commercial","filename":"haidilao-friendship-magic.mp4","views":"1.3M"},{"id":"7520226940834352385","title":"Clear Men — Tụi Này Ngứa Đòn Cứ Thích Nhờn Với Anh","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7520226940834352385.jpg","video_src":"videos/freelance/clear-men-fake-situation.mp4","url":"https://www.tiktok.com/@/video/7520226940834352385","platform":"Commercial","filename":"clear-men-fake-situation.mp4","views":"2.2M"}]};

let currentTab = 'all';
let searchQuery = '';
let mobileLayoutMode = 'reel'; // 'reel' (horizontal scroll snap) or 'grid' (compact 2-col)

// Mobile 9:16 layout toggle (Horizontal Reel vs Compact 2-Col Grid)
function setMobileLayout(mode) {
  playBeep(720, 0.04);
  mobileLayoutMode = mode;
  const btnReel = document.getElementById('btnMobileReel');
  const btnGrid = document.getElementById('btnMobileGrid');
  if (btnReel && btnGrid) {
    if (mode === 'reel') {
      btnReel.className = 'px-2.5 py-1 rounded bg-white/20 text-white font-bold transition-all flex items-center gap-1';
      btnGrid.className = 'px-2.5 py-1 rounded text-zinc-400 hover:text-white transition-all flex items-center gap-1';
    } else {
      btnReel.className = 'px-2.5 py-1 rounded text-zinc-400 hover:text-white transition-all flex items-center gap-1';
      btnGrid.className = 'px-2.5 py-1 rounded bg-white/20 text-white font-bold transition-all flex items-center gap-1';
    }
  }
  renderProjects();
}

// =========================================================
// VIEWS PARSING & SMART PROJECT SORTING ENGINE
// =========================================================

// Parse views count string ("10M", "2.5M", "800K", "1500000") to integer
function parseViews(viewStr) {
  if (viewStr === undefined || viewStr === null) return 0;
  if (typeof viewStr === 'number') return Math.round(viewStr);
  const str = String(viewStr).trim().toUpperCase();
  if (!str) return 0;

  // 'M' multiplier (1,000,000)
  if (str.includes('M')) {
    const numPart = str.replace(/[^0-9.]/g, '');
    const num = parseFloat(numPart);
    return isNaN(num) ? 0 : Math.round(num * 1000000);
  }

  // 'K' multiplier (1,000)
  if (str.includes('K')) {
    const numPart = str.replace(/[^0-9.]/g, '');
    const num = parseFloat(numPart);
    return isNaN(num) ? 0 : Math.round(num * 1000);
  }

  // 'B' multiplier (1,000,000,000)
  if (str.includes('B')) {
    const numPart = str.replace(/[^0-9.]/g, '');
    const num = parseFloat(numPart);
    return isNaN(num) ? 0 : Math.round(num * 1000000000);
  }

  // Direct integer/float digits
  const cleanStr = str.replace(/,/g, '').replace(/[^0-9.]/g, '');
  const num = parseFloat(cleanStr);
  return isNaN(num) ? 0 : Math.round(num);
}

// Clean and format views text (e.g., "10M", "2.5M", "800K")
function getCleanViewsText(viewStr, parsedNum = null) {
  const num = parsedNum !== null ? parsedNum : parseViews(viewStr);
  if (num <= 0) return '';
  let str = String(viewStr || '').trim().replace(/views?/gi, '').trim().toUpperCase();
  if (!str || /^\d+$/.test(str)) {
    if (num >= 1000000) {
      str = (num % 1000000 === 0 ? (num / 1000000) : (num / 1000000).toFixed(1)) + 'M';
    } else if (num >= 1000) {
      str = (num % 1000 === 0 ? (num / 1000) : (num / 1000).toFixed(1)) + 'K';
    } else {
      str = String(num);
    }
  }
  return str;
}

// Check if a project has manual priority order
function hasManualOrder(item) {
  if (!item) return false;
  if (item.featured === true || item.featured === 'true' || item.featured === 1) return true;
  if (item.order !== undefined && item.order !== null && item.order !== '') {
    const num = Number(item.order);
    return !isNaN(num) && num > 0;
  }
  return false;
}

// Get numeric manual order value for sorting
function getManualOrder(item) {
  if (!item) return 999999;
  if (item.order !== undefined && item.order !== null && item.order !== '') {
    const num = Number(item.order);
    if (!isNaN(num) && num > 0) return num;
  }
  if (item.featured === true || item.featured === 'true' || item.featured === 1) {
    return 0; // Pinned items without explicit order stay top of Tier 1
  }
  return 999999;
}

// Smart 3-Tier Project Sorting Comparator:
// - Tầng 1: Dự án có điền 'order' thủ công (1, 2, 3...) luôn xếp trên cùng theo thứ tự tăng dần.
// - Tầng 2: Các dự án không có 'order' -> tự động so sánh theo số lượt view (parseViews) từ cao xuống thấp (giảm dần).
// - Tầng 3: Nếu lượt view bằng nhau hoặc không có view -> sắp xếp theo ngày đăng (date giảm dần).
function compareProjects(a, b) {
  const aHasOrder = hasManualOrder(a);
  const bHasOrder = hasManualOrder(b);

  // TẦNG 1: Can thiệp thủ công bằng order (1, 2, 3...)
  if (aHasOrder && bHasOrder) {
    const diff = getManualOrder(a) - getManualOrder(b);
    if (diff !== 0) return diff;
  } else if (aHasOrder && !bHasOrder) {
    return -1; // a có order nên đứng trước
  } else if (!aHasOrder && bHasOrder) {
    return 1;  // b có order nên đứng trước
  }

  // TẦNG 2: Tự động so sánh số lượt view (parseViews) từ cao xuống thấp (giảm dần)
  const aViews = parseViews(a ? a.views : 0);
  const bViews = parseViews(b ? b.views : 0);
  if (aViews !== bViews) {
    return bViews - aViews; // views cao hơn xếp trước
  }

  // TẦNG 3: Nếu lượt view bằng nhau hoặc không có view -> xếp theo ngày đăng (date giảm dần)
  const aDate = (a && a.date) ? new Date(a.date).getTime() : 0;
  const bDate = (b && b.date) ? new Date(b.date).getTime() : 0;
  if (aDate !== bDate) {
    return bDate - aDate; // ngày mới hơn xếp trước
  }

  // Tiêu đề A-Z
  return (a && a.title ? a.title : '').localeCompare(b && b.title ? b.title : '');
}

// Render pill badge HTML for Views:
// - parseViews >= 1,000,000: "🔥 {views} VIEWS"
// - parseViews < 1,000,000: "{views} VIEWS" (không có icon 🔥)
function createViewsBadgeHtml(item) {
  if (!item || item.views === undefined || item.views === null || item.views === '') return '';
  const num = parseViews(item.views);
  // Chỉ hiển thị badge khi views >= 1,000,000 (từ 1M trở lên)
  // Dưới 1M hoặc không có views: hoàn toàn không render badge
  if (num < 1000000) return '';

  const viewsText = getCleanViewsText(item.views, num);
  return `
    <span class="views-pill viral" title="${viewsText} lượt xem">
      <span>🔥</span>
      <span>${viewsText} VIEWS</span>
    </span>
  `;
}


// Format clean, concise badge for cards (eliminate long clipping text)
function getFormattedBadge(item) {
  if (!item) return '';
  if (item.category === 'cinematic' || item.aspect === '16:9') {
    return 'OFFICIAL MV';
  }
  const raw = (item.badge || '').trim();
  // If user provided a short, custom badge in CMS/markdown (<= 20 chars), preserve it
  if (raw && !raw.includes('Viral Content') && !raw.includes('Brand Campaign') && !raw.includes('Cinematic') && raw.length <= 20) {
    return raw;
  }
  if (item.category === 'thunglong') {
    const t = (item.title || '').toLowerCase();
    if (t.includes('foodtour') || t.includes('food tour') || t.includes('lệ giang')) return 'FOODTOUR';
    if (t.includes('dance') || t.includes('trend')) return 'DANCE TREND';
    if (t.includes('giveaway')) return 'GIVEAWAY';
    if (t.includes('cà khịa') || t.includes('hạ được chị')) return 'SITCOM COMEDY';
    if (t.includes('massage')) return '5M+ VIEWS';
    if (t.includes('skincare') || t.includes('hoa mắt')) return 'STORYTELLING';
    if (t.includes('đập hộp') || t.includes('review')) return 'VIRAL REVIEW';
    return 'SHORT-FORM SITCOM';
  }
  if (item.category === 'freelance') {
    const t = (item.title || '').toLowerCase();
    if (t.includes('magic')) return 'TABLE MAGIC';
    if (t.includes('apt') || t.includes('dance')) return 'CHALLENGE';
    if (t.includes('tomato') || t.includes('potato')) return 'INTERACTIVE';
    if (t.includes('viet nam') || t.includes('việt nam')) return 'SPECIAL FILM';
    return 'COMMERCIAL';
  }
  return raw || 'VIDEO';
}

// Helper to extract YouTube Video ID from any standard, embed, or shorts URL
function getYouTubeId(url) {
  if (!url || typeof url !== 'string') return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

// Render YouTube Facade markup (Zero-latency initial load, lazy loads <iframe> only on user click)
function createYouTubeFacadeHtml(ytId, title = 'Video') {
  const safeTitle = (title || 'YouTube Video').replace(/"/g, '&quot;');
  return `
    <div class="youtube-facade group" onclick="event.stopPropagation(); playYouTubeFacade(this, '${ytId}')" title="Bấm để phát video YouTube ngay">
      <img src="https://img.youtube.com/vi/${ytId}/hqdefault.jpg" 
           alt="${safeTitle}" 
           loading="lazy" 
           decoding="async"
           onerror="this.src='https://img.youtube.com/vi/${ytId}/0.jpg'" />
      <div class="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors"></div>
      <button type="button" class="youtube-play-btn" aria-label="Phát YouTube">
        <svg class="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </button>
    </div>
  `;
}

// Trigger YouTube Facade playback: stops all other media and replaces facade with high-performance iframe
function playYouTubeFacade(element, ytId) {
  playBeep(800, 0.05);
  pauseAllVideos();

  const container = element.closest('.video-16-9-container') || element.parentElement || element;
  container.classList.add('active-youtube-container');
  container.dataset.ytid = ytId;
  const img = element.querySelector('img');
  container.dataset.title = img ? img.alt : 'YouTube Video';

  container.innerHTML = `
    <iframe src="https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1" 
            class="w-full h-full border-0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
            allowfullscreen></iframe>
  `;
}

// Play subtle synthesized audio tone via Web Audio API
function playBeep(freq = 880, duration = 0.08) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

// Toast Notification
function showToast(msg) {
  playBeep(920, 0.1);
  const toast = document.getElementById('toastNotification');
  const text = document.getElementById('toastMessage');
  if (!toast || !text) return;
  text.textContent = msg;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3000);
}

// Copy Email Function
function copyEmail() {
  const email = 'bkchoc230801@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('✓ Đã sao chép email: ' + email);
    const emailText = document.getElementById('copyEmailText');
    if (emailText) {
      const orig = emailText.textContent;
      emailText.textContent = 'ĐÃ SAO CHÉP!';
      setTimeout(() => { emailText.textContent = orig; }, 2000);
    }
  }).catch(() => {
    showToast('bkchoc230801@gmail.com');
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }
}

// Update Tab Button Styles & Badges
function updateTabUI(tabKey) {
  const tabs = [
    { key: 'all', btn: document.getElementById('tabBtnAll') },
    { key: 'cinematic', btn: document.getElementById('tabBtnCinematic') },
    { key: 'thunglong', btn: document.getElementById('tabBtnThungLong') },
    { key: 'freelance', btn: document.getElementById('tabBtnFreelance') }
  ];

  tabs.forEach(t => {
    if (!t.btn) return;
    if (t.key === tabKey) {
      t.btn.className = 'tab-btn px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2.5 bg-neon-cyan text-obsidian-950 shadow-neon-glow';
    } else {
      t.btn.className = 'tab-btn px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2.5 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10';
    }
  });

  // Update Banner Description
  const bannerText = document.getElementById('tabBannerText');
  if (bannerText) {
    if (tabKey === 'all') {
      bannerText.textContent = 'HIỂN THỊ TẤT CẢ DỰ ÁN • OFFICIAL MUSIC VIDEOS 16:9, VIRAL SERIES 9:16 & COMMERCIAL';
    } else if (tabKey === 'cinematic') {
      bannerText.textContent = 'THƯ MỤC: videos/mv/ • TỈ LỆ 16:9 WIDESCREEN • TÍCH HỢP NÚT BÓC TÁCH KỸ XẢO VFX BREAKDOWN (9:16)';
    } else if (tabKey === 'thunglong') {
      bannerText.textContent = 'THƯ MỤC: videos/thunglong/ • TỈ LỆ DỌC 9:16 (TIKTOK / REELS) • BỐ CỤC LƯỚI BẮT MẮT';
    } else {
      bannerText.textContent = 'THƯ MỤC: videos/freelance/ • ĐỊNH DẠNG LINH HOẠT THEO KÍCH THƯỚC GỐC DỰ ÁN';
    }
  }
}

// Tab Switching
function switchTab(tabKey) {
  playBeep(640, 0.05);
  pauseAllVideos();
  currentTab = tabKey;
  updateTabUI(tabKey);
  renderProjects();
}

// Pause all playing videos on page & clean up any active YouTube embeds
function pauseAllVideos() {
  document.querySelectorAll('video').forEach(v => {
    try { v.pause(); } catch (e) {}
  });

  // Reset any playing YouTube Facades in the grid back to facade
  document.querySelectorAll('.active-youtube-container').forEach(container => {
    const ytId = container.dataset.ytid;
    const title = container.dataset.title || 'Video';
    if (ytId) {
      container.innerHTML = createYouTubeFacadeHtml(ytId, title);
      container.classList.remove('active-youtube-container');
    }
  });

  // Modal YouTube iframe cleanup
  const modalIframe = document.getElementById('modalYouTubeIframe');
  if (modalIframe) {
    modalIframe.src = '';
    modalIframe.classList.add('hidden');
  }

  // Breakdown YouTube iframe cleanup
  const bdIframe = document.getElementById('breakdownYouTubeIframe');
  if (bdIframe) {
    bdIframe.src = '';
    bdIframe.classList.add('hidden');
  }
}

// State for VFX Breakdown Modal
let currentBreakdownItem = null;
let currentBreakdownIndex = 0;

// Open VFX Breakdown Modal (9:16 vertical popup)
function openBreakdownModal() {
  playBeep(850, 0.08);
  // 1. Immediately pause all other videos on the page
  pauseAllVideos();

  const modal = document.getElementById('vfxBreakdownModal');
  if (!modal || !currentBreakdownItem) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  loadBreakdownPart(currentBreakdownIndex);
}

// Load specific breakdown part inside the modal
function loadBreakdownPart(index) {
  if (!currentBreakdownItem || !currentBreakdownItem.breakdowns) return;
  const list = currentBreakdownItem.breakdowns;
  if (index < 0 || index >= list.length) return;

  currentBreakdownIndex = index;
  const part = list[currentBreakdownIndex];

  const modalTitle = document.getElementById('breakdownModalTitle');
  const videoPlayer = document.getElementById('breakdownVideoPlayer');
  const videoSource = document.getElementById('breakdownVideoSource');
  const selectorBar = document.getElementById('breakdownPartSelector');
  const tabsContainer = document.getElementById('breakdownPartTabs');
  const counter = document.getElementById('breakdownIndexCounter');

  if (modalTitle) {
    if (list.length > 1) {
      modalTitle.textContent = `${currentBreakdownItem.title} • ${part.title || `Part 0${index + 1}`}`;
    } else {
      modalTitle.textContent = currentBreakdownItem.title;
    }
  }

  // Update Multiple Part Selector Bar
  if (selectorBar) {
    if (list.length > 1) {
      selectorBar.classList.remove('hidden');
      if (counter) {
        counter.textContent = `${index + 1} / ${list.length}`;
      }
      if (tabsContainer) {
        tabsContainer.innerHTML = list.map((p, i) => {
          const isActive = (i === index);
          const activeClasses = isActive 
            ? 'bg-neon-cyan text-obsidian-950 font-bold shadow-neon-subtle' 
            : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15';
          return `
            <button onclick="navigateBreakdownTo(${i})" class="px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${activeClasses}">
              ${p.title || `Part 0${i + 1}`}
            </button>
          `;
        }).join('');
      }
    } else {
      selectorBar.classList.add('hidden');
    }
  }

  // Update Video Player
  const bdVideoContainer = videoPlayer ? videoPlayer.parentElement : null;
  let bdIframe = document.getElementById('breakdownYouTubeIframe');
  const ytId = getYouTubeId(part.src);

  if (ytId) {
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.classList.add('hidden');
    }
    if (videoSource) videoSource.src = '';

    if (!bdIframe && bdVideoContainer) {
      bdIframe = document.createElement('iframe');
      bdIframe.id = 'breakdownYouTubeIframe';
      bdIframe.className = 'w-full h-full aspect-[9/16] border-0';
      bdIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      bdIframe.setAttribute('allowfullscreen', 'true');
      bdVideoContainer.appendChild(bdIframe);
    }
    if (bdIframe) {
      bdIframe.src = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&playsinline=1`;
      bdIframe.classList.remove('hidden');
    }
  } else {
    if (bdIframe) {
      bdIframe.src = '';
      bdIframe.classList.add('hidden');
    }
    if (videoPlayer && videoSource) {
      videoPlayer.classList.remove('hidden');
      videoPlayer.setAttribute('preload', 'metadata');
      videoPlayer.setAttribute('playsinline', '');
      videoPlayer.pause();
      if (part.thumb) {
        videoPlayer.poster = part.thumb;
      } else {
        videoPlayer.removeAttribute('poster');
      }
      videoSource.src = part.src;
      videoPlayer.load();
      videoPlayer.play().catch(() => {
        videoPlayer.muted = true;
        videoPlayer.play().catch(() => {});
      });
    }
  }
}

// Navigate Breakdown parts (Next / Prev)
function navigateBreakdown(delta) {
  if (!currentBreakdownItem || !currentBreakdownItem.breakdowns) return;
  const list = currentBreakdownItem.breakdowns;
  if (list.length <= 1) return;
  playBeep(700, 0.05);
  const nextIndex = (currentBreakdownIndex + delta + list.length) % list.length;
  loadBreakdownPart(nextIndex);
}

// Jump directly to breakdown part index
function navigateBreakdownTo(index) {
  if (index === currentBreakdownIndex) return;
  playBeep(700, 0.05);
  loadBreakdownPart(index);
}

// Close VFX Breakdown Modal
function closeBreakdownModal() {
  const modal = document.getElementById('vfxBreakdownModal');
  const videoPlayer = document.getElementById('breakdownVideoPlayer');
  const videoSource = document.getElementById('breakdownVideoSource');
  const bdIframe = document.getElementById('breakdownYouTubeIframe');

  if (bdIframe) {
    bdIframe.src = '';
    bdIframe.classList.add('hidden');
  }

  if (videoPlayer) {
    videoPlayer.pause();
    if (videoSource) videoSource.src = '';
    videoPlayer.classList.remove('hidden');
  }
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
  currentBreakdownItem = null;
}

// Open Cinema Modal (for 9:16 vertical grid cards or 16:9 cinematic)
function openCinemaModal(item) {
  playBeep(750, 0.08);
  pauseAllVideos();

  const modal = document.getElementById('cinemaModal');
  const modalDialog = document.getElementById('cinemaModalDialog');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalRole = document.getElementById('modalRole');
  const modalVideo = document.getElementById('modalVideoPlayer');
  const modalSource = document.getElementById('modalVideoSource');
  const modalExternalLink = document.getElementById('modalExternalLink');
  const modalYouTubeLink = document.getElementById('modalYouTubeLink');
  const modalTikTokLink = document.getElementById('modalTikTokLink');

  if (!modal || !modalVideo || !modalSource) return;

  modalTitle.textContent = item.title;
  const is16x9 = item.aspect === '16:9' || item.category === 'cinematic';
  const viewsNum = parseViews(item.views);
  if (viewsNum > 0) {
    const cleanViews = getCleanViewsText(item.views, viewsNum);
    modalBadge.textContent = viewsNum >= 1000000 ? `🔥 ${cleanViews} VIEWS` : `${cleanViews} VIEWS`;
  } else {
    modalBadge.textContent = is16x9 ? 'OFFICIAL MV' : getFormattedBadge(item);
  }

  const modalRoleContainer = document.getElementById('modalRoleContainer') || (modalRole ? modalRole.parentElement : null);
  if (modalRole) {
    if (item.role) {
      modalRole.textContent = item.role;
      if (modalRoleContainer) modalRoleContainer.classList.remove('hidden');
    } else {
      modalRole.textContent = '';
      if (modalRoleContainer) modalRoleContainer.classList.add('hidden');
    }
  }

  // Handle 9:16 vertical ratio adaptation for modal dialog
  const isVertical = item.aspect === '9:16' || item.category === 'thunglong';
  const modalVideoContainer = modalVideo.parentElement;

  if (modalDialog) {
    if (isVertical) {
      modalDialog.classList.remove('max-w-5xl');
      modalDialog.classList.add('max-w-sm', 'sm:max-w-md');
    } else {
      modalDialog.classList.remove('max-w-sm', 'sm:max-w-md');
      modalDialog.classList.add('max-w-5xl');
    }
  }

  if (modalVideoContainer) {
    if (isVertical) {
      modalVideoContainer.classList.add('tiktok-vertical-container');
    } else {
      modalVideoContainer.classList.remove('tiktok-vertical-container');
    }
  }

  if (modalYouTubeLink) {
    if (item.youtube_url) {
      modalYouTubeLink.href = item.youtube_url;
      modalYouTubeLink.classList.remove('hidden');
    } else {
      modalYouTubeLink.classList.add('hidden');
    }
  }

  if (modalTikTokLink) {
    if (item.tiktok_url) {
      modalTikTokLink.href = item.tiktok_url;
      modalTikTokLink.classList.remove('hidden');
      const span = modalTikTokLink.querySelector('span');
      if (span) span.textContent = 'XEM BẢN FULL TRÊN TIKTOK ↗';
    } else {
      modalTikTokLink.classList.add('hidden');
    }
  }

  if (modalExternalLink) {
    const isOtherUrl = item.url && item.url !== '#' && item.url !== '' && item.url !== item.youtube_url && item.url !== item.tiktok_url;
    if (isOtherUrl) {
      modalExternalLink.href = item.url;
      modalExternalLink.classList.remove('hidden');
    } else {
      modalExternalLink.classList.add('hidden');
    }
  }

  let modalIframe = document.getElementById('modalYouTubeIframe');
  const ytId = getYouTubeId(item.video_src) || (!item.video_src && item.youtube_url ? getYouTubeId(item.youtube_url) : null);

  if (ytId) {
    modalVideo.pause();
    modalVideo.classList.add('hidden');
    if (modalSource) modalSource.src = '';

    if (!modalIframe && modalVideoContainer) {
      modalIframe = document.createElement('iframe');
      modalIframe.id = 'modalYouTubeIframe';
      modalIframe.className = isVertical 
        ? 'w-full h-full aspect-[9/16] border-0' 
        : 'w-full h-full min-h-[300px] sm:min-h-[460px] aspect-video border-0';
      modalIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen');
      modalIframe.setAttribute('allowfullscreen', 'true');
      modalVideoContainer.appendChild(modalIframe);
    }
    if (modalIframe) {
      modalIframe.className = isVertical 
        ? 'w-full h-full aspect-[9/16] border-0' 
        : 'w-full h-full min-h-[300px] sm:min-h-[460px] aspect-video border-0';
      modalIframe.src = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`;
      modalIframe.classList.remove('hidden');
    }
  } else {
    if (modalIframe) {
      modalIframe.src = '';
      modalIframe.classList.add('hidden');
    }
    modalVideo.classList.remove('hidden');
    modalVideo.setAttribute('preload', 'metadata');
    modalVideo.setAttribute('playsinline', '');

    if (item.video_src) {
      modalSource.src = item.video_src;
      modalVideo.load();
      modalVideo.play().catch(() => {
        modalVideo.muted = true;
        modalVideo.play().catch(() => {});
      });
    }
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Close Cinema Modal
function closeCinemaModal() {
  pauseAllVideos();

  const modal = document.getElementById('cinemaModal');
  const modalDialog = document.getElementById('cinemaModalDialog');
  const modalVideo = document.getElementById('modalVideoPlayer');
  const modalSource = document.getElementById('modalVideoSource');
  const modalIframe = document.getElementById('modalYouTubeIframe');
  const modalVideoContainer = modalVideo ? modalVideo.parentElement : null;

  if (modalIframe) {
    modalIframe.src = '';
    modalIframe.classList.add('hidden');
  }

  if (modalVideo) {
    modalVideo.pause();
    if (modalSource) modalSource.src = '';
    modalVideo.classList.remove('hidden');
  }

  if (modalDialog) {
    modalDialog.classList.remove('max-w-sm', 'sm:max-w-md');
    modalDialog.classList.add('max-w-5xl');
  }

  if (modalVideoContainer) {
    modalVideoContainer.classList.remove('tiktok-vertical-container');
  }

  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Render Projects List
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const emptyState = document.getElementById('emptySearchState');
  if (!grid) return;
  grid.innerHTML = '';

  let list = [];
  if (currentTab === 'all') {
    list = [
      ...(PORTFOLIO_DATA['cinematic'] || []),
      ...(PORTFOLIO_DATA['thunglong'] || []),
      ...(PORTFOLIO_DATA['freelance'] || [])
    ];
  } else {
    list = PORTFOLIO_DATA[currentTab] || [];
  }

  // Update tab counts in buttons
  const allCount = (PORTFOLIO_DATA['cinematic'] || []).length +
                   (PORTFOLIO_DATA['thunglong'] || []).length +
                   (PORTFOLIO_DATA['freelance'] || []).length;
  if (document.getElementById('countAll')) {
    document.getElementById('countAll').textContent = allCount;
  }
  if (document.getElementById('countCinematic')) {
    document.getElementById('countCinematic').textContent = (PORTFOLIO_DATA['cinematic'] || []).length;
  }
  if (document.getElementById('countThungLong')) {
    document.getElementById('countThungLong').textContent = (PORTFOLIO_DATA['thunglong'] || []).length;
  }
  if (document.getElementById('countFreelance')) {
    document.getElementById('countFreelance').textContent = (PORTFOLIO_DATA['freelance'] || []).length;
  }

  // Filter by search query if any
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    list = list.filter(item => {
      return (item.title && item.title.toLowerCase().includes(q)) ||
             (item.role && item.role.toLowerCase().includes(q)) ||
             (item.badge && item.badge.toLowerCase().includes(q));
    });
  }

  if (list.length === 0) {
    grid.classList.add('hidden');
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  } else {
    grid.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');
  }

  // Sort list with compareProjects (featured: true first, order ascending, date descending)
  list.sort(compareProjects);

  // Layout for TAB 1: MUSIC VIDEOS (MV) - 16:9 Cinematic with Embedded Video Player + Breakdown Button
  if (currentTab === 'cinematic') {
    grid.className = 'grid grid-cols-1 gap-10';
    list.forEach(item => {
      grid.appendChild(create16x9Card(item));
    });
    return;
  }

  // Dedicated handling for TAB 2 (Thung Long) & TAB 3 (Freelance)
  if (currentTab === 'thunglong' || currentTab === 'freelance') {
    grid.className = mobileLayoutMode === 'reel' 
      ? 'vertical-scroll-reel w-full' 
      : 'mobile-compact-grid w-full';
    list.forEach(item => {
      grid.appendChild(createVerticalCard(item));
    });
    return;
  }

  // TAB 0: ALL (Tất cả dự án)
  // When no search filter: display structured sections so 9:16 videos on mobile can scroll horizontally with snap!
  if (searchQuery.trim() === '') {
    grid.className = 'flex flex-col gap-10 w-full';

    // Section 1: Music Videos (16:9)
    const mvList = (PORTFOLIO_DATA['cinematic'] || []).slice().sort(compareProjects);
    if (mvList.length > 0) {
      const mvSection = document.createElement('div');
      mvSection.className = 'grid grid-cols-1 gap-8';
      mvList.forEach(item => mvSection.appendChild(create16x9Card(item)));
      grid.appendChild(mvSection);
    }

    // Section 2: Thủng Long Family (9:16)
    const tlList = (PORTFOLIO_DATA['thunglong'] || []).slice().sort(compareProjects);
    if (tlList.length > 0) {
      const tlWrapper = document.createElement('div');
      tlWrapper.className = 'flex flex-col gap-4';

      const tlHeader = document.createElement('div');
      tlHeader.className = 'flex items-center justify-between border-b border-white/5 pb-2.5';
      tlHeader.innerHTML = `
        <div class="flex items-center gap-2.5">
          <span class="w-2 h-2 rounded-full bg-rose-500"></span>
          <h3 class="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-zinc-200">
            THỦNG LONG FAMILY (VIRAL SHORT-FORM 9:16)
          </h3>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">${tlList.length}</span>
        </div>
        <span class="sm:hidden text-[10px] font-mono text-zinc-400 flex items-center gap-1">
          <span>Vuốt ngang</span> <span>➔</span>
        </span>
      `;
      tlWrapper.appendChild(tlHeader);

      const tlContainer = document.createElement('div');
      tlContainer.className = mobileLayoutMode === 'reel' 
        ? 'vertical-scroll-reel w-full' 
        : 'mobile-compact-grid w-full';
      tlList.forEach(item => tlContainer.appendChild(createVerticalCard(item)));
      tlWrapper.appendChild(tlContainer);

      grid.appendChild(tlWrapper);
    }

    // Section 3: Commercial & Freelance (9:16)
    const flList = (PORTFOLIO_DATA['freelance'] || []).slice().sort(compareProjects);
    if (flList.length > 0) {
      const flWrapper = document.createElement('div');
      flWrapper.className = 'flex flex-col gap-4';

      const flHeader = document.createElement('div');
      flHeader.className = 'flex items-center justify-between border-b border-white/5 pb-2.5';
      flHeader.innerHTML = `
        <div class="flex items-center gap-2.5">
          <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
          <h3 class="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-zinc-200">
            COMMERCIAL &amp; BRAND CAMPAIGNS (9:16)
          </h3>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">${flList.length}</span>
        </div>
        <span class="sm:hidden text-[10px] font-mono text-zinc-400 flex items-center gap-1">
          <span>Vuốt ngang</span> <span>➔</span>
        </span>
      `;
      flWrapper.appendChild(flHeader);

      const flContainer = document.createElement('div');
      flContainer.className = mobileLayoutMode === 'reel' 
        ? 'vertical-scroll-reel w-full' 
        : 'mobile-compact-grid w-full';
      flList.forEach(item => flContainer.appendChild(createVerticalCard(item)));
      flWrapper.appendChild(flContainer);

      grid.appendChild(flWrapper);
    }
    return;
  }

  // Fallback for search results
  grid.className = mobileLayoutMode === 'reel' 
    ? 'vertical-scroll-reel w-full' 
    : 'mobile-compact-grid w-full';

  list.forEach(item => {
    const is16x9 = item.aspect === '16:9' || item.category === 'cinematic';
    if (is16x9) {
      grid.appendChild(create16x9Card(item));
    } else {
      grid.appendChild(createVerticalCard(item));
    }
  });
}

// Safe Breakdown trigger by Item ID and Part Index
function triggerBreakdown(itemId, partIndex = 0) {
  const allItems = [
    ...(PORTFOLIO_DATA['cinematic'] || []),
    ...(PORTFOLIO_DATA['thunglong'] || []),
    ...(PORTFOLIO_DATA['freelance'] || [])
  ];
  const item = allItems.find(x => x.id === itemId || (x.filename && x.filename.includes(itemId)) || (x.title && x.title === itemId));
  if (!item) return;

  const list = (item.breakdowns && item.breakdowns.length > 0) ? item.breakdowns : (
    item.breakdown_src ? [{ title: "Breakdown 01", label: "VFX Breakdown (9:16)", src: item.breakdown_src, thumb: item.breakdown_thumb || '' }] : []
  );

  if (list.length === 0) return;

  currentBreakdownItem = item;
  currentBreakdownItem.breakdowns = list;
  currentBreakdownIndex = (partIndex >= 0 && partIndex < list.length) ? partIndex : 0;

  openBreakdownModal();
}

// Build 16:9 Cinematic Card (Full-width in All & MV tabs)
function create16x9Card(item) {
  const card = document.createElement('div');
  card.className = 'col-span-full card-16-9-wide glass-card rounded-3xl p-5 sm:p-7 flex flex-col gap-5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300';

  // Breakdown Buttons
  let breakdownBtnsHtml = '';
  const bdList = (item.breakdowns && item.breakdowns.length > 0) ? item.breakdowns : (
    (item.has_breakdown || item.breakdown_src) ? [{ title: "Breakdown 01", label: "VFX Breakdown (9:16)", src: item.breakdown_src, thumb: item.breakdown_thumb || '' }] : []
  );

  if (bdList.length > 1) {
    // 2 or more breakdowns: render separate pill buttons for each part
    breakdownBtnsHtml = bdList.map((bd, idx) => `
      <button onclick="triggerBreakdown('${item.id}', ${idx})" 
              class="vfx-breakdown-btn group flex items-center gap-1.5" 
              title="Xem ${bd.title}">
        <span class="text-neon-cyan animate-pulse">✨</span>
        <span>${bd.label || `Breakdown 0${idx + 1}`}</span>
      </button>
    `).join('');
  } else if (bdList.length === 1) {
    // 1 breakdown: standard single pill button
    const bd = bdList[0];
    const label = bd.label || 'VFX Breakdown (9:16)';
    breakdownBtnsHtml = `
      <button onclick="triggerBreakdown('${item.id}', 0)" 
              class="vfx-breakdown-btn group flex items-center gap-1.5" 
              title="Xem bóc tách kỹ xảo VFX tỉ lệ dọc 9:16">
        <span class="text-neon-cyan animate-pulse">✨</span>
        <span>${label}</span>
      </button>
    `;
  }

  // Count badge in metadata header
  let breakdownBadgeHtml = '';
  if (bdList.length > 0) {
    const badgeText = bdList.length > 1 ? `${bdList.length} VFX BREAKDOWNS` : 'VFX BREAKDOWN (9:16)';
    breakdownBadgeHtml = `
      <span onclick="triggerBreakdown('${item.id}', 0)" 
            class="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 flex items-center gap-1.5 cursor-pointer hover:bg-cyan-400/25 transition-colors shadow-sm" 
            title="Bấm để xem ${bdList.length} video bóc tách kỹ xảo VFX">
        <span class="animate-pulse">✨</span>
        <span>${badgeText}</span>
      </span>
    `;
  }

  // Social platform buttons (YouTube / TikTok)
  let socialLinksHtml = '';
  if (item.youtube_url) {
    socialLinksHtml += `
      <a href="${item.youtube_url}" target="_blank" rel="noopener noreferrer" 
         onclick="event.stopPropagation()"
         class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-600/15 hover:bg-red-600 border border-red-500/30 hover:border-red-500 text-red-400 hover:text-white text-xs font-mono font-medium transition-all duration-300 shadow-sm"
         title="Xem video trên YouTube (Mở tab mới)">
        <svg class="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        <span>YouTube</span>
      </a>
    `;
  }
  if (item.tiktok_url) {
    socialLinksHtml += `
      <a href="${item.tiktok_url}" target="_blank" rel="noopener noreferrer" 
         onclick="event.stopPropagation()"
         class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white hover:text-black border border-white/10 hover:border-white text-zinc-300 text-xs font-mono font-medium transition-all duration-300 shadow-sm"
         title="Xem video trên TikTok (Mở tab mới)">
        <svg class="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
        <span>TikTok</span>
      </a>
    `;
  }

  const ytId = getYouTubeId(item.video_src) || (!item.video_src && item.youtube_url ? getYouTubeId(item.youtube_url) : null);
  let playerElementHtml = '';
  if (ytId) {
    playerElementHtml = createYouTubeFacadeHtml(ytId, item.title);
  } else {
    playerElementHtml = `
      <!-- Video Player with controls, preload="metadata", playsinline and object-cover without black sidebars -->
      <video controls preload="metadata" playsinline poster="${item.thumbnail}" class="w-full h-full object-cover">
        <source src="${item.video_src}" type="video/mp4">
        Trình duyệt của bạn không hỗ trợ thẻ video HTML5.
      </video>
    `;
  }

  // Check if item has views
  const viewsBadgeHtml = createViewsBadgeHtml(item);

  card.innerHTML = `
    <div class="video-16-9-container relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
      ${playerElementHtml}
    </div>

    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1">
      <div>
        <div class="flex flex-wrap items-center gap-2.5 mb-2">
          ${item.featured ? `
            <span class="text-[10px] font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 flex items-center gap-1 shadow-sm" title="Dự án ghim nổi bật">
              <span class="animate-pulse">★</span>
              <span>FEATURED</span>
            </span>
          ` : ''}
          ${viewsBadgeHtml ? viewsBadgeHtml : ''}
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
            OFFICIAL MV
          </span>
          <span class="text-xs font-mono text-slate-400">16:9 WIDESCREEN</span>
          ${breakdownBadgeHtml}
        </div>
        <h3 class="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
          ${item.title}
        </h3>
        ${item.description ? `<p class="text-sm text-slate-400 mt-1.5 leading-relaxed">${item.description}</p>` : ''}
      </div>

      <div class="shrink-0 flex flex-wrap items-center gap-2.5">
        ${item.role ? `<span class="text-xs font-mono text-neon-cyan font-medium px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-sm">${item.role}</span>` : ''}
        ${breakdownBtnsHtml}
        ${socialLinksHtml}
      </div>
    </div>
  `;
  return card;
}

// Build 9:16 Vertical Card (for Shorts, TikTok, Reels, Commercials)
function createVerticalCard(item) {
  const isViral = item.category === 'thunglong';
  const badgeColor = isViral ? 'border-rose-500/40 text-rose-300' : 'border-cyan-400/40 text-cyan-300';
  const tagText = isViral ? '9:16' : 'HD';
  const cleanBadge = getFormattedBadge(item);
  const viewsBadgeHtml = createViewsBadgeHtml(item);

  // Check if item has breakdown
  let breakdownFloatingBtn = '';
  const bdList = (item.breakdowns && item.breakdowns.length > 0) ? item.breakdowns : (
    (item.has_breakdown || item.breakdown_src) ? [{ title: "Breakdown 01", label: "VFX Breakdown (9:16)", src: item.breakdown_src, thumb: item.breakdown_thumb || '' }] : []
  );

  if (bdList.length > 0) {
    const label = bdList.length > 1 ? `Breakdown (${bdList.length})` : 'Breakdown';
    breakdownFloatingBtn = `
      <button onclick="event.stopPropagation(); triggerBreakdown('${item.id}', 0)" 
              class="absolute top-12 right-3 z-20 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-obsidian-950/90 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-1 shadow-neon-glow backdrop-blur-md"
              title="Xem ${bdList.length} video VFX Breakdown">
        <span class="animate-pulse">✨</span>
        <span>${label}</span>
      </button>
    `;
  }

  // Social link buttons for 9:16 vertical cards
  let verticalSocialHtml = '';
  if (item.youtube_url) {
    verticalSocialHtml += `
      <a href="${item.youtube_url}" target="_blank" rel="noopener noreferrer" 
         onclick="event.stopPropagation()"
         class="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-obsidian-950/90 hover:bg-red-600 hover:text-white border border-red-500/30 hover:border-red-500 text-red-400 text-[10px] font-mono font-medium transition-all duration-200 backdrop-blur-md shadow-sm"
         title="Xem video trên YouTube (Mở tab mới)">
        <svg class="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        <span>YouTube</span>
      </a>
    `;
  }
  if (item.tiktok_url) {
    verticalSocialHtml += `
      <a href="${item.tiktok_url}" target="_blank" rel="noopener noreferrer" 
         onclick="event.stopPropagation()"
         class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg tiktok-pill-badge text-[10px] font-mono font-bold transition-all duration-200 backdrop-blur-md shadow-sm"
         title="Xem bản full trên TikTok (Mở tab mới)">
        <svg class="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
        <span>TikTok ↗</span>
      </a>
    `;
  }

  const card = document.createElement('div');
  card.className = 'glass-card rounded-2xl overflow-hidden group flex flex-col cursor-pointer relative';
  card.onclick = () => openCinemaModal(item);
  card.innerHTML = `
    <div class="relative w-full aspect-[9/16] bg-black overflow-hidden">
      <img src="${item.thumbnail}" alt="${item.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" decoding="async">
      <div class="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
      
      <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
        <div class="flex items-center gap-1 min-w-0 max-w-[85%]">
          ${item.featured ? `
            <span class="text-[8px] sm:text-[9px] font-mono font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-amber-400 text-obsidian-950 flex items-center gap-0.5 shrink-0 shadow-sm" title="Dự án nổi bật">
              ★ HOT
            </span>
          ` : ''}
          ${viewsBadgeHtml ? viewsBadgeHtml : (cleanBadge ? `
            <span class="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-obsidian-950/90 backdrop-blur-md border ${badgeColor} whitespace-nowrap overflow-hidden text-ellipsis shadow-sm">
              ${cleanBadge}
            </span>
          ` : '')}
        </div>
        <span class="text-[9px] font-mono text-slate-400 bg-black/60 px-1.5 py-0.5 rounded shrink-0">
          ${tagText}
        </span>
      </div>
        <span class="text-[9px] font-mono text-slate-400 bg-black/60 px-1.5 py-0.5 rounded shrink-0">
          ${tagText}
        </span>
      </div>

      ${breakdownFloatingBtn}

      <div class="absolute inset-0 flex items-center justify-center z-10">
        <div class="w-12 h-12 rounded-full bg-white/90 text-obsidian-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-110 group-hover:bg-neon-cyan transition-all duration-300">
          <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
        <h3 class="text-xs sm:text-sm font-display font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-2 leading-snug">
          ${item.title}
        </h3>
        <div class="mt-2.5 flex items-center justify-between gap-1.5">
          <div class="flex items-center gap-1.5 shrink-0">
            ${verticalSocialHtml}
          </div>
          ${item.role ? `
          <span class="text-[9px] sm:text-[10px] font-mono text-neon-cyan/90 font-medium truncate px-2.5 py-1 rounded-lg bg-obsidian-950/85 border border-white/15 backdrop-blur-md shadow-sm max-w-[65%] text-right">
            ${item.role}
          </span>` : ''}
        </div>
      </div>
    </div>
  `;
  return card;
}

// Contact Form Handler
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('senderName').value;
  const email = document.getElementById('senderEmail').value;
  const type = document.getElementById('projectType').value;
  const message = document.getElementById('projectMessage').value;

  showToast('✓ Yêu cầu đã được ghi nhận thành công!');

  const subject = encodeURIComponent(`[Hợp Tác Dự Án] - ${type} - ${name}`);
  const body = encodeURIComponent(
    `Chào Vinh Kacer,\n\nTôi là ${name} (${email}).\nTôi muốn trao đổi về dự án: ${type}.\n\nNội dung chi tiết:\n${message}\n\n---\nGửi từ Portfolio Vinh Kacer`
  );
  const mailtoUrl = `mailto:bkchoc230801@gmail.com?subject=${subject}&body=${body}`;
  
  const successBox = document.getElementById('formSuccessMessage');
  const mailtoLink = document.getElementById('mailtoLink');
  if (mailtoLink) mailtoLink.href = mailtoUrl;
  if (successBox) successBox.classList.remove('hidden');

  window.location.href = mailtoUrl;
}

// Global Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();

  const searchInput = document.getElementById('projectSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) copyBtn.addEventListener('click', copyEmail);

  // Close Cinema modal on click outside
  const cinemaModal = document.getElementById('cinemaModal');
  if (cinemaModal) {
    cinemaModal.addEventListener('click', (e) => {
      if (e.target === cinemaModal) closeCinemaModal();
    });
  }

  // Close Breakdown modal on click outside
  const bdModal = document.getElementById('vfxBreakdownModal');
  if (bdModal) {
    bdModal.addEventListener('click', (e) => {
      if (e.target === bdModal) closeBreakdownModal();
    });
  }

  // Keyboard navigation (ESC to close modals, Arrow keys to navigate breakdown parts)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBreakdownModal();
      closeCinemaModal();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const bdModal = document.getElementById('vfxBreakdownModal');
      if (bdModal && !bdModal.classList.contains('hidden')) {
        navigateBreakdown(1);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const bdModal = document.getElementById('vfxBreakdownModal');
      if (bdModal && !bdModal.classList.contains('hidden')) {
        navigateBreakdown(-1);
      }
    }
  });


  // Automatically pause other videos when one starts playing
  document.addEventListener('play', (e) => {
    if (e.target && e.target.tagName === 'VIDEO') {
      document.querySelectorAll('video').forEach(v => {
        if (v !== e.target && !v.paused) {
          try { v.pause(); } catch (err) {}
        }
      });
    }
  }, true);

  // Initial render with 'all' tab selected
  updateTabUI('all');
  renderProjects();

  // Load dynamic CMS projects if served via HTTP server
  loadDynamicCMSProjects();
});

// =========================================================
// DECAP CMS DYNAMIC CONTENT ENGINE
// Reads projects directly from Decap CMS markdown files or JSON
// =========================================================

// Parse YAML Frontmatter from Decap CMS markdown files
function parseCMSFrontmatter(text) {
  if (!text) return null;
  text = text.trim();
  if (text.startsWith('{')) {
    try { return JSON.parse(text); } catch (e) {}
  }
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---([\s\S]*)$/);
  if (!match) return null;
  const yaml = match[1];
  const body = (match[2] || '').trim();
  const data = {};
  
  const lines = yaml.split(/\r?\n/);
  let currentKey = null;
  let inBlockScalar = false;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // Check if list item under currentKey
    if (trimmed.startsWith('-') && currentKey && !inBlockScalar) {
      let itemVal = trimmed.replace(/^-\s*/, '').trim();
      if ((itemVal.startsWith('"') && itemVal.endsWith('"')) || (itemVal.startsWith("'") && itemVal.endsWith("'"))) {
        itemVal = itemVal.slice(1, -1).trim();
      }
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = [];
      }
      data[currentKey].push(itemVal);
      continue;
    }

    // Check if multi-line block scalar continuation (indented line)
    if (inBlockScalar && currentKey && (rawLine.startsWith('  ') || rawLine.startsWith('\t'))) {
      if (typeof data[currentKey] === 'string') {
        data[currentKey] = (data[currentKey] ? data[currentKey] + ' ' : '') + trimmed;
      } else {
        data[currentKey] = trimmed;
      }
      continue;
    } else {
      inBlockScalar = false;
    }

    const colonIdx = rawLine.indexOf(':');
    if (colonIdx > -1) {
      const key = rawLine.slice(0, colonIdx).trim();
      let val = rawLine.slice(colonIdx + 1).trim();
      currentKey = key;

      if (val === '|' || val === '>') {
        data[key] = '';
        inBlockScalar = true;
      } else if (val === '') {
        data[key] = [];
      } else if (val.startsWith('[') && val.endsWith(']')) {
        try {
          data[key] = JSON.parse(val.replace(/'/g, '"'));
        } catch (e) {
          data[key] = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
        }
      } else {
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (val === 'true') val = true;
        else if (val === 'false') val = false;
        else if (/^\d+$/.test(val) && (key === 'order' || key === 'views')) val = parseInt(val, 10);
        data[key] = val;
      }
    }
  }

  // Cleanup keys that remained empty arrays without any list items (except roles)
  Object.keys(data).forEach(k => {
    if (Array.isArray(data[k]) && data[k].length === 0 && k !== 'roles') {
      data[k] = '';
    }
  });

  if (body && !data.description) {
    data.description = body;
  }
  return data;
}

// Convert CMS item into normalized portfolio project format
function normalizeCMSItem(item, defaultId = null) {
  let videoSrc = item.video || item.video_src || '';
  if (videoSrc.startsWith('/') && !videoSrc.startsWith('//')) videoSrc = videoSrc.slice(1);
  if (!videoSrc && item.youtube_url) {
    videoSrc = item.youtube_url;
  }

  let thumb = item.thumbnail || '';
  if (thumb.startsWith('/') && !thumb.startsWith('//')) thumb = thumb.slice(1);
  if (!thumb) {
    const ytId = getYouTubeId(videoSrc) || getYouTubeId(item.youtube_url);
    if (ytId) {
      thumb = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
    }
  }

  const rawCat = (item.category || '').trim();
  let category = 'cinematic';
  let aspect = '16:9';
  let badge = 'OFFICIAL MV';

  if (rawCat === 'MV') {
    category = 'cinematic';
    aspect = '16:9';
    badge = 'OFFICIAL MV';
  } else if (rawCat === 'Thủng Long') {
    category = 'thunglong';
    aspect = '9:16';
    badge = item.badge || 'SHORT-FORM SITCOM';
  } else if (rawCat === 'Commercial') {
    category = 'freelance';
    aspect = item.aspect || '9:16';
    badge = item.badge || 'COMMERCIAL';
  } else if (rawCat === 'VFX Breakdown') {
    category = 'cinematic';
    aspect = '9:16';
    badge = item.badge || '✨ VFX BREAKDOWN (9:16)';
  } else if (rawCat === 'cinematic' || rawCat === 'thunglong' || rawCat === 'freelance') {
    category = rawCat;
    aspect = item.aspect || (category === 'cinematic' ? '16:9' : '9:16');
    badge = category === 'cinematic' ? 'OFFICIAL MV' : (item.badge || 'VIDEO');
  }

  const projId = defaultId || item.id || (item.title ? item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'cms-' + Math.random().toString(36).slice(2, 8));

  // Find if matching existing item in PORTFOLIO_DATA
  const existing = [
    ...(PORTFOLIO_DATA.cinematic || []),
    ...(PORTFOLIO_DATA.thunglong || []),
    ...(PORTFOLIO_DATA.freelance || [])
  ].find(x => x.id === projId || (x.filename && x.filename.includes(projId)) || (x.title && x.title === item.title));

  // Determine roles:
  // - Join multiple roles with ' • ' (e.g., "Edit • VFX • Sound Design")
  // - Fallback to item.role or existing.role if available
  // - If none or empty, hide badge (role = '')
  let role = '';
  if (Array.isArray(item.roles)) {
    const validRoles = item.roles.map(r => String(r).trim()).filter(Boolean);
    if (validRoles.length > 0) {
      role = validRoles.join(' • ');
    } else if (existing && existing.role) {
      role = existing.role;
    }
  } else if (typeof item.roles === 'string' && item.roles.trim()) {
    role = item.roles.split(',').map(s => s.trim()).filter(Boolean).join(' • ');
  } else if (item.role && typeof item.role === 'string' && item.role.trim()) {
    role = item.role.trim();
  } else if (existing && existing.role) {
    role = existing.role;
  } else {
    if (rawCat === 'MV') role = 'Lead Video Editor • VFX Artist';
    else if (rawCat === 'Thủng Long') role = 'Tiền kì • Dựng chính • VFX';
    else if (rawCat === 'Commercial') role = 'Video Editor • VFX • Motion Graphics';
    else if (rawCat === 'VFX Breakdown') role = 'VFX Artist • Compositing';
    else role = '';
  }

  // Parse breakdown videos from CMS fields
  let bdVideo = item.breakdown_video || item.breakdown_src || item.breakdown || '';
  if (bdVideo.startsWith('/')) bdVideo = bdVideo.slice(1);

  let bdVideo2 = item.breakdown_video_2 || '';
  if (bdVideo2.startsWith('/')) bdVideo2 = bdVideo2.slice(1);

  let bdThumb = item.breakdown_thumb || '';
  if (bdThumb.startsWith('/')) bdThumb = bdThumb.slice(1);

  let bdThumb2 = item.breakdown_thumb_2 || '';
  if (bdThumb2.startsWith('/')) bdThumb2 = bdThumb2.slice(1);

  let breakdowns = [];
  if (Array.isArray(item.breakdowns) && item.breakdowns.length > 0) {
    breakdowns = item.breakdowns.map((b, idx) => ({
      id: b.id || `bd_${idx + 1}`,
      title: b.title || `Breakdown 0${idx + 1}`,
      label: b.label || (item.breakdowns.length > 1 ? `Breakdown 0${idx + 1}` : 'VFX Breakdown (9:16)'),
      src: (b.src && b.src.startsWith('/')) ? b.src.slice(1) : (b.src || ''),
      thumb: (b.thumb && b.thumb.startsWith('/')) ? b.thumb.slice(1) : (b.thumb || '')
    }));
  } else if (bdVideo) {
    if (bdVideo2) {
      breakdowns = [
        {
          id: 'bd_1',
          title: 'Breakdown 01',
          label: 'Breakdown 01',
          src: bdVideo,
          thumb: bdThumb
        },
        {
          id: 'bd_2',
          title: 'Breakdown 02',
          label: 'Breakdown 02',
          src: bdVideo2,
          thumb: bdThumb2
        }
      ];
    } else {
      breakdowns = [
        {
          id: 'bd_1',
          title: 'Breakdown 01',
          label: 'VFX Breakdown (9:16)',
          src: bdVideo,
          thumb: bdThumb
        }
      ];
    }
  }

  // Fallback: If CMS item doesn't have breakdown, check if existing embedded data had it
  if (breakdowns.length === 0) {
    if (existing && existing.breakdowns && existing.breakdowns.length > 0) {
      breakdowns = existing.breakdowns;
    } else if (existing && existing.breakdown_src) {
      breakdowns = [{
        id: 'bd_1',
        title: 'Breakdown 01',
        label: 'VFX Breakdown (9:16)',
        src: existing.breakdown_src,
        thumb: existing.breakdown_thumb || ''
      }];
    }
  }

  // Resolve social platform URLs (TikTok / YouTube)
  let tiktokUrl = (item.tiktok_url || '').trim();
  let youtubeUrl = (item.youtube_url || '').trim();

  if (!tiktokUrl && item.url && item.url.includes('tiktok.com')) {
    tiktokUrl = item.url.trim();
  }
  if (!youtubeUrl && item.url && (item.url.includes('youtube.com') || item.url.includes('youtu.be'))) {
    youtubeUrl = item.url.trim();
  }

  if (!tiktokUrl && existing) {
    if (existing.tiktok_url) tiktokUrl = existing.tiktok_url;
    else if (existing.url && existing.url.includes('tiktok.com')) tiktokUrl = existing.url;
  }
  if (!youtubeUrl && existing) {
    if (existing.youtube_url) youtubeUrl = existing.youtube_url;
    else if (existing.url && (existing.url.includes('youtube.com') || existing.url.includes('youtu.be'))) youtubeUrl = existing.url;
  }

  if (!youtubeUrl) {
    if (projId.includes('cam-bat-den')) youtubeUrl = 'https://www.youtube.com/watch?v=L-zp0dPv7IU';
    else if (projId.includes('danmy')) youtubeUrl = 'https://www.youtube.com/watch?v=msf4UwVORPA';
    else if (projId.includes('wheelie')) youtubeUrl = 'https://www.youtube.com/watch?v=QMlud_TC3aA';
  }

  const isFeatured = item.featured !== undefined ? (item.featured === true || item.featured === 'true' || item.featured === 1) : Boolean(existing && existing.featured);
  let orderNum = null;
  if (item.order !== undefined && item.order !== null && item.order !== '') {
    const n = Number(item.order);
    if (!isNaN(n) && n > 0) orderNum = n;
  } else if (existing && existing.order !== undefined && existing.order !== null && existing.order !== '') {
    const n = Number(existing.order);
    if (!isNaN(n) && n > 0) orderNum = n;
  }
  const itemDate = item.date || (existing && existing.date) || '';
  const itemViews = (item.views !== undefined && item.views !== null && item.views !== '') 
    ? String(item.views).trim() 
    : (existing && existing.views ? String(existing.views).trim() : '');

  return {
    id: projId,
    title: item.title || 'Dự án mới',
    category: category,
    aspect: aspect,
    order: orderNum,
    featured: isFeatured,
    date: itemDate,
    views: itemViews,
    roles: Array.isArray(item.roles) ? item.roles : (role ? role.split(' • ') : []),
    role: role,
    badge: badge,
    thumbnail: thumb,
    video_src: videoSrc,
    tiktok_url: tiktokUrl,
    youtube_url: youtubeUrl,
    url: youtubeUrl || tiktokUrl || item.url || '',
    has_breakdown: breakdowns.length > 0,
    breakdown_src: breakdowns.length > 0 ? breakdowns[0].src : '',
    breakdown_thumb: breakdowns.length > 0 ? breakdowns[0].thumb : '',
    description: item.description || '',
    breakdowns: breakdowns
  };
}

// Dynamically load projects from CMS files (content/projects/) or JSON
async function loadDynamicCMSProjects() {
  try {
    // 1. Try to fetch content/projects/index.json
    const indexRes = await fetch('content/projects/index.json').catch(() => null);
    if (indexRes && indexRes.ok) {
      const indexData = await indexRes.json();
      
      const newCinematic = [];
      const newThunglong = [];
      const newFreelance = [];

      // If files array exists, try fetching individual files for live CMS edits
      if (Array.isArray(indexData.files) && indexData.files.length > 0) {
        const filePromises = indexData.files.map(async (filename) => {
          try {
            const res = await fetch(`content/projects/${filename}`);
            if (res.ok) {
              const text = await res.text();
              const parsed = parseCMSFrontmatter(text);
              if (parsed) {
                const slug = filename.replace(/\.(md|json)$/i, '');
                return normalizeCMSItem(parsed, slug);
              }
            }
          } catch (e) {}
          return null;
        });

        const fetchedItems = (await Promise.all(filePromises)).filter(Boolean);
        if (fetchedItems.length > 0) {
          fetchedItems.forEach(item => {
            if (item.category === 'cinematic') newCinematic.push(item);
            else if (item.category === 'thunglong') newThunglong.push(item);
            else if (item.category === 'freelance') newFreelance.push(item);
          });
        }
      }

      // If markdown fetching did not yield, fall back to indexData.projects
      if (newCinematic.length === 0 && newThunglong.length === 0 && newFreelance.length === 0 && Array.isArray(indexData.projects)) {
        indexData.projects.forEach(p => {
          const item = normalizeCMSItem(p);
          if (item.category === 'cinematic') newCinematic.push(item);
          else if (item.category === 'thunglong') newThunglong.push(item);
          else if (item.category === 'freelance') newFreelance.push(item);
        });
      }

      if (newCinematic.length > 0 || newThunglong.length > 0 || newFreelance.length > 0) {
        PORTFOLIO_DATA = {
          cinematic: newCinematic.length > 0 ? newCinematic : PORTFOLIO_DATA.cinematic,
          thunglong: newThunglong.length > 0 ? newThunglong : PORTFOLIO_DATA.thunglong,
          freelance: newFreelance.length > 0 ? newFreelance : PORTFOLIO_DATA.freelance
        };
        renderProjects();
        return;
      }
    }

    // 2. Alternatively check projects_data.json
    const jsonRes = await fetch('projects_data.json').catch(() => null);
    if (jsonRes && jsonRes.ok) {
      const data = await jsonRes.json();
      if (data && (data.cinematic || data.thunglong || data.freelance)) {
        PORTFOLIO_DATA = data;
        renderProjects();
      }
    }
  } catch (err) {
    // Graceful fallback to embedded PORTFOLIO_DATA (e.g. offline file:// protocol)
    console.log('Using embedded portfolio dataset');
  }
}
