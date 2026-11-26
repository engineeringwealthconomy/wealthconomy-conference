
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import { Navbar } from "@/components/navbar";

function ConferenceQr({
  size = "normal",
  darkColor = "#0E4547",
}: {
  size?: "normal" | "large";
  darkColor?: string;
}) {
  const dimensionClass =
    size === "large"
      ? "h-[160px] w-[160px] sm:h-[180px] sm:w-[180px]"
      : "h-[136px] w-[136px] sm:h-[148px] sm:w-[148px]";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 29"
      shapeRendering="crispEdges"
      className={dimensionClass}
      role="img"
      aria-label="QR code to register for Wealth Builders Conference"
    >
      <path
        stroke={darkColor}
        d="M0 0.5h7m3 0h1m4 0h3m1 0h1m2 0h7M0 1.5h1m5 0h1m2 0h1m8 0h1m1 0h1m1 0h1m5 0h1M0 2.5h1m1 0h3m1 0h1m1 0h3m3 0h1m1 0h1m2 0h1m2 0h1m1 0h3m1 0h1M0 3.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m4 0h1m1 0h1m2 0h1m1 0h3m1 0h1M0 4.5h1m1 0h3m1 0h1m1 0h3m2 0h3m2 0h3m1 0h1m1 0h3m1 0h1M0 5.5h1m5 0h1m1 0h3m2 0h4m1 0h1m3 0h1m5 0h1M0 6.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M8 7.5h2m3 0h1m1 0h1m3 0h2M0 8.5h1m1 0h5m2 0h2m3 0h2m1 0h1m1 0h1m2 0h5M1 9.5h1m1 0h2m2 0h1m1 0h1m5 0h2m2 0h2m1 0h3m3 0h1M0 10.5h3m3 0h1m1 0h3m1 0h1m2 0h4m2 0h1m1 0h2M0 11.5h2m1 0h3m2 0h2m4 0h2m3 0h1m2 0h2m1 0h1m1 0h1M2 12.5h5m8 0h4m2 0h1m3 0h2M2 13.5h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h2m2 0h1m1 0h6m3 0h1M1 14.5h1m4 0h1m1 0h1m2 0h6m1 0h1m1 0h1m1 0h1m2 0h2M0 15.5h3m2 0h1m7 0h1m1 0h2m1 0h1m1 0h3m1 0h1m2 0h1M2 16.5h1m1 0h3m1 0h5m1 0h2m3 0h1m3 0h1m1 0h2M0 17.5h2m2 0h1m2 0h1m1 0h4m3 0h9m1 0h1m1 0h1M0 18.5h1m3 0h1m1 0h1m1 0h1m2 0h2m2 0h2m3 0h1m2 0h1m2 0h1M0 19.5h1m8 0h1m4 0h1m1 0h1m2 0h2m1 0h2m3 0h1M0 20.5h1m1 0h1m1 0h1m1 0h1m4 0h2m2 0h2m2 0h6m1 0h3M8 21.5h3m1 0h5m1 0h1m1 0h1m3 0h5M0 22.5h7m2 0h1m3 0h4m2 0h2m1 0h1m1 0h3M0 23.5h1m5 0h1m1 0h2m2 0h2m1 0h1m2 0h1m1 0h1m3 0h1m3 0h1M0 24.5h1m1 0h3m1 0h1m1 0h1m1 0h2m2 0h1m1 0h1m3 0h5m1 0h2M0 25.5h1m1 0h3m1 0h1m1 0h2m2 0h1m3 0h1m2 0h1m5 0h4M0 26.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h7M0 27.5h1m5 0h1m4 0h1m2 0h1m5 0h1m1 0h1m2 0h1m1 0h1M0 28.5h7m1 0h2m4 0h4m1 0h1m1 0h1m1 0h2m1 0h1"
      />
    </svg>
  );
}

const REGISTRATION_URL = "https://forms.gle/mbnk9as8MDWryWe1A";
const DISPLAY_REGISTRATION_URL = "forms.gle/mbnk9as8MDWryWe1A";
const COMMUNITY_URL = "https://chat.whatsapp.com/LTUgZfloaYK8KcXB2yVkdy";

const navLinks = [
  { label: "Who should attend", href: "#who" },
  { label: "Speakers", href: "#speakers" },
  { label: "What you will learn", href: "#learn" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
];

const attendeeProfiles = [
  {
    title: "Working professionals",
    description:
      "You earn a salary and want it to stretch well beyond payday.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0E4547"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="7" rx="3" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v2" />
        <path d="M2 13h20" />
      </svg>
    ),
  },
  {
    title: "Creatives",
    description:
      "You earn from your craft, and your income comes in waves.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0E4547"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r=".6" fill="#0E4547" strokeWidth="1" />
        <circle cx="17.5" cy="10.5" r=".6" fill="#0E4547" strokeWidth="1" />
        <circle cx="8.5" cy="7.5" r=".6" fill="#0E4547" strokeWidth="1" />
        <circle cx="6.5" cy="12.5" r=".6" fill="#0E4547" strokeWidth="1" />
        <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0 0 10 10c.8 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1.1-.3-.4-.4-.8-.4-1.4 0-1.1.9-2 2-2h2.3c4 0 7-3.1 7-7 0-5-4.5-9-10-9z" />
      </svg>
    ),
  },
  {
    title: "Freelancers",
    description:
      "You juggle clients and want steady savings from uneven pay.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0E4547"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="12" x="3" y="4" rx="2" />
        <path d="M2 18h20" />
        <path d="M10 18v2h4v-2" />
      </svg>
    ),
  },
  {
    title: "Business owners",
    description:
      "You run a business and want profit you can actually keep.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0E4547"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l1.5-5h15l1.5 5" />
        <path d="M3 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 3-1" />
        <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
        <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
      </svg>
    ),
  },
];

const speakers = [
  {
    name: "Favour Olatunde",
    role: "Founder and CEO, Wealthconomy",
    image: "/speaker2.jpeg",
    isMystery: false,
    cardBg: "bg-[#f8c860]",
  },
  {
    name: "Olatunde Victor Adeoluwa",
    role: "Founder and CEO, Salesplat and The Growth Hub",
    image: "/speaker1.JPEG",
    isMystery: false,
    cardBg: "bg-[#f8c860]",
  },
  {
    name: "Guess Who?",
    role: "Speaker reveal coming soon",
    isMystery: true,
    cardBg: "bg-[#0E4547]",
  },
  {
    name: "Guess Who?",
    role: "Speaker reveal coming soon",
    isMystery: true,
    cardBg: "bg-[#0E4547]",
  },
];

const conversations = [
  {
    title: "Save with a plan",
    description:
      "Build the habit of keeping money aside before it disappears.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0E4547"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Invest with understanding",
    description:
      "Learn how to judge an option before you put money into it.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0E4547"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Grow your income",
    description:
      "Earn more from the skills and business you already have.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0E4547"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22v-8" />
        <path d="M7 14c0-3.3 2.7-6 6-6 3.3 0 6 2.7 6 6" />
        <path d="M12 6a4 4 0 0 1 4 4" />
        <circle cx="12" cy="4" r="1.5" fill="#0E4547" />
      </svg>
    ),
  },
];

const eventDetails = [
  {
    title: "Saturday, 12 December 2026",
    subtitle: "Mark it in your calendar today",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f8c860"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    title: "Starts at 10am",
    subtitle: "Arrive a little early to settle in",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f8c860"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "The Growth Hub",
    subtitle: "Alagbaka, Akure, Ondo State",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f8c860"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Free registration",
    subtitle: "Register online so we can plan a seat for you",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f8c860"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      </svg>
    ),
  },
];

const registrationSteps = [
  {
    step: "1",
    title: "Open the registration link",
    description: `Click the register button or scan the QR code on this page.`,
  },
  {
    step: "2",
    title: "Fill in your details",
    description:
      "Complete the short registration form so we can save your seat.",
  },
  {
    step: "3",
    title: "Come to The Growth Hub",
    description:
      "Join us at Alagbaka, Akure, before 10am on Saturday, 12 December.",
  },
];

export default function WbcPage() {
  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0E4547] text-white">
        {/* Background Gold Concentric Curves - strictly on lg screens and up (hidden on mobile and smaller devices) */}
        <div
          className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden hidden lg:block"
          aria-hidden="true"
        >
          <div className="relative mx-auto h-full w-full max-w-[1380px]">
            <svg
              className="absolute right-0 top-0 h-[800px] w-[380px] sm:w-[410px] lg:w-[440px] pointer-events-none"
              viewBox="0 0 440 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="425"
                cy="170"
                r="220"
                stroke="#f8c860"
                strokeWidth="1.5"
                opacity="0.8"
              />
              <circle
                cx="425"
                cy="170"
                r="305"
                stroke="#f8c860"
                strokeWidth="1.5"
                opacity="0.75"
              />
            </svg>
          </div>
        </div>

        {/* Header / Navigation Bar with Desktop Nav & Mobile Menu */}
        <Navbar navLinks={navLinks} registrationUrl={REGISTRATION_URL} />

        {/* Hero Section Content */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-[1380px] items-center px-6 pb-16 pt-2 sm:px-10 lg:px-12 lg:pb-20 lg:pt-4">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.75fr)] lg:gap-8 xl:gap-14">
            {/* Left Column */}
            <Reveal delay={50} duration={800} className="max-w-[720px] text-center lg:text-left">
              <p className="mb-4 text-center lg:text-left text-[12px] font-extrabold tracking-[0.26em] text-[#f8c860] uppercase sm:text-[13px]">
                WEALTHCONOMY PRESENTS
              </p>

              <h1 className="text-center lg:text-left text-[48px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-[64px] md:text-[76px] lg:text-[84px] xl:text-[92px]">
                Wealth Builders
                <span className="block text-[#f8c860]">Conference</span>
              </h1>

              <p className="mt-6 max-w-[550px] mx-auto lg:mx-0 text-center lg:text-left text-[16px] font-normal leading-[1.5] text-white/90 sm:text-[17px] md:text-[18px]">
                A free day of practical money conversations on saving, investing
                and growing your income, whatever you do for a living.
              </p>

              {/* Event Meta Badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
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

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#f8c860] px-8 py-3.5 text-[14px] font-bold text-[#0E4547] transition-all hover:bg-[#ffd768] active:scale-95 sm:text-[15px]"
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
            </Reveal>

            {/* Right Column: Registration Card */}
            <Reveal delay={200} duration={800} className="relative mx-auto w-full max-w-[390px] pt-4 lg:mr-0 lg:pt-0">
              {/* Circular FREE Registration Badge */}
              <div
                className="absolute -left-5 -top-5 z-20 flex h-[112px] w-[112px] -rotate-12 flex-col items-center justify-center rounded-full bg-[#f8c860] text-[#0E4547] sm:-left-6 sm:-top-6 sm:h-[118px] sm:w-[118px]"
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
                className="relative rounded-2xl border border-[#0E4547]/15 bg-[#FAF8F2] px-8 pb-9 pt-10 text-center text-[#0E4547] sm:px-9 sm:pb-10 sm:pt-11"
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

                <div className="my-4.5 w-full border-t border-[#0E4547]/15" />

                <p className="text-[12.5px] font-semibold text-[#0E4547]/80">
                  The Growth Hub, Alagbaka, Akure
                </p>

                <div className="mx-auto mt-4.5 flex items-center justify-center">
                  <ConferenceQr />
                </div>

                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-[10.5px] font-extrabold tracking-[0.24em] text-[#0E4547] hover:underline"
                >
                  SCAN TO REGISTER
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. WHO SHOULD ATTEND SECTION                             */}
      {/* ======================================================== */}
      <section
        id="who"
        className="w-full bg-[#FAF8F2] py-20 sm:py-28 px-6 sm:px-10 lg:px-12 text-[#0E4547]"
      >
        <div className="mx-auto max-w-[1360px]">
          <Reveal>
            <p className="text-center text-[12px] sm:text-[13px] font-extrabold tracking-[0.25em] text-[#0E4547] uppercase">
              WHO SHOULD ATTEND
            </p>

            <h2 className="mt-3 text-center text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#112324] max-w-[800px] mx-auto">
              Built for people who earn in different ways
            </h2>

            <p className="mt-4 sm:mt-5 text-center text-[15px] sm:text-[17px] md:text-[18px] font-normal leading-[1.5] text-[#506364] max-w-[640px] mx-auto">
              However your money comes in, you will leave with practical ideas for
              keeping more of it and growing it.
            </p>
          </Reveal>

          <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attendeeProfiles.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="group relative flex h-full flex-col justify-start rounded-2xl border border-[#0E4547]/15 bg-white p-7 sm:p-8 transition-transform duration-200 hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8c860]">
                    {item.icon}
                  </div>

                  <h3 className="mt-7 text-[20px] sm:text-[21px] font-bold text-[#112324] tracking-[-0.01em]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-[14px] sm:text-[15px] font-normal leading-[1.55] text-[#506364]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="mt-14 sm:mt-16 text-center">
            <p className="text-[16px] sm:text-[18px] font-bold text-[#0E4547]">
              And anyone who is ready to save, invest and grow their income.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#0E4547] px-8 py-3.5 text-[14px] sm:text-[15px] font-bold text-white transition-all hover:bg-[#145759] active:scale-95"
              >
                Register free, it takes a minute
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SPEAKERS SECTION                                      */}
      {/* ======================================================== */}
      <section
        id="speakers"
        className="w-full bg-[#FAF1DC] py-20 sm:py-28 px-6 sm:px-10 lg:px-12 text-[#0E4547]"
      >
        <div className="mx-auto max-w-[1360px]">
          <Reveal>
            <p className="text-center text-[12px] sm:text-[13px] font-extrabold tracking-[0.25em] text-[#0E4547] uppercase">
              SPEAKERS
            </p>

            <h2 className="mt-3 text-center text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#112324] max-w-[850px] mx-auto">
              Learn from people building wealth in Akure
            </h2>

            <p className="mt-4 sm:mt-5 text-center text-[15px] sm:text-[17px] font-normal leading-[1.5] text-[#506364] max-w-[620px] mx-auto">
              Founders and practitioners sharing what has worked for them, with
              more names to be revealed soon.
            </p>
          </Reveal>

          <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <Reveal key={index} delay={index * 90}>
                <div className="group relative flex h-full flex-col justify-start rounded-2xl border border-[#0E4547]/15 bg-white p-3.5 sm:p-4 pb-6 sm:pb-7 transition-transform duration-200 hover:-translate-y-0.5">
                  <div
                    className={`relative flex h-[260px] sm:h-[280px] w-full items-center justify-center overflow-hidden rounded-xl ${speaker.cardBg}`}
                  >
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : speaker.isMystery ? (
                      <span className="select-none text-[80px] sm:text-[92px] font-black leading-none text-[#f8c860]">
                        ?
                      </span>
                    ) : null}
                  </div>

                  <div className="px-2 pt-5">
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-[#112324] leading-snug tracking-tight">
                      {speaker.name}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] sm:text-[13px] leading-[1.45] text-[#506364]">
                      {speaker.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="mt-14 sm:mt-16 flex justify-center">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#f8c860] px-8 py-3.5 text-[14px] sm:text-[15px] font-bold text-[#0E4547] transition-all hover:bg-[#fed77a] active:scale-95"
            >
              Register free to hear them
            </a>
          </Reveal>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. WHAT YOU WILL LEARN SECTION                           */}
      {/* ======================================================== */}
      <section
        id="learn"
        className="w-full bg-[#0E4547] py-20 sm:py-28 px-6 sm:px-10 lg:px-12 text-white"
      >
        <div className="mx-auto max-w-[1360px]">
          <Reveal>
            <p className="text-center text-[12px] sm:text-[13px] font-extrabold tracking-[0.25em] text-[#f8c860] uppercase">
              WHAT YOU WILL LEARN
            </p>

            <h2 className="mt-3 text-center text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.035em] text-white max-w-[850px] mx-auto">
              Three money conversations you should not miss
            </h2>
          </Reveal>

          <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {conversations.map((item, index) => (
              <Reveal key={item.title} delay={index * 110}>
                <div className="group relative flex h-full flex-col justify-start rounded-2xl border border-[#f8c860]/60 bg-[#0B3B3D]/70 p-7 sm:p-8 transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#f8c860]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8c860]">
                    {item.icon}
                  </div>

                  <h3 className="mt-7 text-[20px] sm:text-[22px] font-bold text-white tracking-[-0.01em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] sm:text-[15px] font-normal leading-[1.6] text-white/80">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="mt-14 sm:mt-16 flex justify-center">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#f8c860] px-8 py-3.5 text-[14px] sm:text-[15px] font-bold text-[#0E4547] transition-all hover:bg-[#fed77a] active:scale-95"
            >
              Register free and join the conversation
            </a>
          </Reveal>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. EVENT DETAILS / VENUE SECTION                         */}
      {/* ======================================================== */}
      <section
        id="venue"
        className="w-full bg-[#FAF8F2] py-20 sm:py-28 px-6 sm:px-10 lg:px-12 text-[#0E4547]"
      >
        <div className="mx-auto max-w-[1360px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Left Column */}
            <Reveal className="text-center lg:text-left">
              <p className="text-center lg:text-left text-[12px] sm:text-[13px] font-extrabold tracking-[0.25em] text-[#0E4547] uppercase">
                EVENT DETAILS
              </p>

              <h2 className="mt-3 text-center lg:text-left text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#112324] max-w-[620px] mx-auto lg:mx-0">
                One Saturday in Akure, set aside for your money
              </h2>

              <div className="mt-10 space-y-6 max-w-[480px] mx-auto lg:mx-0 text-left">
                {eventDetails.map((item, index) => (
                  <Reveal key={item.title} delay={index * 70}>
                    <div className="flex items-center gap-4.5 sm:gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0E4547]">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-[15px] sm:text-[16px] font-bold text-[#112324]">
                          {item.title}
                        </h3>
                        <p className="text-[13px] text-[#506364]">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            {/* Right Column: Dark Teal Card */}
            <Reveal delay={150} className="relative mx-auto w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#0E4547] p-8 sm:p-10 text-center text-white">
              <p className="text-[11px] font-extrabold tracking-[0.25em] text-[#f8c860] uppercase">
                REGISTER IN A MINUTE
              </p>

              {/* QR Code Container */}
              <div className="mx-auto mt-6 flex w-fit items-center justify-center rounded-xl bg-white p-3.5 border border-white/20">
                <ConferenceQr size="large" darkColor="#0E4547" />
              </div>

              {/* Button */}
              <div className="mt-6 flex justify-center">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#f8c860] px-8 py-3 text-[14px] font-bold text-[#0E4547] transition-all hover:bg-[#fed77a] active:scale-95"
                >
                  Register free
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. HOW TO ATTEND / STEPS SECTION                         */}
      {/* ======================================================== */}
      <section
        id="how-to-attend"
        className="w-full bg-white py-20 sm:py-28 px-6 sm:px-10 lg:px-12 text-[#0E4547]"
      >
        <div className="mx-auto max-w-[1360px]">
          <Reveal>
            <p className="text-center text-[12px] sm:text-[13px] font-extrabold tracking-[0.25em] text-[#0E4547] uppercase">
              HOW TO ATTEND
            </p>

            <h2 className="mt-3 text-center text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#112324] max-w-[800px] mx-auto">
              Register in three easy steps
            </h2>
          </Reveal>

          <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {registrationSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 110}>
                <div className="group relative flex h-full flex-col justify-start rounded-2xl border border-[#0E4547]/15 bg-white p-7 sm:p-8 transition-transform duration-200 hover:-translate-y-0.5">
                  {/* Number Badge */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0E4547] text-[18px] font-extrabold text-[#f8c860]">
                    {step.step}
                  </div>

                  <h3 className="mt-6 text-[18px] sm:text-[19px] font-bold text-[#112324] tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-[14px] font-normal leading-[1.55] text-[#506364]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="mt-14 sm:mt-16 flex justify-center">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0E4547] px-8 py-3.5 text-[14px] sm:text-[15px] font-bold text-white transition-all hover:bg-[#145759] active:scale-95"
            >
              Start my registration
            </a>
          </Reveal>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6B. JOIN THE WEALTHCONOMY COMMUNITY                      */}
      {/* ======================================================== */}
      <section
        id="community"
        className="w-full bg-[#f8c860] py-16 sm:py-22 px-6 sm:px-10 lg:px-12 text-[#0E4547]"
      >
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal>
            <h2 className="text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0E4547]">
              Join the Wealthconomy
              <span className="block">community.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-[580px] text-[15px] sm:text-[16.5px] font-medium leading-[1.6] text-[#0E4547]/90">
              A new way to think about wealth, and a community to grow with. Join our WhatsApp group to get practical money habits, savings tips, and exclusive content.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#0E4547] px-8 py-3.5 text-[14px] sm:text-[15px] font-bold text-white transition-all hover:bg-[#145759] active:scale-95 shadow-none"
              >
                Join Our WhatsApp Community
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6C. FREQUENTLY ASKED QUESTIONS (FAQ)                     */}
      {/* ======================================================== */}
      <section
        id="faq"
        className="w-full bg-[#FAF8F2] py-20 sm:py-28 px-6 sm:px-10 lg:px-12 text-[#0E4547]"
      >
        <div className="mx-auto max-w-[800px]">
          <Reveal>
            <h2 className="text-center text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0E4547]">
              Frequently asked questions
            </h2>
          </Reveal>

          <div className="mt-12 sm:mt-14">
            <Reveal delay={120}>
              <FaqAccordion />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. FINAL CALL TO ACTION BANNER                           */}
      {/* ======================================================== */}
      <section className="w-full bg-[#f8c860] py-16 sm:py-20 px-6 sm:px-10 lg:px-12 text-[#0E4547]">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-14">
            {/* Left Content */}
            <Reveal className="w-full max-w-[760px] text-center lg:text-left">
              <h2 className="text-center lg:text-left text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0E4547]">
                Save your free seat at the
                <span className="block">Wealth Builders Conference</span>
              </h2>

              <p className="mt-4 text-center lg:text-left text-[15px] sm:text-[17px] font-bold text-[#0E4547]/90 mx-auto lg:mx-0">
                Saturday, 12 December 2026, from 10am at The Growth Hub,
                Alagbaka, Akure.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#0E4547] px-8 py-3.5 text-[14px] sm:text-[15px] font-bold text-white transition-all hover:bg-[#145759] active:scale-95"
                >
                  Register free now
                </a>
              </div>
            </Reveal>

            {/* Right QR Box */}
            <Reveal delay={150} className="shrink-0 rounded-2xl bg-white p-3 border border-[#0E4547]/15">
              <ConferenceQr size="large" darkColor="#0E4547" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. FOOTER                                                */}
      {/* ======================================================== */}
      <footer className="w-full bg-[#082627] py-14 sm:py-16 px-6 sm:px-10 lg:px-12 text-white">
        <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-10 md:flex-row md:items-start">
          {/* Left Brand Col */}
          <div>
            <a
              href="/wbc"
              aria-label="Wealthconomy Home"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <img
                src="/wealthconomy-logo-new.png"
                alt="Wealthconomy"
                className="h-[38px] sm:h-[44px] lg:h-[48px] w-auto object-contain brightness-0 invert"
              />
            </a>

            <p className="mt-5 max-w-[340px] text-[13px] leading-relaxed text-white/75">
              A Naira-first savings and wealth app for steady, sensible growth.
            </p>

            <p className="mt-7 text-[12px] text-white/50">
              © 2026 Wealthconomy. All rights reserved.
            </p>
          </div>

          {/* Right Contact Col */}
          <div className="space-y-2 text-[13.5px] text-white/80">
            <p>
              <a
                href="https://wealthconomy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                wealthconomy.org
              </a>
            </p>
            <p>
              <a
                href="mailto:wealthconomysavers@gmail.com"
                className="transition-colors hover:text-white"
              >
                wealthconomysavers@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+2347014085119"
                className="transition-colors hover:text-white"
              >
                +234 701 408 5119
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
