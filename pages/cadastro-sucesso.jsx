import React, { useState, useEffect } from 'react';
import { Send, Zap, ChevronRight, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CadastroSucesso() {
    const [scrollY, setScrollY] = useState(0);
    const [protocolo, setProtocolo] = useState('');
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

        // Gera o protocolo apenas no cliente para evitar erro de hidratação
        setProtocolo(Math.random().toString(36).substring(2, 10).toUpperCase());

        return () => window.removeEventListener('scroll', handleScroll);
    }, [router]);

    const parallaxOffset = scrollY * 0.5;

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
          background: linear-gradient(to right, #3b82f6, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glow-effect {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.3),
                      0 0 60px rgba(14, 165, 233, 0.2);
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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
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

            {/* Split Layout Section */}
            <div className="min-h-screen flex flex-col lg:flex-row">
                {/* Left Side - Greeting and Logo */}
                <div className="lg:w-1/2 relative flex items-center justify-center bg-grid hero-gradient p-12 overflow-hidden min-h-[40vh] lg:min-h-screen">
                    <div className="absolute inset-0 opacity-30" style={{ transform: `translateY(${parallaxOffset}px)` }}>
                        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
                    </div>

                    <div className="relative z-10 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-orbitron font-medium text-gray-400 mb-6 uppercase tracking-widest">Bem-vindo ao</h2>
                        <div className="flex items-center justify-center lg:justify-start">
                            <span className="text-5xl md:text-6xl lg:text-7xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fides</span>
                            <span className="text-5xl md:text-6xl lg:text-7xl font-normal gradient-text" style={{ fontFamily: 'Monoton, cursive', letterSpacing: '1px' }}>Food</span>
                            <span className="text-5xl md:text-6xl lg:text-7xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fi</span>
                        </div>
                        <p className="mt-12 text-2xl text-gray-400 font-light max-w-lg leading-relaxed hidden lg:block uppercase tracking-[0.2em]">
                            Seu cadastro foi concluído com sucesso.
                        </p>
                    </div>
                </div>

                {/* Right Side - Important Notice & Summary */}
                <section className="lg:w-1/2 relative flex flex-col justify-center bg-slate-950 px-6 py-20 overflow-y-auto">
                    <div className="max-w-xl mx-auto w-full animate-fade-in-up">

                        {/* Telegram Bot Importance Notice (No Icon) */}
                        <div className="bg-blue-600/10 border border-blue-400/30 rounded-3xl p-8 mb-10 glow-effect backdrop-blur-md relative overflow-hidden">
                            <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wider mb-4 text-center">Aviso Importante</h3>
                            <p className="text-gray-200 text-lg leading-relaxed mb-8 text-center">
                                Para liberar seu limite de crédito e começar a operar, você deve acessar nosso <span className="text-cyan-400 font-bold">Bot Oficial do Telegram</span>.
                                É por lá que você receberá seu cartão virtual e confirmará seus pedidos com total segurança.
                            </p>


                        </div>

                        {/* Summary Section */}
                        <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 rounded-3xl p-8">
                            <h4 className="text-xl font-orbitron font-bold mb-6 text-gray-300 uppercase tracking-widest text-center">Resumo da Conta</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Nome</p>
                                        <p className="text-white text-lg font-semibold">{dados?.nome} {dados?.sobrenome}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">E-mail</p>
                                        <p className="text-white text-lg font-semibold truncate">{dados?.email}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Telefone</p>
                                        <p className="text-white text-lg font-semibold">{dados?.telefone}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Status</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                            <p className="text-emerald-400 text-lg font-bold tracking-widest">ATIVO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-widest">
                                Protocolo de segurança: {protocolo}
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Minimal Footer Progress */}
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 opacity-50">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">Processo Finalizado</p>
                </div>
            </div>
        </div>
    );
}
