import Image from "next/image";

const portals = [
  {
    title: "Safety Exam System",
    logo: "/safety-exam-logo.jpeg",
    link: "https://safety-exam-system-2026.vercel.app/android-home",
  },
  {
    title: "Safety Observation",
    logo: "/safety-observation-logo.png",
    link: "https://safety-observation-system.vercel.app",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-6 md:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-600 text-3xl font-bold">
              E
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide md:text-3xl">
                EHS Management System
              </h1>
              <p className="mt-1 text-xs text-slate-300 md:text-sm">
                Environment, Health & Safety Management System
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 md:text-4xl">
            Workplace Safety Applications
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base md:leading-7">
            Access and manage workplace safety activities through our
            integrated safety management applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {portals.map((portal, index) => (
            <a
              key={portal.title}
              href={portal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[230px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 sm:min-h-[290px] sm:p-7"
            >
              <Image
                src={portal.logo}
                alt={portal.title}
                width={1254}
                height={1254}
                priority={index === 0}
                className="h-40 w-40 object-contain transition duration-200 group-hover:scale-105 sm:h-52 sm:w-52"
              />
            </a>
          ))}

          <div className="flex min-h-[230px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-200/70 p-5 sm:col-span-2 sm:min-h-[290px] sm:p-7">
            <Image
              src="/coming-soon-logo.jpg"
              alt="Coming Soon"
              width={1254}
              height={1254}
              className="h-40 w-40 object-contain sm:h-52 sm:w-52"
            />
          </div>
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 md:mt-14 md:text-sm">
          EHS Management System ©️ 2026. All Rights Reserved.
        </footer>
      </section>
    </main>
  );
}