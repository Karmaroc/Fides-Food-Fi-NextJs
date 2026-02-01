import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, CheckCircle, AlertCircle, ArrowRight, Building, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CadastroSucessoBusiness() {
    const [dados, setDados] = useState(null);
    const [codigoEnviado, setCodigoEnviado] = useState(false);
    const [codigoConfirmado, setCodigoConfirmado] = useState(false);
    const [codigoUsuario, setCodigoUsuario] = useState('');
    const [codigoGerado, setCodigoGerado] = useState('');
    const [enviando, setEnviando] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const dadosSalvos = localStorage.getItem('cadastroCompleto');
        if (dadosSalvos) {
            setDados(JSON.parse(dadosSalvos));
        } else {
            router.push('/cadastro-inicial');
        }
    }, [router]);

    const enviarCodigoTelegram = async () => {
        setEnviando(true);
        const codigo = Math.floor(100000 + Math.random() * 900000).toString();
        setCodigoGerado(codigo);
        
        try {
            const response = await fetch('http://localhost:8085/telegram/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'send_code',
                    phone: dados?.telefone,
                    code: codigo,
                    name: dados?.razaoSocial || dados?.nomeEmpresa
                })
            });
            
            if (response.ok) {
                setCodigoEnviado(true);
            } else {
                alert('Erro ao enviar código. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar código. Verifique sua conexão.');
        } finally {
            setEnviando(false);
        }
    };

    const confirmarCodigo = () => {
        if (codigoUsuario === codigoGerado) {
            setCodigoConfirmado(true);
            alert('✅ Empresa verificada com sucesso!');
        } else {
            alert('❌ Código incorreto. Tente novamente.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Poiret+One&family=Monoton&display=swap');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Rajdhani', sans-serif;
                }
                
                .font-orbitron {
                    font-family: 'Orbitron', sans-serif;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes pulse-glow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite;
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
                
                .animate-slide-in-left-light {
                    animation: slide-in-left-light 1.2s ease-out forwards;
                }
                
                .brand-gradient {
                    background: linear-gradient(to right, #3b82f6, #10b981, #f97316);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    transition: all 0.2s ease-in-out;
                    display: inline-flex;
                    align-items: center;
                }

                .brand-gradient:hover {
                    filter: brightness(${codigoConfirmado ? 1.1 : 0.9});
                    transform: translateY(-1px);
                }
                
                .text-3xl {
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                }
                
                .font-normal {
                    font-weight: 400;
                }
                
                .text-white {
                    color: white;
                }
                
                .brand-gradient {
                    background: linear-gradient(to right, #3b82f6, #10b981, #f97316);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                @media (min-width: 768px) {
                    .text-3xl {
                        font-size: 2rem;
                        line-height: 1;
                    }
                }
                
                @media (min-width: 1024px) {
                    .text-3xl {
                        font-size: 3rem;
                    }
                }
            `}</style>

            {/* Header */}
            <header className="relative py-8 text-center">
                <div className="flex items-center justify-center animate-slide-in-left-light cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="text-3xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fides</span>
                <span className="text-3xl font-normal brand-gradient" style={{ fontFamily: 'Monoton, cursive', letterSpacing: '1px' }}>Food</span>
                <span className="text-3xl font-normal text-white" style={{ fontFamily: 'Poiret One, cursive', letterSpacing: '2px' }}>Fi</span>
                </div>
                <p className="mt-4 text-gray-400 text-lg uppercase tracking-[0.3em]">Business</p>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="max-w-2xl w-full">
                    
                    {/* Status Card */}
                    <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 mb-8 text-center">
                        <div className="mb-6">
                            {codigoConfirmado ? (
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-full">
                                    <CheckCircle className="w-6 h-6 text-green-400" />
                                    <span className="text-green-400 font-bold tracking-wider uppercase">VERIFICADO</span>
                                </div>
                            ) : (
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500/20 border border-orange-500/50 rounded-full animate-pulse">
                                    <AlertCircle className="w-6 h-6 text-orange-400" />
                                    <span className="text-orange-400 font-bold tracking-wider uppercase">NÃO VERIFICADO</span>
                                </div>
                            )}
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
                            Status da Empresa
                        </h1>
                        
                        <p className="text-xl text-gray-300">
                            {codigoConfirmado ? 'Sua empresa está verificada e pronta para usar!' : 'Verifique sua empresa via Telegram para ativar todas as funcionalidades'}
                        </p>
                    </div>

                    {/* Company Info */}
                    <div className="bg-gray-800/30 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <Building className="w-8 h-8 text-blue-400" />
                            <div>
                                <p className="text-gray-400 text-sm">Empresa</p>
                                <p className="text-white font-semibold text-lg">{dados?.razaoSocial || dados?.nomeEmpresa}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <ShieldCheck className={`w-8 h-8 ${codigoConfirmado ? 'text-green-400' : 'text-orange-400'}`} />
                            <div>
                                <p className="text-gray-400 text-sm">Acesso</p>
                                <p className={`font-semibold text-lg ${codigoConfirmado ? 'text-green-400' : 'text-orange-400'}`}>
                                    {codigoConfirmado ? 'Totalmente Liberado' : 'Acesso Restrito'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Telegram Verification */}
                    {!codigoConfirmado && (
                        <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8">
                            <div className="text-center mb-6">
                                <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h2 className="text-2xl font-orbitron font-bold text-white mb-2">
                                    Verificação por Telegram
                                </h2>
                                <p className="text-gray-300">
                                    Envie um código de verificação para confirmar sua empresa
                                </p>
                            </div>
                            
                            {!codigoEnviado ? (
                                <button
                                    onClick={enviarCodigoTelegram}
                                    disabled={enviando}
                                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {enviando ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Enviar Código por Telegram
                                        </>
                                    )}
                                </button>
                            ) : (
                                <div className="space-y-4">
                                    <p className="text-center text-gray-300">
                                        Digite o código de 6 dígitos recebido:
                                    </p>
                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            maxLength="6"
                                            value={codigoUsuario}
                                            onChange={(e) => setCodigoUsuario(e.target.value.replace(/\D/g, ''))}
                                            className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-center text-xl font-bold text-white focus:border-blue-500 focus:outline-none"
                                            placeholder="000000"
                                        />
                                        <button
                                            onClick={confirmarCodigo}
                                            className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all"
                                        >
                                            Confirmar
                                        </button>
                                    </div>
                                    <button
                                        onClick={enviarCodigoTelegram}
                                        className="w-full text-blue-400 hover:text-blue-300 text-sm underline"
                                    >
                                        Reenviar código
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Dashboard Button */}
                    <div className="text-center mt-8">
                        <button
                            onClick={() => codigoConfirmado && router.push('/dashboard')}
                            disabled={!codigoConfirmado}
                            className={`px-12 py-4 rounded-2xl text-xl font-bold inline-flex items-center gap-3 transition-all ${
                                codigoConfirmado 
                                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-[1.05]' 
                                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            }`}
                        >
                            <span>{codigoConfirmado ? 'Ir para o Dashboard' : 'Aguarde Verificação'}</span>
                            {codigoConfirmado && <ArrowRight size={24} />}
                        </button>
                    </div>
                </div>
            </main>

            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
            </div>
        </div>
    );
}
