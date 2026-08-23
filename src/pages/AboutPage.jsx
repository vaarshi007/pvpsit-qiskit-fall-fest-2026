import React from 'react';

export default function AboutPage({ setActivePage, onOpenRegister }) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter py-section-gap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              PVPSIT Qiskit Fall Fest 2026
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-on-surface md:font-headline-xl font-headline-lg-mobile text-headline-lg-mobile">
            About PVPSIT Qiskit Fall Fest 2026
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Join us for an immersive journey into quantum computing. PVPSIT Qiskit Fall Fest 2026 is a premier event designed to bridge the gap between theoretical physics and practical quantum development. Experience cutting-edge talks, hands-on workshops, and collaborative challenges.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={onOpenRegister}
              className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary-fixed-variant transition-colors shadow-pulse-pink"
            >
              Register Now
            </button>
            <button
              onClick={() => setActivePage('schedule')}
              className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-secondary/5 transition-colors"
            >
              View Schedule
            </button>
          </div>
        </div>

        <div className="relative w-full h-[450px] rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container flex items-center justify-center p-8">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8a_dEp2QpQuMUdR82QmzNygLeoeKUrX5bNqG5mccrDtqmEQ_KymfKguBUkEDD7fVa6cD7-xfjDhVYerxRDdhccX-fqlnYFlykH1P9oRHzyPl-3XKyXGAzH7-2B12TqBf5QfHtev-HB24zNqABe5fCCNpu9gvLeUNnlVIc65_bRu2G0WC1SfrAJp4lH4S3--8a6Msl3NK3BavB7a4OVAWcUZ6Pq5kvf836YTmK5fUh3y3DzM3kCAe4oQ"
            alt="Quantum Computing Abstract Graphic"
            className="w-full h-full object-cover rounded-lg shadow-inner"
          />
        </div>
      </section>

      {/* Event Overview Cards (4 Pillars) */}
      <section className="max-w-container-max mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#F8F9FF] border border-outline-variant/20 p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined">school</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Learn</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Master quantum foundations through expert-led sessions designed for all skill levels.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F9FF] border border-outline-variant/20 p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Build</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Develop practical quantum circuits and applications using the Qiskit SDK.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8F9FF] border border-outline-variant/20 p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Connect</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Network with peers, researchers, and industry professionals in the quantum space.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F8F9FF] border border-outline-variant/20 p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined">travel_explore</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Explore</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Discover the latest advancements and future trends in quantum technologies.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Experience (6 Cards) */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">What You'll Experience</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              A comprehensive program designed to accelerate your quantum journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface border border-outline-variant/30 p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Talks & Sessions</h4>
              <p className="font-body-md text-sm text-on-surface-variant">Insights from quantum researchers and industry leaders.</p>
            </div>
            <div className="bg-surface border border-outline-variant/30 p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Hands-on Workshops</h4>
              <p className="font-body-md text-sm text-on-surface-variant">Guided tutorials on Qiskit implementation and algorithm design.</p>
            </div>
            <div className="bg-surface border border-outline-variant/30 p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Quantum Activities</h4>
              <p className="font-body-md text-sm text-on-surface-variant">Interactive demos and conceptual quantum games.</p>
            </div>
            <div className="bg-surface border border-outline-variant/30 p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Projects & Challenges</h4>
              <p className="font-body-md text-sm text-on-surface-variant">Collaborative problem-solving and mini-hackathons.</p>
            </div>
            <div className="bg-surface border border-outline-variant/30 p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Community Networking</h4>
              <p className="font-body-md text-sm text-on-surface-variant">Dedicated spaces to meet mentors and potential collaborators.</p>
            </div>
            <div className="bg-surface border border-outline-variant/30 p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Learning Resources</h4>
              <p className="font-body-md text-sm text-on-surface-variant">Access to exclusive study materials and Qiskit documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-inverse-surface py-section-gap relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-surface mb-6">Ready to explore quantum?</h2>
          <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto mb-10">
            Secure your spot at PVPSIT Qiskit Fall Fest 2026 and start building the future today.
          </p>
          <button
            onClick={onOpenRegister}
            className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-5 rounded hover:bg-primary-fixed-variant transition-colors shadow-pulse-pink text-lg"
          >
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
}
