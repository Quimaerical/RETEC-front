import { Screen } from '../types';

interface DashboardScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  return (
    <main className="pt-24 pb-32 px-6 overflow-x-hidden min-h-screen">
      {/* Hero Section: System Availability */}
      <section className="mb-10 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 opacity-5 font-headline text-[10rem] font-bold leading-none select-none pointer-events-none">
          01
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">Estado Global del Sistema</span>
          <div className="flex items-baseline gap-4">
            <h1 className="font-headline text-6xl font-bold tracking-tighter text-on-surface">99.9<span className="text-primary text-2xl">%</span></h1>
            <div className="flex items-center gap-2 bg-tertiary/10 px-2 py-1 rounded-sm">
              <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
              <span className="font-label text-[10px] font-bold text-tertiary uppercase tracking-wider">Operativo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Priority Tasks */}
      <section className="mb-10">
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-headline text-2xl font-bold tracking-tight">Tareas Prioritarias</h2>
          <span className="font-label text-[10px] text-primary uppercase tracking-[0.1em] border-b border-primary/30 pb-1 cursor-pointer">Ver todas</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Main Card: Turbine Inspection */}
          <div 
            onClick={() => onNavigate('status')}
            className="col-span-2 bg-surface-container-low p-5 flex flex-col gap-4 relative group active:scale-[0.98] transition-all cursor-pointer border border-outline-variant/10 hover:border-primary/30"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">wind_power</span>
              </div>
              <span className="font-label text-[10px] text-error font-bold uppercase tracking-widest px-2 py-1 bg-error-container/10 border border-error/20">Crítico</span>
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold leading-tight">Inspección de Turbina T-800</h3>
              <p className="text-secondary text-xs mt-1 font-body">Anomalía detectada en vibración axial. Requiere revisión técnica manual.</p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-label text-[10px] text-secondary font-medium">MAÑANA, 08:00 AM</span>
              <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
            </div>
          </div>

          {/* Smaller Grid Cards */}
          <div className="bg-surface-container p-4 flex flex-col gap-3 active:scale-[0.98] transition-transform cursor-pointer border border-outline-variant/10">
            <div 
              onClick={() => onNavigate('status')}
              className="col-span-2 bg-surface-container-low p-5 flex flex-col gap-4 relative group active:scale-[0.98] transition-all cursor-pointer border border-outline-variant/10 hover:border-primary/30"
            >
              <span className="material-symbols-outlined text-secondary">settings_input_component</span>
              <h4 className="font-headline text-sm font-bold">Calibrado Sensores</h4>
              <span className="font-label text-[10px] text-secondary/60">SALA B-12</span>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('inventory')}
            className="bg-surface-container p-4 flex flex-col gap-3 active:scale-[0.98] transition-transform cursor-pointer border border-outline-variant/10"
          >
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
            <h4 className="font-headline text-sm font-bold">Stock Lubricante</h4>
            <span className="font-label text-[10px] text-error">NIVEL BAJO</span>
          </div>
        </div>
      </section>

      {/* Recent Events List */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
          <h2 className="font-label text-[10px] text-secondary uppercase tracking-[0.25em] font-bold">Eventos Recientes</h2>
          <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
        </div>
        
        <div className="space-y-3">
          {[
            { time: '14:20', title: 'Login de Sistema', desc: 'Acceso autorizado desde terminal Central 04.', color: 'bg-primary' },
            { time: '13:45', title: 'Alerta Térmica', desc: 'Variación de +2.4°C en cámara secundaria.', color: 'bg-error' },
            { time: '12:00', title: 'Backup Finalizado', desc: 'Sincronización de datos históricos completada.', color: 'bg-tertiary' }
          ].map((event, i) => (
            <div key={i} className="flex items-start gap-4 p-4 hover:bg-surface-container-low transition-colors duration-200 rounded-sm">
              <div className="flex flex-col items-center gap-1 h-full">
                <span className="font-label text-[9px] text-secondary font-bold whitespace-nowrap">{event.time}</span>
                {i < 2 && <div className="w-0.5 min-h-[20px] flex-grow bg-outline-variant/20"></div>}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-headline text-sm font-bold text-on-surface">{event.title}</span>
                  <div className={`w-1 h-1 rounded-full ${event.color}`}></div>
                </div>
                <p className="text-secondary text-xs leading-relaxed font-light">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAB */}
      <button 
        onClick={() => onNavigate('create_note')}
        className="fixed right-6 bottom-24 w-14 h-14 rounded-sm bg-gradient-to-br from-primary to-primary-container shadow-[0_0_20px_rgba(89,222,155,0.4)] flex items-center justify-center active:scale-90 transition-transform z-50 group overflow-hidden"
      >
        <span className="material-symbols-outlined text-on-primary text-3xl group-hover:rotate-90 transition-transform duration-300">add</span>
      </button>
    </main>
  );
}
