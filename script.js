// --- Xử lý Đa Ngôn Ngữ ---
const translations = {
    "vi": {
        "slogan": "Thấu vạn trang sách — Giữ vạn trải nghiệm",
        "hero_desc": "Trình đọc sách PDF tốc độ cao tích hợp giọng đọc TTS đa ngôn ngữ, nhạc nền tập trung (BGM), Khu Rừng Tri Thức 2.5D và thuật toán ôn tập thư giãn Mindful FSRS.",
        "download": "Tải trên Google Play",
        
        "box1_title": "Trình đọc PDF & Sách nói thông minh",
        "box1_desc": "Trải nghiệm đọc và nghe sách mượt mà với công nghệ dựng hình C++ PDFium tốc độ cao, bảo vệ thị giác và tối ưu hóa sự tập trung.",
        "icon_crop": "Tự động cắt lề trắng (Auto-Crop), tô màu ghi chú và 3 chủ đề màu dịu mắt (Classic, Sepia, Mint).",
        "icon_tts": "Đọc sách nói TTS đa ngôn ngữ tự động kèm Karaoke Highlight và nhạc nền Ambient (BGM).",
        
        "box2_title": "Khu Rừng Tri Thức & Cánh Đồng 2.5D",
        "box2_desc": "Chuyển hóa kiến thức trang sách và trải nghiệm thực tế thành hệ sinh thái cây cổ thụ và cánh đồng lúa sống động.",
        "icon_forest": "Nuôi dưỡng 9 loài Cây Sách qua 10 lăng kính câu hỏi thu hoạch và gieo Khóm Lúa Kinh Nghiệm.",
        "icon_fsrs": "Ghi nhớ tự nhiên không áp lực với thuật toán Mindful FSRS: Tưới nước chủ động & Tắm sương TTS.",
        
        "free_title": "Kiến tạo khu rừng tri thức của riêng bạn",
        "free_desc": "Biến mỗi cuốn sách đã đọc và mỗi trải nghiệm sống thành trí tuệ bền vững theo năm tháng.",
        "download_cta": "Tải trên Google Play",
        
        "policy": "Chính sách bảo mật",
        "terms": "Điều khoản sử dụng",
        "licenses": "Mã nguồn mở"
    },
    "en": {
        "slogan": "Comprehend Thousands of Pages — Keep Every Experience",
        "hero_desc": "A high-speed PDF reader integrated with multilingual TTS, focus background music (BGM), a 2.5D Knowledge Forest, and the Mindful FSRS algorithm.",
        "download": "Get it on Google Play",
        
        "box1_title": "Smart PDF Reader & Audiobook Player",
        "box1_desc": "Enjoy a seamless reading and listening experience powered by a blazing-fast C++ PDFium engine, eye-care themes, and deep focus tools.",
        "icon_crop": "Smart white-margin Auto-Crop, text highlighting, annotations, and 3 eye-friendly themes (Classic, Sepia, Mint).",
        "icon_tts": "Automatic multilingual Text-to-Speech with Karaoke Highlighting and soothing Ambient BGM.",
        
        "box2_title": "2.5D Knowledge Forest & Experience Paddy",
        "box2_desc": "Transform book insights and real-life lessons into a living ecosystem of ancient trees and golden rice fields.",
        "icon_forest": "Nurture 9 Book Tree species across 10 reflection lenses and plant Experience Rice clumps.",
        "icon_fsrs": "Stress-free long-term retention with Mindful FSRS: Active Watering & Passive TTS Morning Dew.",
        
        "free_title": "Cultivate your own knowledge forest today",
        "free_desc": "Turn every book you read and every life experience into lasting wisdom.",
        "download_cta": "Get it on Google Play",
        
        "policy": "Privacy Policy",
        "terms": "Terms of Use",
        "licenses": "Open Source Licenses"
    }
};

let currentLang = "vi";

function toggleLanguage() {
    currentLang = currentLang === "vi" ? "en" : "vi";
    
    // Đổi Text nội dung theo thuộc tính data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
    
    // Cập nhật liên kết tài liệu ở Footer theo ngôn ngữ
    const policyLink = document.getElementById("link-policy");
    const termsLink = document.getElementById("link-terms");
    const licensesLink = document.getElementById("link-licenses");
    
    if (policyLink) {
        policyLink.href = currentLang === "vi" ? "policy_vi.html" : "policy_en.html";
    }
    if (termsLink) {
        termsLink.href = currentLang === "vi" ? "terms_vi.html" : "terms_en.html";
    }
    if (licensesLink) {
        licensesLink.href = currentLang === "vi" ? "licenses_vi.html" : "licenses_en.html";
    }
    
    // Đổi nhãn nút Toggle ngôn ngữ
    const langToggleBtn = document.getElementById("langToggle");
    if (langToggleBtn) {
        langToggleBtn.innerText = currentLang === "vi" ? "VI / EN" : "EN / VI";
    }
}
