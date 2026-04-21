import { Screen } from '../types';

interface OrdersScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function OrdersScreen({ onNavigate }: OrdersScreenProps) {
  const orders = [
    { id: '1', ref: '#8829-X', title: 'Eje de Turbina A-42', status: 'En Proceso', time: 'Hace 2h', priority: 'ALTA', statusColor: 'text-tertiary', statusBg: 'bg-tertiary/10', border: 'border-tertiary/20' },
    { id: '2', ref: '#8831-B', title: 'Válvula de Presión V2', status: 'Pendiente', time: 'Hace 4h', priority: 'MEDIA', statusColor: 'text-primary', statusBg: 'bg-primary/10', border: 'border-primary/20' },
    { id: '3', ref: '#8834-K', title: 'Cojinete Estructural', status: 'En Espera', time: 'Hace 6h', priority: 'BAJA', statusColor: 'text-outline', statusBg: 'bg-outline/10', border: 'border-outline/20' },
  ];

  return (
    <main className="pt-24 pb-32 px-6 overflow-x-hidden min-h-screen">
      {/* Plant Status Header */}
      <section className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">Estado de Planta</span>
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-on-surface">OPERATIVO</h2>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-0.5 h-3 bg-tertiary"></div>
            <span className="font-label text-[10px] uppercase tracking-widest text-tertiary">Sincronizado</span>
          </div>
        </div>

        {/* Stats Bento */}
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 bg-surface-container-low p-4 rounded-lg flex flex-col justify-between h-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl">speed</span>
            </div>
            <span className="font-label text-[10px] uppercase tracking-widest text-secondary z-10">Rendimiento</span>
            <div className="z-10">
              <span className="font-headline text-4xl font-bold">94.2</span>
              <span className="text-xs text-secondary font-medium ml-1">%</span>
            </div>
          </div>
          <div className="col-span-2 bg-surface-container p-4 rounded-lg flex flex-col justify-between h-32 border-b-2 border-primary">
            <span className="font-label text-[10px] uppercase tracking-widest text-secondary text-right">Cola</span>
            <div className="text-right">
              <span className="font-headline text-4xl font-bold">12</span>
              <span className="block text-[8px] uppercase tracking-widest text-secondary mt-1">Órdenes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Action Button */}
      <section className="mb-10">
        <button 
          onClick={() => onNavigate('create_note')}
          className="w-full h-16 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-between px-6 shadow-[0_0_15px_rgba(89,222,155,0.3)] hover:opacity-90 active:scale-[0.98] transition-all group"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-on-primary text-2xl group-hover:scale-110 transition-transform">add_circle</span>
            <span className="font-headline font-bold text-on-primary tracking-tight">NUEVA RECEPCIÓN</span>
          </div>
          <span className="material-symbols-outlined text-on-primary/60" >chevron_right</span>
        </button>
      </section>

      {/* Orders List */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline text-lg font-bold tracking-tight">Órdenes Activas</h3>
          <span className="font-label text-[10px] uppercase text-primary border-b border-primary/20 pb-0.5 cursor-pointer">Ver Historial</span>
        </div>

        <div className="space-y_3 flex flex-col gap-3">
          {orders.map((order) => (
            <div 
              key={order.id} 
              onClick={() => order.id === '1' ? onNavigate('status') : null}
              className="bg-surface-container-low rounded-lg p-5 group hover:bg-surface-container transition-all duration-200 cursor-pointer border border-transparent hover:border-outline-variant/30"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-secondary">Ref: {order.ref}</span>
                  <h4 className="font-headline text-xl font-bold text-on-surface mt-1">{order.title}</h4>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`px-2 py-1 ${order.statusBg} ${order.statusColor} text-[9px] font-bold uppercase tracking-widest rounded border ${order.border}`}>
                    {order.status}
                  </span>
                  <span className="text-[10px] text-secondary mt-2">{order.time}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center border border-surface-container-low">
                      <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'wght' 700" }}>person</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="block text-[10px] text-secondary uppercase tracking-tighter">Prioridad</span>
                    <span className="text-xs font-bold text-on-surface">{order.priority}</span>
                  </div>
                  <span className="material-symbols-outlined text-secondary/40">more_vert</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Machine Image */}
      <div className="mt-8 rounded-lg overflow-hidden h-40 relative">
        <img 
          alt="Maquinaria industrial" 
          className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity" 
          src="https://picsum.photos/seed/industrial/800/400" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">Próximo Mantenimiento</span>
          <p className="font-headline font-bold text-sm">SISTEMA HIDRÁULICO 02/04</p>
        </div>
      </div>
    </main>
  );
}
