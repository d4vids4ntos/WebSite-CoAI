'use client'

import Image from 'next/image'
import SplitText from '@/components/animations/SplitText'
import Icon from '@/components/icons/Icon'
import type {
  AccentName,
  IndustryPageData,
  IndustrySolution,
} from '@/data/industries/types'

const ACCENT_SURFACE: Record<AccentName, string> = {
  mint: '#dde8dc',
  peach: '#fde4d0',
  blush: '#fcd6cf',
  sky: '#dce8ee',
  lilac: '#e3dceb',
}

const ACCENT_PILL: Record<AccentName, string> = {
  mint: '#7fa890',
  peach: '#ff7a32',
  blush: '#e8755e',
  sky: '#5b8caf',
  lilac: '#8a72b3',
}

const SLATE = '#3d4a5c'
const SLATE_SOFT = '#5b6b7e'

interface IndustryPageProps {
  data: IndustryPageData
}

export default function IndustryPage({ data }: IndustryPageProps) {
  return (
    <div style={{ backgroundColor: '#fff8f3' }}>
      {/* Section 1 — Hero band */}
      <section
        className="pt-32 pb-20 lg:pb-28 relative overflow-hidden"
        style={{ backgroundColor: ACCENT_SURFACE.mint }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8 text-center relative z-10">
          <p
            className="font-label text-xs font-semibold uppercase mb-5"
            style={{ color: SLATE_SOFT, letterSpacing: '0.2em' }}
          >
            Industry value chain — {data.name}
          </p>
          <div className="overflow-hidden mb-6" style={{ color: SLATE }}>
            <SplitText
              text={data.name}
              tag="h1"
              splitType="chars"
              delay={20}
              duration={1.1}
              ease="expo.out"
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              textAlign="center"
              className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
            />
          </div>
          <p
            className="mt-2 font-body text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: SLATE_SOFT }}
          >
            {data.heroSummary}
          </p>
        </div>
        {/* Decorative geometric shape — right edge, hidden on small */}
        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-32 lg:w-48 opacity-70 pointer-events-none"
        >
          <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" fill={ACCENT_PILL.mint} />
        </svg>
      </section>

      {/* Section 2 — Two-column intro */}
      <section className="py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p
              className="font-label text-xs font-semibold uppercase mb-3"
              style={{ color: SLATE_SOFT, letterSpacing: '0.2em' }}
            >
              Value Chain
            </p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl leading-tight mb-6"
              style={{ color: SLATE }}
            >
              {data.name}: {data.introTagline}.
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: SLATE_SOFT }}
            >
              {data.introBody}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden order-first lg:order-none">
            <Image
              src={data.photo}
              alt=""
              width={720}
              height={480}
              className="w-full h-auto object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Section 3 — Where we enter (value-chain diagram) */}
      <section className="py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p
              className="font-label text-xs font-semibold uppercase mb-3"
              style={{ color: SLATE_SOFT, letterSpacing: '0.2em' }}
            >
              Where we enter
            </p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl leading-tight mb-6"
              style={{ color: SLATE }}
            >
              {data.valueChain.headline}
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: SLATE_SOFT }}
            >
              {data.valueChain.body}
            </p>
          </div>

          <div
            className="relative rounded-2xl px-6 py-12 lg:px-12 lg:py-16 overflow-hidden"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgba(221,232,220,0.5) 0%, rgba(255,248,243,0) 70%)',
              minHeight: 480,
            }}
          >
            {/* Top: Full Module pill centered */}
            <div className="flex justify-center mb-6">
              {data.valueChain.categories
                .filter((c) => c.accent === 'mint')
                .map((c) => (
                  <span
                    key={c.label}
                    className="rounded-full px-5 py-2 font-label text-xs font-semibold uppercase"
                    style={{
                      backgroundColor: ACCENT_SURFACE.mint,
                      color: SLATE,
                      letterSpacing: '0.15em',
                    }}
                  >
                    {c.label}
                  </span>
                ))}
            </div>

            {/* Middle: category pills row */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {data.valueChain.categories
                .filter((c) => c.accent !== 'mint')
                .map((c) => (
                  <span
                    key={c.label}
                    className="rounded-full px-5 py-2 font-label text-xs font-semibold uppercase"
                    style={{
                      backgroundColor: ACCENT_SURFACE[c.accent],
                      color: SLATE,
                      letterSpacing: '0.15em',
                    }}
                  >
                    {c.label}
                  </span>
                ))}
            </div>

            {/* Top arrow line (Business Environment) */}
            <div className="mb-3 hidden lg:flex items-center gap-3">
              <p
                className="font-label text-xs font-semibold uppercase shrink-0"
                style={{ color: SLATE_SOFT, letterSpacing: '0.2em' }}
              >
                Business Environment
              </p>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: 'rgba(91,107,126,0.4)' }}
              />
              <Icon
                name="arrow_forward"
                style={{ fontSize: 14, color: SLATE_SOFT }}
              />
            </div>

            {/* Stages row — horizontal lg, vertical below */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 my-6">
              {data.valueChain.stages.map((stage, i) => (
                <div key={stage} className="flex flex-col lg:flex-row items-center gap-3">
                  <div
                    className="rounded-xl px-4 py-3 font-body text-sm font-semibold text-center"
                    style={{
                      backgroundColor: '#ffffff',
                      color: SLATE,
                      border: `1px solid rgba(91,107,126,0.18)`,
                    }}
                  >
                    {stage}
                  </div>
                  {i < data.valueChain.stages.length - 1 && (
                    <Icon
                      name="arrow_forward"
                      className="rotate-90 lg:rotate-0"
                      style={{ fontSize: 18, color: SLATE_SOFT }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom arrow line (Services) */}
            <div className="mt-3 hidden lg:flex items-center gap-3">
              <p
                className="font-label text-xs font-semibold uppercase shrink-0"
                style={{ color: SLATE_SOFT, letterSpacing: '0.2em' }}
              >
                Services
              </p>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: 'rgba(91,107,126,0.4)' }}
              />
              <Icon
                name="arrow_forward"
                style={{ fontSize: 14, color: SLATE_SOFT }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Solutions grid */}
      <section className="py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <h2
            className="font-headline font-bold text-3xl lg:text-4xl leading-tight mb-12 max-w-2xl"
            style={{ color: SLATE }}
          >
            Solutions that fit your needs.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.solutions.map((s) => (
              <SolutionCard key={s.id} solution={s} />
            ))}
          </div>

          {/* Full module card (mint, full width) */}
          <article
            className="relative overflow-hidden rounded-2xl p-10 lg:p-12 mt-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-center"
            style={{ backgroundColor: ACCENT_SURFACE.mint }}
          >
            <div className="relative z-10">
              <span
                className="rounded-full px-4 py-1.5 font-label text-xs font-semibold uppercase inline-block mb-4"
                style={{
                  backgroundColor: '#ffffff',
                  color: SLATE,
                  letterSpacing: '0.15em',
                }}
              >
                Full Module
              </span>
              <h3
                className="font-headline font-bold text-2xl lg:text-3xl mb-4"
                style={{ color: SLATE }}
              >
                {data.fullModule.title}
              </h3>
              <p
                className="font-body text-base leading-relaxed max-w-xl"
                style={{ color: SLATE_SOFT }}
              >
                {data.fullModule.description}
              </p>
            </div>
            <div className="relative z-10 lg:justify-self-end">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-white transition-transform hover:translate-x-0.5"
                style={{ backgroundColor: ACCENT_PILL.mint }}
              >
                See more
                <Icon name="arrow_forward" style={{ fontSize: 18 }} />
              </button>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-12 -right-12 w-72 h-72 opacity-55 pointer-events-none"
              style={{
                backgroundColor: ACCENT_PILL.mint,
                borderRadius: '50% 40% 60% 30%',
                filter: 'blur(28px)',
              }}
            />
          </article>
        </div>
      </section>

      {/* Section 5 — Numbered process rail */}
      <section className="py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p
              className="font-label text-xs font-semibold uppercase mb-3"
              style={{ color: SLATE_SOFT, letterSpacing: '0.2em' }}
            >
              Your Solution
            </p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl leading-tight"
              style={{ color: SLATE }}
            >
              An assistant personalised to your operations.
            </h2>
          </div>

          <ol
            className="relative pl-10 space-y-12"
            style={{ borderLeft: `1px solid rgba(61,74,92,0.15)` }}
          >
            {data.steps.map((step, i) => (
              <li key={step.id} className="relative">
                <div
                  className="absolute -left-[52px] top-0 w-10 h-10 grid place-items-center rounded-lg"
                  style={{
                    backgroundColor: '#ffffff',
                    border: `1px solid rgba(61,74,92,0.15)`,
                  }}
                >
                  <Icon
                    name="hub"
                    style={{ fontSize: 20, color: SLATE }}
                  />
                </div>
                <h3
                  className="font-headline font-bold text-xl mb-2"
                  style={{ color: SLATE }}
                >
                  <span
                    className="font-label mr-2 text-sm"
                    style={{ color: SLATE_SOFT }}
                  >
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  {step.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed max-w-[60ch]"
                  style={{ color: SLATE_SOFT }}
                >
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 6 — Closing CTA */}
      <section className="pb-32">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-3xl p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-center"
            style={{ backgroundColor: '#fff2e2' }}
          >
            <div className="relative z-10">
              <p
                className="font-body text-base max-w-md"
                style={{ color: SLATE_SOFT }}
              >
                {data.closing.leftBlurb}
              </p>
            </div>
            <div className="relative z-10 flex flex-col items-start lg:items-end gap-6">
              <h3
                className="font-headline font-bold text-2xl lg:text-3xl text-left lg:text-right"
                style={{ color: SLATE }}
              >
                The journey starts here.
              </h3>
              <p
                className="font-body text-sm text-left lg:text-right max-w-xs"
                style={{ color: SLATE_SOFT }}
              >
                Talk to a certified AI solution specialist. See the first results within seven days. Straight forward and no surprises.
              </p>
              <a
                href="https://cal.read.ai/philippe-datakult/30-min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-white transition-colors"
                style={{ backgroundColor: SLATE }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = SLATE_SOFT)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = SLATE)
                }
              >
                Book a call
                <Icon name="arrow_forward" style={{ fontSize: 18 }} />
              </a>
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-12 bottom-0 w-72 h-72 opacity-60 pointer-events-none"
              style={{
                backgroundColor: '#f5d99a',
                borderRadius: '50% 40% 60% 30%',
                filter: 'blur(28px)',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function SolutionCard({ solution }: { solution: IndustrySolution }) {
  const surface = ACCENT_SURFACE[solution.accent]
  const pill = ACCENT_PILL[solution.accent]

  return (
    <article
      className="relative overflow-hidden rounded-2xl p-8 min-h-[260px] flex flex-col"
      style={{ backgroundColor: surface }}
    >
      <div className="relative z-10 flex flex-col h-full">
        <Icon
          name={solution.icon}
          style={{ fontSize: 28, color: SLATE }}
        />
        <h3
          className="font-headline font-bold text-xl mt-4 mb-3"
          style={{ color: SLATE }}
        >
          {solution.title}
        </h3>
        <p
          className="font-body text-sm leading-relaxed mb-6 flex-1"
          style={{ color: SLATE_SOFT }}
        >
          {solution.description}
        </p>
        <button
          type="button"
          className="self-start inline-flex items-center gap-1.5 rounded-full px-5 py-2 font-body text-sm font-semibold text-white transition-transform hover:translate-x-0.5"
          style={{ backgroundColor: pill }}
        >
          See more
          <Icon name="arrow_forward" style={{ fontSize: 16 }} />
        </button>
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -right-8 w-44 h-44 opacity-55 pointer-events-none"
        style={{
          backgroundColor: pill,
          borderRadius: '50% 40% 60% 30%',
          filter: 'blur(20px)',
        }}
      />
    </article>
  )
}
