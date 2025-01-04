export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'vi',
    fallbackLocale: 'vi',
    messages: {
        en: {
            welcome: "Welcome to my portfolio",
            about: {
                title: "About Me",
                description: "I am a Full-stack Developer & UI/UX Designer",
                greeting: "Hi, I'm [Your Name]",
                introduction: "A passionate developer with expertise in modern web technologies. I love creating beautiful and functional digital experiences that solve real-world problems.",
                downloadCV: "Download CV",
                contactMe: "Contact Me",
                journey: "My Journey",
                skillsAndTech: "Skills & Technologies",
                timeline: {
                    seniorDev: {
                        title: "Senior Developer",
                        company: "Tech Company",
                        description: "Led development team and implemented modern web solutions."
                    },
                    fullstackDev: {
                        title: "Full Stack Developer",
                        company: "Startup",
                        description: "Developed full-stack applications using Vue.js and Node.js."
                    }
                },
                skills: {
                    vuejs: {
                        name: "Vue.js",
                        description: "Frontend development with Vue.js"
                    },
                    nodejs: {
                        name: "Node.js",
                        description: "Backend development with Node.js"
                    }
                }
            },
            projects: {
                title: "My Projects",
                description: "A collection of my work and personal projects",
                categories: {
                    all: "All",
                    web: "Web",
                    mobile: "Mobile",
                    design: "Design"
                },
                noResults: "No projects found in this category.",
                featured: "Featured Projects",
                learnMore: "Learn More",
                viewProject: "View Project",
                items: {
                    ecommerce: {
                        title: "E-commerce Platform",
                        description: "A full-featured e-commerce platform built with Nuxt 3 and Tailwind CSS."
                    },
                    mobileApp: {
                        title: "Mobile App Design",
                        description: "UI/UX design for a fitness tracking mobile application."
                    }
                }
            },
            contact: {
                title: "Get In Touch",
                description: "Have a question or want to work together?",
                info: {
                    title: "Contact Information",
                    email: "Email",
                    location: {
                        label: "Location",
                        value: "Ho Chi Minh City, Vietnam"
                    }
                },
                form: {
                    name: {
                        label: "Name",
                        placeholder: "Your name",
                        required: "Name is required"
                    },
                    email: {
                        label: "Email",
                        placeholder: "your@email.com",
                        required: "Email is required",
                        invalid: "Please enter a valid email"
                    },
                    message: {
                        label: "Message",
                        placeholder: "Your message",
                        required: "Message is required"
                    },
                    sending: "Sending...",
                    send: "Send Message"
                },
                success: {
                    title: "Message Sent!",
                    message: "Thank you for your message. I'll get back to you soon!",
                    close: "Close"
                },
                followMe: "Follow Me"
            },
            language: {
                en: "English",
                vi: "Vietnamese"
            },
            nav: {
                home: "Home",
                projects: "Projects",
                about: "About",
                contact: "Contact"
            },
            theme: {
                light: "Switch to light mode",
                dark: "Switch to dark mode"
            },
            hero: {
                title: "Creative Developer & Designer",
                subtitle: "I create beautiful and functional digital experiences",
                viewWork: "View My Work",
                contactMe: "Contact Me"
            },
            footer: {
                contact: "Contact",
                quickLinks: "Quick Links",
                followMe: "Follow Me",
                allRightsReserved: "All rights reserved."
            },
            skills: {
                mobileDevelopment: "Mobile Development",
                reactNativeDescription: "Building cross-platform mobile applications with React Native",
                flutterDescription: "Creating beautiful native apps with Flutter",
                kotlinDescription: "Native Android development with Kotlin",
                webDevelopment: "Web Development",
                laravelDescription: "Building robust backend systems with Laravel",
                nodejsDescription: "Server-side JavaScript with Node.js",
                vpsDescription: "Server management and deployment",
                restApisDescription: "RESTful API design and implementation",
                databaseAndVersionControl: "Database & Version Control",
                mysqlDescription: "Database design and optimization with MySQL",
                gitDescription: "Version control and collaboration with Git",
                native: "Native",
                readWrite: "Read & Write",
                n3Level: "N3 Level",
                mySkills: "My Skills",
                languages: "Languages",
                toolsAndSoftware: "Tools & Software",
                softSkills: {
                    title: "Soft Skills",
                    selfLearning: "Self Learning",
                    communication: "Communication",
                    teamwork: "Teamwork",
                    research: "Research",
                    aiUtilization: "AI Utilization",
                    problemSolving: "Problem Solving",
                    agileMethodology: "Agile Methodology"
                }
            }
        },
        vi: {
            welcome: "Chào mừng đến với portfolio của tôi",
            about: {
                title: "Về Tôi",
                description: "Tôi là một Lập trình viên Full-stack & Nhà thiết kế UI/UX",
                greeting: "Xin chào, tôi là [Tên của bạn]",
                introduction: "Một lập trình viên đam mê với chuyên môn về công nghệ web hiện đại. Tôi yêu thích việc tạo ra những trải nghiệm số đẹp mắt và chức năng để giải quyết các vấn đề thực tế.",
                downloadCV: "Tải CV",
                contactMe: "Liên hệ với tôi",
                journey: "Hành trình của tôi",
                skillsAndTech: "Kỹ năng & Công nghệ",
                timeline: {
                    seniorDev: {
                        title: "Lập trình viên cao cấp",
                        company: "Công ty công nghệ",
                        description: "Dẫn dắt nhóm phát triển và triển khai các giải pháp web hiện đại."
                    },
                    fullstackDev: {
                        title: "Lập trình viên Full Stack",
                        company: "Startup",
                        description: "Phát triển ứng dụng full-stack sử dụng Vue.js và Node.js."
                    }
                },
                skills: {
                    vuejs: {
                        name: "Vue.js",
                        description: "Phát triển frontend với Vue.js"
                    },
                    nodejs: {
                        name: "Node.js",
                        description: "Phát triển backend với Node.js"
                    }
                }
            },
            projects: {
                title: "Dự án của tôi",
                description: "Bộ sưu tập các dự án cá nhân và công việc của tôi",
                categories: {
                    all: "Tất cả",
                    web: "Web",
                    mobile: "Di động",
                    design: "Thiết kế"
                },
                noResults: "Không tìm thấy dự án nào trong danh mục này.",
                featured: "Dự án nổi bật",
                learnMore: "Tìm hiểu thêm",
                viewProject: "Xem dự án",
                items: {
                    ecommerce: {
                        title: "Nền tảng thương mại điện tử",
                        description: "Một nền tảng thương mại điện tử đầy đủ tính năng được xây dựng với Nuxt 3 và Tailwind CSS."
                    },
                    mobileApp: {
                        title: "Thiết kế ứng dụng di động",
                        description: "Thiết kế UI/UX cho ứng dụng theo dõi sức khỏe trên di động."
                    }
                }
            },
            contact: {
                title: "Liên hệ với tôi",
                description: "Bạn có câu hỏi hoặc muốn làm việc cùng nhau?",
                info: {
                    title: "Thông tin liên hệ",
                    email: "Email",
                    location: {
                        label: "Địa điểm",
                        value: "Thành phố Hồ Chí Minh, Việt Nam"
                    }
                },
                form: {
                    name: {
                        label: "Họ và tên",
                        placeholder: "Tên của bạn",
                        required: "Vui lòng nhập họ tên"
                    },
                    email: {
                        label: "Email",
                        placeholder: "email@example.com",
                        required: "Vui lòng nhập email",
                        invalid: "Vui lòng nhập email hợp lệ"
                    },
                    message: {
                        label: "Tin nhắn",
                        placeholder: "Tin nhắn của bạn",
                        required: "Vui lòng nhập tin nhắn"
                    },
                    sending: "Đang gửi...",
                    send: "Gửi tin nhắn"
                },
                success: {
                    title: "Đã gửi tin nhắn!",
                    message: "Cảm ơn bạn đã gửi tin nhắn. Tôi sẽ phản hồi sớm nhất có thể!",
                    close: "Đóng"
                },
                followMe: "Theo dõi tôi"
            },
            language: {
                en: "Tiếng Anh",
                vi: "Tiếng Việt"
            },
            nav: {
                home: "Trang chủ",
                projects: "Dự án",
                about: "Về tôi",
                contact: "Liên hệ"
            },
            theme: {
                light: "Chuyển sang chế độ sáng",
                dark: "Chuyển sang chế độ tối"
            },
            hero: {
                title: "Lập trình viên & Nhà thiết kế Sáng tạo",
                subtitle: "Tôi tạo ra những trải nghiệm số đẹp mắt và chức năng",
                viewWork: "Xem dự án của tôi",
                contactMe: "Liên hệ với tôi"
            },
            footer: {
                contact: "Liên hệ",
                quickLinks: "Liên kết nhanh",
                followMe: "Theo dõi tôi",
                allRightsReserved: "Đã đăng ký bản quyền."
            },
            skills: {
                mobileDevelopment: "Phát triển Ứng dụng Di động",
                reactNativeDescription: "Xây dựng ứng dụng di động đa nền tảng với React Native",
                flutterDescription: "Tạo ứng dụng native đẹp mắt với Flutter",
                kotlinDescription: "Phát triển ứng dụng Android native với Kotlin",
                webDevelopment: "Phát triển Web",
                laravelDescription: "Xây dựng hệ thống backend mạnh mẽ với Laravel",
                nodejsDescription: "JavaScript phía máy chủ với Node.js",
                vpsDescription: "Quản lý và triển khai máy chủ",
                restApisDescription: "Thiết kế và triển khai RESTful API",
                databaseAndVersionControl: "Cơ sở dữ liệu & Quản lý phiên bản",
                mysqlDescription: "Thiết kế và tối ưu hóa cơ sở dữ liệu với MySQL",
                gitDescription: "Quản lý phiên bản và cộng tác với Git",
                native: "Bản địa",
                readWrite: "Đọc & Viết",
                n3Level: "Trình độ N3",
                mySkills: "Kỹ năng của tôi",
                languages: "Ngôn ngữ",
                toolsAndSoftware: "Công cụ & Phần mềm",
                softSkills: {
                    title: "Kỹ năng mềm",
                    selfLearning: "Tự học",
                    communication: "Giao tiếp",
                    teamwork: "Làm việc nhóm",
                    research: "Nghiên cứu",
                    aiUtilization: "Sử dụng AI",
                    problemSolving: "Giải quyết vấn đề",
                    agileMethodology: "Phương pháp Agile"
                }
            }
        }
    }
})) 