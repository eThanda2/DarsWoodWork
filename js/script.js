document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for fade-in elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach(el => observer.observe(el));

    // 3. Simple Form Submission
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.submit-button');
            const originalText = btn.textContent;
            
            btn.textContent = document.documentElement.dir === 'rtl' ? 'تم الإرسال!' : 'Message Sent!';
            btn.style.background = '#4CAF50';
            btn.style.color = '#fff';
            
            form.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.style.color = '';
            }, 3000);
        });
    }

    // 4. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(21, 72, 36, 0.98)'; // Deep green to match navbar and contrast white text
                navLinks.style.padding = '20px';
                navLinks.style.textAlign = 'center';
            }
        });
    }

    // 5. Language Toggle (i18n)
    const translations = {
        en: {
            top_follow: "Follow The Dara Woodshop:",
            nav_home: "Home", nav_about: "About", nav_gallery: "Gallery", nav_products: "Products", nav_contact: "Contact",
            hero_title: "The Dara Woodshop",
            hero_subtitle: "Custom Gaming TV Centers, Desks, and Woodworking by a passionate female entrepreneur based in The Woodlands, Texas.",
            hero_cta: "View Our Work",
            about_title: "Meet Dara",
            about_p1: "Welcome to The Dara Woodshop, proudly based in The Woodlands, Texas. As a female entrepreneur in the woodworking industry, I specialize in building custom gaming TV centers, transforming old tables into stunning modern desks, and crafting bespoke furniture using pallet wood and plywood.",
            about_p2: "From the initial design to the final finishing touches, I pour my passion into creating highly functional, beautifully crafted pieces that elevate your space.",
            gallery_title: "Recent Builds on YouTube",
            gal_desk_title: "Custom Desk", gal_desk_desc: "Solid Wood Build",
            gal_tv_title: "Game TV Center", gal_tv_desc: "Custom Wood Setup",
            gal_cab_title: "Oak Wooden Bench", gal_cab_desc: "Solid Oak",
            gal_cof_title: "Coffee Table", gal_cof_desc: "Maple & Resin",
            products_title: "Featured Products", products_subtitle: "Handcrafted pieces available for order.",
            prod_chair: "Classic Farmhouse Table", prod_avail: "Available on Order",
            prod_table: "Live Edge Dining Table", prod_custom: "Custom Sizing",
            prod_shelf: "Geometric Bookshelf", prod_finish: "Walnut Finish",
            contact_title: "Get in Touch", contact_subtitle: "Let's discuss your next custom project.",
            form_type: "Project Type...", form_type_desk: "Custom Desk", form_type_tv: "Game TV Center", form_type_cab: "Cabinet / Storage", form_type_other: "Other",
            form_budget: "Estimated Budget...",
            form_btn: "Send Message",
            footer_copy: "© 2026 The Dara Woodshop. All rights reserved."
        },
        ar: {
            top_follow: "تابعنا على:",
            nav_home: "الرئيسية", nav_about: "من نحن", nav_gallery: "معرض الأعمال", nav_products: "المنتجات", nav_contact: "اتصل بنا",
            hero_title: "منجرة دارا",
            hero_subtitle: "طاولات جيمنج ومكاتب خشبية وأعمال نجارة مخصصة بأنامل رائدة أعمال شغوفة في وودلاندز، تكساس.",
            hero_cta: "شاهد أعمالنا",
            about_title: "تعرف على دارا",
            about_p1: "مرحباً بكم في منجرة دارا، بفخر من وودلاندز، تكساس. كرائدة أعمال في مجال النجارة، أتخصص في بناء طاولات تلفزيون الألعاب المخصصة، وتحويل الطاولات القديمة إلى مكاتب عصرية مذهلة، وصناعة أثاث مخصص باستخدام خشب البليت والبلود.",
            about_p2: "من التصميم الأولي إلى اللمسات النهائية، أصب شغفي في ابتكار قطع عملية للغاية ومصنوعة بجمال لترتقي بمساحتك.",
            gallery_title: "أحدث الأعمال على يوتيوب",
            gal_desk_title: "مكتب مخصص", gal_desk_desc: "بناء من الخشب الصلب",
            gal_tv_title: "مركز تلفزيون ألعاب", gal_tv_desc: "تصميم خشبي مخصص",
            gal_cab_title: "مقعد خشب البلوط", gal_cab_desc: "خشب بلوط صلب",
            gal_cof_title: "طاولة قهوة", gal_cof_desc: "خشب القيقب والريزن",
            products_title: "المنتجات المميزة", products_subtitle: "قطع مصنوعة يدوياً متاحة للطلب.",
            prod_chair: "طاولة طعام كلاسيكية", prod_avail: "متاح للطلب",
            prod_table: "طاولة طعام بحواف طبيعية", prod_custom: "مقاسات مخصصة",
            prod_shelf: "رف كتب هندسي", prod_finish: "تشطيب خشب الجوز",
            contact_title: "تواصل معنا", contact_subtitle: "دعنا نناقش مشروعك المخصص القادم.",
            form_type: "نوع المشروع...", form_type_desk: "مكتب مخصص", form_type_tv: "مركز تلفزيون ألعاب", form_type_cab: "خزانة / مساحة تخزين", form_type_other: "أخرى",
            form_budget: "الميزانية التقديرية...",
            form_btn: "إرسال الرسالة",
            footer_copy: "© 2026 منجرة دارا. جميع الحقوق محفوظة."
        }
    };

    const placeholders = {
        en: { form_name: "Your Name", form_email: "Your Email", form_msg: "Tell us about your project... dimensions, style, etc." },
        ar: { form_name: "الاسم", form_email: "البريد الإلكتروني", form_msg: "أخبرنا عن مشروعك... الأبعاد، التصميم، إلخ." }
    };

    const langEnBtn = document.getElementById('lang-en');
    const langArBtn = document.getElementById('lang-ar');
    let currentLang = 'en';

    function setLanguage(lang) {
        if (currentLang === lang) return;
        currentLang = lang;
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
        
        if (currentLang === 'en') {
            langEnBtn.classList.add('active');
            langArBtn.classList.remove('active');
        } else {
            langArBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if(placeholders[currentLang][key]) {
                el.placeholder = placeholders[currentLang][key];
            }
        });
    }

    if (langEnBtn && langArBtn) {
        langEnBtn.addEventListener('click', () => setLanguage('en'));
        langArBtn.addEventListener('click', () => setLanguage('ar'));
    }

    // 6. Video Modal Logic
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('youtubePlayer');
    const closeBtn = document.querySelector('.close-modal');
    const videoTriggers = document.querySelectorAll('.video-trigger');

    videoTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const videoId = trigger.getAttribute('data-video-id');
            if(videoId) {
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                modal.classList.add('show');
            }
        });
    });

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            iframe.src = '';
        });
    }

    if(modal) {
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.classList.remove('show');
                iframe.src = '';
            }
        });
    }
});
