// =========================================================
// VINH KACER PORTFOLIO — INTERACTIVE ENGINE (script.js)
// =========================================================

// Embedded Complete Dataset (Strictly matching real folders)
let PORTFOLIO_DATA = {"cinematic":[{"id":"cam-bat-den.mp4","title":"Cầm — Bắt Đền [Official Music Video]","category":"cinematic","aspect":"16:9","role":"Lead Video Editor • VFX Artist","badge":"Official MV / 1080p Cinematic","thumbnail":"thumbnails/mv/cam_bat_den.jpg","video_src":"videos/mv/cam-bat-den-nen.mp4","has_breakdown":true,"breakdown_src":"videos/breakdown/cam-bat-den-breakdown.mp4","breakdown_thumb":"thumbnails/breakdown/cam_breakdown.jpg","url":"","platform":"Music Video","description":"MV âm nhạc chính thức của nghệ sĩ Cầm. Cắt dựng nhịp điệu bài hát tinh tế, xử lý ánh sáng và chuyển cảnh điện ảnh.","filename":"cam-bat-den-nen.mp4","breakdowns":[{"id":"cam_bd_1","title":"Breakdown 01","label":"VFX Breakdown (9:16)","src":"videos/breakdown/cam-bat-den-breakdown.mp4","thumb":"thumbnails/breakdown/cam_breakdown.jpg"}]},{"id":"danmy-vi-da-la-con-gai.mp4","title":"DANMY x OSCREW — 'Vì Đã Là Con Gái' [Official MV]","category":"cinematic","aspect":"16:9","role":"Lead Video Editor • Motion Graphics","badge":"Official MV / 1080p Cinematic","thumbnail":"thumbnails/mv/vi_da_la_con_gai.jpg","video_src":"videos/mv/danmy-vi-da-la-con-gai-nen.mp4","has_breakdown":true,"breakdown_src":"videos/breakdown/danmy-breakdown-01.mp4","breakdown_thumb":"thumbnails/breakdown/danmy_breakdown.jpg","url":"","platform":"Music Video","description":"MV âm nhạc phong cách trẻ trung năng động, nhịp điệu bắt tai, kinetic typography và chuyển cảnh visual motion hiện đại.","filename":"danmy-vi-da-la-con-gai-nen.mp4","breakdowns":[{"id":"danmy_bd_1","title":"Breakdown 01","label":"Breakdown 01","src":"videos/breakdown/danmy-breakdown-01.mp4","thumb":"thumbnails/breakdown/danmy_breakdown.jpg"},{"id":"danmy_bd_2","title":"Breakdown 02","label":"Breakdown 02","src":"videos/breakdown/danmy-breakdown-02.mp4","thumb":"thumbnails/breakdown/danmy_breakdown_2.jpg"}]},{"id":"wheelie-mon-qua-que.mp4","title":"@wheelie0nther0ad — Món Quà Quê ft. @ICYFAMOUSS [Official MV]","category":"cinematic","aspect":"16:9","role":"Lead Video Editor • Sound Sync • VFX","badge":"Official MV / Directed by Xe Nguyen","thumbnail":"thumbnails/mv/mon_qua_que.jpg","video_src":"videos/mv/wheelie-mon-qua-que-nen.mp4","has_breakdown":true,"breakdown_src":"videos/breakdown/wheelie-mon-qua-que-breakdown.mp4","breakdown_thumb":"thumbnails/breakdown/wheelie_breakdown_2.jpg","url":"","platform":"Music Video","description":"MV Rap/Hip-hop đường phố chân thực, khớp từng beat bass uy lực và hiệu ứng chuyển cảnh kỹ xảo độc đáo.","filename":"wheelie-mon-qua-que-nen.mp4","breakdowns":[{"id":"wheelie_bd_1","title":"Breakdown 01","label":"VFX Breakdown (9:16)","src":"videos/breakdown/wheelie-mon-qua-que-breakdown.mp4","thumb":"thumbnails/breakdown/wheelie_breakdown_2.jpg"}]},{"id":"gill-ngua-phi.mp4","title":"GILL – NGỰA PHI (Official MV)","category":"cinematic","aspect":"16:9","order":4,"featured":false,"role":"VFX Artist","badge":"OFFICIAL MV","thumbnail":"thumbnails/mv/gill_ngua_phi.jpg","video_src":"videos/mv/gill-ngua-phi.mp4","has_breakdown":false,"breakdown_src":"","breakdown_thumb":"","url":"","platform":"Music Video","description":"Official Music Video của nghệ sĩ Gill. Hiệu ứng kỹ xảo hình ảnh VFX, nhịp cắt dựng năng động và chuyển động camera điện ảnh.","filename":"gill-ngua-phi.mp4","breakdowns":[]}],"thunglong":[{"id":"7315392879562591490","title":"1 Ngày Foodtour Bất Quy Tắc 🤤","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7315392879562591490.jpg","video_src":"videos/thunglong/1-ngay-foodtour.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7315392879562591490","platform":"TikTok","filename":"1-ngay-foodtour.mp4"},{"id":"7212612550922407194","title":"1 Ngày Hoa Mắt Với Con Gái 17 Tháng Tuổi (Fatzbaby)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7212612550922407194.jpg","video_src":"videos/thunglong/1-ngay-hoa-mat-con-gai.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7212612550922407194","platform":"TikTok","filename":"1-ngay-hoa-mat-con-gai.mp4"},{"id":"7287550952079396098","title":"Ai Chẳng Muốn Mình Xênh Với Lung Lênh 🤭","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7287550952079396098.jpg","video_src":"videos/thunglong/ai-chang-muon-minh-xenh.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7287550952079396098","platform":"TikTok","filename":"ai-chang-muon-minh-xenh.mp4"},{"id":"7245623121108159749","title":"Bộ Câu Hỏi Cà Khịa Dành Cho Chị Em (Phần 1)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7245623121108159749.jpg","video_src":"videos/thunglong/bo-cau-hoi-ca-khia-phan-1.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7245623121108159749","platform":"TikTok","filename":"bo-cau-hoi-ca-khia-phan-1.mp4"},{"id":"7279397866169289986","title":"Bộ Câu Hỏi Cà Khịa Dành Cho Chị Em (Phần 2)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7279397866169289986.jpg","video_src":"videos/thunglong/bo-cau-hoi-ca-khia-phan-2.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7279397866169289986","platform":"TikTok","filename":"bo-cau-hoi-ca-khia-phan-2.mp4"},{"id":"7342870241090768130","title":"Chuẩn Bị Lên Thớt 😌 (Dance Trend)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7342870241090768130.jpg","video_src":"videos/thunglong/chuan-bi-len-thot.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7342870241090768130","platform":"TikTok","filename":"chuan-bi-len-thot.mp4"},{"id":"7317614770717297921","title":"Chăm Người Lớn Phức Tạp Ghê Mọi Người Ạ (Aveeno Baby)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7317614770717297921.jpg","video_src":"videos/thunglong/cham-nguoi-lon-phuc-tap.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7317614770717297921","platform":"TikTok","filename":"cham-nguoi-lon-phuc-tap.mp4"},{"id":"7307238023320603911","title":"Chạy Theo Xa Hoa Phù Du Mệt Phết 🤣","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7307238023320603911.jpg","video_src":"videos/thunglong/chay-theo-xa-hoa-phu-du.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7307238023320603911","platform":"TikTok","filename":"chay-theo-xa-hoa-phu-du.mp4"},{"id":"7281247914771483905","title":"Chị Em Chỉ Cần Mỗi Vậy Thôi Mà (Bánh Trung Thu Hữu Nghị)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7281247914771483905.jpg","video_src":"videos/thunglong/chi-em-chi-can-moi-vay-thoi.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7281247914771483905","platform":"TikTok","filename":"chi-em-chi-can-moi-vay-thoi.mp4"},{"id":"7291276702813064449","title":"Cuộc Thi Hoa Hậu Người Mẹ 👸🏼 (Johnson's Baby)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7291276702813064449.jpg","video_src":"videos/thunglong/cuoc-thi-hoa-hau-nguoi-me.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7291276702813064449","platform":"TikTok","filename":"cuoc-thi-hoa-hau-nguoi-me.mp4"},{"id":"7290173297638018311","title":"Các Bố Mẹ Mà Đập Hộp Thử Lại Lãi Đống Quà 😎","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7290173297638018311.jpg","video_src":"videos/thunglong/dap-hop-thu-lai-dong-qua.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7290173297638018311","platform":"TikTok","filename":"dap-hop-thu-lai-dong-qua.mp4"},{"id":"7332087700129877249","title":"Cô Ơi Cô Đừng Về 🥺 (Nước Giặt Xả Joins 2in1)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7332087700129877249.jpg","video_src":"videos/thunglong/co-oi-co-dung-ve.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7332087700129877249","platform":"TikTok","filename":"co-oi-co-dung-ve.mp4"},{"id":"7208891929671650587","title":"Cưng Tưởng Thế Là Hạ Được Chị Á 🙂","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7208891929671650587.jpg","video_src":"videos/thunglong/cung-tuong-the-la-ha-duoc-chi.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7208891929671650587","platform":"TikTok","filename":"cung-tuong-the-la-ha-duoc-chi.mp4"},{"id":"7236720841944206598","title":"Cứ Thích Thể Hiện Cho Lắm Vào 🤬","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7236720841944206598.jpg","video_src":"videos/thunglong/cu-thich-the-hien-cho-lam-nen.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7236720841944206598","platform":"TikTok","filename":"cu-thich-the-hien-cho-lam-nen.mp4"},{"id":"7284955655289588994","title":"Em Chỉ Ăn Mỗi Thế Thôi Mà (Bàn Chải P/S Than Bạc)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7284955655289588994.jpg","video_src":"videos/thunglong/em-chi-an-moi-the-thoi.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7284955655289588994","platform":"TikTok","filename":"em-chi-an-moi-the-thoi.mp4"},{"id":"7263072598836202760","title":"Food Tour Tại Lệ Giang - Tung Của 🍪🥐🍖","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7263072598836202760.jpg","video_src":"videos/thunglong/food-tour-tai-le-giang.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7263072598836202760","platform":"TikTok","filename":"food-tour-tai-le-giang.mp4"},{"id":"7428082811434716421","title":"Giveaway for my fans! Follow and comment, I will pick 15 friends to s... [7428082811434716421].mp4","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7428082811434716421.jpg","video_src":"videos/thunglong/giveaway-for-my-fans.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7428082811434716421","platform":"TikTok","filename":"giveaway-for-my-fans.mp4"},{"id":"7330969014832860418","title":"Hiệp Hội Phao Cứu Sinh Sẵn Sàng Phục Vụ (Phần 2)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7330969014832860418.jpg","video_src":"videos/thunglong/hiep-hoi-phao-cuu-sinh-phan-2.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7330969014832860418","platform":"TikTok","filename":"hiep-hoi-phao-cuu-sinh-phan-2.mp4"},{"id":"7302069166826179842","title":"Hiệp Hội Phao Cứu Sinh Sẵn Sàng Phục Vụ (Bosch Home VN)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7302069166826179842.jpg","video_src":"videos/thunglong/hiep-hoi-phao-cuu-sinh-phan-1.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7302069166826179842","platform":"TikTok","filename":"hiep-hoi-phao-cuu-sinh-phan-1.mp4"},{"id":"7276797810253614337","title":"Khi Bạn Biết Cách Flexing Về Nghề 🤭","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7276797810253614337.jpg","video_src":"videos/thunglong/khi-ban-biet-cach-flexing.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7276797810253614337","platform":"TikTok","filename":"khi-ban-biet-cach-flexing.mp4"},{"id":"7315758991269694721","title":"Khi Bạn Xem Massage Ấn Độ Quá 360 Phút 😵‍💫 (Sạch Gầu 5in1)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7315758991269694721.jpg","video_src":"videos/thunglong/khi-ban-xem-massage-an-do.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7315758991269694721","platform":"TikTok","filename":"khi-ban-xem-massage-an-do.mp4"},{"id":"7339135630951304449","title":"May Cho Anh Đấy Nhé 😌","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7339135630951304449.jpg","video_src":"videos/thunglong/may-cho-anh-day-nhe.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7339135630951304449","platform":"TikTok","filename":"may-cho-anh-day-nhe.mp4"},{"id":"7369216070894374162","title":"May mà thân thủ phi phàm 😅","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7369216070894374162.jpg","video_src":"videos/thunglong/may-ma-than-thu-phi-pham.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7369216070894374162","platform":"TikTok","filename":"may-ma-than-thu-phi-pham.mp4"},{"id":"7428822702070304005","title":"Me on work verson VS Me on  version","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7428822702070304005.jpg","video_src":"videos/thunglong/me-on-work-vs-halloween.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7428822702070304005","platform":"TikTok","filename":"me-on-work-vs-halloween.mp4"},{"id":"7448873288429767941","title":"Message copied! Go to Haidilao for late night snacks  ... [7448873288429767941].mp4","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7448873288429767941.jpg","video_src":"videos/thunglong/haidilao-late-night-snacks.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7448873288429767941","platform":"TikTok","filename":"haidilao-late-night-snacks.mp4"},{"id":"7291641220160326913","title":"Quan Trọng Là Cái Tấm Lòng","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7291641220160326913.jpg","video_src":"videos/thunglong/quan-trong-la-cai-tam-long.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7291641220160326913","platform":"TikTok","filename":"quan-trong-la-cai-tam-long.mp4"},{"id":"7305745167993031937","title":"Rồi Ai Là Sếp Ai Là Nhân Viên 🙃","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7305745167993031937.jpg","video_src":"videos/thunglong/roi-ai-la-sep-ai-la-nhan-vien.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7305745167993031937","platform":"TikTok","filename":"roi-ai-la-sep-ai-la-nhan-vien.mp4"},{"id":"7303888492621237506","title":"Sau Khi Xem Massage Ấn Độ Quá 180 Phút (Johnson's Baby)","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7303888492621237506.jpg","video_src":"videos/thunglong/sau-khi-xem-massage-an-do.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7303888492621237506","platform":"TikTok","filename":"sau-khi-xem-massage-an-do.mp4"},{"id":"7223728609372998918","title":"Thích Ngắm Gái Không Hả 😡👊","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7223728609372998918.jpg","video_src":"videos/thunglong/thich-ngam-gai-khong-ha.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7223728609372998918","platform":"TikTok","filename":"thich-ngam-gai-khong-ha.mp4"},{"id":"7539895638197112080","title":"Thơm đến mức chị em muốn ＂động khẩu＂    ... [7539895638197112080].mp4","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7539895638197112080.jpg","video_src":"videos/thunglong/thom-den-muc-chi-em-muon-dong-khau.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7539895638197112080","platform":"TikTok","filename":"thom-den-muc-chi-em-muon-dong-khau.mp4"},{"id":"7226334534378310918","title":"Với Mỗi Món Skincare, Vợ Có Thể Viết Cả Bách Khoa Toàn Thư","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7226334534378310918.jpg","video_src":"videos/thunglong/voi-moi-mon-skincare.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7226334534378310918","platform":"TikTok","filename":"voi-moi-mon-skincare.mp4"},{"id":"7444768523089399096","title":"We have HANFU Chinese traditional clothes Try-on activities in certai... [7444768523089399096].mp4","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7444768523089399096.jpg","video_src":"videos/thunglong/hanfu-chinese-traditional-clothes.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7444768523089399096","platform":"TikTok","filename":"hanfu-chinese-traditional-clothes.mp4"},{"id":"7259733140934102280","title":"Làm Gì Có Chuyện Nối Đến Sáng Mai 🤣","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7259733140934102280.jpg","video_src":"videos/thunglong/lam-gi-co-chuyen-noi-den-sang-mai.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7259733140934102280","platform":"TikTok","filename":"lam-gi-co-chuyen-noi-den-sang-mai.mp4"},{"id":"7325298596356689153","title":"Đu Trend Hơi Muộn Tí Nên Chơi Tới Luôn 👷‍♂️","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7325298596356689153.jpg","video_src":"videos/thunglong/du-trend-hoi-muon-ti.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7325298596356689153","platform":"TikTok","filename":"du-trend-hoi-muon-ti.mp4"},{"id":"7297587094958902529","title":"Đu Trend Trong 1 Ngày Mưa Gió 🤣🌧️💦","category":"thunglong","aspect":"9:16","role":"Tiền kì • Dựng chính • VFX","badge":"🔥 Viral Content / Triệu Views","thumbnail":"thumbnails/7297587094958902529.jpg","video_src":"videos/thunglong/du-trend-trong-1-ngay-mua-gio.mp4","url":"https://www.tiktok.com/@thunglongfamily/video/7297587094958902529","platform":"TikTok","filename":"du-trend-trong-1-ngay-mua-gio.mp4"}],"freelance":[{"id":"7435672378299944247","title":"Haidilao #APT Dance Challenge — Dance with Us!","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7435672378299944247.jpg","video_src":"videos/freelance/haidilao-apt-dance-challenge.mp4","url":"https://www.tiktok.com/@/video/7435672378299944247","platform":"Commercial","filename":"haidilao-apt-dance-challenge.mp4"},{"id":"7466795322665094406","title":"Haidilao Tomato or Potato? — Interactive Viral Choice","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7466795322665094406.jpg","video_src":"videos/freelance/haidilao-tomato-or-potato.mp4","url":"https://www.tiktok.com/@/video/7466795322665094406","platform":"Commercial","filename":"haidilao-tomato-or-potato.mp4"},{"id":"7469760253500853509","title":"Haidilao Hotpot — Always There for Your Happiness","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7469760253500853509.jpg","video_src":"videos/freelance/haidilao-hotpot-for-happiness.mp4","url":"https://www.tiktok.com/@/video/7469760253500853509","platform":"Commercial","filename":"haidilao-hotpot-for-happiness.mp4"},{"id":"7447014404505259270","title":"Haidilao Hotpot — Great Food, Great Mood","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7447014404505259270.jpg","video_src":"videos/freelance/haidilao-great-food-great-mood.mp4","url":"https://www.tiktok.com/@/video/7447014404505259270","platform":"Commercial","filename":"haidilao-great-food-great-mood.mp4"},{"id":"7441776844061281591","title":"Haidilao Wednesday Vibes — Buy You A Drink!","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7441776844061281591.jpg","video_src":"videos/freelance/haidilao-wednesday-drink.mp4","url":"https://www.tiktok.com/@/video/7441776844061281591","platform":"Commercial","filename":"haidilao-wednesday-drink.mp4"},{"id":"7521720993946160385","title":"Salitos x Mosvici — Cú Bắt Tay Tình Thân Mến Thân","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7521720993946160385.jpg","video_src":"videos/freelance/salitos-x-mosvici-tinh-than.mp4","url":"https://www.tiktok.com/@/video/7521720993946160385","platform":"Commercial","filename":"salitos-x-mosvici-tinh-than.mp4"},{"id":"7439180307032476984","title":"Haidilao Table Magic — Show You Some Magic Tricks","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7439180307032476984.jpg","video_src":"videos/freelance/haidilao-table-magic-tricks.mp4","url":"https://www.tiktok.com/@/video/7439180307032476984","platform":"Commercial","filename":"haidilao-table-magic-tricks.mp4"},{"id":"7544395711182392593","title":"Tự Hào 2 Tiếng Việt Nam 🇻🇳 (Special National Day Film)","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7544395711182392593.jpg","video_src":"videos/freelance/tu-hao-2-tieng-viet-nam.mp4","url":"https://www.tiktok.com/@/video/7544395711182392593","platform":"Commercial","filename":"tu-hao-2-tieng-viet-nam.mp4"},{"id":"7425802752959253765","title":"Haidilao Friendship Magic — Behind The Scene Fun","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7425802752959253765.jpg","video_src":"videos/freelance/haidilao-friendship-magic.mp4","url":"https://www.tiktok.com/@/video/7425802752959253765","platform":"Commercial","filename":"haidilao-friendship-magic.mp4"},{"id":"7520226940834352385","title":"Clear Men — Tụi Này Ngứa Đòn Cứ Thích Nhờn Với Anh","category":"freelance","aspect":"9:16","role":"Video Editor • VFX • Motion Graphics","badge":"Commercial / Brand Campaign","thumbnail":"thumbnails/7520226940834352385.jpg","video_src":"videos/freelance/clear-men-fake-situation.mp4","url":"https://www.tiktok.com/@/video/7520226940834352385","platform":"Commercial","filename":"clear-men-fake-situation.mp4"}]};


// =============================================================================
// SUPERDESIGN SYSTEM: GENERATIVE INK FILM & SCROLL-DRIVEN ARCHITECTURE
// =============================================================================

// --- 1. FAST VALUE NOISE & PROCEDURAL FIELD GENERATOR ---
const PERM_TABLE = new Uint8Array(512);
(function initPermutation() {
  for (let i = 0; i < 256; i++) PERM_TABLE[i] = i;
  let seed = 1337;
  for (let i = 255; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    const j = (seed >>> 16) % (i + 1);
    const tmp = PERM_TABLE[i];
    PERM_TABLE[i] = PERM_TABLE[j];
    PERM_TABLE[j] = tmp;
  }
  for (let i = 0; i < 256; i++) PERM_TABLE[256 + i] = PERM_TABLE[i];
})();

function hash3d(x, y, z) {
  return PERM_TABLE[(PERM_TABLE[(PERM_TABLE[x & 255] + y) & 255] + z) & 255] / 255;
}

function noise3d(x, y, z) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fy = y - iy;
  const fz = z - iz;
  const u = fx * fx * (3 - 2 * fx);
  const v = fy * fy * (3 - 2 * fy);
  const w = fz * fz * (3 - 2 * fz);

  const v000 = hash3d(ix, iy, iz);
  const v100 = hash3d(ix + 1, iy, iz);
  const v010 = hash3d(ix, iy + 1, iz);
  const v110 = hash3d(ix + 1, iy + 1, iz);
  const v001 = hash3d(ix, iy, iz + 1);
  const v101 = hash3d(ix + 1, iy, iz + 1);
  const v011 = hash3d(ix, iy + 1, iz + 1);
  const v111 = hash3d(ix + 1, iy + 1, iz + 1);

  const x00 = v000 * (1 - u) + v100 * u;
  const x10 = v010 * (1 - u) + v110 * u;
  const x01 = v001 * (1 - u) + v101 * u;
  const x11 = v011 * (1 - u) + v111 * u;

  const y0 = x00 * (1 - v) + x10 * v;
  const y1 = x01 * (1 - v) + x11 * v;

  return y0 * (1 - w) + y1 * w;
}

function fbm3d(x, y, z) {
  let val = 0;
  let amp = 0.52;
  let freq = 1.0;
  for (let i = 0; i < 4; i++) {
    val += amp * noise3d(x * freq, y * freq, z * freq);
    freq *= 2.0;
    amp *= 0.5;
  }
  return val;
}

// --- 2. SHORTEST-ARC HSV ACCENT INTERPOLATION ---
function hsvToRgb(h, s, v) {
  const c = v * s;
  const hp = (h % 360) / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (hp >= 0 && hp < 1) { r = c; g = x; b = 0; }
  else if (hp >= 1 && hp < 2) { r = x; g = c; b = 0; }
  else if (hp >= 2 && hp < 3) { r = 0; g = c; b = x; }
  else if (hp >= 3 && hp < 4) { r = 0; g = x; b = c; }
  else if (hp >= 4 && hp < 5) { r = x; g = 0; b = c; }
  else if (hp >= 5 && hp < 6) { r = c; g = 0; b = x; }
  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}

// 4 Section Accents in HSV:
// Section 01: Acid #D8FF3E   [72.1, 0.757, 1.0]
// Section 02: Orange #FF5C38 [10.9, 0.780, 1.0]
// Section 03: Cyan #6FE3FF   [191.7, 0.565, 1.0]
// Section 04: Magenta #FF3D9A [331.2, 0.761, 1.0]
// Section 05: Acid #D8FF3E
// Section 06: Orange #FF5C38
// Section 07: Cyan #6FE3FF
// Section 08: Magenta #FF3D9A
const SECTION_HSV = [
  [72.1, 0.757, 1.0],
  [10.9, 0.780, 1.0],
  [191.7, 0.565, 1.0],
  [331.2, 0.761, 1.0],
  [72.1, 0.757, 1.0],
  [10.9, 0.780, 1.0],
  [191.7, 0.565, 1.0],
  [331.2, 0.761, 1.0]
];

let sectionRampStops = [0, 0.14, 0.28, 0.42, 0.57, 0.71, 0.85, 1.0];

function computeSectionStops() {
  const secIds = ['cover', 'argument', 'difference', 'offer', 'position', 'index', 'spec', 'close'];
  const docHeight = Math.max(1, document.documentElement.scrollHeight);
  const stops = secIds.map((id, idx) => {
    const el = document.getElementById(id);
    if (!el) return idx / 7;
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const center = top + rect.height * 0.5;
    return Math.max(0, Math.min(1, center / docHeight));
  });
  for (let i = 1; i < stops.length; i++) {
    if (stops[i] <= stops[i - 1]) stops[i] = stops[i - 1] + 0.01;
  }
  sectionRampStops = stops;
}

function getInterpolatedAccentRGB(scrollP) {
  const p = Math.max(0, Math.min(1, scrollP));
  let seg = 0;
  for (let i = 0; i < sectionRampStops.length - 1; i++) {
    if (p >= sectionRampStops[i] && p <= sectionRampStops[i + 1]) {
      seg = i;
      break;
    }
    if (i === sectionRampStops.length - 2) seg = i;
  }
  const s0 = sectionRampStops[seg];
  const s1 = sectionRampStops[seg + 1];
  const t = Math.max(0, Math.min(1, (p - s0) / (s1 - s0 || 1)));

  const hsv1 = SECTION_HSV[seg];
  const hsv2 = SECTION_HSV[seg + 1];

  let dh = hsv2[0] - hsv1[0];
  if (dh > 180) dh -= 360;
  else if (dh < -180) dh += 360;

  const h = (hsv1[0] + dh * t + 360) % 360;
  const s = hsv1[1] + (hsv2[1] - hsv1[1]) * t;
  const v = hsv1[2] + (hsv2[2] - hsv1[2]) * t;

  return hsvToRgb(h, s, v);
}

// --- 3. OFFSCREEN BUFFER & GENERATIVE INK BACKGROUND CANVAS ---
const OFF_W = 200;
const OFF_H = 113;
let offCanvas, offCtx, offImgData, offBuf32;
let visibleCanvas, visibleCtx;
let waterBase;

let curZ = 0;
let targetZ = 0;
let curScrollFraction = 0;
let lastRenderTime = 0;
let isRenderingNeeded = true;

function initCanvasBackground() {
  visibleCanvas = document.getElementById('inkCanvas');
  if (!visibleCanvas) return;
  visibleCtx = visibleCanvas.getContext('2d', { alpha: false });

  offCanvas = document.createElement('canvas');
  offCanvas.width = OFF_W;
  offCanvas.height = OFF_H;
  offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
  offImgData = offCtx.createImageData(OFF_W, OFF_H);
  offBuf32 = new Uint32Array(offImgData.data.buffer);

  // Bake static water base into Float32Array once at startup
  waterBase = new Float32Array(OFF_W * OFF_H);
  for (let y = 0; y < OFF_H; y++) {
    for (let x = 0; x < OFF_W; x++) {
      const nx = x / OFF_W;
      const ny = y / OFF_H;
      const wb = noise3d(nx * 4.2, ny * 4.2, 0.5) * 0.6 + noise3d(nx * 8.4, ny * 8.4, 1.2) * 0.4;
      waterBase[y * OFF_W + x] = wb;
    }
  }

  function resizeCanvas() {
    visibleCanvas.width = window.innerWidth;
    visibleCanvas.height = window.innerHeight;
    computeSectionStops();
    isRenderingNeeded = true;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
}

function renderInkFrame(timestamp) {
  if (!visibleCanvas || !offCtx) return;

  const dt = timestamp - lastRenderTime;
  const timeSec = timestamp * 0.001;

  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const scrollP = Math.max(0, Math.min(1, window.scrollY / maxScroll));
  curScrollFraction = scrollP;

  targetZ = scrollP * 3.2 + timeSec * 0.035;
  const deltaZ = targetZ - curZ;

  // Lerp toward target, snap when delta is tiny
  if (Math.abs(deltaZ) > 0.0001) {
    curZ += deltaZ * 0.12;
    isRenderingNeeded = true;
  } else {
    curZ = targetZ;
  }

  if (!isRenderingNeeded && dt < 45) {
    return;
  }
  lastRenderTime = timestamp;
  isRenderingNeeded = false;

  const [accR, accG, accB] = getInterpolatedAccentRGB(curScrollFraction);

  // Drifting radial bias so dense bloom is always somewhere on screen
  const biasCx = OFF_W * (0.5 + 0.28 * Math.cos(timeSec * 0.15 + curZ * 0.8));
  const biasCy = OFF_H * (0.5 + 0.24 * Math.sin(timeSec * 0.20 + curZ * 0.7));
  const invRadSq = 1 / ((OFF_W * 0.52) * (OFF_W * 0.52));

  let idx = 0;
  for (let y = 0; y < OFF_H; y++) {
    const ny = y / OFF_H;
    const dy = y - biasCy;
    const dy2 = dy * dy;

    for (let x = 0; x < OFF_W; x++) {
      const nx = x / OFF_W;
      const dx = x - biasCx;
      const distSq = dx * dx + dy2;

      // Two cheap value-noise samples for domain warp
      const w1 = noise3d(nx * 2.6, ny * 2.6, curZ * 0.5);
      const w2 = noise3d(nx * 2.6 + 4.3, ny * 2.6 + 2.1, curZ * 0.5);

      // Sample 4-octave value noise at warped coord
      const wx = nx * 3.4 + (w1 - 0.5) * 1.5;
      const wy = ny * 3.4 + (w2 - 0.5) * 1.5;
      let nVal = fbm3d(wx, wy, curZ);

      // Add static water base
      nVal = nVal * 0.82 + waterBase[idx] * 0.18;

      // Radial bias
      const radialFactor = Math.max(0, 1 - distSq * invRadSq);
      nVal += radialFactor * 0.24;

      // Dual thresholding: tight for core, loose for soft skirt
      let core = (nVal - 0.56) / 0.16;
      if (core < 0) core = 0; else if (core > 1) core = 1;
      core = core * core * (3 - 2 * core);

      let skirt = (nVal - 0.36) / 0.22;
      if (skirt < 0) skirt = 0; else if (skirt > 1) skirt = 1;
      skirt = skirt * skirt * (3 - 2 * skirt);

      // Shading using warp sample w1 (near and far sides)
      const shade = 0.70 + 0.58 * w1;

      // Blend ground #0A0B0C (10, 11, 12), warm white #F5F3EF (245, 243, 239) & accent
      const skirtR = 10 + (245 - 10) * skirt * 0.30 + (accR - 10) * skirt * 0.28;
      const skirtG = 11 + (243 - 11) * skirt * 0.30 + (accG - 11) * skirt * 0.28;
      const skirtB = 12 + (239 - 12) * skirt * 0.30 + (accB - 12) * skirt * 0.28;

      const targetCoreR = Math.min(255, accR * shade);
      const targetCoreG = Math.min(255, accG * shade);
      const targetCoreB = Math.min(255, accB * shade);

      const r = Math.round(skirtR + (targetCoreR - skirtR) * core);
      const g = Math.round(skirtG + (targetCoreG - skirtG) * core);
      const b = Math.round(skirtB + (targetCoreB - skirtB) * core);

      // Write 32-bit pixel: Alpha, Blue, Green, Red
      offBuf32[idx++] = (255 << 24) | (b << 16) | (g << 8) | r;
    }
  }

  offCtx.putImageData(offImgData, 0, 0);
  visibleCtx.imageSmoothingEnabled = true;
  visibleCtx.imageSmoothingQuality = 'high';
  visibleCtx.drawImage(offCanvas, 0, 0, visibleCanvas.width, visibleCanvas.height);
}

// --- 4. SMOOTH SCROLL VELOCITY SKEW ---
let prevScrollY = 0;
let smoothSkew = 0;
let smoothWrapper = null;

function updateVelocitySkew() {
  if (!smoothWrapper) smoothWrapper = document.getElementById('smoothWrapper');
  if (!smoothWrapper) return;

  const currentY = window.scrollY;
  const velocity = currentY - prevScrollY;
  prevScrollY = currentY;

  // Clamped to 2.2 degrees, settles to zero at rest
  const targetSkew = Math.max(-2.2, Math.min(2.2, velocity * 0.055));
  smoothSkew += (targetSkew - smoothSkew) * 0.14;

  if (Math.abs(smoothSkew) < 0.005 && Math.abs(targetSkew) < 0.005) {
    smoothWrapper.style.transform = '';
  } else {
    smoothWrapper.style.transform = `skewY(${smoothSkew.toFixed(3)}deg)`;
  }
}

// --- 5. 520PX POINTER FOLLOWER (0.9S EASING LAG) ---
let targetMouseX = window.innerWidth * 0.5;
let targetMouseY = window.innerHeight * 0.5;
let followerX = targetMouseX;
let followerY = targetMouseY;
let pointerFollower = null;
let isFinePointer = false;

function initPointerFollower() {
  pointerFollower = document.getElementById('pointerFollower');
  isFinePointer = window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isFinePointer && pointerFollower) {
    window.addEventListener('pointermove', (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    }, { passive: true });
  } else if (pointerFollower) {
    pointerFollower.style.display = 'none';
  }
}

function updatePointerFollower() {
  if (!isFinePointer || !pointerFollower) return;
  followerX += (targetMouseX - followerX) * 0.048;
  followerY += (targetMouseY - followerY) * 0.048;
  pointerFollower.style.transform = `translate(${(followerX - 260).toFixed(1)}px, ${(followerY - 260).toFixed(1)}px)`;
}

// --- 6. SECTION ACCENT SWAP ON MIDDLE CROSS ---
function updateActiveSectionAccent() {
  const sections = document.querySelectorAll('section[data-accent]');
  const midY = window.innerHeight * 0.5;
  for (const sec of sections) {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= midY && rect.bottom >= midY) {
      const accent = sec.dataset.accent;
      if (accent) {
        document.documentElement.style.setProperty('--active-accent', accent);
        if (pointerFollower && isFinePointer) {
          pointerFollower.style.background = `radial-gradient(circle, ${accent}33 0%, transparent 70%)`;
        }
      }
      break;
    }
  }
}

// --- 7. SECTION 01 CIRCULAR BADGE ROTATION ---
let circularBadge = null;
function updateCircularBadge() {
  if (!circularBadge) circularBadge = document.getElementById('circularBadge');
  if (circularBadge) {
    circularBadge.style.transform = `rotate(${(window.scrollY * 0.16).toFixed(2)}deg)`;
  }
}

// --- 8. SECTION 03 STICKY BEFORE & AFTER WIPE ---
let diffSection = null;
let diffFrame = null;
let wipeHandle = null;
let isUserDraggingWipe = false;

function initStickyWipe() {
  diffSection = document.getElementById('difference');
  diffFrame = document.querySelector('.wipe-sticky-frame');
  wipeHandle = document.getElementById('wipeHandle');

  if (wipeHandle && diffFrame) {
    function onPointerDown(e) {
      isUserDraggingWipe = true;
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      e.preventDefault();
    }
    function onPointerMove(e) {
      if (!isUserDraggingWipe) return;
      const rect = diffFrame.getBoundingClientRect();
      const pct = Math.max(10, Math.min(90, ((e.clientX - rect.left) / rect.width) * 100));
      diffFrame.style.setProperty('--wipe', `${pct.toFixed(2)}%`);
    }
    function onPointerUp() {
      isUserDraggingWipe = false;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    }
    wipeHandle.addEventListener('pointerdown', onPointerDown);
  }
}

function updateStickyWipe() {
  if (!diffSection || !diffFrame || isUserDraggingWipe) return;
  const rect = diffSection.getBoundingClientRect();
  const scrollDist = rect.height - window.innerHeight;
  if (scrollDist <= 0) return;
  const progress = Math.max(0, Math.min(1, -rect.top / scrollDist));
  // Scrub from 72% down to 24%
  const wipePct = 72 - progress * (72 - 24);
  diffFrame.style.setProperty('--wipe', `${wipePct.toFixed(2)}%`);
}

// --- 9. SECTION 05 STICKY WORD-BY-WORD SCRUB ---
let positionSection = null;
let statementWords = [];
let statementAttr = null;

function initStatementScrub() {
  positionSection = document.getElementById('position');
  statementWords = Array.from(document.querySelectorAll('.statement-word'));
  statementAttr = document.getElementById('statementAttribution');
}

function updateStatementScrub() {
  if (!positionSection || statementWords.length === 0) return;
  const rect = positionSection.getBoundingClientRect();
  const scrollDist = rect.height - window.innerHeight;
  if (scrollDist <= 0) return;
  const progress = Math.max(0, Math.min(1, -rect.top / scrollDist));

  const numWords = statementWords.length;
  statementWords.forEach((word, i) => {
    const start = 0.05 + (i / numWords) * 0.70;
    const end = start + (1 / numWords) * 0.65;
    const wordP = Math.max(0, Math.min(1, (progress - start) / (end - start)));
    word.style.opacity = (0.1 + 0.9 * wordP).toFixed(3);
    word.style.transform = `translateY(${(0.35 * (1 - wordP)).toFixed(3)}em)`;
  });

  if (statementAttr) {
    const attrP = Math.max(0, Math.min(1, (progress - 0.78) / 0.18));
    statementAttr.style.opacity = (attrP * 0.85).toFixed(3);
    statementAttr.style.transform = `translateY(${((1 - attrP) * 20).toFixed(1)}px)`;
  }
}

// --- 10. SECTION 06 COUNT-UP METRIC ---
let countUpTriggered = false;
function initCountUp() {
  const indexSection = document.getElementById('index');
  if (!indexSection) return;
  const statEl = indexSection.querySelector('.text-6xl') || indexSection.querySelector('.tabular-nums');
  if (!statEl) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countUpTriggered) {
        countUpTriggered = true;
        let count = 0;
        const target = 48;
        const duration = 1200;
        const start = performance.now();
        function tick(now) {
          const p = Math.min(1, (now - start) / duration);
          const easeOut = 1 - Math.pow(1 - p, 3);
          count = Math.floor(easeOut * target);
          statEl.textContent = `${count}+`;
          if (p < 1) requestAnimationFrame(tick);
          else statEl.textContent = '48+';
        }
        requestAnimationFrame(tick);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(indexSection);
}

// --- 11. HEADLINE CHARACTER SPLIT & STAGGER ENTRANCE ---
function initHeadlineSplits() {
  const headlines = document.querySelectorAll('.kicker-headline');
  headlines.forEach(headline => {
    if (headline.dataset.split) return;
    headline.dataset.split = 'true';
    const lines = headline.innerHTML.split('<br>');
    headline.innerHTML = lines.map(line => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = line.trim();
      const text = tempDiv.innerText;
      const chars = text.split('').map(ch => `
        <span class="inline-block transform translate-y-[112%] rotate-[5deg] opacity-0 transition-all duration-[1050ms] ease-[cubic-bezier(0.16,1,0.3,1)] char-span">
          ${ch === ' ' ? '&nbsp;' : ch}
        </span>
      `).join('');
      return `<div class="overflow-hidden py-1 -my-1">${chars}</div>`;
    }).join('');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chars = headline.querySelectorAll('.char-span');
          chars.forEach((c, idx) => {
            setTimeout(() => {
              c.style.transform = 'translateY(0) rotate(0deg)';
              c.style.opacity = '1';
            }, idx * 22);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.28 });
    observer.observe(headline);
  });
}

// =============================================================================
// VIDEO FACADES, TIMELINE CONTROLS & CINEMA / BREAKDOWN MODALS
// =============================================================================

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

function copyEmail() {
  const email = 'bkchoc230801@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('✓ Đã sao chép email: ' + email);
  }).catch(() => {
    showToast('bkchoc230801@gmail.com');
  });
}

function pauseAllVideos() {
  document.querySelectorAll('video').forEach(v => {
    try { v.pause(); } catch (e) {}
  });
}

// Trigger Local MP4 Facade (Preserves Timeline Controls & Aspect Ratio)
function playMP4Facade(element, src, poster) {
  playBeep(800, 0.05);
  pauseAllVideos();

  const container = element.closest('.video-16-9-container') || element.parentElement || element;
  container.innerHTML = `
    <video controls autoplay playsinline preload="metadata" class="w-full h-full object-contain relative z-20 pointer-events-auto" style="pointer-events: auto; object-fit: contain;">
      <source src="${src}" type="video/mp4">
      Trình duyệt không hỗ trợ thẻ video HTML5.
    </video>
  `;
  const vid = container.querySelector('video');
  if (vid) {
    ['click', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'pointerdown', 'pointerup'].forEach(evt => {
      vid.addEventListener(evt, (e) => e.stopPropagation());
    });
    vid.play().catch(() => {
      vid.muted = true;
      vid.play().catch(() => {});
    });
  }
}

function playCardVideo(element, src, poster) {
  playMP4Facade(element, src, poster);
}

// Cinema Modal Handler
function openCinemaModal(itemOrSrc, title, role, aspect) {
  playBeep(750, 0.08);
  pauseAllVideos();

  let item = {};
  if (typeof itemOrSrc === 'string') {
    item = {
      video_src: itemOrSrc,
      title: title || 'Video Title',
      role: role || '',
      aspect: aspect || (itemOrSrc.includes('9:16') || itemOrSrc.includes('freelance') || itemOrSrc.includes('thunglong') ? '9:16' : '16:9')
    };
  } else if (itemOrSrc) {
    item = itemOrSrc;
  }

  const modal = document.getElementById('cinemaModal');
  const modalDialog = document.getElementById('cinemaModalDialog');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalRole = document.getElementById('modalRole');
  const modalVideo = document.getElementById('modalVideoPlayer');
  const modalSource = document.getElementById('modalVideoSource');

  if (!modal || !modalVideo || !modalSource) return;

  const isVertical = item.aspect === '9:16';
  if (modalTitle) modalTitle.textContent = item.title || 'Video';
  if (modalBadge) modalBadge.textContent = isVertical ? 'VIRAL REEL (9:16)' : 'OFFICIAL MV (16:9)';
  if (modalRole) modalRole.textContent = item.role || 'Lead Video Editor • VFX Artist';

  if (modalDialog) {
    if (isVertical) {
      modalDialog.classList.remove('max-w-5xl');
      modalDialog.classList.add('max-w-md');
    } else {
      modalDialog.classList.remove('max-w-md');
      modalDialog.classList.add('max-w-5xl');
    }
  }

  modalSource.src = item.video_src || '';
  modalVideo.classList.remove('hidden');
  modalVideo.load();
  modalVideo.play().catch(() => {
    modalVideo.muted = true;
    modalVideo.play().catch(() => {});
  });

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCinemaModal() {
  pauseAllVideos();
  const modal = document.getElementById('cinemaModal');
  const modalVideo = document.getElementById('modalVideoPlayer');
  const modalSource = document.getElementById('modalVideoSource');

  if (modalVideo) {
    modalVideo.pause();
    if (modalSource) modalSource.removeAttribute('src');
    modalVideo.removeAttribute('src');
    modalVideo.load();
  }
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// VFX Breakdown Modal Handler
let currentBreakdownItem = null;
let currentBreakdownIndex = 0;

function openBreakdownModal(srcOrItem, title) {
  playBeep(850, 0.08);
  pauseAllVideos();

  const modal = document.getElementById('breakdownModal') || document.getElementById('vfxBreakdownModal');
  if (!modal) return;

  const videoPlayer = document.getElementById('breakdownVideoPlayer');
  const videoSource = document.getElementById('breakdownVideoSource');
  const modalTitle = document.getElementById('breakdownModalTitle');

  if (typeof srcOrItem === 'string') {
    if (modalTitle) modalTitle.textContent = title || 'VFX Breakdown';
    if (videoPlayer && videoSource) {
      videoPlayer.classList.remove('hidden');
      videoPlayer.setAttribute('controls', '');
      videoPlayer.setAttribute('playsinline', '');
      videoSource.src = srcOrItem;
      videoPlayer.load();
      videoPlayer.play().catch(() => {
        videoPlayer.muted = true;
        videoPlayer.play().catch(() => {});
      });
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    return;
  }

  const defaultSrc = 'videos/breakdown/cam-bat-den-breakdown.mp4';
  if (modalTitle) modalTitle.textContent = title || 'Cầm — Bắt Đền [VFX Breakdown]';
  if (videoPlayer && videoSource) {
    videoPlayer.classList.remove('hidden');
    videoSource.src = (srcOrItem && srcOrItem.breakdown_src) ? srcOrItem.breakdown_src : defaultSrc;
    videoPlayer.load();
    videoPlayer.play().catch(() => {});
  }
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeBreakdownModal() {
  const modal = document.getElementById('breakdownModal') || document.getElementById('vfxBreakdownModal');
  const videoPlayer = document.getElementById('breakdownVideoPlayer');
  const videoSource = document.getElementById('breakdownVideoSource');

  if (videoPlayer) {
    videoPlayer.pause();
    if (videoSource) videoSource.removeAttribute('src');
    videoPlayer.removeAttribute('src');
    videoPlayer.load();
  }
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function triggerBreakdown(projId, partIdx = 0) {
  openBreakdownModal('videos/breakdown/cam-bat-den-breakdown.mp4', 'VFX Breakdown');
}

// Global Keyboard Handler for Modals (ESC)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCinemaModal();
    closeBreakdownModal();
  }
});

// Auto-pause playing videos when another starts
document.addEventListener('play', (e) => {
  if (e.target && e.target.tagName === 'VIDEO') {
    const current = e.target;
    document.querySelectorAll('video').forEach(v => {
      if (v !== current && !v.paused) {
        try { v.pause(); } catch (err) {}
      }
    });
  }
}, true);

// =============================================================================
// MASTER INITIALIZATION & ANIMATION RAF LOOP
// =============================================================================

function mainLoop(timestamp) {
  renderInkFrame(timestamp);
  updateVelocitySkew();
  updatePointerFollower();
  requestAnimationFrame(mainLoop);
}

document.addEventListener('DOMContentLoaded', () => {
  initCanvasBackground();
  initPointerFollower();
  initStickyWipe();
  initStatementScrub();
  initCountUp();
  initHeadlineSplits();

  // Scroll listener drives sticky scrubbers and accents
  window.addEventListener('scroll', () => {
    isRenderingNeeded = true;
    updateActiveSectionAccent();
    updateCircularBadge();
    updateStickyWipe();
    updateStatementScrub();
  }, { passive: true });

  // Start continuous 60fps rAF loop
  requestAnimationFrame(mainLoop);
});
