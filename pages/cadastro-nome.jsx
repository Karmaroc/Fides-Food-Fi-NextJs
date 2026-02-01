import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, Zap } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CadastroNome() {
  const [scrollY, setScrollY] = useState(0);
  const [apelido, setApelido] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (apelido.trim()) {
      localStorage.setItem('cadastroApelido', apelido);
      router.push('/cadastro-tipo-pessoa');
    }
  };

  const handleBack = () => {
    router.push('/cadastro-inicial');
  };

  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden min-h-screen">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Poiret+One&family=Monoton&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Rajdhani', sans-serif;
          overflow-x: hidden;
        }
        
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #1e3a8a 0%, #10b981 50%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glow-effect {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.3),
                      0 0 60px rgba(14, 165, 233, 0.2);
        }
        
        .input-focus {
          transition: all 0.3s ease;
        }
        
        .input-focus:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .brand-gradient {
          background: linear-gradient(to right, #3b82f6, #10b981, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.2s ease-in-out;
        }
        
        .gradient-border {
          background: linear-gradient(to right, #3b82f6, #10b981, #f97316);
          padding: 2px;
          border-radius: 1rem;
        }

        .hero-gradient {
          background: radial-gradient(ellipse at top, rgba(14, 165, 233, 0.1) 0%, transparent 60%),
                      radial-gradient(ellipse at bottom right, rgba(249, 115, 22, 0.1) 0%, transparent 60%);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-900 backdrop-blur-md border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={24} />
              <span>Voltar</span>
            </button>

            <div className="flex items-center space-x-2">
              <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
                <span className="text-3xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fides</span>
                <span className="text-3xl font-normal brand-gradient" style={{ fontFamily: 'Monoton, cursive', letterSpacing: '1px' }}>Food</span>
                <span className="text-3xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fi</span>
              </div>
            </div>

            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-full w-2 h-48 relative">
            <div className="bg-gradient-to-b from-orange-500 to-orange-600 w-2 rounded-full absolute top-0 left-0" style={{ height: '16.66%' }}></div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 font-medium font-orbitron">Passo 1 de 6</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center justify-center bg-white hero-gradient overflow-hidden pt-32">
        <div
          className="absolute inset-0 opacity-30"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-2xl mx-auto px-6 py-20 w-full">
          <div className="animate-fade-in-up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-orbitron font-black mb-4">
                <span className="brand-gradient">COMO PODEMOS</span>
                <br />
                <span className="brand-gradient">TE CHAMAR?</span>
              </h1>
              <p className="text-xl text-gray-600 font-light">
                Escolha um apelido para sua conta
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="apelido" className="block text-lg font-medium text-gray-700 mb-2">
                    Apelido
                  </label>
                  <div className="gradient-border">
                    <input
                      type="text"
                      id="apelido"
                      value={apelido}
                      onChange={(e) => setApelido(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border-0 rounded-xl text-gray-900 text-lg focus:ring-2 focus:ring-orange-500/20 outline-none transition-all shadow-sm"
                      placeholder="Ex: Vitor"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={!apelido.trim()}
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg"
                >
                  <span>Continuar</span>
                  <ChevronRight size={24} />
                </button>
              </div>
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                Suas informações estão seguras e serão usadas apenas para criar sua conta
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
