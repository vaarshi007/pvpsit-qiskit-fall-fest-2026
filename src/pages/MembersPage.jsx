import React, { useState, useEffect } from 'react';

export default function MembersPage({ onOpenRegister }) {
  // Saved custom photos in browser storage
  const [customPhotos, setCustomPhotos] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('pvpsit_team_photos');
    if (saved) {
      try {
        setCustomPhotos(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handlePhotoUpload = (memberId, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      const updated = { ...customPhotos, [memberId]: dataUrl };
      setCustomPhotos(updated);
      localStorage.setItem('pvpsit_team_photos', JSON.stringify(updated));
    };
    reader.readAsDataURL(file);
  };

  // Leadership & Team Structure
  const chiefPatron = {
    id: 'sivaji_babu',
    name: 'Dr. K. Sivaji Babu',
    role: 'Chief Patron',
    title: 'Principal, PVPSIT',
    defaultImage: '/team/sivaji_babu.jpg',
  };

  const deptHead = {
    id: 'srilakshmi',
    name: 'Dr. M. Srilakshmi',
    role: 'Department Head',
    title: 'Head of Department',
    defaultImage: '/team/srilakshmi.jpg',
  };

  const leadOrganizer = {
    id: 'sreedevi',
    name: 'Dr. Sreedevi Gogula',
    role: 'Lead Organizer',
    title: 'Faculty Lead',
    defaultImage: '/team/sreedevi.jpg',
  };

  const coOrganizers = [
    { id: 'prashant_a', name: 'Prashant A', role: 'Co-Organizer', defaultImage: '/team/prashant_a.jpg' },
    { id: 'ratnakumari', name: 'V. Ratnakumari', role: 'Co-Organizer', defaultImage: '/team/Ratnakumari.jpg' },
    { id: 'silpa_mandava', name: 'Dr. Silpa Mandava', role: 'Co-Organizer', defaultImage: '/team/Silpa Mandava.jpg' },
    { id: 'prameela', name: 'M. Prameela', role: 'Co-Organizer', defaultImage: '/team/Prameela.jpg' },
    { id: 'raghavendra_ganesh', name: 'Dr. Raghavendra Ganesh', role: 'Co-Organizer', defaultImage: '/team/Raghavendra Ganesh.jpg' },
    { id: 'malleswari', name: 'Dr. V. S. N. Malleswari', role: 'Co-Organizer', defaultImage: '/team/Malleswari.jpg' },
    { id: 'bhagyavathi_dadi', name: 'Bhagyavathi Dadi', role: 'Co-Organizer', defaultImage: '/team/Bhagyavathi Dadi.png' },
  ];

  const renderPhotoContainer = (member, sizeClasses, isCircle = false) => {
    const photoUrl = customPhotos[member.id] || member.defaultImage || `/team/${member.id}.jpg`;

    return (
      <div className={`relative group/photo overflow-hidden bg-white shadow-md border-4 border-surface ${sizeClasses} ${isCircle ? 'rounded-full' : 'rounded-xl'}`}>
        <img
          src={photoUrl}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
          }}
        />

        {/* Fallback Icon if Image fails */}
        <div className="w-full h-full bg-surface-variant flex-col items-center justify-center text-on-surface-variant hidden">
          <span className="material-symbols-outlined text-4xl">person</span>
        </div>

        {/* Interactive Hover Overlay to Upload / Change Photo */}
        <label className="absolute inset-0 bg-on-surface/60 backdrop-blur-xs flex flex-col items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity cursor-pointer text-white text-xs font-label-caps p-2 text-center">
          <span className="material-symbols-outlined text-2xl mb-1">photo_camera</span>
          <span>Click to Upload Photo</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handlePhotoUpload(member.id, e.target.files[0])}
          />
        </label>
      </div>
    );
  };

  return (
    <div className="w-full flex-1">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter pt-16 pb-8 text-center">
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

        {/* Interactive Photo Uploader Banner */}
        <div className="mt-8 max-w-xl mx-auto bg-primary/10 border border-primary/30 rounded-xl p-4 text-xs font-label-caps text-primary flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <span className="material-symbols-outlined text-2xl">add_a_photo</span>
            <div>
              <strong className="block text-sm">Interactive Photo Editor Enabled!</strong>
              <span className="text-on-surface-variant font-normal">Hover over any team card below to upload or change member photos directly on the page.</span>
            </div>
          </div>
        </div>
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
            {renderPhotoContainer(chiefPatron, 'w-36 h-36', false)}
            <div className="bg-primary/10 text-primary font-label-caps text-xs px-4 py-1 rounded-full mb-3 mt-4 font-bold">
              {chiefPatron.role}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-1 font-bold">{chiefPatron.name}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">{chiefPatron.title}</p>
          </div>

          {/* Department Head */}
          <div className="bg-[#F8F9FF] border border-outline-variant/30 rounded-xl p-8 flex flex-col items-center text-center hover:border-secondary/50 transition-colors group">
            {renderPhotoContainer(deptHead, 'w-36 h-36', false)}
            <div className="bg-secondary/10 text-secondary font-label-caps text-xs px-4 py-1 rounded-full mb-3 mt-4 font-bold">
              {deptHead.role}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-1 font-bold">{deptHead.name}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">{deptHead.title}</p>
          </div>
        </div>

        {/* Lead Organizer */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#F8F9FF] border border-outline-variant/30 rounded-xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors group w-full max-w-md shadow-sm">
            {renderPhotoContainer(leadOrganizer, 'w-32 h-32', false)}
            <div className="bg-primary-container/20 text-on-primary-container font-label-caps text-xs px-4 py-1 rounded-full mb-3 mt-4 font-bold">
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
            {coOrganizers.map((coOrg) => (
              <div key={coOrg.id} className="bg-[#F8F9FF] border border-outline-variant/30 rounded-xl p-6 flex flex-col items-center text-center hover:border-primary/30 transition-colors group">
                {renderPhotoContainer(coOrg, 'w-24 h-24', false)}
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
