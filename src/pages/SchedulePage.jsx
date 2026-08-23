import React from 'react';

export default function SchedulePage({ onOpenRegister }) {
  const scheduleItems = [
    {
      id: 1,
      title: 'Opening & Welcome',
      time: '09:00 AM - 10:00 AM',
      description: 'Welcome address, faculty introductions, and event roadmap presentation.',
      icon: 'emoji_people',
      filled: true,
      category: 'Keynote',
    },
    {
      id: 2,
      title: 'Introduction to Quantum Computing',
      time: '10:00 AM - 11:30 AM',
      description: 'Get introduced to qubits, superposition, entanglement, and quantum state vectors.',
      icon: 'memory',
      filled: false,
      category: 'Lecture',
    },
    {
      id: 3,
      title: 'Hands-on Workshop',
      time: '11:45 AM - 01:15 PM',
      description: 'Practical coding session using Qiskit SDK to construct and simulate quantum circuits.',
      icon: 'science',
      filled: false,
      category: 'Workshop',
    },
    {
      id: 4,
      title: 'Networking & Refreshment Break',
      time: '01:15 PM - 02:15 PM',
      description: 'Connect with speakers, faculty leads, and fellow attendees over lunch.',
      icon: 'local_cafe',
      filled: false,
      isBreak: true,
      category: 'Break',
    },
    {
      id: 5,
      title: 'Project / Challenge Session',
      time: '02:15 PM - 04:30 PM',
      description: 'Collaborative mini-hackathon problem solving and quantum algorithm challenges.',
      icon: 'code_blocks',
      filled: false,
      category: 'Hackathon',
    },
    {
      id: 6,
      title: 'Closing & Community Awards',
      time: '04:30 PM - 05:30 PM',
      description: 'Project presentations, certificate distribution, and closing celebration.',
      icon: 'forum',
      filled: true,
      category: 'Ceremony',
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-gutter max-w-container-max mx-auto text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-outline-variant/50 bg-surface-container-low mb-8">
          <div className="w-2 h-2 rounded-full bg-primary mr-3 animate-pulse" />
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
            PVPSIT Qiskit Fall Fest 2026
          </span>
        </div>
        <h1 className="font-headline-xl text-headline-xl md:text-[64px] text-on-surface mb-6 max-w-3xl mx-auto tracking-tight">
          Event Schedule
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore the sessions, workshops, activities, and experiences planned for PVPSIT Qiskit Fall Fest 2026. A structured journey into the quantum realm.
        </p>
      </section>

      {/* Schedule Timeline Section */}
      <section className="pb-section-gap px-gutter max-w-4xl mx-auto w-full">
        <div className="relative">
          {scheduleItems.map((item, index) => (
            <div key={item.id} className="timeline-item relative flex gap-8 mb-12 group">
              {/* Circuit Line */}
              {index < scheduleItems.length - 1 && <div className="circuit-line-timeline" />}

              {/* Node Icon */}
              <div
                className={`relative z-10 w-12 h-12 rounded-full border-2 ${
                  item.isBreak
                    ? 'border-outline-variant bg-background text-outline'
                    : 'border-primary bg-background text-primary shadow-[0_0_15px_rgba(172,36,113,0.15)]'
                } flex items-center justify-center flex-shrink-0 mt-1 transition-transform group-hover:scale-110`}
              >
                <span
                  className="material-symbols-outlined"
                  style={item.filled ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
              </div>

              {/* Event Details Card */}
              <div
                className={`flex-grow rounded-xl p-8 border ${
                  item.isBreak
                    ? 'border-outline-variant/20 bg-surface-container-lowest/50 opacity-80'
                    : 'bg-surface-container-low border-outline-variant/30 hover:border-primary/40 transition-all hover:shadow-md'
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-label-caps rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">{item.title}</h3>
                  </div>
                  <span className="font-label-caps text-xs text-secondary bg-secondary/10 px-3 py-1.5 rounded-md mt-2 md:mt-0 inline-block font-semibold">
                    {item.time}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-inverse-surface py-section-gap px-gutter text-center border-t border-outline/20 relative overflow-hidden mt-auto">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-headline-xl text-headline-xl text-inverse-on-surface mb-6">Ready to join us?</h2>
          <p className="font-body-lg text-body-lg text-tertiary-fixed-dim/90 mb-10">
            Register for PVPSIT Qiskit Fall Fest 2026 and be part of the experience.
          </p>
          <button
            onClick={onOpenRegister}
            className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-all duration-200 ambient-shadow inline-flex items-center gap-2 hover:scale-105 active:scale-110"
          >
            Register Now
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
}
