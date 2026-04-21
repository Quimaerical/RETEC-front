import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const tabs = [
    { id: 'dashboard', label: 'Inicio', icon: 'precision_manufacturing' },
    { id: 'orders', label: 'Pedidos', icon: 'package_2' },
    { id: 'inventory', label: 'Inventario', icon: 'inventory_2' },
    { id: 'reports', label: 'Informes', icon: 'analytics' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 h-20 bg-[#121412]/70 backdrop-blur-xl z-50 border-t border-outline-variant/20">
      {tabs.map((tab) => {
        const isActive = currentScreen === tab.id;
        // Special case: if we are in status or create_note, identify which "main" section they belong to if needed, 
        // but the spec suggests bottom nav is always present and redirects to main sections.
        
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id as Screen)}
            className={`flex flex-col items-center justify-center pt-2 transition-all duration-200 active:translate-y-0.5 ${
              isActive ? 'text-primary border-t-2 border-primary' : 'text-secondary opacity-60 hover:text-primary hover:opacity-100'
            }`}
          >
            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
              {tab.icon}
            </span>
            <span className="font-label text-[10px] uppercase tracking-[0.1em] font-bold">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
