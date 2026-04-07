'use client'

import Link from 'next/link'
import SplitText from '@/components/animations/SplitText'
import Icon from '@/components/icons/Icon'

const team = [
  {
    name: 'Philippe Küng',
    archetype: 'The Polymath',
    role: 'Founder & AI Architect',
    description:
      'EHL Lausanne and MIT Sloan trained. Former Head of Data & AI at Crayon AG — deployed production ML across hospitality, energy, and manufacturing. Founded and scaled The Code Venture to €1M revenue serving 30+ Swiss startups. Co-led a government reskilling program that transitioned hundreds into tech careers after the 2008 crisis.',
    capability: 'Strategy & Domain Expertise',
    icon: 'neurology',
    featured: true,
  },
  {
    name: 'David Santos',
    archetype: 'The Builder',
    role: 'Lead AI/ML Engineer',
    description:
      'Graduated from the top polytechnical university in Portugal in computer science. Devoted his career not just to using AI tools but to creating new ones and contributing to research in the AI/ML community. The person who turns strategic vision into production systems.',
    capability: 'Engineering',
    icon: 'code',
    featured: false,
  },
  {
    name: 'Daria',
    archetype: 'The Communicator',
    role: 'AI & Linguistics Specialist',
    description:
      'Deep expertise in linguistics and the intersection of AI and natural language. Understands how humans communicate with machines, how to design interfaces that feel natural, and how to bridge the gap between technical capability and human understanding.',
    capability: 'Human-AI Interaction',
    icon: 'translate',
    featured: false,
  },
  {
    name: 'Bruno Reis',
    archetype: 'The Guardian',
    role: 'Cybersecurity Specialist',
    description:
      'Ensures every solution Clinic of AI deploys is secure by design. Critical for manufacturing environments (41% of all cyberattacks), real estate data privacy, and any client handling sensitive operational data. GDPR compliance expertise for European clients.',
    capability: 'Security',
    icon: 'shield',
    featured: false,
  },
]

const timeline = [
  {
    year: '2008',
    title: 'Government Reskilling Program',
    description:
      'Philippe co-led a government-funded transition that moved hundreds of displaced professionals into high-demand technology roles through structured pathways.',
    icon: 'lightbulb',
    highlight: true,
  },
  {
    year: '2012 - 2019',
    title: 'The Code Venture',
    description:
      'Philippe built and scaled a consulting firm to €1M revenue with 13 employees, serving 30+ Swiss startups in launch and growth operations.',
    icon: 'storage',
    highlight: false,
  },
  {
    year: '2020 - 2023',
    title: 'Crayon AG — Head of Data and AI',
    description:
      'Led AI strategy across hospitality, energy, and manufacturing at one of Microsoft\'s top AI/ML partners, including predictive maintenance using 600+ sensors.',
    icon: 'corporate_fare',
    highlight: false,
  },
  {
    year: '2024',
    title: 'Clinic of AI Founded',
    description:
      'Philippe, David, Daria, and Bruno come together to launch the Forward Deployed AI Engineer model for mid-market companies across Europe.',
    icon: 'neurology',
    highlight: true,
  },
]

const values = [
  {
    icon: 'handshake',
    title: 'One trusted partner, not disconnected tools.',
    description:
      'One partner who connects solutions across the value chain and keeps them running.',
  },
  {
    icon: 'account_tree',
    title: 'Workflow-first implementation.',
    description:
      'We map the real workflow, not the org chart version. Solutions go where teams already make daily decisions.',
  },
  {
    icon: 'groups',
    title: 'Side-by-side delivery.',
    description:
      'We work inside operations teams so adoption happens in context, not in a slide deck handoff.',
  },
  {
    icon: 'eco',
    title: 'Continuity by design.',
    description:
      'Transfer of ownership is built in so your team can run the system without permanent vendor dependency.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section
        className="pt-32 pb-24 relative grid-watermark overflow-hidden"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-5">About</p>
            <div className="overflow-hidden mb-8">
              <SplitText
                text="Four people who will work on your business."
                tag="h1"
                splitType="words"
                delay={20}
                duration={1.1}
                ease="expo.out"
                from={{ opacity: 0, y: 80 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="left"
                className="page-title"
              />
            </div>
            <div className="overflow-hidden">
              <SplitText
                text="Not a wall of headshots. Each person covers a critical capability: strategy and domain expertise, engineering, human-AI interaction, and security. This is the Forward Deployed AI Engineer model in action."
                tag="p"
                splitType="lines"
                delay={80}
                duration={0.8}
                ease="power2.out"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="left"
                className="font-body text-lg leading-relaxed"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#fff5e8' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">The Team</p>
            <div className="overflow-hidden">
              <SplitText
                text="Deep tech. Embedded delivery. Continuity."
                tag="h2"
                splitType="words"
                delay={50}
                duration={0.9}
                ease="power3.out"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="center"
                className="font-headline font-bold text-3xl lg:text-4xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: member.featured ? '#001215' : '#ffffff',
                  boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                }}
              >
                <div className="p-8 lg:p-10 flex flex-col gap-6">
                  <div className="flex items-start gap-5">
                    <div
                      className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: member.featured
                          ? 'rgba(161,64,0,0.3)'
                          : '#001215',
                      }}
                    >
                      <Icon
                        name={member.icon}
                        style={{
                          fontSize: '24px',
                          color: member.featured ? '#ff7a32' : '#fff8f3',
                        }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-headline font-bold text-xl"
                        style={{ color: member.featured ? '#fff8f3' : '#001215' }}
                      >
                        {member.name}
                      </p>
                      <p
                        className="font-body text-body-sm"
                        style={{
                          color: member.featured
                            ? 'rgba(255,248,243,0.6)'
                            : '#2d4a4d',
                        }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg self-start"
                    style={{
                      backgroundColor: member.featured
                        ? 'rgba(161,64,0,0.2)'
                        : 'rgba(161,64,0,0.08)',
                    }}
                  >
                    <span
                      className="font-label text-xs uppercase font-semibold"
                      style={{
                        color: member.featured ? '#ff7a32' : '#a14000',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {member.archetype}
                    </span>
                    <span className="font-body text-xs" style={{ color: member.featured ? 'rgba(255,248,243,0.4)' : 'rgba(45,74,77,0.4)' }}>
                      &mdash;
                    </span>
                    <span
                      className="font-body text-xs"
                      style={{
                        color: member.featured
                          ? 'rgba(255,248,243,0.6)'
                          : 'rgba(45,74,77,0.6)',
                      }}
                    >
                      {member.capability}
                    </span>
                  </div>

                  <p
                    className="font-body text-body-sm leading-relaxed"
                    style={{
                      color: member.featured
                        ? 'rgba(255,248,243,0.75)'
                        : '#2d4a4d',
                    }}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Origin Story</p>
            <div className="overflow-hidden">
              <SplitText
                text="Built across operations, AI, and workforce transition."
                tag="h2"
                splitType="words"
                delay={50}
                duration={0.9}
                ease="power3.out"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="center"
                className="font-headline font-bold text-3xl lg:text-4xl"
              />
            </div>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{ backgroundColor: 'rgba(200,168,130,0.3)' }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10 pl-20">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className="absolute -left-12 top-1 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: item.highlight ? '#a14000' : '#001215',
                      boxShadow: item.highlight
                        ? '0 0 0 4px rgba(161,64,0,0.15)'
                        : '0 0 0 4px rgba(0,18,21,0.08)',
                    }}
                  >
                    <Icon
                      name={item.icon}
                      style={{ fontSize: '14px', color: '#fff8f3' }}
                    />
                  </div>

                  <div
                    className="rounded-2xl p-7"
                    style={{
                      backgroundColor: item.highlight ? '#fff5e8' : '#ffffff',
                      boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                      border: item.highlight
                        ? '1px solid rgba(161,64,0,0.15)'
                        : '1px solid rgba(200,168,130,0.1)',
                    }}
                  >
                    <p
                      className="font-label text-xs font-semibold mb-2"
                      style={{
                        color: item.highlight ? '#a14000' : '#2d4a4d',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {item.year}
                    </p>
                    <h3
                      className="font-headline font-bold text-xl mb-3"
                      style={{ color: '#001215' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-body text-body-sm leading-relaxed"
                      style={{ color: '#2d4a4d' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#fff2e2' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Operating Principles</p>
            <div className="overflow-hidden">
              <SplitText
                text="How we work inside client operations."
                tag="h2"
                splitType="words"
                delay={50}
                duration={0.9}
                ease="power3.out"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="center"
                className="font-headline font-bold text-3xl lg:text-4xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 hex-clip flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: '#001215' }}
                >
                  <Icon
                    name={value.icon}
                    style={{ fontSize: '18px', color: '#fff8f3' }}
                  />
                </div>
                <div>
                  <h3
                    className="font-headline font-bold text-lg mb-1"
                    style={{ color: '#001215' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="font-body text-body-sm leading-relaxed"
                    style={{ color: '#2d4a4d' }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 lg:p-10"
            style={{
              backgroundColor: '#ffffff',
              boxShadow: '0 12px 40px rgba(0,18,21,0.06)',
            }}
          >
            <p className="section-label mb-4">Client and Partner Proof</p>
            <h2
              className="font-headline font-bold text-2xl mb-4"
              style={{ color: '#001215' }}
            >
              References can be shared in qualified conversations.
            </h2>
            <p
              className="font-body text-body-md leading-relaxed mb-6"
              style={{ color: '#2d4a4d' }}
            >
              Some engagements include confidential operational data. We share named references,
              implementation evidence, and contactable proof during qualification and NDA-aligned
              calls when needed.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'Hospitality operations teams',
                'Manufacturing plants',
                'Professional services firms',
                'Swiss startup ecosystem',
                'Public workforce transition programs',
              ].map((item) => (
                <span
                  key={item}
                  className="font-body text-body-sm px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: '#fff2e2', color: '#2d4a4d' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-10"
        style={{ backgroundColor: '#001215', borderTop: '1px solid rgba(255,248,243,0.06)' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-body-md" style={{ color: 'rgba(255,248,243,0.65)' }}>
              Ready to discuss your operation? 20 minutes, no pitch deck.
            </p>
            <Link href="/contact" className="btn-primary whitespace-nowrap shrink-0">
              Book a 20-minute conversation
              <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
