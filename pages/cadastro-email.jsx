import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, Mail, Zap } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CadastroEmail() {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const nome = localStorage.getItem('cadastroNome');
    const sobrenome = localStorage.getItem('cadastroSobrenome');
    const tipoPessoa = localStorage.getItem('cadastroTipoPessoa');
    const endereco = localStorage.getItem('cadastroEndereco');
    
    if (!nome || !sobrenome || !tipoPessoa || !endereco) {
      router.push('/cadastro-tipo-pessoa');
      return;
    }
    
    // Verificação adicional baseada no tipo de pessoa
    if (tipoPessoa === 'pf') {
      const rg = localStorage.getItem('cadastroRG');
      const dataNascimento = localStorage.getItem('cadastroDataNascimento');
      if (!rg || !dataNascimento) {
        router.push('/cadastro-tipo-pessoa');
      }
    } else {
      const razaoSocial = localStorage.getItem('cadastroRazaoSocial');
      const nomeEmpresa = localStorage.getItem('cadastroNomeEmpresa');
      const cpfResponsavel = localStorage.getItem('cadastroCPFResponsavel');
      if (!razaoSocial || !nomeEmpresa || !cpfResponsavel) {
        router.push('/cadastro-tipo-pessoa');
      }
    }
  }, [router]);

  const parallaxOffset = scrollY * 0.5;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && confirmEmail && email === confirmEmail && isValidEmail(email)) {
      localStorage.setItem('cadastroEmail', email);
      router.push('/cadastro-telefone');
    }
  };

  const handleBack = () => {
    router.push('/cadastro-endereco');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
              onClick={handleBack}
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

      {/* Progress Bar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-full w-2 h-48 relative">
            <div className="bg-gradient-to-b from-cyan-500 to-emerald-500 w-2 rounded-full absolute top-0 left-0" style={{ height: '91.66%' }}></div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 font-medium">Passo 6 de 6</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid hero-gradient overflow-hidden pt-32">
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
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl flex items-center justify-center mb-6 glow-effect mx-auto animate-float">
                <Mail className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-orbitron font-black mb-4">
                <span className="gradient-text">SEU E-MAIL</span>
              </h1>
              <p className="text-xl text-gray-300 font-light">
                Usaremos seu e-mail para enviar comunicações importantes sobre sua conta
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl text-white text-lg input-focus outline-none"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="confirmEmail" className="block text-lg font-medium text-gray-300 mb-2">
                    Confirmar E-mail
                  </label>
                  <input
                    type="email"
                    id="confirmEmail"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl text-white text-lg input-focus outline-none"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                {email && confirmEmail && (
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Status da verificação</p>
                        <p className="text-lg font-semibold text-white">
                          {email === confirmEmail && isValidEmail(email) 
                            ? 'E-mails coincidem' 
                            : 'Os e-mails não coincidem ou são inválidos'}
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        email === confirmEmail && isValidEmail(email) 
                          ? 'bg-emerald-500/20 border-2 border-emerald-500' 
                          : 'bg-red-500/20 border-2 border-red-500'
                      }`}>
                        {email === confirmEmail && isValidEmail(email) ? (
                          <span className="text-emerald-400 text-xl">✓</span>
                        ) : (
                          <span className="text-red-400 text-xl">✗</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">i</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Importante sobre seu e-mail</h4>
                    <ul className="text-gray-300 text-sm leading-relaxed space-y-1">
                      <li>• Enviaremos confirmações de transações para este e-mail</li>
                      <li>• Use um e-mail que você acessa regularmente</li>
                      <li>• Nunca compartilharemos seu e-mail com terceiros</li>
                      <li>• Você poderá alterá-lo posteriormente nas configurações</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={!email || !confirmEmail || email !== confirmEmail || !isValidEmail(email)}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.02] glow-effect disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  <span>Continuar</span>
                  <ChevronRight size={24} />
                </button>
              </div>
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm">
                Suas informações estão seguras e serão usadas apenas para criar sua conta
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
