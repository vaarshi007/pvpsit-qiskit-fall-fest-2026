import React from 'react';

export default function MembersPage({ onOpenRegister }) {
  // Leadership & Team Structure with standardized, highly-optimized image assets
  const chiefPatron = {
    name: 'Dr. K. Sivaji Babu',
    role: 'Chief Patron',
    title: 'Principal, PVPSIT',
    image: '/team/sivaji_babu.jpg',
  };

  const deptHead = {
    name: 'Dr. M. Srilakshmi',
    role: 'Department Head',
    title: 'HOD, Freshman Engineering Department',
    image: '/team/srilakshmi.jpg',
  };

  const leadOrganizer = {
    name: 'Dr. Sreedevi Gogula',
    role: 'Lead Organizer',
    title: 'Faculty Lead',
    image: '/team/sreedevi.jpg',
  };

  const coOrganizers = [
    { name: 'Prashant A', role: 'Assistant Professor (CSE)', image: '/team/prashant_a.jpg' },
    { name: 'V. Ratnakumari', role: 'Assistant Professor (ECE)', image: '/team/ratnakumari.jpg' },
    { name: 'Dr. Silpa Mandava', role: 'Assistant Professor (FED)', image: '/team/silpa_mandava.jpg' },
    { name: 'M. Prameela', role: 'Assistant Professor (FED)', image: '/team/prameela.jpg' },
    { name: 'Dr. Raghavendra Ganesh', role: 'Assistant Professor (FED)', image: '/team/raghavendra_ganesh.jpg' },
    { name: 'Dr. V. S. N. Malleswari', role: 'Assistant Professor (FED)', image: '/team/malleswari.jpg' },
    { name: 'Bhagyavathi Dadi', role: 'Final Year ECE', image: '/team/bhagyavathi_dadi.jpg' },
  ];

  const renderPhotoCard = (member, sizeClasses) => (
    <div className={`relative overflow-hidden bg-white shadow-md border-4 border-surface ${sizeClasses} rounded-xl`}>
      <img
        src={member.image}
        alt={member.name}
        loading="eager"
        fetchpriority="high"
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = 'none';
          if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="w-full h-full bg-surface-variant flex-col items-center justify-center text-on-surface-variant hidden">
        <span className="material-symbols-outlined text-4xl">person</span>
      </div>
    </div>
  );

  return (
    <div className="w-full flex-1">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-secondary-fixed/50 px-4 py-1.5 rounded-full mb-6 border border-secondary/20">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-label-caps text-label-caps text-primary tracking-wider">THE TEAM</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl md:text-[64px] font-bold text-on-surface mb-6 leading-tight">
          Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Organizing Team</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Meet the faculty and organizers bringing PVPSIT Qiskit Fall Fest 2026 to life.
        </p>
      </section>

      {/* Decorative Divider */}
      <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-center items-center">
        <div className="w-full max-w-md h-px bg-outline-variant relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary border border-surface" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-surface border-2 border-primary" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary border border-surface" />
        </div>
      </div>

      {/* Team Content Section */}
      <section className="max-w-container-max mx-auto px-gutter py-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="font-body-md text-body-md text-on-surface-variant">
            PVPSIT Qiskit Fall Fest 2026 is supported by a dedicated team of faculty and organizers committed to creating an engaging quantum computing experience.
          </p>
        </div>

        {/* Leadership (Chief Patron & Dept Head) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Chief Patron */}
          <div className="bg-[#F8F9FF] border border-outline-variant/30 rounded-xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors group">
            {renderPhotoCard(chiefPatron, 'w-36 h-36')}
            <div className="bg-primary/10 text-primary font-label-caps text-xs px-4 py-1 rounded-full mb-3 mt-6 font-bold">
              {chiefPatron.role}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-1 font-bold">{chiefPatron.name}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">{chiefPatron.title}</p>
          </div>

          {/* Department Head */}
          <div className="bg-[#F8F9FF] border border-outline-variant/30 rounded-xl p-8 flex flex-col items-center text-center hover:border-secondary/50 transition-colors group">
            {renderPhotoCard(deptHead, 'w-36 h-36')}
            <div className="bg-secondary/10 text-secondary font-label-caps text-xs px-4 py-1 rounded-full mb-3 mt-6 font-bold">
              {deptHead.role}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-1 font-bold">{deptHead.name}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">{deptHead.title}</p>
          </div>
        </div>

        {/* Lead Organizer */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#F8F9FF] border border-outline-variant/30 rounded-xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors group w-full max-w-md shadow-sm">
            {renderPhotoCard(leadOrganizer, 'w-32 h-32')}
            <div className="bg-primary-container/20 text-on-primary-container font-label-caps text-xs px-4 py-1 rounded-full mb-3 mt-6 font-bold">
              {leadOrganizer.role}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-1 font-bold">{leadOrganizer.name}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">{leadOrganizer.title}</p>
          </div>
        </div>

        {/* Co-Organizers Grid */}
        <div className="mb-8">
          <h2 className="font-headline-lg text-headline-lg text-center text-on-surface mb-12">Co-Organizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coOrganizers.map((coOrg, idx) => (
              <div key={idx} className="bg-[#F8F9FF] border border-outline-variant/30 rounded-xl p-6 flex flex-col items-center text-center hover:border-primary/30 transition-colors group">
                {renderPhotoCard(coOrg, 'w-28 h-28')}
                <h4 className="font-body-lg text-base font-bold text-on-surface mb-1 mt-4">{coOrg.name}</h4>
                <p className="font-label-caps text-xs text-on-surface-variant">{coOrg.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-low py-16 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-gutter text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Be Part of the Quantum Journey</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Join us at PVPSIT Qiskit Fall Fest 2026 and explore the world of quantum computing.
          </p>
          <button
            onClick={onOpenRegister}
            className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-lg shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-colors text-lg"
          >
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
}
