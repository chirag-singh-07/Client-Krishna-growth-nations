
# Growth Nation Landing Page

A modern, responsive landing page for Growth Nation, featuring course discovery, payment integration, and a beautiful UI built with Next.js, React, and Tailwind CSS.

## 🚀 Features
- Hero carousel with image/video
- Course highlights and bundle offers
- Real-time search bar for courses
- Payment integration (Razorpay)
- Modal dialog for course purchase (with phone validation)
- Telegram/WhatsApp CTA
- Success and failure payment pages
- Testimonials and benefits sections
- Modern, mobile-friendly design
- Footer with quick links and contact

## 🛠️ Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Razorpay (live mode)
- Resend (transactional emails)

## 📦 Project Structure
```
├── app/
│   ├── page.tsx (Landing page)
│   ├── courses/ (Course listing & details)
│   ├── api/ (Serverless functions)
│   └── ...
├── components/
│   ├── custom/ (Navbar, Footer, Modal, Carousel)
│   └── ui/ (Button, Card, Badge)
├── data/ (Course & benefit data)
├── lib/ (Utils)
├── public/ (Images & assets)
├── types/ (TypeScript types)
├── utils/ (Helpers)
├── .env.local (Environment variables)
├── README.md
└── ...
```

## ⚡ Getting Started
1. **Clone the repo:**
	```bash
	git clone https://github.com/chirag-singh-07/Client-Krishna-growth-nations.git
	cd Client-Krishna-growth-nations-main
	```
2. **Install dependencies:**
	```bash
	npm install
	```
3. **Configure environment variables:**
	- Copy `.env.local.example` to `.env.local` and add your keys (leave blank for public deploy).
4. **Run locally:**
	```bash
	npm run dev
	```
5. **Build for production:**
	```bash
	npm run build
	npm start
	```

## 📝 Customization
- Update course data in `data/CoursesData.tsx`
- Change images in `public/`
- Edit UI components in `components/custom/`
- Payment and email logic in `app/api/`

## 📧 Contact
- Email: [contactgrowthnation@gmail.com](mailto:contactgrowthnation@gmail.com)
- Telegram: [Growth Nation Channel](https://whatsapp.com/channel/0029VbAvgYaAojYq92wzif3f)

## 🏆 License
MIT

---
Made with ❤️ by Growth Nation Team
