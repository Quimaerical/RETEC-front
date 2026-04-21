import { Screen } from '../types';

interface InventoryScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function InventoryScreen({ onNavigate }: InventoryScreenProps) {
  const items = [
    { code: 'MCU-900', name: 'TX-400 Core Module', location: 'Almacén A-12', qty: '142', status: 'OK', color: 'text-tertiary', icon: 'memory' },
    { code: 'HYD-70', name: 'Actuador Hidráulico Z-5', location: 'Almacén C-04', qty: '3', status: 'BAJO', color: 'text-error', icon: 'settings_input_component' },
    { code: 'BRG-PRE', name: 'Rodamiento de Precisión X', location: 'Almacén B-09', qty: '850', status: 'OK', color: 'text-tertiary', icon: 'settings_backup_restore' },
    { code: 'SEN-OPT', name: 'Sensor Óptico Industrial', location: 'Almacén A-01', qty: '36', status: 'OK', color: 'text-tertiary', icon: 'visibility' },
  ];

  return (
    <main className="pt-24 pb-32 px-6 overflow-x-hidden min-h-screen">
      <h1 className="font-headline text-4xl font-bold mb-8">Inventario</h1>

      {/* Search & Filters */}
      <section className="space-y-4 mb-8">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Buscar componentes..." 
            className="w-full bg-surface-container-low border-none rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-secondary/40 focus:ring-1 focus:ring-primary/30" 
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary/60">search</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-surface-container-highest/20 border border-outline-variant/30 rounded-lg py-3 flex items-center justify-center gap-2 font-label text-xs uppercase tracking-widest text-secondary hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filtros
          </button>
          <button className="bg-surface-container-highest/20 border border-outline-variant/30 rounded-lg py-3 flex items-center justify-center gap-2 font-label text-xs uppercase tracking-widest text-secondary hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-sm">sort</span>
            Ordenar
          </button>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-surface-container-low p-5 rounded-lg border-l-2 border-primary">
          <span className="font-label text-[10px] uppercase tracking-widest text-secondary">Unidades Activas</span>
          <div className="mt-2 text-3xl font-headline font-bold">1,284</div>
        </div>
        <div className="bg-surface-container-low p-5 rounded-lg border-l-2 border-error">
          <span className="font-label text-[10px] uppercase tracking-widest text-secondary">Stock Bajo</span>
          <div className="mt-2 text-3xl font-headline font-bold text-error">12</div>
        </div>
        <div className="col-span-2 bg-primary/10 p-5 rounded-lg flex justify-between items-center border border-primary/20">
          <div>
            <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Valor Total Activos</span>
            <div className="mt-1 text-3xl font-headline font-bold text-on-surface">$42.8k</div>
          </div>
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">bar_chart</span>
          </div>
        </div>
      </section>

      {/* Inventory List */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-headline text-lg font-bold tracking-tight">Componentes</h2>
          <span className="font-label text-[9px] text-secondary/60 uppercase tracking-widest">48 Resultados</span>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-surface-container-low rounded-lg p-3 flex gap-4 border border-transparent hover:border-outline-variant/20 transition-all cursor-pointer">
              <div className="w-16 h-16 bg-surface-container-highest rounded-sm flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <span className="material-symbols-outlined text-primary/40 text-3xl">{item.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-primary/60 font-bold tracking-widest">{item.code}</span>
                    <h3 className="font-headline text-sm font-bold text-on-surface truncate pr-2">{item.name}</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className={`w-1 h-3 ${item.status === 'OK' ? 'bg-tertiary' : 'bg-error'}`}></div>
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${item.color}`}>{item.status}</span>
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-end">
                  <span className="text-[10px] text-secondary/60">{item.location}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline font-bold text-on-surface">{item.qty}</span>
                    <span className="text-[8px] text-secondary uppercase font-bold tracking-tighter">Unds</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAB */}
      <button 
        onClick={() => onNavigate('create_note')}
        className="fixed right-6 bottom-24 w-14 h-14 rounded-sm bg-gradient-to-br from-primary to-primary-container shadow-[0_0_20px_rgba(89,222,155,0.4)] flex items-center justify-center active:scale-90 transition-transform z-50 group"
      >
        <span className="material-symbols-outlined text-on-primary text-3xl group-hover:scale-110 transition-transform">add</span>
      </button>
    </main>
  );
}
