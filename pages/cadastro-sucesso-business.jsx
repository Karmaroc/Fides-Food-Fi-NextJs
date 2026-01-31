import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, ArrowRight, Building, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CadastroSucessoBusiness() {
    const [scrollY, setScrollY] = useState(0);
    const [dados, setDados] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        const dadosSalvos = localStorage.getItem('cadastroCompleto');
        if (dadosSalvos) {
            setDados(JSON.parse(dadosSalvos));
        } else {
            router.push('/cadastro-inicial');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [router]);

    return (
        <div className="bg-slate-950 text-white font-sans overflow-x-hidden min-h-screen flex flex-col">
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Poiret+One&family=Monoton&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Rajdhani', sans-serif;
          background-color: #020617;
        }
        
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        
        .gradient-text {
          background: linear-gradient(to right, #10b981, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glow-effect {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.2),
                      0 0 60px rgba(14, 165, 233, 0.1);
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .bg-grid {
          background-image: 
            linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

            {/* Top Section - Image & Welcome */}
            <section className="relative h-[45vh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/folhas_verde_azul.jpg"
                        alt="Fundo Folhas Verde Azul"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950"></div>
                </div>

                <div className="relative z-10 text-center animate-fade-in-up">
                    <h2 className="text-2xl md:text-3xl font-orbitron font-medium text-white/80 uppercase tracking-[0.4em] mb-4">
                        Bem-vindos
                    </h2>
                    <div className="flex items-center justify-center">
                        <span className="text-5xl md:text-7xl lg:text-8xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '4px' }}>Fides</span>
                        <span className="text-5xl md:text-7xl lg:text-8xl font-normal gradient-text" style={{ fontFamily: 'Monoton, cursive', letterSpacing: '2px' }}>Food</span>
                        <span className="text-5xl md:text-7xl lg:text-8xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '4px' }}>Fi</span>
                    </div>
                </div>
            </section>

            {/* Bottom Section - Status & Email Info */}
            <section className="flex-1 bg-grid relative flex flex-col items-center px-6 py-12 lg:py-16">
                <div className="max-w-3xl w-full animate-fade-in-up space-y-10">

                    {/* Status Banner */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm">Empresa Verificada</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-orbitron font-black leading-tight">
                            STATUS BUSINESS: <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">ATIVO</span>
                        </h1>
                    </div>

                    {/* Email Attention Card */}
                    <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 lg:p-12 glow-effect relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl -mr-24 -mt-24"></div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                                <Mail className="w-10 h-10 text-white animate-bounce" />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
                                    CONFIRME SEU E-MAIL
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    Para ativar todas as funcionalidades do seu perfil business, enviamos um link de confirmação para:
                                    <br />
                                    <span className="text-cyan-400 font-bold text-xl block mt-2">{dados?.email}</span>
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Caso não encontre, verifique sua caixa de spam ou lixo eletrônico.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Account Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/20 border border-white/5 rounded-3xl p-6 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center uppercase">
                                <Building className="text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Empresa</p>
                                <p className="text-white font-semibold truncate max-w-[200px]">{dados?.razaoSocial || dados?.nomeEmpresa}</p>
                            </div>
                        </div>

                        <div className="bg-slate-800/20 border border-white/5 rounded-3xl p-6 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                                <ShieldCheck className="text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Acesso</p>
                                <p className="text-white font-semibold uppercase tracking-widest text-emerald-400">Totalmente Liberado</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <button
                            onClick={() => router.push('/cadastro-inicial')}
                            className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.05] inline-flex items-center gap-3"
                        >
                            <span>Ir para o Dashboard</span>
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer Branding */}
            <footer className="py-8 bg-slate-950 border-t border-white/5 text-center">
                <p className="text-gray-500 text-sm tracking-widest uppercase">
                    © 2026 FidesFoodFi Business Solutions
                </p>
            </footer>
        </div>
    );
}
