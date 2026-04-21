import { useState } from 'react';
import { Screen } from '../types';

interface StatusScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function StatusScreen({ onNavigate }: StatusScreenProps) {
  const [progress, setProgress] = useState(65);

  return (
    <main className="pt-24 pb-32 px-6 overflow-x-hidden min-h-screen">
      {/* Progress Header */}
      <section className="flex flex-col items-center mb-12 relative h-64 justify-center">
        {/* Background Ghost Number */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="font-headline text-[12rem] font-bold leading-none">{progress}</span>
        </div>
        
        {/* Progress Ring */}
        <div className="relative w-48 h-48 flex items-center justify-center z-10">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96" cy="96" r="88"
              className="text-surface-container-highest"
              strokeWidth="6" stroke="currentColor" fill="transparent"
            />
            <circle
              cx="96" cy="96" r="88"
              className="text-primary transition-all duration-1000 ease-out"
              strokeWidth="6"
              strokeDasharray={553}
              strokeDashoffset={553 - (553 * progress) / 100}
              strokeLinecap="round"
              stroke="currentColor" fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-headline text-6xl font-bold">{progress}%</span>
            <span className="font-label text-[10px] uppercase tracking-widest text-secondary -mt-1 font-bold">Progreso</span>
          </div>
        </div>

        <div className="mt-8 text-center z-10">
          <h1 className="font-headline text-3xl font-bold uppercase tracking-tight">Torno CNC-ALPHA</h1>
          <p className="font-label text-[10px] text-secondary tracking-widest mt-1">ID: #KN-90210-TX</p>
        </div>
      </section>

      {/* Manual Adjustment */}
      <section className="mb-12 px-2">
        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary/60 text-center block mb-4">Ajuste Manual de Progreso</label>
        <input 
          type="range" 
          min="0" max="100" 
          value={progress} 
          onChange={(e) => setProgress(parseInt(e.target.value))}
          className="w-full accent-primary bg-surface-container-highest rounded-lg h-1 appearance-none cursor-pointer"
        />
      </section>

      {/* Current Actions Grid */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-3 bg-tertiary"></div>
          <h2 className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">Estatus Actual</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Pendiente', icon: 'pause_circle', active: false },
            { label: 'En Curso', icon: 'home_repair_service', active: true },
            { label: 'Completado', icon: 'check_circle', active: false }
          ].map((status, i) => (
            <div key={i} className={`flex flex-col items-center justify-center gap-3 p-4 rounded-lg transition-all border ${
              status.active ? 'bg-primary/10 border-primary text-primary' : 'bg-surface-container-low border-outline-variant/10 text-secondary opacity-60'
            }`}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: status.active ? "'FILL' 1" : "'FILL' 0" }}>{status.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">{status.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-10">
        <div className="flex justify-between items-end mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-3 bg-primary"></div>
            <h2 className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">Galería de Evidencia</h2>
          </div>
          <span className="text-[9px] text-secondary/40 font-bold tracking-widest uppercase">3 ARCHIVOS</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex-shrink-0 w-32 h-32 border-2 border-dashed border-primary/20 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-primary/5 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>add_a_photo</span>
            <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Capturar</span>
          </div>
          <div className="flex-shrink-0 w-32 h-32 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20 relative group cursor-pointer">
            <img src="https://picsum.photos/seed/tool1/200/200" className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <span className="text-[8px] text-on-surface truncate font-mono uppercase tracking-widest">TV_REPARACION.JPG</span>
            </div>
          </div>
          <div className="flex-shrink-0 w-32 h-32 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20 relative group cursor-pointer">
            <img src="https://picsum.photos/seed/tool2/200/200" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <span className="text-[8px] text-on-surface truncate font-mono uppercase tracking-widest">IMG_043.JPG</span>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Log */}
      <section className="mb-10">
        <div className="flex justify-between items-end mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-3 bg-primary"></div>
            <h2 className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">Bitácora de Actividad</h2>
          </div>
          <span className="text-[9px] text-primary font-bold tracking-widest uppercase">Últimas 24h</span>
        </div>

        {/* Input Area */}
        <div className="bg-surface-container-low p-4 rounded-lg mb-8 border border-outline-variant/10">
          <div className="relative">
            <textarea 
              placeholder="Escribir nueva nota de actividad..." 
              className="w-full bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-secondary/30 resize-none h-20"
            />
            <button className="absolute right-0 bottom-0 w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center hover:bg-primary/20 transition-all active:scale-90">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
            </button>
          </div>
          <div className="mt-4 pt-4 border-t border-outline-variant/10 flex justify-between items-center">
            <span className="text-[9px] uppercase tracking-widest text-secondary font-bold">Modo: Técnico</span>
            <span className="text-[9px] uppercase tracking-widest text-primary font-bold cursor-pointer hover:opacity-80">Adjuntar Foto</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative">
          <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-outline-variant/10"></div>
          {[
            { title: 'Alineación de Ejes', desc: 'Calibración de servomotores completada con una desviación de <span class="text-tertiary">0.002mm</span>.', time: '14:20', active: true },
            { title: 'Reemplazo de Filtros', desc: 'Sistema de enfriamiento purgado. Instalación de filtros industriales Grado A.', time: '11:05', active: true },
            { title: 'Diagnóstico Inicial', desc: 'Reporte de vibración excesiva en el cabezal principal detectado por sensor IoT.', time: '08:30', active: false }
          ].map((log, i) => (
            <div key={i} className="pl-8 relative">
              <div className={`absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-background ${log.active ? 'bg-tertiary shadow-[0_0_8px_rgba(0,230,57,0.4)]' : 'bg-outline-variant'}`}></div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline font-bold text-sm uppercase tracking-tight">{log.title}</h3>
                <span className="font-label text-[9px] text-secondary font-bold">{log.time}</span>
              </div>
              <p className="text-secondary text-xs leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: log.desc }}></p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Info Bento */}
      <section className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10 grid grid-cols-2 gap-8 mb-10">
        <div>
          <span className="text-[9px] text-secondary uppercase tracking-widest block mb-2">Técnico</span>
          <span className="font-headline font-bold text-lg text-on-surface">Ing. Marcus V.</span>
        </div>
        <div>
          <span className="text-[9px] text-secondary uppercase tracking-widest block mb-2">Estimado</span>
          <span className="font-headline font-bold text-lg text-on-surface">04:30 Horas</span>
        </div>
      </section>
    </main>
  );
}
