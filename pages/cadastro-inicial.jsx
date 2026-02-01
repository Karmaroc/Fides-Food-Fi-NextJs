import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, Zap, User, Building } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CadastroInicial() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;



  const handleCriarConta = () => {
    router.push('/cadastro-nome');
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
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(16, 185, 129, 0.3);
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
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={24} />
              <span>Voltar</span>
            </button>

            <div className="flex items-center space-x-2">
              <div className="flex items-center brand-gradient-container cursor-pointer" onClick={() => router.push('/')}>
                <span className="text-3xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fides</span>
                <span className="text-3xl font-normal brand-gradient" style={{ fontFamily: 'Monoton, cursive', letterSpacing: '1px' }}>Food</span>
                <span className="text-3xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fi</span>
              </div>
            </div>

            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Split Layout Section */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 relative hidden lg:block">
          <img
            src="/folha_transparente.jpg"
            alt="Acesso"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/30"></div>
        </div>

        {/* Right Side - Content */}
        <section className="lg:w-1/2 relative min-h-screen flex items-center justify-center bg-white hero-gradient overflow-hidden text-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative max-w-xl mx-auto px-6 py-32 w-full">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-8 leading-tight">
                <span className="brand-gradient">BEM-VINDO</span>
                <br />
                <span className="brand-gradient">À NOVA REALIDADE</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-12 font-light leading-relaxed">
                Compre hoje pela metade do preço e pague o restante em até 3 meses.
              </p>

              <div className="flex justify-center w-full">
                <button
                  onClick={handleCriarConta}
                  className="bg-gray-50 border border-gray-100 rounded-3xl p-8 card-hover animate-fade-in-up group relative overflow-hidden w-full shadow-lg"
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="relative z-10">
                    <h3 className="text-3xl font-orbitron font-bold mb-4 text-gray-900">É aqui que começa.</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Cadastre-se agora e comece a usar o FidesFoodFi imediatamente
                    </p>
                    <div className="flex items-center justify-center gap-2 text-white bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-xl border border-orange-400/20 max-w-xs mx-auto shadow-md hover:shadow-orange-500/30 transition-all">
                      <span className="font-bold text-lg">Começar Agora</span>
                      <ChevronRight size={24} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
