import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { Screen } from '../types';

interface ReportsScreenProps {
  onNavigate: (screen: Screen) => void;
}

const data = [
  { name: 'S1', val: 40 },
  { name: 'S2', val: 65 },
  { name: 'S3', val: 55 },
  { name: 'S4', val: 85 },
  { name: 'S5', val: 70 },
  { name: 'S6', val: 95 },
  { name: 'S7', val: 80 },
];

export default function ReportsScreen({ onNavigate }: ReportsScreenProps) {
  return (
    <main className="pt-24 pb-32 px-6 overflow-x-hidden min-h-screen">
      <span className="font-label text-[10px] text-primary uppercase font-bold tracking-[0.2em] mb-1 block">Sistema de Análisis</span>
      <h1 className="font-headline text-4xl font-bold mb-4 tracking-tight">Informes</h1>
      <p className="text-secondary text-sm font-light leading-relaxed mb-8">Métricas de rendimiento y registros de mantenimiento industrial.</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {['MENSUAL', 'SEMANAL', 'ANUAL'].map((tab, i) => (
          <button key={i} className={`px-6 py-2.5 rounded-sm font-label text-[10px] font-bold tracking-widest border transition-all ${
            i === 0 ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-highest/20 text-secondary border-outline-variant/20'
          }`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Chart Card */}
      <section className="bg-surface-container-low p-6 rounded-lg mb-8 relative overflow-hidden border border-outline-variant/10">
        <div className="absolute -right-4 top-4 opacity-5 pointer-events-none">
          <span className="font-headline text-[10rem] font-bold leading-none">01</span>
        </div>
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-3 bg-tertiary"></div>
          <h2 className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">Tendencia de Eficiencia</h2>
        </div>

        <div className="h-40 w-full mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Bar dataKey="val" radius={[2, 2, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 5 ? '#59DE9B' : '#59DE9B40'} />
                ))}
              </Bar>
              <XAxis dataKey="name" hide />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <span className="font-headline text-5xl font-bold">94.2%</span>
            <span className="block font-label text-[9px] text-tertiary uppercase font-bold tracking-widest mt-1">+2.4% VS MES ANTERIOR</span>
          </div>
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'wght' 700" }}>trending_up</span>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-surface-container p-5 rounded-lg border border-outline-variant/10 relative group">
          <span className="material-symbols-outlined text-secondary text-lg mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
          <span className="font-label text-[10px] uppercase tracking-widest text-secondary block">Tiempo Activo</span>
          <span className="font-headline text-2xl font-bold mt-1 block">1,240h</span>
        </div>
        <div className="bg-surface-container p-5 rounded-lg border border-outline-variant/10">
          <span className="material-symbols-outlined text-secondary text-lg mb-4 block">build</span>
          <span className="font-label text-[10px] uppercase tracking-widest text-secondary block">Mantenimiento</span>
          <span className="font-headline text-2xl font-bold mt-1 block">12h</span>
        </div>
      </section>

      {/* Generated Reports List */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-headline text-lg font-bold tracking-tight">Informes Generados</h2>
          <span className="font-label text-[10px] text-primary uppercase tracking-[0.1em] border-b border-primary/30 pb-0.5 cursor-pointer">Ver todos</span>
        </div>

        <div className="space-y-3">
          {[
            { name: 'Rendimiento_Oct_2023.pdf', date: '12 Oct 2023', size: '2.4 MB' },
            { name: 'Mantenimiento_S40.pdf', date: '05 Oct 2023', size: '1.8 MB' },
            { name: 'Audit_Energetico_Q3.pdf', date: '28 Sep 2023', size: '5.1 MB' }
          ].map((report, i) => (
            <div key={i} className="bg-surface-container-low rounded-lg p-4 flex items-center justify-between border border-transparent hover:border-outline-variant/20 transition-all cursor-pointer group">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 bg-outline/10 rounded-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">picture_as_pdf</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-headline text-sm font-bold text-on-surface truncate pr-2">{report.name}</h4>
                  <span className="text-[10px] text-secondary/40 font-bold uppercase tracking-tighter">{report.date} • {report.size}</span>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all active:scale-90">
                <span className="material-symbols-outlined text-xs text-secondary group-hover:text-primary" style={{ fontVariationSettings: "'wght' 700" }}>download</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAB */}
      <button 
        onClick={() => onNavigate('create_note')}
        className="fixed right-6 bottom-24 w-14 h-14 rounded-sm bg-gradient-to-br from-primary to-primary-container shadow-[0_0_20px_rgba(89,222,155,0.4)] flex items-center justify-center active:scale-90 transition-transform z-50 group"
      >
        <span className="material-symbols-outlined text-on-primary text-3xl group-hover:scale-110 transition-transform">post_add</span>
      </button>
    </main>
  );
}
