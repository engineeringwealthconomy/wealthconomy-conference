import React from "react";

function ConferenceQr() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 29"
      shapeRendering="crispEdges"
      className="h-[142px] w-[142px] sm:h-[152px] sm:w-[152px]"
      role="img"
      aria-label="QR code to register for Wealth Builders Conference"
    >
      <path
        stroke="#0E4547"
        d="M0 0.5h7m2 0h4m2 0h2m2 0h2m1 0h7M0 1.5h1m5 0h1m4 0h2m4 0h2m1 0h1m1 0h1m5 0h1M0 2.5h1m1 0h3m1 0h1m1 0h3m3 0h1m1 0h1m1 0h3m1 0h1m1 0h3m1 0h1M0 3.5h1m1 0h3m1 0h1m1 0h1m1 0h3m3 0h2m1 0h1m2 0h1m1 0h3m1 0h1M0 4.5h1m1 0h3m1 0h1m1 0h2m2 0h4m2 0h3m1 0h1m1 0h3m1 0h1M0 5.5h1m5 0h1m1 0h1m1 0h2m1 0h5m4 0h1m5 0h1M0 6.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M8 7.5h1m4 0h1m1 0h1m3 0h2M0 8.5h1m1 0h5m3 0h1m3 0h2m1 0h3m2 0h5M1 9.5h4m2 0h4m1 0h1m2 0h5m2 0h3m3 0h1M0 10.5h3m1 0h1m1 0h2m4 0h1m4 0h1m2 0h1m3 0h1M0 11.5h1m1 0h2m1 0h1m3 0h1m4 0h1m1 0h1m4 0h1m1 0h1m1 0h1m1 0h1M0 12.5h2m1 0h1m2 0h5m1 0h1m4 0h1m1 0h2m4 0h2M4 13.5h2m2 0h1m1 0h2m1 0h3m3 0h6m3 0h1M3 14.5h1m1 0h2m1 0h2m3 0h3m1 0h2m1 0h7M1 15.5h2m6 0h1m3 0h1m4 0h1m1 0h2m2 0h1m2 0h1M0 16.5h2m4 0h1m1 0h1m5 0h4m1 0h1m5 0h2M0 17.5h2m1 0h3m2 0h1m2 0h1m4 0h1m1 0h7m1 0h1m1 0h1M0 18.5h1m1 0h1m1 0h4m1 0h4m2 0h2m3 0h2m1 0h2m1 0h1M0 19.5h1m1 0h1m1 0h2m1 0h1m3 0h1m2 0h3m2 0h2m1 0h3m2 0h1M0 20.5h1m2 0h1m2 0h1m2 0h3m3 0h1m1 0h1m1 0h6m1 0h3M8 21.5h2m2 0h3m1 0h1m1 0h1m1 0h1m3 0h5M0 22.5h7m2 0h1m1 0h5m1 0h1m1 0h2m1 0h1m1 0h3M0 23.5h1m5 0h1m1 0h2m3 0h1m1 0h2m2 0h2m3 0h1M0 24.5h1m1 0h3m1 0h1m1 0h1m3 0h1m1 0h4m2 0h5m1 0h2M0 25.5h1m1 0h3m1 0h1m1 0h4m4 0h3m1 0h1m4 0h4M0 26.5h1m1 0h3m1 0h1m1 0h1m1 0h1m3 0h3m1 0h10M0 27.5h1m5 0h1m2 0h1m1 0h1m1 0h1m6 0h1m1 0h2m1 0h1m1 0h1M0 28.5h7m1 0h1m1 0h1m2 0h5m1 0h1m2 0h5"
      />
    </svg>
  );
}

const navLinks = [
  { label: "Who should attend", href: "#who" },
  { label: "Speakers", href: "#speakers" },
  { label: "What you will learn", href: "#learn" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0E4547] text-white">
      {/* Background Gold Concentric Curves - 2 circles behind the card as in design */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 100% at 90% 30%, black 50%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 100% at 90% 30%, black 50%, transparent 85%)",
        }}
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="820"
            cy="1140"
            r="1120"
            fill="none"
            stroke="#f8c860"
            strokeWidth="1.5"
            opacity="0.75"
          />
          <circle
            cx="820"
            cy="1140"
            r="930"
            fill="none"
            stroke="#f8c860"
            strokeWidth="1.5"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Header / Navigation Bar */}
      <header className="relative z-20 mx-auto flex h-24 w-full max-w-[1380px] items-center justify-between px-6 sm:px-10 lg:px-12">
        {/* Logo */}
        <a
          href="#"
          aria-label="Wealthconomy Home"
          className="group flex items-center transition-transform hover:scale-105"
        >
          <div className="flex h-[40px] sm:h-[44px] items-center justify-center rounded-[6px] bg-white px-3.5 py-1.5 shadow-sm">
            <img
              src="/wealthconomy-logo-new.png"
              alt="Wealthconomy"
              className="h-[24px] sm:h-[28px] w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-white/95 transition-colors hover:text-[#f8c860] xl:text-[15px]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="ml-3 inline-flex items-center justify-center rounded-full bg-[#f8c860] px-7 py-3 text-[14px] font-bold text-[#0E4547] shadow-sm transition-all hover:bg-[#ffd768] hover:shadow-md active:scale-95"
          >
            Register free
          </a>
        </nav>

        {/* Mobile Header Register Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#register"
            className="inline-flex items-center justify-center rounded-full bg-[#f8c860] px-5 py-2.5 text-[13px] font-bold text-[#0E4547]"
          >
            Register free
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-[1380px] items-center px-6 pb-16 pt-2 sm:px-10 lg:px-12 lg:pb-20 lg:pt-4">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.75fr)] lg:gap-8 xl:gap-14">
          {/* Left Column: Eyebrow, Title, Subtitle, Badges, CTAs */}
          <div className="max-w-[720px]">
            {/* Eyebrow */}
            <p className="mb-4 text-[12px] font-extrabold tracking-[0.26em] text-[#f8c860] uppercase sm:text-[13px]">
              WEALTHCONOMY PRESENTS
            </p>

            {/* Main Headline */}
            <h1 className="text-[48px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-[64px] md:text-[76px] lg:text-[84px] xl:text-[92px]">
              Wealth Builders
              <span className="block text-[#f8c860]">Conference</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-6 max-w-[550px] text-[16px] font-normal leading-[1.5] text-white/90 sm:text-[17px] md:text-[18px]">
              A free day of practical money conversations on saving, investing
              and growing your income, whatever you do for a living.
            </p>

            {/* Event Meta Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center rounded-full border border-[#f8c860] bg-[#0E4547] px-4.5 py-2 text-[12.5px] font-medium text-white sm:text-[13.5px]">
                Saturday, 12 December 2026
              </div>
              <div className="inline-flex items-center rounded-full border border-[#f8c860] bg-[#0E4547] px-4.5 py-2 text-[12.5px] font-medium text-white sm:text-[13.5px]">
                Starts at 10am
              </div>
              <div className="inline-flex items-center rounded-full border border-[#f8c860] bg-[#0E4547] px-4.5 py-2 text-[12.5px] font-medium text-white sm:text-[13.5px]">
                The Growth Hub, Alagbaka, Akure
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center rounded-full bg-[#f8c860] px-8 py-3.5 text-[14px] font-bold text-[#0E4547] shadow-sm transition-all hover:bg-[#ffd768] hover:shadow-md active:scale-95 sm:text-[15px]"
              >
                Register free
              </a>
              <a
                href="#speakers"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-white/10 active:scale-95 sm:text-[15px]"
              >
                Meet the speakers
              </a>
            </div>
          </div>

          {/* Right Column: Registration Card */}
          <div className="relative mx-auto w-full max-w-[390px] pt-4 lg:mr-0 lg:pt-0">
            {/* Circular FREE Registration Badge */}
            <div
              className="absolute -left-6 -top-6 z-20 flex h-[116px] w-[116px] -rotate-12 flex-col items-center justify-center rounded-full bg-[#f8c860] text-[#0E4547] shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:-left-7 sm:-top-7 sm:h-[122px] sm:w-[122px]"
              aria-label="Free registration"
            >
              <span className="text-[32px] font-black leading-[0.88] tracking-tight sm:text-[34px]">
                FREE
              </span>
              <span className="mt-0.5 text-[10.5px] font-bold tracking-tight sm:text-[11.5px]">
                registration
              </span>
            </div>

            {/* Main Date & QR Card */}
            <div
              id="register"
              className="relative rounded-[36px] bg-[#FAF8F2] px-8 pb-9 pt-10 text-center text-[#0E4547] shadow-[0_28px_65px_rgba(0,0,0,0.36)] sm:px-9 sm:pb-10 sm:pt-11"
            >
              <p className="text-[13.5px] font-bold tracking-[0.26em] text-[#0E4547]">
                SATURDAY
              </p>

              <p className="my-0.5 text-[108px] font-black leading-[0.85] tracking-[-0.06em] text-[#0E4547] sm:text-[118px]">
                12
              </p>

              <p className="text-[21px] font-extrabold text-[#0E4547] sm:text-[23px]">
                December 2026
              </p>

              <div className="mt-3.5 inline-flex items-center rounded-full bg-[#0E4547] px-5 py-1.5 text-[11.5px] font-bold text-white">
                Starts at 10am
              </div>

              {/* Dividing Line */}
              <div className="my-4.5 w-full border-t border-[#0E4547]/15" />

              <p className="text-[12.5px] font-semibold text-[#0E4547]/80">
                The Growth Hub, Alagbaka, Akure
              </p>

              {/* QR Code */}
              <div className="mx-auto mt-4.5 flex items-center justify-center">
                <ConferenceQr />
              </div>

              <p className="mt-4 text-[10.5px] font-extrabold tracking-[0.24em] text-[#0E4547]">
                SCAN TO REGISTER
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
