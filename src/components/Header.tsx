import { Screen } from '../types';

interface HeaderProps {
  currentScreen: Screen;
  onLogout?: () => void;
}

export default function Header({ currentScreen }: HeaderProps) {
  const isLoginPage = currentScreen === 'login';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#121412]/70 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-[0_20px_40px_rgba(0,57,33,0.2)]">
      <div className="flex items-center gap-3">
        <img 
          alt="RETEC Logo" 
          className="h-8 w-auto object-contain" 
          src="https://lh3.googleusercontent.com/aida/ADBb0ugYWWHal0t8A8VutUrtO4pGIDCgPaBTn3bRz81cWRB9e37us7u_LqB6qyi-sb8UPSo829h7jgwLAYR5zO8feJj88h9_RyNiLpOAweAW19JU6hrjhSUlA7EbYv-OqRWotC-xIyq4Vnq9icwO8hutepliCsOQdmNSX9ZMsvKzaPquQHOmXQ_wm4Klk-LkNmPhA9P9c5zkO91HB444V28rWZc5CvWq1gaZE1OrJIz7P_LgrI6ECfvmV8JQ-81HMigZXFye49U4F2TtRAY" 
          referrerPolicy="no-referrer"
        />
        <span className="text-xl font-headline font-bold tracking-tighter text-primary uppercase">RETEC</span>
      </div>

      {!isLoginPage && (
        <div className="flex items-center gap-4">
          <button className="hover:opacity-80 transition-opacity active:scale-95 duration-150 relative">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-error rounded-full border border-background"></div>
          </button>
          
          <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center overflow-hidden active:scale-95 transition-transform cursor-pointer">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW4lCn-IlYw1AYZOmdzI7vjLGQmx10-vrGYQ9ovmjWxo0D5KhRZNtDw551qVodu23JB-tLMKPudkTpEDZEOBROxBzfzUl36x4Dss_55oSCw5pqqv_G2VMiRQf-L2vydqX_4XoYsi4ExcXit7uBsuFsptx82PvTCdz4sRYDzOxHDBDXREMYspuo5PM_78p4IOGEvAZJxbO7gUJCdhrw4_Eed4ZESQ-JOep60ZvmJ3uxPfsetPCTFFX_iihpwKjNtN4S53DT0f0CNKc1" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </header>
  );
}
