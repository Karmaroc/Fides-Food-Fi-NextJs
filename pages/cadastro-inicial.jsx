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

  const handleAcesseRealidade = () => {
    router.push('/cadastro-nome');
  };

  const handleCriarConta = () => {
    router.push('/cadastro-nome');
  };

  return (
    <div className="bg-slate-950 text-white font-sans overflow-x-hidden min-h-screen">
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
          background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%);
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
        
        .bg-grid {
          background-image: 
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .hero-gradient {
          background: radial-gradient(ellipse at top, rgba(14, 165, 233, 0.15) 0%, transparent 60%),
                      radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.15) 0%, transparent 60%);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300" 
           style={{
             backgroundColor: scrollY > 50 ? 'rgba(2, 6, 23, 0.95)' : 'transparent',
             backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
             borderBottom: scrollY > 50 ? '1px solid rgba(14, 165, 233, 0.2)' : 'none'
           }}>
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
              <div className="flex items-center">
                <span className="text-2xl font-normal text-white" style={{fontFamily: 'Poiret One, cursive', letterSpacing: '1.5px'}}>Fides</span>
                <span className="text-2xl font-normal text-cyan-500" style={{fontFamily: 'Monoton, cursive', letterSpacing: '0.8px'}}>Food</span>
                <span className="text-2xl font-normal text-white" style={{fontFamily: 'Poiret One, cursive', letterSpacing: '1.5px'}}>Fi</span>
              </div>
            </div>
            
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid hero-gradient overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-8 leading-tight">
              <span className="gradient-text">BEM-VINDO</span>
              <br />
              <span className="text-white">À NOVA REALIDADE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Escolha como começar sua jornada no FidesFoodFi e transforme seu poder de compra
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <button 
                onClick={handleAcesseRealidade}
                className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 card-hover animate-fade-in-up group relative overflow-hidden"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 glow-effect mx-auto">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">Acesse essa Realidade</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    Entre com sua conta existente e continue de onde parou
                  </p>
                  <div className="flex items-center justify-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="font-semibold">Fazer Login</span>
                    <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              <button 
                onClick={handleCriarConta}
                className="bg-slate-800/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 card-hover animate-fade-in-up group relative overflow-hidden"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 glow-effect mx-auto">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">Criar Conta Grátis</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    Cadastre-se agora e comece a usar o FidesFoodFi imediatamente
                  </p>
                  <div className="flex items-center justify-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span className="font-semibold">Começar Agora</span>
                    <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-8 text-gray-400">
                  <div className="text-center">
                    <div className="text-3xl font-orbitron font-bold text-emerald-400">2x</div>
                    <div className="text-sm">Poder de Compra</div>
                  </div>
                  <div className="w-px h-12 bg-cyan-500/20"></div>
                  <div className="text-center">
                    <div className="text-3xl font-orbitron font-bold text-cyan-400">50%</div>
                    <div className="text-sm">Entrada</div>
                  </div>
                  <div className="w-px h-12 bg-cyan-500/20"></div>
                  <div className="text-center">
                    <div className="text-3xl font-orbitron font-bold text-emerald-400">5%</div>
                    <div className="text-sm">Taxa Mínima</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
