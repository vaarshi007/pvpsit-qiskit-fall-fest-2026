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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold font-headline-xl text-on-surface tracking-tight leading-tight flex flex-wrap items-center gap-3">
                <span>
                  PVPSIT <span className="text-primary">x</span> Qiskit Fall Fest 2026
                </span>
                <img
                  src="/quantum-sticker.png"
                  alt="Quantum Sticker"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain inline-block transform hover:scale-110 transition-transform duration-300 drop-shadow-sm select-none"
                />
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
                className="w-full sm:w-auto bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-2 group"
              >
                Start Your Quantum Journey
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button
                onClick={() => setActivePage('schedule')}
                className="w-full sm:w-auto bg-transparent border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-secondary/5 transition-colors flex items-center justify-center gap-2"
              >
                View Main Event
              </button>
            </div>

            {/* Live Countdown Timer */}
            <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-outline-variant/20 w-full max-w-md">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-base animate-pulse">timer</span>
                <span className="font-label-caps text-label-caps tracking-widest uppercase">Quantum Countdown</span>
              </div>
              <div className="flex flex-col items-center gap-2 font-body-md text-on-surface">
                <div className="px-3 py-1 bg-secondary-container/10 border border-secondary-container/20 rounded text-xs text-secondary font-label-caps">
                  PVPSIT Qiskit Fall Fest 2026 Begins In
                </div>
                <div className="flex items-center gap-4 py-2">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-[10px] font-label-caps text-tertiary uppercase tracking-tighter">Days</span>
                  </div>
                  <div className="text-outline-variant/50 text-xl">|</div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[10px] font-label-caps text-tertiary uppercase tracking-tighter">Hours</span>
                  </div>
                  <div className="text-outline-variant/50 text-xl">|</div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[10px] font-label-caps text-tertiary uppercase tracking-tighter">Minutes</span>
                  </div>
                  <div className="text-outline-variant/50 text-xl">|</div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[10px] font-label-caps text-tertiary uppercase tracking-tighter">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic Element */}
          <div className="lg:col-span-5 relative h-[450px] w-full mt-12 lg:mt-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto aspect-square bg-surface-container-low rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsKVKFc_2r4Pid8GxdfIm5UsZfCFJTILQnUIJDto59QgXURE9ASEO8MdDK5nHe5O_2Pw9Z_nxxRkzWQYGjbllVZ1cKA9laQIDQwm5zx6sGlE5pin3vkf0eFD9R7QGnqnd0uB3VQ8sI3ZtGRN_ndgxNUeN0veYFLgG-Qs3EoW5ryIjHAYGS1Y8y8chLqNez8fz4uDqve9TZdXeNIAP1YvyIiR3og3O5ZNnbuJq2dOxNGRHFjGNy9xX2vNppuhxmeWNoeg"
                alt="Quantum orbital representation"
                className="absolute w-[80%] h-[80%] object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Quantum Journey Section */}
      <section className="py-section-gap px-gutter bg-surface-container-lowest" id="journey">
        <div className="max-w-container-max mx-auto">
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
              className="mt-4 md:mt-0 text-primary font-label-caps hover:text-on-primary-fixed-variant transition-colors flex items-center gap-2"
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
              <button onClick={() => setActivePage('schedule')} className="w-full border border-primary text-primary px-4 py-2 rounded font-label-caps hover:bg-primary/5 transition-colors">View Details</button>
            </div>

            {/* Session 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-secondary font-label-caps mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span> 19 September 2026
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Understanding Quantum World</h3>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm">Delve into superposition and entanglement.</p>
              <button onClick={() => setActivePage('schedule')} className="w-full border border-primary text-primary px-4 py-2 rounded font-label-caps hover:bg-primary/5 transition-colors">View Details</button>
            </div>

            {/* Session 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-secondary font-label-caps mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span> 26 September 2026
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Quantum Gates & Qiskit Intro</h3>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm">Start building your first circuits.</p>
              <button onClick={() => setActivePage('schedule')} className="w-full border border-primary text-primary px-4 py-2 rounded font-label-caps hover:bg-primary/5 transition-colors">View Details</button>
            </div>

            {/* Session 4 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-secondary font-label-caps mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span> 3 October 2026
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Qiskit Hands-on Lab</h3>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm">Practical coding session with IBM Quantum.</p>
              <button onClick={() => setActivePage('schedule')} className="w-full border border-primary text-primary px-4 py-2 rounded font-label-caps hover:bg-primary/5 transition-colors">View Details</button>
            </div>

            {/* Session 5 Featured */}
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-primary/50 shadow-pulse-pink hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] font-label-caps px-2 py-1 rounded-bl">Featured</div>
              <div className="text-primary font-label-caps mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span> 17 October 2026
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">PVPSIT Pre-Fest Bootcamp</h3>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm">Intensive prep for the main hackathon event.</p>
              <button onClick={() => setActivePage('schedule')} className="w-full bg-primary text-on-primary px-4 py-2 rounded font-label-caps hover:bg-on-primary-fixed-variant transition-colors">View Details</button>
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
              className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-colors inline-flex items-center justify-center gap-2"
            >
              Register For Event
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
