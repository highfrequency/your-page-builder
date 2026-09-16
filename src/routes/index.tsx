import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import {
  BookIcon,
  CheckIcon,
  CrystalBallIcon,
  FlameIcon,
  HandshakeIcon,
  HeartsIcon,
  MagnifierIcon,
  MapIcon,
  SpeechIcon,
  SplitMaskIcon,
  StarIcon,
} from "@/components/pixel-icons";
import {
  BlockHeader,
  List,
  Marker,
  Quote,
  StatRow,
} from "@/components/card-ui";

const TITLE = "AIONLY — AI-картка про тебе, зроблена твоїм AI";
const DESCRIPTION =
  "Твій AI знає тебе краще за будь-яку анкету. AIONLY перетворює це на картку — сторінку-самопрезентацію, якою хочеться ділитися. Безкоштовно, ~4 хвилини.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

/* ---------- primitives ---------- */

function WhitePanel({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`panel-dark p-5 ${className}`} style={style}>
      {children}
    </div>
  );
}

function Cta({ className = "" }: { className?: string }) {
  return (
    <a
      href="/start"
      className={`font-display flex min-h-[52px] items-center justify-center rounded-full border-2 border-ink bg-paper px-6 py-3 text-center text-[15px] font-extrabold text-ink shadow-[4px_4px_0_rgba(0,0,0,.55)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${className}`}
    >
      Створити мою AI-картку
    </a>
  );
}

function StageTitle({ index, title }: { index: string; title: ReactNode }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-bold text-flame">{index}</span>
        <span className="h-0.5 flex-1 bg-paper/15" />
      </div>
      <h2 className="font-display mt-2 text-2xl leading-tight font-extrabold text-paper sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

const DECK = [
  {
    name: "Марта",
    tint: "#FFF3C9",
    archetype: "Картограф × Підпалювачка",
    pct: 92,
  },
  { name: "Hul", tint: "#FFE3DB", archetype: "Архітектор Запусків", pct: 94 },
  { name: "Олег", tint: "#E4EAFF", archetype: "Тихий Стратег", pct: 88 },
  {
    name: "Kristina",
    tint: "#E7F8EF",
    archetype: "Диспетчерка Ясності",
    pct: 90,
  },
  { name: "Valeri", tint: "#F3E9FF", archetype: "Розшифровувачка", pct: 87 },
];

function MiniCard({
  card,
  className = "",
  style,
}: {
  card: (typeof DECK)[number];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`panel-dark w-[200px] shrink-0 overflow-hidden ${className}`}
      style={style}
    >
      <div
        className="flex items-center justify-between gap-2 border-b-2 border-ink px-3 py-2"
        style={{ backgroundColor: card.tint }}
      >
        <span className="font-display text-sm font-extrabold">{card.name}</span>
        <span className="font-mono inline-flex items-center gap-1 text-[10px] font-bold">
          <FlameIcon size={12} />
          {card.pct}%
        </span>
      </div>
      <div className="space-y-2 px-3 py-3">
        <p className="text-[12px] leading-snug font-semibold">
          {card.archetype}
        </p>
        <div className="flex gap-[3px]" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`h-2.5 flex-1 border-2 border-ink ${
                i < Math.round((card.pct / 100) * 5) ? "bg-flame" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CursorTag({
  name,
  color,
  className = "",
}: {
  name: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute flex items-center gap-1 motion-safe:animate-[float_3s_ease-in-out_infinite] ${className}`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 10 10"
        shapeRendering="crispEdges"
        aria-hidden
      >
        <g fill="#F5F6F1">
          <rect x="1" y="1" width="1" height="7" />
          <rect x="2" y="2" width="1" height="5" />
          <rect x="3" y="3" width="1" height="4" />
          <rect x="4" y="4" width="1" height="3" />
          <rect x="5" y="5" width="1" height="2" />
        </g>
      </svg>
      <span
        className="font-mono rounded-full border-2 border-ink px-2 py-0.5 text-[10px] font-bold text-ink"
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    icon: <BookIcon />,
    lead: "Скопіюй промпт.",
    text: "Ми дамо спеціальний промпт — одна кнопка.",
  },
  {
    n: "02",
    icon: <SpeechIcon />,
    lead: "Встав у свій AI.",
    text: "ChatGPT, Claude чи Gemini — той, з яким ти реально живеш. Він збере все, що помітив про тебе.",
  },
  {
    n: "03",
    icon: <StarIcon />,
    lead: "Отримай картку.",
    text: "Вставляєш його відповідь — і твоя сторінка готова: aionly.io/твійнік.",
  },
];

const USES = [
  {
    icon: <MapIcon />,
    lead: "Лінк у біо.",
    text: "Замість трьох рядків опису — сторінка, після якої тебе реально розуміють.",
  },
  {
    icon: <HandshakeIcon />,
    lead: "Нетворкінг.",
    text: "Хто ти і чим корисний — за 30 секунд, без незручного самопрезентування.",
  },
  {
    icon: <HeartsIcon />,
    lead: "Знайомства.",
    text: "Люди бачать не фото з відпустки, а як з тобою насправді.",
  },
  {
    icon: <MagnifierIcon />,
    lead: "Про себе.",
    text: "Побачити себе очима того, хто чув усі твої питання.",
  },
];

const PRIVACY = [
  "Ми ніколи не бачимо твоїх чатів — аналіз відбувається у твоєму AI.",
  "До публікації ти бачиш кожен блок і можеш сховати чи відредагувати будь-який.",
  "Делікатні теми приховані за замовчуванням.",
  "Картку можна зняти з публікації або видалити будь-коли.",
];

const FAQ = [
  {
    q: "Який AI підтримується?",
    a: "ChatGPT, Claude, Gemini — і будь-який інший, якому можна вставити промпт. Найкращий результат дає AI з увімкненою пам'яттю і довгою історією.",
  },
  {
    q: "А якщо мій AI мене майже не знає?",
    a: "Система чесно покаже низьку повноту контексту і поставить кілька персональних уточнень. А скоро з'явиться коротка голосова розмова, яка збере все з нуля.",
  },
  {
    q: "Ви читаєте мої розмови з AI?",
    a: "Ні. І технічно не можемо: промпт виконується у твоєму AI, у твоєму акаунті. Ми отримуємо тільки готовий структурований результат.",
  },
  { q: "Це безкоштовно?", a: "Так, картка і сторінка — безкоштовні." },
  {
    q: "Чи можна щось змінити після створення?",
    a: "Так: кожен блок можна редагувати, ховати, показувати. Публікується тільки те, що ти лишив видимим.",
  },
  {
    q: "Це якийсь психологічний тест?",
    a: "Ні. Тут немає питань із варіантами відповідей. Це витяг того, що твій AI уже помітив за реальний час із тобою.",
  },
];

/* ---------- page ---------- */

function LandingPage() {
  const [showBar, setShowBar] = useState(false);
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;
    const center = () => {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    };
    const id = requestAnimationFrame(() => requestAnimationFrame(center));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const end = document.getElementById("s9");
      const nearEnd = end
        ? end.getBoundingClientRect().top < window.innerHeight
        : false;
      setShowBar(window.scrollY > 520 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="stage min-h-screen">
      <header className="sticky top-0 z-20 border-b border-paper/10 bg-[#14151A]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[720px] items-center justify-between px-4 py-3 sm:px-6">
          <span className="font-display text-base font-extrabold tracking-tight text-paper">
            AIONLY
          </span>
          <a
            href="/start"
            className="font-mono flex min-h-[44px] items-center text-[12px] text-paper"
          >
            Вхід
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[720px] px-4 pb-28 sm:px-6">
        {/* S1 HERO */}
        <section className="pt-10 text-center">
          <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-flame uppercase">
            Ранній доступ — AI-картки
          </p>
          <h1 className="font-display mx-auto mt-4 max-w-[18ch] text-[32px] leading-[1.1] font-extrabold text-paper sm:text-5xl">
            Що твій AI <Marker>насправді</Marker> про тебе знає?
          </h1>
          <p className="mx-auto mt-4 max-w-[34ch] text-[15px] leading-relaxed text-paper/75">
            Твій AI знає тебе краще за будь-яку анкету. AIONLY перетворює це на
            картку — сторінку-самопрезентацію, якою хочеться ділитися.
          </p>

          {/* deck */}
          <div className="relative mt-10">
            <div className="relative z-10 -mb-7 flex justify-center px-6">
              <Cta className="w-full max-w-[320px]" />
            </div>
            <div ref={deckRef} className="-mx-4 flex snap-x snap-proximity items-center gap-3 overflow-x-auto px-[calc(50%-100px)] pt-4 pb-6 [scrollbar-width:none] sm:-mx-6 [&::-webkit-scrollbar]:hidden">
              {DECK.map((c, i) => {
                const rot = [-6, 0, 6, -4, 4][i];
                const dy = [10, 0, 12, 6, 14][i];
                const center = c.name === "Hul";
                return (
                  <MiniCard
                    key={c.name}
                    card={c}
                    className={`snap-center ${center ? "scale-[1.12]" : ""}`}
                    style={{ transform: `rotate(${rot}deg) translateY(${dy}px)` }}
                  />
                );
              })}
            </div>
            <CursorTag
              name="Марта"
              color="#3ECF8E"
              className="top-2 left-2 hidden sm:flex"
            />
            <CursorTag
              name="Олег"
              color="#4C6FFF"
              className="right-2 bottom-8 hidden sm:flex"
            />
          </div>

          <p className="font-mono mt-2 text-[10px] tracking-[0.14em] text-paper/55 uppercase">
            Кожна картка — справжня людина, описана її AI
          </p>
          <p className="font-mono mt-6 text-[11px] text-paper/55">
            безкоштовно · ~4 хвилини · ти вирішуєш, що публічне
          </p>
        </section>

        {/* S2 */}
        <section className="pt-16">
          <StageTitle index="01" title="Три хвилини. Без анкет на сто питань." />
          <div className="space-y-4">
            {STEPS.map((s) => (
              <WhitePanel key={s.n}>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-2xl font-bold text-ink/35">
                    {s.n}
                  </span>
                  <span className="mt-1 shrink-0">{s.icon}</span>
                  <p className="text-[15px] leading-relaxed">
                    <span className="font-semibold">{s.lead}</span> {s.text}
                  </p>
                </div>
              </WhitePanel>
            ))}
          </div>
          <p className="font-mono mt-4 text-[11px] leading-relaxed text-paper/55">
            Твої чати нікуди не передаються. Промпт працює у твоєму AI — до нас
            приходить лише готовий результат.
          </p>
        </section>

        {/* S3 */}
        <section className="pt-16">
          <StageTitle
            index="02"
            title={
              <>
                Не біо на три рядки. <Marker>Документ</Marker> про тебе.
              </>
            }
          />
          <div className="space-y-4">
            <div
              className="panel-dark p-5 shadow-[4px_4px_0_var(--color-yellow)]"
              style={{ backgroundColor: "#FFF3C9" }}
            >
              <BlockHeader icon={<SplitMaskIcon />} title="Суперечності" />
              <p className="text-lg leading-snug font-semibold">
                Хоче свободи — і сам створює собі тиск
              </p>
              <div className="mt-4">
                <List
                  items={[
                    "Будує дуже швидко — масштабує значно повільніше",
                    "Добре рахує ризики — але регулярно ставить на себе",
                  ]}
                />
              </div>
            </div>

            <WhitePanel>
              <BlockHeader icon={<FlameIcon />} title="Панель приладів" />
              <div className="divide-y-2 divide-ink/10">
                <StatRow label="Амбіція" value={97} />
                <StatRow label="Цікавість" value={95} />
                <StatRow label="Автономія" value={94} />
              </div>
            </WhitePanel>

            <div
              className="panel-dark p-5 shadow-[4px_4px_0_var(--color-flame)]"
              style={{ backgroundColor: "#FFE3DB" }}
            >
              <BlockHeader icon={<CrystalBallIcon />} title="AI-пророцтво" />
              <Quote>
                Ти заробиш найбільше не тоді, коли вигадаєш найкращий продукт, а
                коли витримаєш достатньо довго з одним хорошим.
              </Quote>
            </div>
          </div>

          <p className="font-mono mt-4 text-[11px] text-paper/55">
            Кожен блок можна редагувати або сховати до публікації.
          </p>

          <WhitePanel className="mt-4">
            <p className="text-[15px] leading-relaxed">
              Постав у біо Instagram, TikTok чи LinkedIn — і тебе нарешті
              зрозуміють з першого лінка.
            </p>
          </WhitePanel>

          <div className="mt-6 flex flex-col items-center gap-3">
            <Cta className="w-full max-w-[320px]" />
            <Link to="/hul" className="text-[14px] text-paper underline">
              Подивитись живу картку →
            </Link>
          </div>
        </section>

        {/* S4 */}
        <section className="pt-16">
          <StageTitle index="03" title="Одна картка — різні двері." />
          <div className="grid gap-4 sm:grid-cols-2">
            {USES.map((u) => (
              <WhitePanel key={u.lead}>
                <span>{u.icon}</span>
                <p className="mt-3 text-[15px] leading-relaxed">
                  <span className="font-semibold">{u.lead}</span> {u.text}
                </p>
              </WhitePanel>
            ))}
          </div>
        </section>

        {/* S5 */}
        <section className="pt-16 text-center">
          <h2 className="font-display mx-auto max-w-[16ch] text-3xl leading-tight font-extrabold text-paper sm:text-4xl">
            Анкети питають. Твій AI — <Marker>бачив</Marker>.
          </h2>
          <p className="mx-auto mt-5 max-w-[38ch] text-[15px] leading-relaxed text-paper/75">
            Будь-яка анкета отримує твою відредаговану версію: 20 питань — 20
            обережних відповідей. А твій AI місяцями бачив справжнє: які питання
            ти ставиш о другій ночі, над чим застрягаєш, що тебе запалює. AIONLY
            нічого не вигадує: якщо даних бракує — блок лишиться порожнім.
            Порожнє поле краще за правдоподібний фейк.
          </p>
        </section>

        {/* S6 */}
        <section className="pt-16">
          <StageTitle index="04" title="AI пропонує. Ти вирішуєш." />
          <WhitePanel>
            <ul className="space-y-3">
              {PRIVACY.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[15px]">
                  <CheckIcon size={16} className="mt-1 shrink-0" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </WhitePanel>
        </section>

        {/* S7 */}
        <section className="pt-16">
          <StageTitle index="05" title="Картка — це двері." />
          <div className="relative flex items-center justify-center gap-2">
            <MiniCard card={DECK[0]!} />
            <span className="h-0 w-8 shrink-0 border-t-2 border-dashed border-paper/40" />
            <MiniCard card={DECK[2]!} />
          </div>
          <WhitePanel className="relative mt-6">
            <span className="font-mono absolute -top-3 right-4 rounded-md border-2 border-ink bg-paper px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] uppercase">
              Скоро
            </span>
            <p className="text-[15px] leading-relaxed">
              Далі — порівняння сумісності з іншою карткою і AI, який сам
              знаходить людей, що тобі підходять. Без стрічки і свайпів.
            </p>
          </WhitePanel>
        </section>

        {/* S8 */}
        <section className="pt-16">
          <StageTitle index="06" title="Питання, які всі ставлять." />
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="panel-dark p-4">
                <summary className="flex min-h-[36px] cursor-pointer items-center text-[15px] font-semibold">
                  {f.q}
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* S9 */}
        <section id="s9" className="pt-16 text-center">
          <h2 className="font-display mx-auto max-w-[20ch] text-2xl leading-tight font-extrabold text-paper sm:text-3xl">
            Твій AI давно склав про тебе думку. Подивись її.
          </h2>
          <div className="mt-6 flex justify-center">
            <Cta className="w-full max-w-[320px]" />
          </div>
          <p className="font-mono mx-auto mt-4 max-w-[40ch] text-[11px] leading-relaxed text-paper/55">
            Жодне речення на картці не вигадане. Усе — помічено AI, з яким ти
            говориш щодня.
          </p>
        </section>

        {/* S10 */}
        <footer className="pt-14">
          <p className="font-mono text-center text-[11px] text-paper/55">
            AIONLY · Умови · Приватність · hello@aionly.io
          </p>
        </footer>
      </main>

      {/* sticky mobile CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-paper/15 bg-[#14151A] px-4 py-3 transition-opacity sm:hidden ${
          showBar ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <Cta />
      </div>
    </div>
  );
}
