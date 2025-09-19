"use client"; // if using Next.js 13+ app directory

import { useEffect } from "react";

export default function MasterclassPage() {
  useEffect(() => {
    // Set current year in footer
    const yearElem = document.getElementById("year");
    if (yearElem) {
      yearElem.textContent = new Date().getFullYear().toString();
    }

    // Smooth scroll
    document.querySelectorAll("[data-scroll]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const scrollSelector = btn.getAttribute("data-scroll");
        if (scrollSelector) {
          const target = document.querySelector(scrollSelector);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Urgency animation
    (function animateBar() {
      const bar = document.getElementById("fillBar");
      const spots = document.getElementById("spotsLeft");
      let percent = 62;
      let left = 38;
      setInterval(() => {
        percent = Math.min(95, percent + Math.random() * 1.2);
        left = Math.max(5, left - Math.floor(Math.random() * 2));
        if (bar) {
          bar.style.width = percent.toFixed(1) + "%";
        }
        if (spots) {
          spots.textContent = left + " spots left";
        }
      }, 3500);
    })();
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {  
    e.preventDefault();
    const successCard = document.getElementById("successCard");
    const joinLink = document.getElementById("joinLink");
    const openLink = document.getElementById("openLink");
    if (successCard) {
      successCard.classList.remove("hidden");
    }
    const link = "https://example.com/join"; // sample join link
    if (joinLink) {
      joinLink.textContent = link;
    }
    if (openLink) {
      (openLink as HTMLAnchorElement).href = link;
    }
  };

  return (
    <div className="antialiased" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", background: "#0b1220", color: "#e6eef7" }}>
  <div id="stickyCTA" className="fixed bottom-0 inset-x-0 z-40 bg-[#0c1324cc] backdrop-blur supports-backdrop-blur:backdrop-blur-md border-t border-white/10 safe-pad">
    <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row items-center gap-3">
      <p className="text-sm sm:text-base text-slate-200 text-center sm:text-left">
        Ready to take control of your trading journey?
        <span className="text-teal-300 font-semibold">Join the Free 3-Hour Masterclass now!</span>
      </p>
      <div className="flex-1"></div>
      <button data-scroll="#register" className="btn-primary rounded-xl px-5 py-3 font-semibold transition will-change-transform">
        Yes, Reserve My Free Spot
      </button>
    </div>
  </div>


  <header className="relative overflow-hidden">
    <div className="hero-glow"></div>
    <div className="mx-auto max-w-6xl px-4 relative z-10">
      <nav className="py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-teal-300/90 to-sky-400/90 text-[#0b1220] font-extrabold shadow-lg shadow-sky-500/20 border border-white/30">
            BB
          </div>
          <div className="leading-tight">
            <p className="font-bold tracking-tight">Brilliant Bulls</p>
            <p className="text-xs text-slate-400">with Akshaysinh Dodiya</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span className="badge px-3 py-1 rounded-full text-sm">Free • Live • 3 Hours</span>
          <button data-scroll="#register" className="btn-accent rounded-xl px-4 py-2 font-semibold transition">Register Now</button>
        </div>
      </nav>


      <section className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 badge px-3 py-1 rounded-full text-sm mb-4">
              <span>🔥 Live Masterclass</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Discover How To Trade the Stock Market Like a Pro —
              <span className="text-teal-300">Even If You’re a Beginner</span>
            </h1>
            <p className="mt-5 text-slate-300 text-lg">
              Free 3-Hour LIVE Masterclass reveals proven strategies for intraday & swing trading.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="check w-6 h-6 rounded-md grid place-items-center text-xs font-bold mt-0.5">✓</span>
                <p className="text-slate-300">Price action, candlestick psychology, and practical strategies — explained simply.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="check w-6 h-6 rounded-md grid place-items-center text-xs font-bold mt-0.5">✓</span>
                <p className="text-slate-300">Trade with confidence and discipline — not luck.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button data-scroll="#register" className="btn-primary rounded-xl px-6 py-4 font-semibold text-base transition">
                Register Now (Free)
              </button>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Limited seats — don’t miss out
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="chip px-3 py-1 rounded-full text-xs">Live on Zoom/Google Meet</span>
              <span className="chip px-3 py-1 rounded-full text-xs">For Beginners & Intermediates</span>
              <span className="chip px-3 py-1 rounded-full text-xs">No Jargon • Actionable</span>
            </div>
          </div>


          <div className="relative">
            <div className="card rounded-2xl p-6 tilt">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Market Snapshot</p>
                  <p className="text-2xl font-bold mt-1 text-teal-300">NIFTY • S&P 500</p>
                </div>
                <span className="badge px-3 py-1 rounded-full text-xs">Demo</span>
              </div>
              <div className="mt-6">
                <svg viewBox="0 0 600 240" className="w-full h-56 rounded-xl bg-[#0b152a] border border-white/10">

                  <g opacity="0.25" stroke="#64748B">
                    <line x1="0" y1="40" x2="600" y2="40" />
                    <line x1="0" y1="80" x2="600" y2="80" />
                    <line x1="0" y1="120" x2="600" y2="120" />
                    <line x1="0" y1="160" x2="600" y2="160" />
                    <line x1="0" y1="200" x2="600" y2="200" />
                  </g>

                  <g>

                    <rect x="40" y="150" width="10" height="40" fill="#34d399"/>
                    <rect x="70" y="120" width="10" height="70" fill="#34d399"/>
                    <rect x="110" y="90" width="10" height="100" fill="#34d399"/>
                    <rect x="160" y="110" width="10" height="80" fill="#34d399"/>

                    <rect x="200" y="130" width="10" height="60" fill="#fb7185"/>
                    <rect x="230" y="140" width="10" height="50" fill="#fb7185"/>
                    <rect x="260" y="115" width="10" height="75" fill="#fb7185"/>

                    <rect x="300" y="100" width="10" height="90" fill="#34d399"/>
                    <rect x="330" y="80" width="10" height="110" fill="#34d399"/>
                    <rect x="360" y="95" width="10" height="95" fill="#34d399"/>
        
                    <rect x="400" y="120" width="10" height="70" fill="#fb7185"/>
                    <rect x="430" y="125" width="10" height="65" fill="#34d399"/>
                    <rect x="460" y="122" width="10" height="68" fill="#fb7185"/>
                    <rect x="490" y="118" width="10" height="72" fill="#34d399"/>
                  </g>

                  <polyline fill="none" stroke="#60a5fa" stroke-width="3" points="20,170 80,140 140,110 200,130 260,120 320,105 380,115 440,125 500,120 560,128" />
                </svg>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                  <p className="text-slate-400 text-xs">Volatility</p>
                  <p className="text-lg font-semibold">Moderate</p>
                </div>
                <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                  <p className="text-slate-400 text-xs">Trend</p>
                  <p className="text-lg font-semibold text-emerald-300">Uptrend</p>
                </div>
                <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                  <p className="text-slate-400 text-xs">Sessions</p>
                  <p className="text-lg font-semibold">Asia • US</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-sky-500/20 to-teal-400/20 border border-white/10 rounded-2xl p-4 backdrop-blur">
              <p className="text-xs text-slate-300">Next Session</p>
              <p id="nextSession" className="font-semibold">[Insert Date] • [Insert Time]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>

  <main className="relative z-10">

    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="card rounded-2xl p-6 md:p-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="rounded-xl p-4 bg-white/5 border border-white/10">
            <p className="text-slate-400 text-sm">Date</p>
            <p id="dateField" className="font-semibold mt-1">[Insert Date]</p>
          </div>
          <div className="rounded-xl p-4 bg-white/5 border border-white/10">
            <p className="text-slate-400 text-sm">Time & Timezone</p>
            <p id="timeField" className="font-semibold mt-1">[Insert Time & Timezone]</p>
          </div>
          <div className="rounded-xl p-4 bg-white/5 border border-white/10">
            <p className="text-slate-400 text-sm">Duration</p>
            <p className="font-semibold mt-1">3 Hours</p>
          </div>
          <div className="rounded-xl p-4 bg-white/5 border border-white/10">
            <p className="text-slate-400 text-sm">Location</p>
            <p className="font-semibold mt-1">Online (Zoom/Google Meet)</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <span className="inline-flex items-center gap-2 text-amber-300/90">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3.75m0 3.75h.007v.008H12V16.5zM19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"/>
            </svg>
            Limited Seats Available — Reserve Your Spot Today!
          </span>
          <div className="flex-1"></div>
          <button data-scroll="#register" className="btn-accent rounded-xl px-6 py-3 font-semibold transition">
            Register Now (Free)
          </button>
        </div>
      </div>
    </section>


    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">What You’ll Learn</h2>
          <p className="text-slate-300 mt-3">Simple, practical, and actionable. No fluff — just clarity.</p>
          <button data-scroll="#register" className="mt-5 btn-primary rounded-xl px-5 py-3 font-semibold">Save My Seat Now!</button>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <div className="card rounded-2xl p-5">
            <div className="w-10 h-10 rounded-lg bg-emerald-400/15 border border-emerald-300/25 grid place-items-center text-emerald-300 font-bold">PA</div>
            <h3 className="mt-4 font-semibold text-lg">Price Action Secrets</h3>
            <p className="text-slate-300 mt-1">Read market trends without tips or news. Build true market sense.</p>
          </div>
          <div className="card rounded-2xl p-5">
            <div className="w-10 h-10 rounded-lg bg-sky-400/15 border border-sky-300/25 grid place-items-center text-sky-300 font-bold">IPO</div>
            <h3 className="mt-4 font-semibold text-lg">IPO Opportunities</h3>
            <p className="text-slate-300 mt-1">Analyze IPOs and decide whether to apply or avoid — with logic.</p>
          </div>
          <div className="card rounded-2xl p-5">
            <div className="w-10 h-10 rounded-lg bg-amber-400/15 border border-amber-300/25 grid place-items-center text-amber-300 font-bold">TM</div>
            <h3 className="mt-4 font-semibold text-lg">Trading in Any Market</h3>
            <p className="text-slate-300 mt-1">Uptrend, downtrend, or sideways — know what to do and when.</p>
          </div>
          <div className="card rounded-2xl p-5">
            <div className="w-10 h-10 rounded-lg bg-rose-400/15 border border-rose-300/25 grid place-items-center text-rose-300 font-bold">ID</div>
            <h3 className="mt-4 font-semibold text-lg">Intraday Strategy</h3>
            <p className="text-slate-300 mt-1">Step-by-step approach with clear entry and exit rules.</p>
          </div>
          <div className="card rounded-2xl p-5 sm:col-span-2">
            <div className="w-10 h-10 rounded-lg bg-teal-400/15 border border-teal-300/25 grid place-items-center text-teal-300 font-bold">SW</div>
            <h3 className="mt-4 font-semibold text-lg">Swing Trading Blueprint</h3>
            <p className="text-slate-300 mt-1">Catch short-term moves and grow your portfolio with structure.</p>
          </div>
        </div>
      </div>
    </section>


    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="card rounded-2xl p-6 md:p-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-300/30 to-sky-400/30 border border-white/20 grid place-items-center text-3xl">
              🧑‍🏫
            </div>
            <h3 className="mt-4 text-xl font-bold">About the Mentor</h3>
            <p className="text-slate-300 mt-2">Akshaysinh Dodiya</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="chip px-3 py-1 rounded-full text-xs">10+ Years Experience</span>
              <span className="chip px-3 py-1 rounded-full text-xs">500+ Traders Coached</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-300">
              Hi, I’m <span className="font-semibold text-teal-300">Akshaysinh Dodiya</span> — a stock market coach with 10 years of trading & teaching experience. I’ve helped 500+ traders & investors move from losses to consistent profits. Known for simple, no-jargon teaching that even complete beginners understand.
            </p>
            <p className="text-slate-300 mt-3">
              My mission: To help retail traders trade with logic, discipline, and confidence.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="italic text-slate-200">“When I started trading, I thought I’d get rich quickly… but I ended up losing money because no one taught me the basics or real strategies. That’s why I decided to help others avoid the same mistakes!”</p>
            </div>
            <p className="text-slate-300 mt-4">If you’re tired of confusion and losses, this session is for you.</p>
          </div>
        </div>
      </div>
    </section>


    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card rounded-2xl p-6">
          <div className="inline-flex items-center gap-2 badge px-3 py-1 rounded-full text-sm">
            🎁 Live Attendance Bonus
          </div>
          <h3 className="text-xl font-bold mt-4">Exclusive Bonuses When You Attend LIVE</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="check w-6 h-6 rounded-md grid place-items-center text-xs font-bold mt-0.5">✓</span>
              <span className="text-slate-300">Free E-Books</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="check w-6 h-6 rounded-md grid place-items-center text-xs font-bold mt-0.5">✓</span>
              <span className="text-slate-300">Trading Journal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="check w-6 h-6 rounded-md grid place-items-center text-xs font-bold mt-0.5">✓</span>
              <span className="text-slate-300">Bonus Skill-based Courses</span>
            </li>
          </ul>
          <button data-scroll="#register" className="mt-6 btn-primary rounded-xl px-5 py-3 font-semibold">Claim My Free Seat</button>
        </div>

        <div className="card rounded-2xl p-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm" style={{ background: "rgba(245,158,11,.12)", color: "#fbbf24", border: "1px solid rgba(245,158,11,.25)" }}>
            🚨 Urgency
          </div>
          <h3 className="text-xl font-bold mt-4">Seats Are Limited & Filling Fast</h3>
          <p className="text-slate-300 mt-2">Don’t miss your chance to attend this 3-hour transformational session for FREE.</p>
          <div className="mt-5 flex items-center gap-3">
            <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/10">
              <div id="fillBar" className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #fb7185, #f59e0b, #5eead4)", width: "62%" }}></div>
            </div>
            <span id="spotsLeft" className="text-slate-300 text-sm whitespace-nowrap">38 spots left</span>
          </div>
          <button data-scroll="#register" className="mt-6 btn-accent rounded-xl px-5 py-3 font-semibold">Register Now Before It’s Gone!</button>
        </div>
      </div>
    </section>


    <section className="mx-auto max-w-6xl px-4 py-12">
      <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">What Students Say</h3>
      <p className="text-slate-300 mt-2">Real results from real traders.</p>


      <div className="mt-6 grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-1">
          <div className="rounded-2xl p-5 border border-dashed border-white/20 bg-white/5 h-full flex flex-col">
            <p className="text-slate-300 font-semibold">Add Screenshot from Google Reviews</p>
            <p className="text-slate-400 text-sm mt-2">Tip: In Canva, replace this box with your Brilliant Bulls Google reviews screenshot.</p>
            <div className="mt-4 flex-1 grid place-items-center">
              <div className="w-full aspect-video rounded-xl bg-[#0b152a] border border-white/10 grid place-items-center text-slate-500">
                Screenshot Placeholder
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          <div className="card rounded-2xl p-5">
            <div className="flex items-center gap-2 text-amber-300">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className="mt-3 text-slate-200">“I finally understood candlesticks in simple words. I made my first profitable swing trade after this class!”</p>
            <p className="mt-3 text-slate-400 text-sm">– Student Name</p>
          </div>
          <div className="card rounded-2xl p-5">
            <div className="flex items-center gap-2 text-amber-300">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className="mt-3 text-slate-200">“Earlier I used to gamble in trading, now I follow rules and control emotions. Thank you sir!”</p>
            <p className="mt-3 text-slate-400 text-sm">– Student Name</p>
          </div>
        </div>
      </div>
    </section>

    <div className="divider mx-auto max-w-6xl"></div>

    <section id="register" className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Reserve Your Free Seat</h3>
          <p className="text-slate-300 mt-2">Enter your details and lock your spot. We’ll send the join link instantly.</p>

          <div className="mt-4 rounded-xl p-3 border border-white/10 bg-white/5 text-slate-300 text-sm">
            Demo notice: This is a sample registration experience. It won’t send real emails in this environment.
          </div>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-2 text-slate-300"><span className="check w-5 h-5 rounded grid place-items-center text-[10px]">✓</span> 3-Hour Live Class</li>
            <li className="flex items-center gap-2 text-slate-300"><span className="check w-5 h-5 rounded grid place-items-center text-[10px]">✓</span> Recording Access (Limited)</li>
            <li className="flex items-center gap-2 text-slate-300"><span className="check w-5 h-5 rounded grid place-items-center text-[10px]">✓</span> Bonuses Included</li>
            <li className="flex items-center gap-2 text-slate-300"><span className="check w-5 h-5 rounded grid place-items-center text-[10px]">✓</span> Q&A Session</li>
          </ul>
        </div>

        <div className="card rounded-2xl p-6 md:p-8">
          <form id="regForm" className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Full Name</label>
              <input required name="name" type="text" placeholder="Your name" className="w-full rounded-xl bg-[#0b152a] border border-white/10 px-4 py-3 text-slate-100 outline-none focus:border-teal-300/60 focus:shadow-ring transition" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input required name="email" type="email" placeholder="you@example.com" className="w-full rounded-xl bg-[#0b152a] border border-white/10 px-4 py-3 text-slate-100 outline-none focus:border-teal-300/60 focus:shadow-ring transition" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Date</label>
                <input id="inputDate" name="date" type="text" placeholder="[Insert Date]" className="w-full rounded-xl bg-[#0b152a] border border-white/10 px-4 py-3 text-slate-100 outline-none focus:border-teal-300/60 focus:shadow-ring transition" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Time & Timezone</label>
                <input id="inputTime" name="time" type="text" placeholder="[Insert Time & Timezone]" className="w-full rounded-xl bg-[#0b152a] border border-white/10 px-4 py-3 text-slate-100 outline-none focus:border-teal-300/60 focus:shadow-ring transition" />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary rounded-xl px-6 py-3.5 font-semibold">Reserve My Free Spot</button>

            <p className="text-xs text-slate-400">By registering you agree to receive session details and reminders. You can opt out anytime.</p>
          </form>


          <div id="successCard" className="hidden">
            <div className="rounded-xl p-5 bg-emerald-400/10 border border-emerald-300/20">
              <p className="font-semibold text-emerald-300">You’re in!</p>
              <p className="text-slate-300 mt-1">We’ve saved your spot and displayed your unique join link below.</p>
            </div>
            <div className="mt-4 rounded-xl p-4 bg-white/5 border border-white/10">
              <p className="text-slate-300"><span className="text-slate-400">Join Link:</span> <span id="joinLink" className="font-semibold text-sky-300 break-all"></span></p>
              <div className="mt-3 flex gap-2">
                <button id="copyBtn" className="btn-accent rounded-xl px-4 py-2 font-semibold">Copy Link</button>
                <a id="openLink" target="_blank" rel="noopener" className="btn-primary rounded-xl px-4 py-2 font-semibold">Open Link</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card rounded-2xl p-6">
          <h4 className="font-semibold">Is this suitable for beginners?</h4>
          <p className="text-slate-300 mt-1">Absolutely. We start from basics and build up to practical strategies.</p>
        </div>
        <div className="card rounded-2xl p-6">
          <h4 className="font-semibold">Will I get the recording?</h4>
          <p className="text-slate-300 mt-1">Yes, limited-time access will be provided to attendees.</p>
        </div>
        <div className="card rounded-2xl p-6">
          <h4 className="font-semibold">Do I need any tools?</h4>
          <p className="text-slate-300 mt-1">Just a stable internet connection and a notebook. Platforms are discussed inside.</p>
        </div>
        <div className="card rounded-2xl p-6">
          <h4 className="font-semibold">Is it really free?</h4>
          <p className="text-slate-300 mt-1">Yes, 100% free. Seats are limited — secure yours now.</p>
        </div>
      </div>
    </section>
  </main>

  
  <footer className="mt-10 py-10">
    <div className="mx-auto max-w-6xl px-4">
      <div className="divider mb-6"></div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <p>© <span id="year"></span> Brilliant Bulls • Akshaysinh Dodiya. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-200">Terms</a>
          <a href="#" className="hover:text-slate-200">Privacy</a>
          <a href="#" className="hover:text-slate-200">Contact</a>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}
