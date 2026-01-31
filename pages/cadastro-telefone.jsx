import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CadastroTelefone() {
  const [scrollY, setScrollY] = useState(0);
  const [telefone, setTelefone] = useState('');
  const [confirmTelefone, setConfirmTelefone] = useState('');
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

    if (tipoPessoa === 'pf') {
      const rg = localStorage.getItem('cadastroRG');
      const dataNascimento = localStorage.getItem('cadastroDataNascimento');
      if (!rg || !dataNascimento) router.push('/cadastro-tipo-pessoa');
    } else {
      const razaoSocial = localStorage.getItem('cadastroRazaoSocial');
      const nomeEmpresa = localStorage.getItem('cadastroNomeEmpresa');
      const cpfResponsavel = localStorage.getItem('cadastroCPFResponsavel');
      if (!razaoSocial || !nomeEmpresa || !cpfResponsavel) router.push('/cadastro-tipo-pessoa');
    }
  }, [router]);

  const parallaxOffset = scrollY * 0.5;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (telefone && confirmTelefone && telefone === confirmTelefone && isValidTelefone(telefone)) {
      localStorage.setItem('cadastroTelefone', telefone);

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
      if (dadosCompletos.tipoPessoa === 'pj') {
        router.push('/cadastro-sucesso-business');
      } else {
        router.push('/cadastro-sucesso');
      }
    }
  };

  const handleBack = () => router.push('/cadastro-email');

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

  return (
    <div className="bg-slate-950 text-white font-sans overflow-x-hidden min-h-screen">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Poiret+One&family=Monoton&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Rajdhani', sans-serif; overflow-x: hidden; }
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .gradient-text {
          background: linear-gradient(to right, #3b82f6, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glow-effect {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.3), 0 0 60px rgba(14, 165, 233, 0.2);
        }
        .input-focus { transition: all 0.3s ease; }
        .input-focus:focus { border-color: #10b981; box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1); }
        @keyframes pulse-glow { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .bg-grid {
          background-image: linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .hero-gradient {
          background: radial-gradient(ellipse at top, rgba(14, 165, 233, 0.15) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.15) 0%, transparent 60%);
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
            <button onClick={handleBack} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft size={24} /> <span>Voltar</span>
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fides</span>
              <span className="text-3xl font-normal gradient-text" style={{ fontFamily: 'Monoton, cursive', letterSpacing: '1px' }}>Food</span>
              <span className="text-3xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fi</span>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="lg:w-1/2 relative flex items-center justify-center bg-grid hero-gradient p-12 overflow-hidden min-h-[40vh] lg:min-h-screen">
          <div className="absolute inset-0">
            <img
              src="/folhas_final.jpg"
              alt="Folhas Background"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent lg:bg-gradient-to-b"></div>
          </div>
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-orbitron font-medium text-gray-400 mb-6 uppercase tracking-widest">Bem-vindo ao</h2>
            <div className="flex items-center justify-center lg:justify-start">
              <span className="text-5xl md:text-6xl lg:text-7xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fides</span>
              <span className="text-5xl md:text-6xl lg:text-7xl font-normal gradient-text" style={{ fontFamily: 'Monoton, cursive', letterSpacing: '1px' }}>Food</span>
              <span className="text-5xl md:text-6xl lg:text-7xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fi</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <section className="lg:w-1/2 relative flex flex-col justify-center bg-slate-950 px-6 py-20 overflow-y-auto min-h-screen">
          <div className="max-w-xl mx-auto w-full animate-fade-in-up">
            <div className="text-center lg:text-left mb-12">
              <h1 className="text-4xl md:text-5xl font-orbitron font-black mb-4">
                <span className="gradient-text uppercase">Seu Telefone</span>
              </h1>
              <p className="text-xl text-gray-300 font-light">
                Último passo! Precisamos do seu telefone para finalizar o cadastro.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4 font-rajdhani">
                <div>
                  <label className="block text-lg font-medium text-gray-300 mb-2">Telefone</label>
                  <input
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(formatTelefone(e.target.value))}
                    className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl text-white text-lg input-focus outline-none"
                    placeholder="(00) 00000-0000"
                    maxLength={15}
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-300 mb-2">Confirmar Telefone</label>
                  <input
                    type="tel"
                    value={confirmTelefone}
                    onChange={(e) => setConfirmTelefone(formatTelefone(e.target.value))}
                    className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl text-white text-lg input-focus outline-none"
                    placeholder="(00) 00000-0000"
                    maxLength={15}
                    required
                  />
                </div>
              </div>

              <div className="pt-6 font-orbitron">
                <button
                  type="submit"
                  disabled={!telefone || !confirmTelefone || telefone !== confirmTelefone || !isValidTelefone(telefone)}
                  className="w-full px-8 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.02] glow-effect disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  <span>Finalizar Cadastro</span>
                  <ChevronRight size={24} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Progress Bar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-slate-800/50 border border-cyan-500/20 rounded-full w-2 h-48 relative overflow-hidden">
            <div className="bg-gradient-to-b from-cyan-500 to-emerald-500 w-full h-full rounded-full transition-all duration-1000"></div>
          </div>
          <p className="text-[10px] text-gray-400 font-medium">6/6</p>
        </div>
      </div>
    </div>
  );
}
