import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, CreditCard, Zap } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CadastroRG() {
  const [scrollY, setScrollY] = useState(0);
  const [rg, setRg] = useState('');
  const [orgaoExpedidor, setOrgaoExpedidor] = useState('');
  const [dataExpedicao, setDataExpedicao] = useState('');
  const [dataFormatada, setDataFormatada] = useState('');
  const [apelido, setApelido] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const apelidoSalvo = localStorage.getItem('cadastroApelido');
    const tipoPessoa = localStorage.getItem('cadastroTipoPessoa');
    if (!apelidoSalvo || !tipoPessoa || tipoPessoa !== 'pf') {
      router.push('/cadastro-tipo-pessoa');
    } else {
      setApelido(apelidoSalvo);
    }
  }, [router]);

  const parallaxOffset = scrollY * 0.5;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rg.trim() && orgaoExpedidor.trim() && dataExpedicao) {
      localStorage.setItem('cadastroRG', rg);
      localStorage.setItem('cadastroOrgaoExpedidor', orgaoExpedidor);
      localStorage.setItem('cadastroDataExpedicao', dataExpedicao);
      router.push('/cadastro-data-nascimento');
    }
  };

  const handleBack = () => {
    router.push('/cadastro-tipo-pessoa');
  };

  const formatRG = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
  };

  const formatDate = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 4) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    } else {
      return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
    }
  };

  const handleDateChange = (value) => {
    const formatted = formatDate(value);
    setDataFormatada(formatted);

    // Convert DD/MM/YYYY to YYYY-MM-DD for storage
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 8) {
      const day = numbers.slice(0, 2);
      const month = numbers.slice(2, 4);
      const year = numbers.slice(4, 8);
      setDataExpedicao(`${year}-${month}-${day}`);
    }
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
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-full h-2 w-48 relative">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full absolute top-0 left-0" style={{ width: '50%' }}></div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 font-medium font-orbitron">Passo 3 de 6</div>
          </div>
        </div>
      </div>

      {/* Split Layout Section */}
      <div className="min-h-screen flex flex-col lg:flex-row pt-20">
        {/* Left Side - Text with Gradient */}
        <div className="lg:w-1/2 relative flex items-center justify-center bg-white hero-gradient p-12 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-black leading-tight text-center lg:text-left">
              <span className="brand-gradient">
                {apelido}, precisamos dos dados do seu documento
              </span>
            </h1>
          </div>
        </div>

        {/* Right Side - Form */}
        <section className="lg:w-1/2 relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
          <div className="relative max-w-xl mx-auto px-6 py-20 w-full">
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="rg" className="block text-lg font-medium text-gray-700 mb-2">
                      Número do RG
                    </label>
                    <input
                      type="text"
                      id="rg"
                      value={rg}
                      onChange={(e) => setRg(formatRG(e.target.value))}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all shadow-sm"
                      placeholder="XX.XXX.XXX-X"
                      maxLength={12}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="orgaoExpedidor" className="block text-lg font-medium text-gray-700 mb-2">
                      Órgão Expedidor
                    </label>
                    <select
                      id="orgaoExpedidor"
                      value={orgaoExpedidor}
                      onChange={(e) => setOrgaoExpedidor(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all shadow-sm"
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="SSP">SSP</option>
                      <option value="DGPC">DGPC</option>
                      <option value="PC">PC</option>
                      <option value="PM">PM</option>
                      <option value="COREN">COREN</option>
                      <option value="CREA">CREA</option>
                      <option value="CRM">CRM</option>
                      <option value="CRO">CRO</option>
                      <option value="CRF">CRF</option>
                      <option value="OUTROS">OUTROS</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dataExpedicao" className="block text-lg font-medium text-gray-700 mb-2">
                      Data de Expedição
                    </label>
                    <input
                      type="text"
                      id="dataExpedicao"
                      value={dataFormatada}
                      onChange={(e) => handleDateChange(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all shadow-sm"
                      placeholder="DD/MM/AAAA"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={!rg.trim() || !orgaoExpedidor.trim() || !dataExpedicao}
                    className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg"
                  >
                    <span>Continuar</span>
                    <ChevronRight size={24} />
                  </button>
                </div>
              </form>

              <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm">
                  Suas informações estão seguras e criptografadas
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
