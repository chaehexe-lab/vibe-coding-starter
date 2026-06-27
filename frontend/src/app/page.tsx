import { getHighlights, getProfile } from "@/lib/db";
import Image from "next/image";

const cardColors = ["pastel-card-one", "pastel-card-two", "pastel-card-three", "pastel-card-four"];

function Wave({ color }: { color: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 80" className="decor-wave block h-12 w-[104%] sm:h-20" preserveAspectRatio="none">
      <path fill={color} d="M0 32 80 42c80 10 160 10 240 0s160-30 240-20 160 50 240 48 160-44 240-48 160 22 240 24 160-16 240-14v48H0Z" />
    </svg>
  );
}

function Cloud({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 120 64" fill="white" stroke="black" strokeWidth="2">
      <path d="M25 53h69c14 0 20-17 10-26-5-5-12-6-18-3C83 10 66 6 56 17c-9-7-24-1-24 11C13 24 7 53 25 53Z" />
    </svg>
  );
}

function Fish({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 120 70" fill="white" stroke="black" strokeWidth="2">
      <path d="M20 35C34 13 68 10 89 28l20-13-4 20 4 20-20-13C68 60 34 57 20 35Z" />
      <circle cx="43" cy="30" r="3" fill="black" />
      <path d="M65 20c-4 9-4 21 0 30" fill="none" />
    </svg>
  );
}

function Drop({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 42 58" fill="#a3e635" stroke="black" strokeWidth="2">
      <path d="M21 3C16 15 6 25 6 37a15 15 0 0 0 30 0C36 25 26 15 21 3Z" />
    </svg>
  );
}

export default function Home() {
  const profile = getProfile();
  const highlights = getHighlights();

  return (
    <main className="min-h-screen overflow-hidden bg-paper-white font-satoshi text-carbon-black">
      <section className="hero-gradient relative px-6 pb-20 pt-7 sm:px-10 sm:pb-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <Cloud className="decor-cloud decor-cloud-one absolute left-[5%] top-28 w-20 sm:w-28" />
          <Cloud className="decor-cloud decor-cloud-two absolute right-[6%] top-40 w-24 sm:w-32" />
          <Fish className="decor-fish absolute bottom-14 left-[8%] w-24 sm:w-32" />
          <Drop className="decor-drop decor-drop-one absolute right-[18%] top-24 w-8" />
          <Drop className="decor-drop decor-drop-two absolute bottom-24 right-[7%] w-6" />
          <span className="decor-bubble decor-bubble-one absolute bottom-8 left-[32%] h-5 w-5 rounded-full border-2 border-carbon-black bg-paper-white" />
          <span className="decor-bubble decor-bubble-two absolute bottom-20 right-[31%] h-3 w-3 rounded-full border-2 border-carbon-black bg-paper-white" />
          <span className="decor-bubble decor-bubble-three absolute bottom-4 right-[24%] h-7 w-7 rounded-full border-2 border-carbon-black bg-paper-white" />
          <span className="decor-star decor-star-one absolute left-[24%] top-[34%] text-2xl">✦</span>
          <span className="decor-star decor-star-two absolute right-[28%] top-[24%] text-lg">✦</span>
          <span className="decor-star decor-star-three absolute bottom-[18%] right-[38%] text-xl">✦</span>
        </div>
        <div className="relative z-10 mx-auto max-w-6xl">
          <nav className="relative flex min-h-14 items-center justify-end rounded-full border border-carbon-black bg-paper-white px-5 py-3 shadow-subtle">
            <span className="name-sticker absolute left-1/2 text-heading font-bold tracking-tight">이채희</span>
            <span className="hidden rounded-full bg-lime-pulse px-4 py-2 text-body-sm font-bold sm:inline-block">Industrial Engineering</span>
          </nav>

          <div className="relative mx-auto mt-20 max-w-4xl text-center sm:mt-28">
            <span className="inline-block rounded-full border border-carbon-black bg-paper-white px-4 py-2 text-body-sm">부산대학교 산업공학과</span>
            <div className="mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
              <h1 className="hero-title text-5xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-display-xl">
                안녕하세요<br />이채희입니다.
              </h1>
              <Image
                src="/images/chaehee-character.png"
                alt="이채희 캐릭터"
                width={144}
                height={144}
                priority
                className="hero-character h-32 w-32 object-contain mix-blend-multiply sm:h-40 sm:w-40"
              />
            </div>
            <p className="mx-auto mt-7 max-w-2xl text-subheading leading-8 sm:text-heading-sm">{profile.tagline}</p>
            <div className="decor-spark absolute -left-14 top-16 hidden rounded-2xl border border-carbon-black bg-buttercream px-5 py-4 text-heading shadow-subtle-4 lg:block">✦</div>
            <div className="decor-badge absolute -right-16 bottom-0 hidden rounded-full border border-carbon-black bg-paper-white px-5 py-4 text-heading shadow-subtle lg:block">IE</div>
          </div>
        </div>
      </section>

      <Wave color="#ffffff" />

      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="inline-block rounded-full border border-carbon-black bg-lime-pulse px-4 py-2 text-body-sm font-bold">ABOUT ME</span>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-display">다시 한번,<br />동기들과 함께</h2>
          </div>
          <div className="about-card about-gradient rounded-2xl border border-carbon-black p-7 shadow-subtle-4 sm:p-10">
            <p className="text-subheading leading-9 sm:text-heading-sm">{profile.introduction}</p>
          </div>
        </div>
      </section>

      <Wave color="#d2fae5" />

      <section className="projects-gradient px-6 pb-24 pt-14 sm:px-10 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full border border-carbon-black bg-paper-white px-4 py-2 text-body-sm">PROJECTS</span>
            <h2 className="mt-6 text-4xl font-bold tracking-[-0.03em] sm:text-display">경험에서 다음 도전까지</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {highlights.map((highlight, index) => {
              const isNext = index === highlights.length - 1;

              return (
                <article key={highlight.id} className={`${cardColors[index % cardColors.length]} project-card project-card-${index + 1} rounded-2xl border border-carbon-black p-6 shadow-subtle-4`}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-carbon-black bg-paper-white text-body-sm font-bold">0{index + 1}</div>
                    <span className={`rounded-full border border-carbon-black px-3 py-1 text-caption font-bold ${isNext ? "bg-lime-pulse" : "bg-paper-white"}`}>
                      {isNext ? "NEXT PROJECT" : "EXPERIENCE"}
                    </span>
                  </div>
                  <h3 className="mt-6 text-heading-sm font-bold leading-8">{highlight.label}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Wave color="#c7d2fe" />

      <section className="next-gradient relative px-6 pb-24 pt-12 text-carbon-black sm:px-10 sm:pb-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <Fish className="decor-fish decor-fish-reverse absolute left-[4%] top-14 w-20 sm:w-28" />
          <Drop className="decor-drop decor-drop-two absolute bottom-14 left-[16%] w-7" />
          <Cloud className="decor-cloud decor-cloud-two absolute bottom-10 right-[5%] w-24 sm:w-32" />
          <span className="decor-bubble decor-bubble-two absolute bottom-4 left-[35%] h-4 w-4 rounded-full border-2 border-carbon-black bg-paper-white" />
          <span className="decor-bubble decor-bubble-three absolute bottom-20 right-[27%] h-6 w-6 rounded-full border-2 border-carbon-black bg-lime-pulse" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="next-step-badge inline-block rounded-full border border-carbon-black bg-lime-pulse px-4 py-2 text-body-sm font-bold text-carbon-black">NEXT STEP</span>
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-display">
            고모텍 자동화 마케팅 프로젝트에<br />새롭게 참여합니다.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-subheading leading-8">기존 프로젝트에서 쌓은 데이터 분석과 협업 경험을 바탕으로, 새로운 분야에서도 배우고 실행하겠습니다.</p>
        </div>
      </section>

      <Wave color="#f5f5f5" />

      <footer className="footer-gradient px-6 pb-12 pt-8 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-carbon-black pt-8 text-body-sm sm:flex-row sm:items-center sm:justify-between">
          <p>{profile.name} · 부산대학교 산업공학과</p>
          <p className="font-bold">꾸준히 배우고, 끝까지 만들어냅니다. ✦</p>
        </div>
      </footer>
    </main>
  );
}
