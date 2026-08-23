import React, { useState, useEffect } from 'react';

export default function LandingPage({ setActivePage, onOpenRegister }) {
  // Live Countdown Calculation to Oct 28, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 12,
    minutes: 45,
    seconds: 8
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-28T09:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="relative pt-12 pb-section-gap px-gutter max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary-container/20 text-on-secondary-container px-4 py-2 rounded-full border border-secondary-container/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-caps text-label-caps tracking-wider">IBM Quantum Community Event</span>
            </div>

            {/* Main Title & Reduced Tagline */}
            <div className="space-y-4 pt-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold font-headline-xl text-on-surface tracking-tight leading-tight">
                PVPSIT <span className="text-primary">x</span> Qiskit Fall Fest 2026
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline-lg text-on-surface-variant leading-snug pt-2">
                Explore. Learn.{' '}
                <span className="text-primary relative inline-block">
                  Build the Future.
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-primary-fixed-dim" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7C49.5 2 110.5 -1.5 198 7" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
                  </svg>
                </span>
              </h2>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A quantum computing learning and innovation initiative at Prasad V. Potluri Siddhartha Institute of Technology, Vijayawada.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => setActivePage('journey')}
                className="w-full sm:w-auto bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all duration-200 flex items-center justify-center gap-2 group hover:scale-105 active:scale-110"
              >
                Start Your Quantum Journey
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button
                onClick={() => setActivePage('schedule')}
                className="w-full sm:w-auto bg-transparent border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-secondary/5 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 active:scale-110"
              >
                View Main Event
              </button>
            </div>
          </div>

          {/* Right Side: Prominent Quantum Countdown Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center mt-10 lg:mt-0 w-full">
            <div className="w-full max-w-lg bg-surface/90 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/10 relative overflow-hidden group hover:border-primary/60 transition-all duration-300">
              {/* Subtle background glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

              {/* Countdown Header */}
              <div className="flex items-center justify-between w-full mb-6 pb-4 border-b border-outline-variant/30 relative z-10">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="font-label-caps text-xs font-bold text-primary tracking-widest uppercase">
                    Quantum Countdown
                  </span>
                </div>
                <span className="text-[11px] font-label-caps bg-secondary-container/30 text-on-secondary-container px-3 py-1 rounded-full font-bold border border-secondary-container/50">
                  Oct 28–30, 2026
                </span>
              </div>

              {/* Countdown Title */}
              <p className="text-sm font-semibold text-on-surface mb-6 text-center relative z-10">
                PVPSIT Qiskit Fall Fest 2026 Begins In
              </p>

              {/* Big 4-Tile Countdown Grid */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 w-full mb-6 relative z-10">
                {/* Days */}
                <div className="bg-surface-container-low border border-outline-variant/50 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-inner hover:border-primary/50 transition-colors">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight font-headline-xl">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-label-caps text-on-surface-variant uppercase tracking-wider mt-1 font-bold">
                    Days
                  </span>
                </div>

                {/* Hours */}
                <div className="bg-surface-container-low border border-outline-variant/50 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-inner hover:border-primary/50 transition-colors">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight font-headline-xl">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-label-caps text-on-surface-variant uppercase tracking-wider mt-1 font-bold">
                    Hours
                  </span>
                </div>

                {/* Minutes */}
                <div className="bg-surface-container-low border border-outline-variant/50 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-inner hover:border-primary/50 transition-colors">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight font-headline-xl">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-label-caps text-on-surface-variant uppercase tracking-wider mt-1 font-bold">
                    Mins
                  </span>
                </div>

                {/* Seconds */}
                <div className="bg-surface-container-low border border-outline-variant/50 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-inner hover:border-primary/50 transition-colors">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight font-headline-xl animate-pulse">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-label-caps text-on-surface-variant uppercase tracking-wider mt-1 font-bold">
                    Secs
                  </span>
                </div>
              </div>

              {/* Action Button inside Card */}
              <button
                onClick={onOpenRegister}
                className="w-full bg-primary text-on-primary font-label-caps text-sm py-3.5 px-6 rounded-xl shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] font-bold flex items-center justify-center gap-2 relative z-10"
              >
                <span>Register Now for Fest</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Quantum Journey Section */}
      <section className="py-section-gap px-gutter bg-surface-container-lowest" id="journey">
        <div className="max-w-container-max mx-auto">
          {/* Quantum Logo Badge leading into Quantum Journey */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative group p-2">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all opacity-70 animate-pulse" />
              <img
                src={`${import.meta.env.BASE_URL}quantum-logo.png`}
                alt="Quantum State Logo"
                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain transform group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 drop-shadow-xl"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Your Quantum Journey</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Follow the path from foundational concepts to advanced quantum building.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/30 -translate-x-1/2" />
            <div className="space-y-12 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center justify-between group">
                <div className="w-full md:w-5/12 text-center md:text-right mb-4 md:mb-0">
                  <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                    <h3 className="font-label-caps text-primary tracking-widest mb-2">DISCOVER</h3>
                    <p className="font-body-md text-on-surface">Explore quantum computing fundamentals.</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center border-4 border-surface-container-lowest z-10 shrink-0 shadow-pulse-pink">
                  <span className="material-symbols-outlined text-primary">search</span>
                </div>
                <div className="w-full md:w-5/12" />
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center justify-between group">
                <div className="w-full md:w-5/12 text-center md:text-left mb-4 md:mb-0">
                  <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                    <h3 className="font-label-caps text-secondary tracking-widest mb-2">UNDERSTAND</h3>
                    <p className="font-body-md text-on-surface">Learn qubits, states, gates and circuits.</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center border-4 border-surface-container-lowest z-10 shrink-0">
                  <span className="material-symbols-outlined text-secondary">psychology</span>
                </div>
                <div className="w-full md:w-5/12" />
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center justify-between group">
                <div className="w-full md:w-5/12 text-center md:text-right mb-4 md:mb-0">
                  <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                    <h3 className="font-label-caps text-primary tracking-widest mb-2">BUILD</h3>
                    <p className="font-body-md text-on-surface">Build your first Qiskit circuits.</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center border-4 border-surface-container-lowest z-10 shrink-0 shadow-pulse-pink">
                  <span className="material-symbols-outlined text-primary">code</span>
                </div>
                <div className="w-full md:w-5/12" />
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center justify-between group">
                <div className="w-full md:w-5/12 text-center md:text-left mb-4 md:mb-0">
                  <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                    <h3 className="font-label-caps text-secondary tracking-widest mb-2">EXPERIMENT</h3>
                    <p className="font-body-md text-on-surface">Explore and test quantum circuits.</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center border-4 border-surface-container-lowest z-10 shrink-0">
                  <span className="material-symbols-outlined text-secondary">science</span>
                </div>
                <div className="w-full md:w-5/12" />
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center justify-between group">
                <div className="w-full md:w-5/12 text-center md:text-right mb-4 md:mb-0">
                  <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                    <h3 className="font-label-caps text-primary tracking-widest mb-2">PREPARE</h3>
                    <p className="font-body-md text-on-surface">Get ready for PVPSIT Qiskit Fall Fest and the hackathon.</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center border-4 border-surface-container-lowest z-10 shrink-0 shadow-pulse-pink">
                  <span className="material-symbols-outlined text-primary">model_training</span>
                </div>
                <div className="w-full md:w-5/12" />
              </div>

              {/* Step 6 */}
              <div className="flex flex-col md:flex-row-reverse items-center justify-between group">
                <div className="w-full md:w-5/12 text-center md:text-left mb-4 md:mb-0">
                  <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                    <h3 className="font-label-caps text-secondary tracking-widest mb-2">PVPSIT QISKIT FALL FEST</h3>
                    <p className="font-body-md text-on-surface">Three days of learning and creation.</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center border-4 border-surface-container-lowest z-10 shrink-0">
                  <span className="material-symbols-outlined text-secondary">event</span>
                </div>
                <div className="w-full md:w-5/12" />
              </div>

              {/* Step 7 */}
              <div className="flex flex-col md:flex-row items-center justify-between group">
                <div className="w-full md:w-5/12 text-center md:text-right mb-4 md:mb-0">
                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 shadow-pulse-pink">
                    <h3 className="font-label-caps text-primary tracking-widest mb-2">CREATE</h3>
                    <p className="font-body-md text-on-surface">Build and showcase your quantum project.</p>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-surface-container-lowest z-10 shrink-0 shadow-pulse-pink animate-pulse">
                  <span className="material-symbols-outlined text-on-primary">rocket_launch</span>
                </div>
                <div className="w-full md:w-5/12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions Section */}
      <section className="py-section-gap px-gutter bg-surface-container" id="sessions">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Upcoming Sessions</h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl">Prepare for the Fall Fest with our preliminary workshops.</p>
            </div>
            <button
              onClick={() => setActivePage('schedule')}
              className="mt-4 md:mt-0 text-primary font-label-caps hover:text-on-primary-fixed-variant transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-110"
            >
              View Full Schedule <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Session 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-secondary font-label-caps mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span> 29 August 2026
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Quantum Computing 101</h3>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm">From Classical Bits to Quantum Bits.</p>
              <button onClick={() => setActivePage('schedule')} className="w-full border border-primary text-primary px-4 py-2 rounded font-label-caps hover:bg-primary/5 transition-all duration-200 hover:scale-105 active:scale-110">View Details</button>
            </div>

            {/* Session 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-secondary font-label-caps mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span> 19 September 2026
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Understanding Quantum World</h3>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm">Delve into superposition and entanglement.</p>
              <button onClick={() => setActivePage('schedule')} className="w-full border border-primary text-primary px-4 py-2 rounded font-label-caps hover:bg-primary/5 transition-all duration-200 hover:scale-105 active:scale-110">View Details</button>
            </div>

            {/* Session 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-secondary font-label-caps mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span> 26 September 2026
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Quantum Gates & Qiskit Intro</h3>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm">Start building your first circuits.</p>
              <button onClick={() => setActivePage('schedule')} className="w-full border border-primary text-primary px-4 py-2 rounded font-label-caps hover:bg-primary/5 transition-all duration-200 hover:scale-105 active:scale-110">View Details</button>
            </div>

            {/* Session 4 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-secondary font-label-caps mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span> 3 October 2026
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Qiskit Hands-on Lab</h3>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm">Practical coding session with IBM Quantum.</p>
              <button onClick={() => setActivePage('schedule')} className="w-full border border-primary text-primary px-4 py-2 rounded font-label-caps hover:bg-primary/5 transition-all duration-200 hover:scale-105 active:scale-110">View Details</button>
            </div>

            {/* Session 5 Featured */}
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-primary/50 shadow-pulse-pink hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] font-label-caps px-2 py-1 rounded-bl">Featured</div>
              <div className="text-primary font-label-caps mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span> 17 October 2026
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">PVPSIT Pre-Fest Bootcamp</h3>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm">Intensive prep for the main hackathon event.</p>
              <button onClick={() => setActivePage('schedule')} className="w-full bg-primary text-on-primary px-4 py-2 rounded font-label-caps hover:bg-on-primary-fixed-variant transition-all duration-200 hover:scale-105 active:scale-110">View Details</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Event Preview Section */}
      <section className="py-section-gap px-gutter bg-surface-container-lowest relative overflow-hidden" id="hackathon">
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">PVPSIT Qiskit Fall Fest 2026</h2>
            <p className="font-body-lg text-primary max-w-2xl mx-auto font-semibold">28–30 October 2026 | Three days. One quantum journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Day 1 */}
            <div className="flex flex-col h-full bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary/30 transition-colors group">
              <div className="bg-surface-dim p-4 border-b border-outline-variant/20 flex justify-between items-center">
                <span className="font-label-caps text-on-surface">DAY 1</span>
                <span className="font-body-md text-sm text-on-surface-variant">28 Oct 2026</span>
              </div>
              <div className="p-8 flex flex-col grow">
                <div className="w-12 h-12 bg-primary/10 rounded text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Learn & Build</h3>
                <p className="font-body-md text-on-surface-variant mb-6 grow">Kickoff keynotes, advanced Qiskit workshops, and team formation for the hackathon challenges.</p>
              </div>
            </div>

            {/* Day 2 */}
            <div className="flex flex-col h-full bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 hover:border-secondary/30 transition-colors group relative shadow-md">
              <div className="bg-surface-dim p-4 border-b border-outline-variant/20 flex justify-between items-center relative z-10">
                <span className="font-label-caps text-on-surface">DAY 2</span>
                <span className="font-body-md text-sm text-on-surface-variant">29 Oct 2026</span>
              </div>
              <div className="p-8 flex flex-col grow relative z-10">
                <div className="w-12 h-12 bg-secondary/10 rounded text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">lightbulb</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Explore & Experiment</h3>
                <p className="font-body-md text-on-surface-variant mb-6 grow">Dedicated hacking time, mentorship sessions, and running algorithms on actual IBM quantum hardware.</p>
              </div>
            </div>

            {/* Day 3 */}
            <div className="flex flex-col h-full bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary/30 transition-colors group">
              <div className="bg-surface-dim p-4 border-b border-outline-variant/20 flex justify-between items-center">
                <span className="font-label-caps text-on-surface">DAY 3</span>
                <span className="font-body-md text-sm text-on-surface-variant">30 Oct 2026</span>
              </div>
              <div className="p-8 flex flex-col grow">
                <div className="w-12 h-12 bg-primary/10 rounded text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">emoji_events</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Hack & Showcase</h3>
                <p className="font-body-md text-on-surface-variant mb-6 grow">Final project submissions, project presentations, judging, and the closing awards ceremony.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenRegister}
              className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all duration-200 inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-110"
            >
              Register For Event
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
