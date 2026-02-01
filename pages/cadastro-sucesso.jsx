import React, { useState, useEffect } from 'react';

import { Send, Zap, ChevronRight, ArrowLeft, MessageCircle } from 'lucide-react';

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

          background: linear-gradient(to right, #3b82f6, #10b981, #f97316);

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

          background-clip: text;

        }



        .brand-gradient {

          background: linear-gradient(to right, #3b82f6, #10b981, #f97316);

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

          background-clip: text;

          transition: all 0.2s ease-in-out;

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

        

        @keyframes slide-bg {

          0% { background-position: 0% 50%; }

          50% { background-position: 100% 50%; }

          100% { background-position: 0% 50%; }

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

        

        .animated-bg {

          background: linear-gradient(135deg, #000000 0%, #1e3a8a 25%, #000000 50%, #1e3a8a 75%, #000000 100%);

          background-size: 400% 400%;

          animation: slide-bg 15s ease infinite;

        }

        

        .hero-gradient {

          background: radial-gradient(ellipse at top, rgba(14, 165, 233, 0.1) 0%, transparent 60%),

                      radial-gradient(ellipse at bottom right, rgba(249, 115, 22, 0.1) 0%, transparent 60%);

        }

      `}</style>



            {/* Split Layout Section */}

            <div className="min-h-screen flex flex-col lg:flex-row">

                {/* Left Side - Greeting and Logo */}

                <div className="lg:w-1/2 relative flex items-center justify-center animated-bg p-12 overflow-hidden min-h-[40vh] lg:min-h-screen">

                    <div className="absolute inset-0 opacity-30" style={{ transform: `translateY(${parallaxOffset}px)` }}>

                        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow"></div>

                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow"></div>

                    </div>



                    <div className="relative z-10 text-center lg:text-left">

                        <h2 className="text-3xl md:text-4xl font-orbitron font-medium mb-6 uppercase tracking-widest brand-gradient">Bem-vindo ao</h2>

                        <div className="flex items-center justify-center lg:justify-start cursor-pointer" onClick={() => router.push('/')}>

                            <span className="text-5xl md:text-6xl lg:text-7xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fides</span>

                            <span className="text-5xl md:text-6xl lg:text-7xl font-normal brand-gradient" style={{ fontFamily: 'Monoton, cursive', letterSpacing: '1px' }}>Food</span>

                            <span className="text-5xl md:text-6xl lg:text-7xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fi</span>

                        </div>

                        <p className="mt-12 text-2xl text-gray-400 font-light max-w-lg leading-relaxed hidden lg:block uppercase tracking-[0.2em]">

                            Seu cadastro foi concluído com sucesso.

                        </p>

                    </div>

                </div>



                {/* Right Side - Important Notice & Summary */}

                <section className="lg:w-1/2 relative flex flex-col justify-center bg-gradient-to-br from-orange-900/20 via-blue-900/30 to-blue-800/40 px-6 py-20 overflow-y-auto">
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                        <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-orange-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    </div>

                    <div className="max-w-xl mx-auto w-full animate-fade-in-up">



                        {/* Telegram Verification Button */}
                        <div className="text-center mb-6">
                            <button
                                onClick={() => window.open('https://t.me/seu_bot', '_blank')}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-[1.02] inline-flex items-center gap-3"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Verificar Cadastro no Telegram
                            </button>
                        </div>



                        {/* Summary Section */}

                        <div className="bg-gray-900/80 backdrop-blur-md border-2 border-blue-500/50 rounded-2xl p-6 shadow-xl shadow-blue-500/20 relative overflow-hidden">

                            <h4 className="text-xl font-orbitron font-bold mb-6 text-white uppercase tracking-widest text-center">Resumo da Conta</h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">

                                <div className="space-y-4">

                                    <div>

                                        <p className="text-gray-300 text-xs uppercase font-bold tracking-widest mb-1">Nome</p>

                                        <p className="text-white text-lg font-semibold">{dados?.nome} {dados?.sobrenome}</p>

                                    </div>

                                    <div>

                                        <p className="text-gray-300 text-xs uppercase font-bold tracking-widest mb-1">E-mail</p>

                                        <p className="text-white text-lg font-semibold truncate">{dados?.email}</p>

                                    </div>

                                </div>

                                <div className="space-y-4">

                                    <div>

                                        <p className="text-gray-300 text-xs uppercase font-bold tracking-widest mb-1">Telefone</p>

                                        <p className="text-white text-lg font-semibold">{dados?.telefone}</p>

                                    </div>

                                    <div>

                                        <p className="text-gray-300 text-xs uppercase font-bold tracking-widest mb-1">Status</p>

                                        <div className="flex items-center gap-2">

                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>

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

