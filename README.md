# 📚 Growth Nation – Course Selling Platform  

A **modern, responsive landing page** for **Growth Nation**, designed to sell **all types of courses** (Technology, Business, Design, Personal Development, and more) with a seamless user experience, real-time course discovery, and secure payment integration.  

---

## 🚀 Features  
- 🎥 **Hero Section** – Engaging carousel with course images & videos  
- 🎓 **Course Highlights** – Explore top courses & bundle offers  
- 🔍 **Smart Search** – Real-time course search functionality  
- 💳 **Secure Payments** – Razorpay integration (Live Mode)  
- 📱 **Course Purchase Flow** – Modal with phone/email validation  
- 💬 **Instant Connect** – Telegram & WhatsApp call-to-action  
- ✅ **Payment Status Pages** – Dedicated success & failure pages  
- 🌟 **Testimonials & Benefits** – Showcase why learners trust Growth Nation  
- 📱 **Mobile-First Design** – 100% responsive & modern UI  
- 🦶 **Footer** – Quick links, contact info & social presence  

---

## 🛠️ Tech Stack  
- ⚡ **Framework**: Next.js (App Router)  
- ⚛️ **UI Library**: React + Tailwind CSS  
- 🟦 **Language**: TypeScript  
- 💳 **Payments**: Razorpay (Live Mode)  
- 📧 **Emails**: Resend (Transactional Emails & Confirmations)  

---

## 📦 Project Structure  
```bash
├── app/
│   ├── page.tsx                # Landing page
│   ├── courses/                # Course listing & details
│   ├── api/                    # Serverless functions (payments, emails)
│   └── ...
├── components/
│   ├── custom/                 # Navbar, Footer, Modal, Carousel
│   └── ui/                     # Reusable UI (Button, Card, Badge)
├── data/                       # Course & benefits data
├── lib/                        # API helpers, Razorpay utils
├── public/                     # Images & assets
├── types/                      # TypeScript types
├── utils/                      # Helper functions
├── .env.local                  # Environment variables
├── README.md                   # Documentation
└── ...
```

---

## ⚡ Getting Started  

1. **Clone the repository:**  
```bash
git clone https://github.com/chirag-singh-07/Client-Krishna-growth-nations.git
cd Client-Krishna-growth-nations-main
```

2. **Install dependencies:**  
```bash
npm install
```

3. **Configure environment variables:**  
- Copy `.env.local.example` → `.env.local`  
- Add your Razorpay & Resend API keys  

4. **Run locally:**  
```bash
npm run dev
```

5. **Build for production:**  
```bash
npm run build
npm start
```

---

## 📝 Customization  
- 📚 Add or edit courses in `data/CoursesData.tsx`  
- 🖼️ Update course images in `public/`  
- 🎨 Modify Navbar, Footer, Carousel, etc. in `components/custom/`  
- 💳 Payment & email logic is inside `app/api/`  

---

## 📧 Contact  
- 📩 Email: [contactgrowthnation@gmail.com](mailto:contactgrowthnation@gmail.com)  
- 📲 Telegram: [Growth Nation Channel](https://whatsapp.com/channel/0029VbAvgYaAojYq92wzif3f)  

---

## 🏆 License  
MIT License  

---

✨ Built with ♥️ by the **Growth Nation Team** – Empowering learners worldwide 🌍  
