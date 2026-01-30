import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, Phone, Zap, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CadastroTelefone() {
  const [scrollY, setScrollY] = useState(0);
  const [telefone, setTelefone] = useState('');
  const [confirmTelefone, setConfirmTelefone] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
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
    const email = localStorage.getItem('cadastroEmail');
    
    if (!nome || !sobrenome || !tipoPessoa || !endereco || !email) {
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
    if (telefone && confirmTelefone && telefone === confirmTelefone && isValidTelefone(telefone)) {
      localStorage.setItem('cadastroTelefone', telefone);
      setIsCompleted(true);
      
      // Salvar todos os dados em um objeto completo
      const dadosCompletos = {
        nome: localStorage.getItem('cadastroNome'),
        sobrenome: localStorage.getItem('cadastroSobrenome'),
        tipoPessoa: localStorage.getItem('cadastroTipoPessoa'),
        rg: localStorage.getItem('cadastroRG'),
        orgaoExpedidor: localStorage.getItem('cadastroOrgaoExpedidor'),
        dataExpedicao: localStorage.getItem('cadastroDataExpedicao'),
        dataNascimento: localStorage.getItem('cadastroDataNascimento'),
        razaoSocial: localStorage.getItem('cadastroRazaoSocial'),
        nomeEmpresa: localStorage.getItem('cadastroNomeEmpresa'),
        cpfResponsavel: localStorage.getItem('cadastroCPFResponsavel'),
        nomeResponsavel: localStorage.getItem('cadastroNomeResponsavel'),
        endereco: JSON.parse(localStorage.getItem('cadastroEndereco')),
        email: localStorage.getItem('cadastroEmail'),
        telefone: telefone,
        dataCadastro: new Date().toISOString()
      };
      
      localStorage.setItem('cadastroCompleto', JSON.stringify(dadosCompletos));
    }
  };

  const handleBack = () => {
    router.push('/cadastro-email');
  };

  const handleGoToLogin = () => {
    router.push('/cadastro-inicial');
  };

  const isValidTelefone = (telefone) => {
    const telefoneLimpo = telefone.replace(/\D/g, '');
    return telefoneLimpo.length >= 10 && telefoneLimpo.length <= 11;
  };

  const formatTelefone = (value) => {
    const telefoneLimpo = value.replace(/\D/g, '');
    if (telefoneLimpo.length <= 10) {
      return telefoneLimpo.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return telefoneLimpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  };

  const getDadosCadastro = () => {
    const dados = localStorage.getItem('cadastroCompleto');
    return dados ? JSON.parse(dados) : null;
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
        
        @keyframes success-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
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
        
        .animate-success-pulse {
          animation: success-pulse 2s ease-in-out infinite;
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
            <div className="bg-gradient-to-b from-cyan-500 to-emerald-500 w-2 rounded-full absolute top-0 left-0" style={{ height: '100%' }}></div>
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

        <div className="relative max-w-4xl mx-auto px-6 py-20 w-full">
          {!isCompleted ? (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl flex items-center justify-center mb-6 glow-effect mx-auto animate-float">
                  <Phone className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-orbitron font-black mb-4">
                  <span className="gradient-text">SEU TELEFONE</span>
                </h1>
                <p className="text-xl text-gray-300 font-light">
                  Último passo! Precisamos do seu telefone para finalizar o cadastro
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="telefone" className="block text-lg font-medium text-gray-300 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      value={telefone}
                      onChange={(e) => setTelefone(formatTelefone(e.target.value))}
                      className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl text-white text-lg input-focus outline-none"
                      placeholder="(00) 00000-0000"
                      maxLength={15}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="confirmTelefone" className="block text-lg font-medium text-gray-300 mb-2">
                      Confirmar Telefone
                    </label>
                    <input
                      type="tel"
                      id="confirmTelefone"
                      value={confirmTelefone}
                      onChange={(e) => setConfirmTelefone(formatTelefone(e.target.value))}
                      className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl text-white text-lg input-focus outline-none"
                      placeholder="(00) 00000-0000"
                      maxLength={15}
                      required
                    />
                  </div>

                  {telefone && confirmTelefone && (
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-400 text-sm">Status da verificação</p>
                          <p className="text-lg font-semibold text-white">
                            {telefone === confirmTelefone && isValidTelefone(telefone) 
                              ? 'Telefones coincidem' 
                              : 'Os telefones não coincidem ou são inválidos'}
                          </p>
                        </div>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          telefone === confirmTelefone && isValidTelefone(telefone) 
                            ? 'bg-emerald-500/20 border-2 border-emerald-500' 
                            : 'bg-red-500/20 border-2 border-red-500'
                        }`}>
                          {telefone === confirmTelefone && isValidTelefone(telefone) ? (
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
                      <h4 className="text-white font-semibold mb-1">Importante sobre seu telefone</h4>
                      <ul className="text-gray-300 text-sm leading-relaxed space-y-1">
                        <li>• Usaremos para confirmações de segurança</li>
                        <li>• Enviaremos SMS sobre transações importantes</li>
                        <li>• Seu número é criptografado e protegido</li>
                        <li>• Você poderá alterá-lo nas configurações</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={!telefone || !confirmTelefone || telefone !== confirmTelefone || !isValidTelefone(telefone)}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.02] glow-effect disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  >
                    <span>Finalizar Cadastro</span>
                    <ChevronRight size={24} />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="animate-fade-in-up text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl flex items-center justify-center mb-8 glow-effect mx-auto animate-success-pulse">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-6">
                <span className="gradient-text">CADASTRO CONCLUÍDO!</span>
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                Bem-vindo ao <span className="text-emerald-400 font-bold">FidesFoodFi</span>! 
                Sua conta foi criada com sucesso e você já pode começar a usar todos os nossos serviços.
              </p>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl font-orbitron font-bold mb-6 text-white">Resumo do Cadastro</h2>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm">Nome Completo</p>
                      <p className="text-white font-semibold">
                        {getDadosCadastro()?.nome} {getDadosCadastro()?.sobrenome}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Tipo de Conta</p>
                      <p className="text-white font-semibold">
                        {getDadosCadastro()?.tipoPessoa === 'pf' ? 'Pessoa Física' : 'Pessoa Jurídica'}
                      </p>
                    </div>
                    {getDadosCadastro()?.tipoPessoa === 'pj' && (
                      <>
                        <div>
                          <p className="text-gray-400 text-sm">Razão Social</p>
                          <p className="text-white font-semibold">{getDadosCadastro()?.razaoSocial}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Nome Fantasia</p>
                          <p className="text-white font-semibold">{getDadosCadastro()?.nomeEmpresa}</p>
                        </div>
                      </>
                    )}
                    <div>
                      <p className="text-gray-400 text-sm">E-mail</p>
                      <p className="text-white font-semibold">{getDadosCadastro()?.email}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm">Telefone</p>
                      <p className="text-white font-semibold">{getDadosCadastro()?.telefone}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Cidade</p>
                      <p className="text-white font-semibold">
                        {getDadosCadastro()?.endereco?.cidade} - {getDadosCadastro()?.endereco?.estado}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Data de Cadastro</p>
                      <p className="text-white font-semibold">
                        {new Date(getDadosCadastro()?.dataCadastro).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleGoToLogin}
                  className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.02] glow-effect"
                >
                  Acessar Minha Conta
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
