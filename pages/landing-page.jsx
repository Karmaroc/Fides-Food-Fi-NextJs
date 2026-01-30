import React, { useState, useEffect } from 'react';
import { Check, Zap, Users, TrendingUp, Shield, ChevronRight, Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cliente');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="bg-slate-950 text-white font-sans overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Bebas+Neue&family=Exo+2:wght@600;700;800;900&family=Josefin+Sans:wght@300;400;500;600;700&family=Monoton&family=Alerta+Stencil&family=Saira+Stencil+One&family=Bungee+Inline&family=Major+Mono+Display&family=Poiret+One&display=swap');
        
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
        
        @keyframes slide-in-left-light {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
        
        .animate-slide-in-left-light {
          animation: slide-in-left-light 1.2s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
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
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="flex items-center animate-slide-in-left-light">
                <span className="text-3xl font-normal text-white" style={{fontFamily: 'Poiret One, cursive', letterSpacing: '2px'}}>Fides</span>
                <span className="text-3xl font-normal text-cyan-500" style={{fontFamily: 'Monoton, cursive', letterSpacing: '1px'}}>Food</span>
                <span className="text-3xl font-normal text-white" style={{fontFamily: 'Poiret One, cursive', letterSpacing: '2px'}}>Fi</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#como-funciona" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">Como Funciona</a>
              <a href="#beneficios" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">Benefícios</a>
              <button 
                onClick={() => window.location.href = '/cadastro-inicial'}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
              >
                Acesse essa realidade
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-cyan-500/20">
            <div className="px-6 py-4 space-y-4">
              <a href="#como-funciona" className="block text-gray-400 hover:text-emerald-400 transition-colors font-medium">Como Funciona</a>
              <a href="#beneficios" className="block text-gray-400 hover:text-emerald-400 transition-colors font-medium">Benefícios</a>
              <button 
                onClick={() => window.location.href = '/cadastro-inicial'}
                className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold"
              >
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 leading-tight">
              <span className="gradient-text">PODER DE COMPRA</span>
              <br />
              <span className="text-gray-900">AMPLIADO PELA FÉ MÚTUA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Compre hoje pela metade do preço e pague o restante em até 3 meses. Aumente seu poder de compra <span className="text-blue-600 font-bold">2x</span> e impulsione seu negócio com condições exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.location.href = '/cadastro-inicial'}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-bold hover:shadow-2xl hover:shadow-blue-600/50 transition-all transform hover:scale-105 glow-effect"
              >
                Começar com 5% no 2° mês
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { value: '2x', label: 'Poder de Compra', delay: '0.2s' },
              { value: '50%', label: 'Entrada Facilitada', delay: '0.4s' },
              { value: '5%', label: 'Taxa de Antecipação', delay: '0.6s' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-blue-600/20 rounded-2xl p-8 card-hover animate-fade-in-up shadow-lg"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-5xl font-orbitron font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-32 px-6 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6">
              <span className="gradient-text">COMO FUNCIONA</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Sistema inteligente de pagamento parcelado com benefícios únicos
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-600/20 rounded-full p-2 inline-flex shadow-md">
              <button
                onClick={() => setActiveTab('cliente')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'cliente' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Para Clientes
              </button>
              <button
                onClick={() => setActiveTab('comercio')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'comercio' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Para Comércios
              </button>
            </div>
          </div>

          {activeTab === 'cliente' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm border border-blue-600/20 rounded-3xl p-8 card-hover animate-slide-in-left shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 glow-effect">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-orbitron font-bold mb-4 gradient-text">Contrato Padrão</h3>
                <div className="space-y-4 text-gray-700 text-lg">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span><strong className="text-gray-900">50% de entrada</strong> no primeiro mês com poder de compra 2x maior</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span><strong className="text-gray-900">50% restante</strong> no próximo mês + 10% de taxa operacional</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Válido para compras de <strong className="text-gray-900">R$ 200 até R$ 3.000</strong></span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-blue-600/20 rounded-3xl p-8 card-hover animate-slide-in-right shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl flex items-center justify-center mb-6 glow-effect">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-orbitron font-bold mb-4 gradient-text">Terceira Parcela Antecipada</h3>
                <div className="space-y-4 text-gray-700 text-lg">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Nova compra já no segundo mês com <strong className="text-gray-900">50% de entrada</strong> da última parcela</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Taxa de apenas <strong className="text-gray-900">5%</strong> ao gerar o contrato antecipadamente para a FidesFoodFi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Poder de compra <strong className="text-gray-900">2x maior</strong> no segundo mês de entrada</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'comercio' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm border border-blue-600/20 rounded-3xl p-10 card-hover shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mb-6 glow-effect mx-auto">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-orbitron font-bold mb-8 text-center gradient-text">Planos para Comércios</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 border border-blue-600/20 rounded-2xl p-6">
                    <div className="text-center mb-4">
                      <div className="text-blue-600 text-sm font-bold mb-2">PLANO MENSAL</div>
                      <div className="text-5xl font-orbitron font-bold text-gray-900 mb-2">R$ 149<span className="text-2xl text-gray-500">,90</span></div>
                      <div className="text-gray-600">por mês</div>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>Sistema completo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>Suporte prioritário</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>Preferência algorítmica</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-blue-600/20 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-800 to-blue-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      ECONOMIZE
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-blue-600 text-sm font-bold mb-2">PLANO BIMESTRAL</div>
                      <div className="text-5xl font-orbitron font-bold text-gray-900 mb-2">R$ 249<span className="text-2xl text-gray-500">,90</span></div>
                      <div className="text-gray-600">a cada 2 meses</div>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>Sistema completo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>Suporte prioritário</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>Economia de ~17%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-blue-600/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Condição Especial de Início</h4>
                      <p className="text-gray-700 text-lg">
                        Comece a pagar a assinatura somente quando <strong className="text-gray-900">5 clientes</strong> optarem 
                        pelo método de pagamento. Teste gratuitamente até atingir esse marco!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-32 px-6 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6">
              <span className="gradient-text">BENEFÍCIOS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Vantagens que transformam a experiência de compra
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: 'Poder de Compra 2x',
                description: 'Na primeira parcela do potencial trimestre, você compra um serviço ou produto pela metade do preço',
                color: 'from-blue-800 to-blue-900'
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Pagamento Instantâneo',
                description: 'Primeira parcela sempre com Pix, comprovando sua fonte de renda em débito',
                color: 'from-blue-800 to-blue-900'
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'Segurança Total',
                description: 'Transações protegidas, sem custódia de valores. Apenas compartilhamento de Chaves Pix',
                color: 'from-blue-800 to-blue-900'
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Modelo P2P. Para Todos',
                description: 'Sistema acessível tanto de pessoa para pessoa, quanto para comerciantes parceiros. Uma via de mão dupla ',
                color: 'from-blue-800 to-blue-900'
              },
              {
                icon: <Check className="w-10 h-10" />,
                title: 'Taxas Transparentes',
                description: 'Sem surpresas. Todas as taxas são claras e informadas antecipadamente',
                color: 'from-blue-900 to-blue-800'
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: 'Limite de acordo com a renda',
                description: 'O limite de pagamento liberado é de até 30% do seu salário',
                color: 'from-blue-900 to-blue-800'
              }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-blue-600/20 rounded-3xl p-8 card-hover animate-fade-in-up shadow-lg"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 glow-effect text-white`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-6 leading-tight">
              <span className="gradient-text">PRONTO PARA</span>
              <br />
              <span className="text-gray-900">DECOLAR?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Junte-se a milhares de clientes e comerciantes que já estão transformando 
              a forma de comprar e vender com o FidesFoodFi
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-600/20 rounded-3xl p-6 card-hover animate-fade-in-up shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mb-6 glow-effect mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-gray-900 text-center">Falar com Especialista</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
                Tire suas dúvidas com nossa equipe especializada. Receba orientação personalizada para o seu negócio.
              </p>
              <button className="w-full px-6 py-3 border-2 border-blue-800 text-blue-800 rounded-lg font-semibold hover:bg-blue-800/10 transition-all">
                Agendar Atendimento
              </button>
            </div>
          </div>

          <div className="mt-12 max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-600/20 rounded-xl p-4 sm:p-6 lg:p-8 animate-fade-in-up shadow-lg">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Condição Especial Para Remuneração</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                      <p className="text-blue-600 font-semibold text-sm sm:text-base mb-2">👤 Para Pessoa Física:</p>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Para cada pessoa que fez e quitou uma compra com seu link de referência, <strong className="text-gray-900">te fará receber um valor acumulativo</strong> de <strong className="text-blue-600">2% por pessoa</strong> sobre o valor final da quitação.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                      <p className="text-blue-600 font-semibold text-sm sm:text-base mb-2">🏢 Para Pessoa Jurídica/Comércio:</p>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Clientes serão orientados para seu negócio pelo algoritmo do sistema, <strong className="text-gray-900">aumentando o faturamento pela recorrência</strong>. Oferecemos limite mínimo de faturamento, ficamos com <strong className="text-blue-600">5% da receita</strong> de cada comércio.
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-4 font-medium text-center sm:text-left">
                    *Modelo ainda em construção.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-cyan-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  <span className="text-2xl font-normal text-white" style={{fontFamily: 'Poiret One, cursive', letterSpacing: '1px'}}>Fides</span>
                  <span className="text-2xl font-normal text-cyan-500" style={{fontFamily: 'Monoton, cursive', letterSpacing: '0.5px'}}>Food</span>
                  <span className="text-2xl font-normal text-white" style={{fontFamily: 'Poiret One, cursive', letterSpacing: '1px'}}>Fi</span>
                </div>
              </div>
              <p className="text-gray-400">
                Revolucionando a forma de comprar e vender no Brasil
              </p>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#como-funciona" className="hover:text-emerald-400 transition-colors">Como Funciona</a></li>
                <li><a href="#beneficios" className="hover:text-emerald-400 transition-colors">Benefícios</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/20 pt-8 text-center text-gray-400">
            <p>© 2026 FidesFoodFi. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
