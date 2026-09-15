import { createFileRoute } from "@tanstack/react-router";

import {
  AvatarIcon,
  BatteryIcon,
  BookIcon,
  ChestIcon,
  CheckIcon,
  CircuitBrainIcon,
  CrystalBallIcon,
  DiceIcon,
  FlameIcon,
  HandshakeIcon,
  HeartsIcon,
  LightningIcon,
  MagnifierIcon,
  MapIcon,
  RadarIcon,
  ScrollIcon,
  SpeechIcon,
  SplitMaskIcon,
  StarIcon,
} from "@/components/pixel-icons";
import {
  BlockHeader,
  ColumnPair,
  FlameBadge,
  List,
  Marker,
  Panel,
  Quote,
  SectionTitle,
  SegmentedBar,
  StatRow,
  Tag,
} from "@/components/card-ui";

const TITLE = "Hul — публічний AI-профіль | AIONLY";
const DESCRIPTION =
  "AI-картка Hul: архітектор запусків. Архетип-мікс, суперсила, мислення, мапа знань і кого шукає — усе помічено AI, з яким він говорить щодня.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CardPage,
});

const NAV = [
  { i: "01", label: "хто я", id: "s01" },
  { i: "02", label: "мислення", id: "s02" },
  { i: "03", label: "вміння", id: "s03" },
  { i: "04", label: "як зі мною", id: "s04" },
  { i: "05", label: "кого шукаю", id: "s05" },
  { i: "06", label: "епілог", id: "s06" },
];

function CardPage() {
  return (
    <main className="mx-auto w-full max-w-[680px] px-4 pb-16 sm:px-6">
      <Hero />
      <SectionNav />

      {/* 01 */}
      <div className="space-y-5 pt-8">
        <SectionTitle index="01" title="Хто я" id="s01" />

        <Panel>
          <BlockHeader icon={<StarIcon />} title="Архетип-мікс" />
          <StatRow
            label="Творець"
            value={45}
            note="постійно збирає нові продукти й воронки, часто власноруч із AI"
          />
          <StatRow
            label="Дослідник"
            value={31}
            tone="ink"
            note="тестує нові ніші, канали й монетизацію"
          />
          <StatRow
            label="Мудрець"
            value={25}
            tone="ink"
            note="розкладає рішення і ринок на механізми"
          />
        </Panel>

        <Panel>
          <BlockHeader
            icon={<LightningIcon />}
            title="Суперсила"
            badge="STARTER"
          />
          <h4 className="font-display text-xl leading-snug font-extrabold">
            Стискати шлях від задуму до реальності
          </h4>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
            Там, де інші ще обговорюють MVP, він часто вже має URL
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>Швидке прототипування</Tag>
            <Tag>Продуктова декомпозиція</Tag>
            <Tag>Міст між бізнесом і технікою</Tag>
          </div>
          <p className="font-mono mt-4 border-t-2 border-ink/10 pt-3 text-[12px] leading-relaxed">
            Продуктове мислення + сам доводить до софту. Зазвичай беруть щось
            одне.
          </p>
        </Panel>

        <Panel>
          <BlockHeader icon={<SplitMaskIcon />} title="Суперечності" />
          <p className="text-lg leading-snug font-semibold">
            <Marker>Хоче свободи — і сам створює собі тиск</Marker>
          </p>
          <div className="mt-4">
            <List
              items={[
                "Будує дуже швидко — масштабує значно повільніше",
                "Добре рахує ризики — але регулярно ставить на себе",
              ]}
            />
          </div>
        </Panel>

        <Panel>
          <BlockHeader icon={<FlameIcon />} title="Панель приладів" />
          <div className="divide-y-2 divide-ink/10">
            <StatRow label="Амбіція" value={97} />
            <StatRow label="Цікавість" value={95} />
            <StatRow label="Автономія" value={94} />
            <StatRow label="Апетит до ризику" value={78} />
            <StatRow label="Соціальна батарейка" value={58} />
          </div>
        </Panel>

        <Panel>
          <BlockHeader icon={<CircuitBrainIcon />} title="Його запити до AI" />
          <div className="divide-y-2 divide-ink/10">
            <StatRow label="Продакт-спаринг партнер" value={27} tone="ink" />
            <StatRow label="Психологічний дебагер" value={22} tone="ink" />
            <StatRow label="Кар'єрний упаковщик" value={17} tone="ink" />
          </div>
        </Panel>

        <Panel>
          <BlockHeader icon={<CrystalBallIcon />} title="AI-пророцтво" />
          <Quote>
            Ти заробиш найбільше не тоді, коли вигадаєш найкращий продукт, а
            коли витримаєш достатньо довго з одним хорошим.
          </Quote>
        </Panel>

        <Panel>
          <BlockHeader icon={<MagnifierIcon />} title="Приховане питання" />
          <Quote>
            Чи маю я цінність, якщо прямо зараз нічого великого не доводжу?
          </Quote>
          <p className="font-mono mt-3 text-[12px] leading-relaxed text-ink/70">
            Наступний рівень — використовувати стабільність як платформу.
          </p>
        </Panel>
      </div>

      {/* 02 */}
      <div className="space-y-5 pt-12">
        <SectionTitle index="02" title="Як я думаю" id="s02" />

        <Panel>
          <BlockHeader icon={<CircuitBrainIcon />} title="Машина зв'язків" />
          <p className="text-[15px] leading-relaxed">
            Швидко з'єднує продукт, психологію, економіку і власну поведінку в
            одну модель
          </p>
          <p className="font-mono mt-3 rounded-md border-2 border-blue px-3 py-2 text-[12px] leading-relaxed text-blue">
            AI-профіль → віральність → психологія мотивації → кар'єрна стратегія
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
            А що, якщо це не окрема проблема, а одна система?
          </p>
        </Panel>

        <Panel>
          <BlockHeader
            icon={<SplitMaskIcon />}
            title="Інтелектуальна пастка"
          />
          <p className="text-lg leading-snug font-semibold">
            Мислення інколи стає заміною ставки
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
            Ще одна модель ситуації здається прогресом — хоча рішення досі не
            прийнято.
          </p>
        </Panel>

        <Panel>
          <BlockHeader icon={<RadarIcon />} title="Зараз" />
          <p className="font-display text-2xl leading-tight font-black">
            Менше розпорошення
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-[15px]">
              <span className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-ink/55">
                Будую{" "}
              </span>
              AI-профіль і compatibility network
            </p>
            <p className="text-[15px]">
              <span className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-ink/55">
                Досліджую{" "}
              </span>
              органічну дистрибуцію й віральність
            </p>
          </div>
        </Panel>
      </div>

      {/* 03 */}
      <div className="space-y-5 pt-12">
        <SectionTitle index="03" title="Що я вмію" id="s03" />

        <Panel>
          <BlockHeader icon={<MapIcon />} title="Мапа знань" />
          <div className="space-y-4">
            {[
              {
                tier: "Щоденна практика",
                tone: "blue" as const,
                tags: [
                  "AI-assisted product work",
                  "product discovery",
                  "Next.js",
                  "Supabase",
                  "аналітика воронок",
                ],
              },
              {
                tier: "Впевнений рівень",
                tone: "ink" as const,
                tags: ["Scrum", "Jira", "Meta Ads", "Stripe"],
              },
              {
                tier: "Небезпечний",
                tone: "ink" as const,
                tags: ["SQL", "Cloudflare Workers", "n8n"],
              },
              {
                tier: "Початківець",
                tone: "ink" as const,
                tags: ["токеноміка", "iOS-дистрибуція"],
              },
            ].map((t) => (
              <div key={t.tier}>
                <p className="font-mono mb-2 text-[11px] font-bold tracking-[0.14em] uppercase text-ink/55">
                  {t.tier}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <Tag key={tag} tone={t.tone}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <BlockHeader icon={<HandshakeIcon />} title="Приношу · шукаю допомогу" />
          <ColumnPair
            left={{
              title: "Приношу",
              items: [
                "туманна ідея → конкретний MVP",
                "мова бізнесу і розробки",
                "воронка від кліку до монетизації",
                "ownership за запуск",
              ],
            }}
            right={{
              title: "Шукаю допомогу",
              items: [
                "сильна дистрибуція",
                "фокус після запуску",
                "контрбаланс новим напрямам",
              ],
            }}
          />
        </Panel>
      </div>

      {/* 04 */}
      <div className="space-y-5 pt-12">
        <SectionTitle index="04" title="Як зі мною" id="s04" />

        <Panel>
          <BlockHeader icon={<BookIcon />} title="Інструкція" />
          <ColumnPair
            left={{
              title: "Працює",
              items: [
                "реальна проблема замість нетворкінгу",
                "аргументи й дані",
                "автономія при чіткому результаті",
                "швидко до експерименту",
              ],
            }}
            right={{
              title: "Не спрацює",
              items: [
                "мікроменеджмент → падіння залученості",
                "процеси без результату → шукає коротший шлях",
                '"так прийнято" → негайне "чому?"',
              ],
            }}
          />
          <p className="font-mono mt-4 border-t-2 border-ink/10 pt-3 text-[12px] leading-relaxed">
            Якщо розмова пережила десять хвилин — наприкінці може бути MVP.
          </p>
        </Panel>

        <Panel>
          <BlockHeader icon={<SpeechIcon />} title="Теми" />
          <div className="flex flex-wrap gap-2">
            {[
              "consumer AI",
              "запуски з нуля",
              "growth і unit economics",
              "психологія",
              "механіка зв'язків",
              "продуктова кар'єра",
              "футбол",
            ].map((t) => (
              <span
                key={t}
                className="font-mono inline-flex items-center gap-1.5 rounded-md border-2 border-ink/25 px-2 py-1 text-[11px]"
              >
                <SpeechIcon size={12} />
                {t}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
            Найгірший старт: «Просто розкажи трохи про себе».
          </p>
        </Panel>

        <Panel>
          <BlockHeader icon={<BatteryIcon />} title="Заряджає · виснажує" />
          <ColumnPair
            left={{
              title: "Заряджає",
              items: [
                "прогрес за короткий цикл",
                "створення з нуля",
                "сильна гіпотеза",
                "чесна дискусія",
              ],
            }}
            right={{
              title: "Виснажує",
              items: [
                "робота без сигналу прогресу",
                "процеси заради процесів",
                "забагато незакритих напрямів",
              ],
            }}
          />
        </Panel>

        <Panel>
          <BlockHeader icon={<DiceIcon />} title="Hobby DNA" />
          <List
            items={[
              "pet-projects — спосіб життя",
              "бокс — частина історії",
              "гори — періодично серйозно",
              "футбол — стежить",
            ]}
          />
          <p className="font-mono mt-4 border-t-2 border-ink/10 pt-3 text-[12px]">
            7.4/10 · гори + виклик + новий проєкт
          </p>
        </Panel>
      </div>

      {/* 05 */}
      <div className="space-y-5 pt-12">
        <SectionTitle index="05" title="Кого я шукаю" id="s05" />

        <Panel>
          <BlockHeader icon={<RadarIcon />} title="Шукаю зараз" />
          <div className="rounded-md border-2 border-ink bg-paper p-3.5">
            <p className="font-mono text-[12px] leading-relaxed">
              <span className="text-flame">&gt; </span>
              Сильний growth-партнер, який доводить consumer-продукт від MVP до
              стабільного каналу
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Tag tone="blue">growth-marketing</Tag>
            <Tag tone="blue">consumer-ai</Tag>
            <Tag tone="blue">distribution</Tag>
          </div>
        </Panel>

        <Panel>
          <BlockHeader icon={<ChestIcon />} title="Запропонувати" />
          <ul className="space-y-2.5">
            {[
              "За вечір перевірити дивну гіпотезу",
              "Тренування або розмова про спорт",
              "Маршрут у горах",
              "Розібрати живу воронку",
              "Потестити новий AI-інструмент",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[15px]">
                <CheckIcon size={16} className="mt-1 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel>
          <BlockHeader icon={<HeartsIcon />} title="Яких людей" />
          <p className="text-[15px] leading-relaxed">
            Люди, які реально щось будують; партнери по інтелектуальному
            пінг-понгу, а не фанати погоджуватися.
          </p>
        </Panel>
      </div>

      {/* 06 */}
      <div className="space-y-5 pt-12">
        <SectionTitle index="06" title="Епілог" id="s06" />

        <Panel>
          <BlockHeader icon={<ScrollIcon />} title="Якщо коротко" />
          <div className="font-mono space-y-2.5 text-[12px] leading-relaxed">
            <p>
              <span className="font-bold">Суперсила:</span> невизначеність →
              структура → продукт
            </p>
            <p>
              <span className="font-bold">Пастка:</span> нове цікавіше саме
              тоді, коли старому треба терпіння
            </p>
            <p>
              <span className="font-bold">Челендж:</span> талант стартів →
              накопичувальний результат
            </p>
          </div>
        </Panel>

        <Panel>
          <BlockHeader
            icon={<HandshakeIcon />}
            title="Ми з тобою, скоріше за все…"
          />
          <ul className="space-y-2.5">
            {[
              "почали б обговорювати ідею й відкрили б код",
              "посперечалися б про реальний попит",
              "домовились би щось конкретне перевірити разом",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[15px]">
                <CheckIcon size={16} className="mt-1 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      {/* Footer CTA */}
      <div className="pt-12">
        <a
          href="#s01"
          className="font-display flex min-h-[56px] items-center justify-center rounded-2xl border-2 border-ink bg-white px-5 py-4 text-center text-base font-extrabold shadow-[3px_3px_0_var(--color-ink)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          Цікаво, що твій AI знає про тебе? Створи свою картку →
        </a>
        <p className="font-mono mt-4 text-center text-[11px] leading-relaxed text-ink/60">
          Жодне речення на картці не вигадане. Усе — помічено AI, з яким ти
          говориш щодня.
        </p>
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative -mx-4 overflow-hidden sm:-mx-6">
      <div className="relative flex h-[55vh] min-h-[420px] flex-col justify-end bg-gradient-to-b from-[#e9eae4] via-[#e2e4dd] to-[#cfd1c9]">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pb-24">
          <AvatarIcon size={72} className="text-ink/45" />
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/45">
            AI-фото
          </span>
        </div>

        <div className="relative bg-gradient-to-t from-ink/85 via-ink/60 to-transparent px-5 pt-16 pb-6 sm:px-6">
          <span className="font-mono inline-block rounded-md border-2 border-white/70 px-2 py-1 text-[10px] font-bold tracking-[0.14em] text-white uppercase">
            Публічний AI-профіль
          </span>
          <h1 className="font-display mt-3 text-5xl leading-none font-black text-white sm:text-6xl">
            Hul
          </h1>
          <p className="font-display mt-2 text-base font-bold text-white">
            ✦ Архітектор Запусків
          </p>
          <p className="mt-1.5 text-[15px] leading-snug text-white/80">
            Він швидко перетворює нечітку ідею на працюючий продукт
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-white/75">
              AI · Продукти · Психологія · Kyiv
            </span>
          </div>
          <div className="mt-4">
            <FlameBadge>94% AI-контекст</FlameBadge>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionNav() {
  return (
    <nav className="sticky top-0 z-10 -mx-4 border-b-2 border-ink/10 bg-paper/95 px-4 py-2.5 backdrop-blur sm:-mx-6 sm:px-6">
      <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {NAV.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className="font-mono flex shrink-0 items-center gap-1.5 rounded-md border-2 border-ink/20 px-2.5 py-1.5 text-[11px] whitespace-nowrap transition-colors hover:border-ink"
          >
            <span className="font-bold text-flame">{n.i}</span>
            <span>{n.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function _unusedIcons() {
  return [SegmentedBar, Quote, MapIcon];
}
