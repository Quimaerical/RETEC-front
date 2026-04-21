import { Screen } from '../types';

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <main className="pt-24 pb-12 px-6 flex flex-col min-h-screen relative overflow-hidden">
      {/* Visual Accent Background */}
      <div className="fixed top-0 right-0 -z-10 opacity-20 pointer-events-none">
        <div className="text-[20rem] font-headline font-bold text-primary/5 leading-none select-none">
          01
        </div>
      </div>

      {/* Header Section */}
      <section className="mt-8 mb-12">
        <div className="h-1 w-12 bg-primary mb-6"></div>
        <h1 className="font-headline text-5xl font-bold tracking-tight text-on-surface mb-2 leading-[1.1] uppercase">
          Iniciar<br />Sesión
        </h1>
      </section>

      {/* Form Section */}
      <form className="space-y-10 flex-grow" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <div className="space-y-8">
          <div className="relative">
            <div className="flex justify-between items-end mb-2">
              <label className="font-label text-xs uppercase tracking-widest text-secondary">Identificación de Usuario</label>
              <span className="font-label text-[10px] text-primary/60">REQUERIDO</span>
            </div>
            <div className="relative group">
              <input 
                className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface placeholder:text-secondary/30 py-4 transition-all duration-300" 
                placeholder="ID de Empleado o Correo" 
                type="text" 
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
                <span className="material-symbols-outlined">badge</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-between items-end mb-2">
              <label className="font-label text-xs uppercase tracking-widest text-secondary">Contraseña Maestra</label>
              <a className="font-label text-[10px] text-primary hover:opacity-80 transition-opacity uppercase" href="#">¿Olvidó la clave?</a>
            </div>
            <div className="relative group">
              <input 
                className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface placeholder:text-secondary/30 py-4 transition-all duration-300" 
                placeholder="••••••••••••" 
                type="password" 
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
                <span className="material-symbols-outlined">key</span>
              </div>
            </div>
          </div>
        </div>

        {/* Admin 2FA Section */}
        <div className="bg-surface-container-low p-6 rounded-lg relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-tertiary"></div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-headline text-lg font-bold text-on-surface leading-none mb-1">MÓDULO 2FA</h3>
              <p className="font-label text-[10px] text-secondary uppercase tracking-tighter">Solo para Niveles de Administración</p>
            </div>
            <span className="material-symbols-outlined text-tertiary text-xl">security</span>
          </div>
          <div className="grid grid-cols-6 gap-2 mt-4">
            {[...Array(6)].map((_, i) => (
              <input 
                key={i}
                className="col-span-1 aspect-square text-center bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 text-primary font-headline text-xl p-0" 
                maxLength={1} 
                type="text" 
              />
            ))}
          </div>
          <p className="mt-4 text-[10px] text-secondary font-body leading-relaxed">
            Ingrese el código generado por su hardware de seguridad o aplicación de autenticación para validar permisos de arquitectura.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <button 
            className="retec-gradient w-full py-5 rounded-lg flex items-center justify-between px-8 shadow-[0_20px_40px_rgba(0,57,33,0.2)] active:scale-[0.98] transition-all duration-150 group" 
            type="submit"
          >
            <span className="text-on-primary font-headline font-bold text-lg tracking-tight uppercase">Continuar al sistema</span>
            <span className="material-symbols-outlined text-on-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="h-px bg-outline-variant/30 flex-grow"></div>
            <span className="font-label text-[10px] text-secondary/50 uppercase tracking-widest whitespace-nowrap">Conexión Segura TLS 1.3</span>
            <div className="h-px bg-outline-variant/30 flex-grow"></div>
          </div>
        </div>
      </form>

      <footer className="mt-12 text-center">
        <p className="font-label text-[10px] text-secondary/40 leading-relaxed uppercase tracking-[0.2em]">
          © 2024 RETEC Industrial Systems<br />
          Operaciones Mecanizadas de Alta Precisión
        </p>
      </footer>

      {/* Decoration Layer */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-primary/20 pointer-events-none">
        <div className="h-full bg-primary w-1/3 transition-all duration-1000 animate-pulse"></div>
      </div>
    </main>
  );
}
