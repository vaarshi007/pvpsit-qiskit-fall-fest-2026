import React from 'react';

export default function Footer({ setActivePage, onOpenRegister }) {
  return (
    <footer className="w-full pt-section-gap pb-gutter bg-on-background dark:bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Col 1 */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-14 w-auto rounded-lg overflow-hidden bg-white p-1 border border-primary/30 shadow-sm flex items-center justify-center">
              <img src="/pvpsit-logo.png" alt="PVPSIT Logo" className="h-full w-auto object-contain max-h-12" />
            </div>
            <span className="font-headline-md text-headline-md text-surface">PVPSIT Qiskit Fall Fest '26</span>
          </div>
          <p className="font-body-md text-body-md text-tertiary-fixed-dim max-w-sm text-sm">
            Quantum Computing for All. Empowering the next generation of innovators at Prasad V. Potluri Siddhartha Institute of Technology, Vijayawada.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-primary-fixed-dim font-bold uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 font-body-md text-sm">
            <li>
              <button onClick={() => setActivePage('landing')} className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">
                Home / Landing
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('about')} className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">
                About Event
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('schedule')} className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">
                Event Schedule
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('members')} className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">
                Organizing Team
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-primary-fixed-dim font-bold uppercase tracking-wider">Participate</h4>
          <ul className="space-y-2 font-body-md text-sm">
            <li>
              <button onClick={onOpenRegister} className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">
                Register for Event
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('schedule')} className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">
                Hackathon (Oct 28-30)
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('about')} className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">
                Pre-Fest Workshops
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-primary-fixed-dim font-bold uppercase tracking-wider">Resources & Guidelines</h4>
          <ul className="space-y-2 font-body-md text-sm">
            <li><a href="#" className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">Code of Conduct</a></li>
            <li><a href="#" className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">Privacy Policy</a></li>
            <li><a href="#" className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">PVPSIT University Site</a></li>
          </ul>
        </div>

        {/* Copyright Footer */}
        <div className="md:col-span-4 mt-12 pt-8 border-t border-surface/10 text-center text-tertiary-fixed-dim font-body-md text-sm opacity-80">
          © 2026 PVPSIT Qiskit Community. Quantum Computing for All.
        </div>
      </div>
    </footer>
  );
}
