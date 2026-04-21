import { Screen } from '../types';

interface CreateNoteScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function CreateNoteScreen({ onNavigate }: CreateNoteScreenProps) {
  return (
    <main className="pt-24 pb-32 px-6 overflow-x-hidden min-h-screen relative">
      <div className="absolute -right-6 top-20 opacity-5 font-headline text-[10rem] font-bold leading-none pointer-events-none">
        01
      </div>
      
      <h1 className="font-headline text-4xl font-bold mb-1 uppercase tracking-tight">Crear Nota</h1>
      <p className="font-label text-[10px] text-primary uppercase font-bold tracking-[0.2em] mb-10">Nueva Orden de Servicio</p>

      <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); onNavigate('orders'); }}>
        {/* Customer Info */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-3 bg-primary"></div>
            <h2 className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">Información del Cliente</h2>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <label className="text-right block font-label text-[9px] uppercase tracking-widest text-secondary mb-2">Nombre de Cliente</label>
              <input 
                type="text" 
                placeholder="Ej. Industrias Valencia" 
                className="w-full bg-surface-container-low border-none rounded-sm py-4 px-6 text-sm focus:ring-1 focus:ring-primary/40 placeholder:text-secondary/20" 
              />
            </div>
            <div className="relative">
              <label className="text-right block font-label text-[9px] uppercase tracking-widest text-secondary mb-2">Ubicación</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Planta Principal - Sector A" 
                  className="w-full bg-surface-container-low border-none rounded-sm py-4 px-6 text-sm focus:ring-1 focus:ring-primary/40 placeholder:text-secondary/20" 
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40 text-sm">location_on</span>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Details */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-3 bg-primary"></div>
            <h2 className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">Detalles del Equipo</h2>
          </div>
          
          <div className="bg-surface-container-low/30 border border-outline-variant/10 p-6 rounded-lg space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="text-center block font-label text-[9px] uppercase tracking-[0.2em] text-secondary mb-2">ID Equipo</label>
                <input 
                  type="text" 
                  placeholder="KN-4500" 
                  className="w-full bg-surface-container-low border-none rounded-sm py-4 text-center text-sm font-headline font-bold focus:ring-1 focus:ring-primary/40 placeholder:text-secondary/20 uppercase" 
                />
              </div>
              <div className="relative">
                <label className="text-center block font-label text-[9px] uppercase tracking-[0.2em] text-secondary mb-2">Prioridad</label>
                <select className="w-full bg-surface-container-low border-none rounded-sm py-4 pl-4 pr-10 text-sm focus:ring-1 focus:ring-primary/40 appearance-none text-center font-medium">
                  <option>Normal</option>
                  <option>Urgente</option>
                  <option>Mantenimiento</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <label className="text-right block font-label text-[9px] uppercase tracking-widest text-secondary mb-2">Descripción del Fallo</label>
              <textarea 
                placeholder="Describa los síntomas técnicos..." 
                className="w-full bg-surface-container-low border-none rounded-sm py-4 px-6 text-sm focus:ring-1 focus:ring-primary/40 placeholder:text-secondary/20 h-32 resize-none" 
              />
            </div>
          </div>
        </section>

        {/* Evidence Capture */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-3 bg-primary"></div>
            <h2 className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">Captura de Evidencia</h2>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex-shrink-0 w-24 h-24 bg-surface-container-low rounded-sm border border-dashed border-primary/20 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform cursor-pointer">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_a_photo</span>
              <span className="text-[8px] font-bold text-secondary uppercase tracking-widest">Cámara</span>
            </div>
            {[
              "https://picsum.photos/seed/evid1/200/200",
              "https://picsum.photos/seed/evid2/200/200"
            ].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-24 h-24 rounded-sm bg-surface-container overflow-hidden relative group">
                <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                <button className="absolute top-1 right-1 w-5 h-5 bg-background/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[10px] text-on-surface">close</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="space-y-4 pt-4">
          <button 
            type="submit"
            className="w-full h-16 retec-gradient rounded-lg shadow-[0_20px_40px_rgba(0,57,33,0.2)] flex items-center justify-center gap-3 active:scale-[0.98] transition-all group"
          >
            <span className="material-symbols-outlined text-on-primary">assignment_turned_in</span>
            <span className="font-headline font-bold text-on-primary tracking-tight uppercase">Generar Reporte</span>
          </button>
          
          <button 
            type="button"
            className="w-full h-16 bg-surface-container-low border border-outline-variant/10 rounded-lg flex items-center justify-center active:scale-[0.98] transition-all"
          >
            <span className="font-headline font-bold text-secondary uppercase tracking-widest text-sm">Guardar Borrador</span>
          </button>
        </div>
      </form>
    </main>
  );
}
