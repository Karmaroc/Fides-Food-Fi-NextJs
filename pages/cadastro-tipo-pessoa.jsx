import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, User, Building, Zap } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CadastroTipoPessoa() {
  const [scrollY, setScrollY] = useState(0);
  const [tipoPessoa, setTipoPessoa] = useState('');
  const [apelido, setApelido] = useState('');
  const router = useRouter();


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const apelidoSalvo = localStorage.getItem('cadastroApelido');
    if (!apelidoSalvo) {
      router.push('/cadastro-nome');
    } else {
      setApelido(apelidoSalvo);
    }
  }, [router]);

  const parallaxOffset = scrollY * 0.5;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tipoPessoa) {
      localStorage.setItem('cadastroTipoPessoa', tipoPessoa);
      if (tipoPessoa === 'pf') {
        router.push('/cadastro-rg');
      } else {
        router.push('/cadastro-cnpj');
      }
    }
  };

  const handleBack = () => {
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
        
        .option-card {
          transition: all 0.3s ease;
        }
        
        .option-card:hover {
          border-color: #f97316;
          background: rgba(249, 115, 22, 0.05);
        }
        
        .option-card.selected {
          border-color: #f97316;
          background: rgba(249, 115, 22, 0.1);
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.1);
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
            <div className="bg-gradient-to-b from-orange-500 to-orange-600 w-2 rounded-full absolute top-0 left-0" style={{ height: '33.33%' }}></div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 font-medium font-orbitron">Passo 2 de 6</div>
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

        <div className="relative max-w-4xl mx-auto px-6 py-20 w-full">
          <div className="animate-fade-in-up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-orbitron font-black mb-4">
                <span className="brand-gradient">Olá, {apelido}</span>
              </h1>
            </div>


            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <button
                  type="button"
                  onClick={() => setTipoPessoa('pf')}
                  className={`option-card bg-white border-2 rounded-3xl p-8 text-left card-hover ${tipoPessoa === 'pf' ? 'selected' : 'border-gray-100'
                    }`}
                >
                  <div className="flex items-start gap-4">

                    <div className="flex-1">
                      <h3 className="text-2xl font-orbitron font-bold mb-2 text-gray-900">Pessoa Física</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Para uso pessoal e compras individuais com poder de compra ampliado
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-orange-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm">Cadastro com CPF</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm">Limite baseado em renda pessoal</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm">Aprovação rápida</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setTipoPessoa('pj')}
                  className={`option-card bg-white border-2 rounded-3xl p-8 text-left card-hover ${tipoPessoa === 'pj' ? 'selected' : 'border-gray-100'
                    }`}
                >
                  <div className="flex items-start gap-4">

                    <div className="flex-1">
                      <h3 className="text-2xl font-orbitron font-bold mb-2 text-gray-900">Pessoa Jurídica</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Para empresas e comércios que querem aceitar o método de pagamento
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-orange-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm">Cadastro com CNPJ</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm">Limite baseado em faturamento</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm">Taxas especiais para negócios</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={!tipoPessoa}
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg"
                >
                  <span>Continuar</span>
                  <ChevronRight size={24} />
                </button>
              </div>
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                Você poderá alterar o tipo de conta posteriormente, se necessário
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
