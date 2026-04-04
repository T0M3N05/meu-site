'use client';

import { Monitor, Zap, Package, Rocket, Star, Quote, Layout, ShoppingCart, Globe, Gauge, ShieldCheck, Database, Cpu, MousePointer2, ThermometerSun } from 'lucide-react';
import Image from 'next/image';
import { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const InstagramLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function Cube({ position, rotation, speed, size }: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    meshRef.current.rotation.x += speed;
    meshRef.current.rotation.y += speed;
    meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() + position[0]) * 0.005;
  });
  return (
    <mesh ref={meshRef} position={position as any} rotation={rotation as any}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color="#3b82f6" wireframe opacity={0.4} transparent />
    </mesh>
  );
}

function CubesBackground() {
  const cubes = useMemo(() => {

    return Array.from({ length: 150 }).map(() => ({

      position: [(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      speed: Math.random() * 0.008 + 0.002,
      size: Math.random() * 0.5 + 0.2
    }));
  }, []);
  return (
    <>
      <ambientLight intensity={1.6} />
      <pointLight position={[10, 10, 10]} intensity={3.0} color="#60a5fa" />
      {cubes.map((cube, i) => <Cube key={i} {...cube} />)}
    </>
  );
}

interface ItemDetalhe {
  titulo: string;
  subtitulo: string;
  icone: React.ReactNode;
}

interface Servico {
  id: number;
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
  detalhes?: ItemDetalhe[];
  classesSoftwares?: {
    classe: string;
    softwares: { nome: string; sigla: string; cor: string }[];
  }[];
}

const depoimentos = [
  { id: 1, nome: "Thiago 'Tico'", servico: "Otimização Gamer", texto: "Tava com um lag absurdo no CS. O cara mexeu em tudo, otimizou o Windows e agora o FPS cravou no talo. Recomendo demais!", avatar: "T" },
  { id: 2, nome: "Carla Vasconcelos", servico: "Formatação + Backup", texto: "Meu notebook parou do nada. Fiquei desesperada pelos arquivos, mas ele recuperou tudo e o PC tá ligando em segundos.", avatar: "CV" },
  { id: 3, nome: "Eng. Ricardo Lima", servico: "Softwares Engenharia", texto: "Instalou o pack completo do AutoCAD e SketchUp. Tudo rodando liso e sem erro. Suporte nota 10 pelo WhatsApp.", avatar: "RL" },
  { id: 4, nome: "João P", servico: "Softwares Engenharia", texto: "Instalou o AutoCad e Revit nos computadores da minha empresa, todos funcionando perfeitamente, atendimento espetacular!", avatar: "JO" },
  { id: 5, nome: "Paula Mendes", servico: "Hospedagem & Migração", texto: "Meu site antigo estava lento e vivia caindo. Eles migraram tudo para um servidor robusto e otimizado.", avatar: "PM" },
  { id: 6, nome: "Dra. Beatriz Santos", servico: "Suporte Remoto", texto: "Precisava instalar o certificado digital e o pack office urgente. Ele resolveu tudo remotamente em 15min.", avatar: "BS" },
  { id: 7, nome: "Felipe Almeida", servico: "Montagem de PC", texto: "Montou meu setup com um cable management impecável. Ficou lindo demais e funcionando certinho!.", avatar: "FA" },
  { id: 8, nome: "Sandra Helena", servico: "Recuperação de Dados", texto: "Pensei que tinha perdido as fotos da família no HD antigo. Ele conseguiu recuperar tudo!", avatar: "SH" },
];

export default function Home() {
  const totalDepoimentos = depoimentos.length;
  const radius = Math.max(260, totalDepoimentos * 55);

  const meusServicos: Servico[] = [
    {
      id: 1,
      titulo: "Desenvolvimento de Sites",
      descricao: "Vitrines virtuais, sites institucionais e e-commerces rápidos e seguros para destacar sua empresa.",
      icone: <Monitor className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />,
      detalhes: [
        { titulo: "Sites Institucionais", subtitulo: "Apresentação profissional para empresas e serviços.", icone: <Layout className="w-5 h-5 text-blue-400" /> },
        { titulo: "E-commerce & Dropshipping", subtitulo: "Lojas virtuais completas para vender online.", icone: <ShoppingCart className="w-5 h-5 text-blue-400" /> },
        { titulo: "Landing Pages", subtitulo: "Páginas de alta conversão para vendas e leads.", icone: <Globe className="w-5 h-5 text-blue-400" /> }
      ]
    },
    {
      id: 2,
      titulo: "Formatação e Otimização",
      descricao: "Seu computador rápido de novo. Backup de dados, instalação limpa do sistema e otimização de desempenho.",
      icone: <Zap className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />,
      detalhes: [
        { titulo: "Desempenho Original", subtitulo: "Elimina lentidões e erros causados por arquivos corrompidos.", icone: <Gauge className="w-5 h-5 text-yellow-400" /> },
        { titulo: "Segurança Total", subtitulo: "Remoção completa de vírus, malwares e adwares.", icone: <ShieldCheck className="w-5 h-5 text-yellow-400" /> },
        { titulo: "Backup de Dados", subtitulo: "Salvaguarda de fotos e documentos importantes antes do processo.", icone: <Database className="w-5 h-5 text-yellow-400" /> }
      ]
    },
    {
      id: 3,
      titulo: "Instalação de Softwares",
      descricao: "Necessita de algum programa para trabalhar ou estudar? Nós temos a solução! Pacotes ativados permanentemente.",
      icone: <Package className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />,
      classesSoftwares: [
        {
          classe: "Arquitetura & Engenharia",
          softwares: [
            { nome: "AutoCAD", sigla: "Ac", cor: "bg-red-950 text-red-300 border-red-700" },
            { nome: "SolidWorks", sigla: "Sw", cor: "bg-red-700 text-white border-red-500" },
            { nome: "Revit", sigla: "Rv", cor: "bg-blue-900 text-blue-200 border-blue-700" },
            { nome: "SketchUp", sigla: "Su", cor: "bg-blue-600 text-white border-blue-400" },
            { nome: "Promob", sigla: "Pr", cor: "bg-teal-800 text-teal-100 border-teal-600" }
          ]
        },
        {
          classe: "Design & Edição Audiovisual",
          softwares: [
            { nome: "Photoshop", sigla: "Ps", cor: "bg-blue-900 text-blue-300 border-blue-700" },
            { nome: "Illustrator", sigla: "Ai", cor: "bg-orange-950 text-orange-400 border-orange-700" },
            { nome: "CorelDRAW", sigla: "Cd", cor: "bg-green-700 text-green-200 border-green-500" },
            { nome: "Premiere Pro", sigla: "Pr", cor: "bg-purple-950 text-purple-300 border-purple-700" },
            { nome: "After Effects", sigla: "Ae", cor: "bg-indigo-950 text-indigo-300 border-indigo-700" }
          ]
        },
        {
          classe: "Escritório & Produtividade",
          softwares: [
            { nome: "Pacote Office", sigla: "W/E", cor: "bg-orange-700 text-orange-200 border-orange-500" },
            { nome: "Power BI", sigla: "Pb", cor: "bg-yellow-600 text-yellow-100 border-yellow-500" },
            { nome: "MS Project", sigla: "Pj", cor: "bg-green-800 text-green-200 border-green-600" }
          ]
        }
      ]
    },
    {
      id: 4,
      titulo: "Otimização para Jogos",
      descricao: "Extraia o máximo de seu computador, eleve o nível de gameplay com o menor tempo de resposta possível em sua máquina!",
      icone: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-red-500" />,
      detalhes: [
        { titulo: "Otimização de OS", subtitulo: "Windows focado 100% em processamento de jogo.", icone: <Cpu className="w-5 h-5 text-red-400" /> },
        { titulo: "Input Lag Zero", subtitulo: "Ajustes de resposta do mouse e teclado (tempo de reação).", icone: <MousePointer2 className="w-5 h-5 text-red-400" /> },
        { titulo: "Power & Thermal", subtitulo: "Liberação de energia das peças e controle de temperatura.", icone: <ThermometerSun className="w-5 h-5 text-red-400" /> }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      
      <header className="border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center relative z-10 h-24 md:h-40">
          <div className="flex items-center cursor-pointer">
            <div className="relative w-24 h-24 md:w-[220px] md:h-[220px] flex-shrink-0 -mr-2 md:-mr-8">
              <Image src="/logo-ghost.png" alt="Logo Ghost Informática" fill className="object-contain" sizes="(max-width: 220px) 100vw, 220px" priority />
            </div>
            <span className="text-xl md:text-5xl font-black text-white tracking-tighter">
              Ghost<span className="text-blue-500">.Informática</span>
            </span>
          </div>
          <div className="flex items-center gap-4 md:gap-12">
            <nav className="hidden lg:flex gap-10 text-zinc-300 font-bold text-lg uppercase tracking-widest">
              <a href="#inicio" className="hover:text-blue-500 transition-colors">Início</a>
              <a href="#servicos" className="hover:text-blue-500 transition-colors">Serviços</a>
            </nav>
            <a href="https://wa.me/5545999259633" target="_blank" className="bg-blue-600 hover:bg-blue-500 text-white text-xs md:text-xl font-black py-3 px-5 md:py-4 md:px-10 rounded-xl md:rounded-2xl transition-all shadow-xl shadow-blue-600/20 whitespace-nowrap">
              Fale Comigo
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        <section id="inicio" className="max-w-[1440px] mx-auto px-6 py-16 md:py-32 text-center md:text-left flex flex-col items-center md:items-start relative z-10">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl relative z-10">
            Soluções completas em <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Tecnologia</span> para você
          </h1>
          <p className="text-base md:text-xl text-zinc-400 mb-10 max-w-3xl leading-relaxed relative z-10">
            Do conserto do seu computador até a criação da presença digital do seu negócio. Serviços técnicos especializados e desenvolvimento web moderno.
          </p>
          <a href="https://wa.me/5545999259633" target="_blank" rel="noopener noreferrer" className="bg-zinc-100 hover:bg-white text-zinc-900 font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all hover:scale-105 inline-flex items-center gap-2 text-sm md:text-base relative z-10">
            <WhatsAppLogo className="w-5 h-5" /> Fazer Orçamento
          </a>
        </section>

        <section id="servicos" className="max-w-[1440px] mx-auto px-6 py-12 md:py-16 relative z-10">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">Meus Serviços</h2>
            <p className="text-zinc-400 text-sm md:text-lg">Como posso ajudar a otimizar sua rotina hoje.</p>
          </div>
          <div className="flex flex-col gap-6 md:gap-5">
            {meusServicos.map((servico) => (
              <div 
                key={servico.id} 
                tabIndex={0}
                className="group outline-none bg-zinc-900/40 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-zinc-800/80 hover:border-blue-500/50 focus:border-blue-500/50 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-5 md:gap-8 items-start relative z-10">
                  <div className="bg-zinc-950/80 p-3 md:p-6 rounded-xl border border-zinc-800 group-hover:border-blue-500/30 transition-colors flex-shrink-0">
                    {servico.icone}
                  </div>
                  <div className="flex-1 w-full text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-zinc-100 group-hover:text-blue-400 transition-colors">{servico.titulo}</h3>
                    <p className="text-zinc-100 text-sm md:text-lg leading-relaxed">{servico.descricao}</p>
                    
                    {servico.detalhes && (
                      <div className="max-h-0 opacity-0 group-hover:max-h-[600px] group-focus:max-h-[600px] group-hover:opacity-100 group-focus:opacity-100 overflow-hidden transition-all duration-500 ease-in-out group-hover:mt-6 group-focus:mt-6 border-t border-transparent group-hover:border-zinc-800/50 group-hover:pt-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {servico.detalhes.map((det, idx) => (
                              <div key={idx} className="flex items-center gap-4 bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors">
                                <div className="flex-shrink-0">{det.icone}</div>
                                <div>
                                  <p className="text-sm md:text-base font-bold text-zinc-200">{det.titulo}</p>
                                  <p className="text-[11px] md:text-xs text-zinc-500 leading-tight">{det.subtitulo}</p>
                                </div>
                              </div>
                            ))}
                         </div>
                      </div>
                    )}

                    {servico.classesSoftwares && (
                      <div className="max-h-0 opacity-0 group-hover:max-h-[1000px] group-focus:max-h-[1000px] group-hover:opacity-100 group-focus:opacity-100 overflow-hidden transition-all duration-500 ease-in-out group-hover:mt-6 group-focus:mt-6 border-t border-transparent group-hover:border-zinc-800/50 group-hover:pt-6">
                        <div className="flex flex-col gap-8">
                          {servico.classesSoftwares.map((classe, idxClasse) => (
                            <div key={idxClasse}>
                              <p className="text-xs md:text-sm font-semibold text-zinc-400 mb-4 tracking-widest uppercase">{classe.classe}</p>
                              <div className="flex flex-wrap gap-3 md:gap-4">
                                {classe.softwares.map((prog, index) => (
                                  <div key={index} className="flex items-center gap-3 bg-zinc-950/80 px-4 py-2 rounded-xl border border-zinc-800 transition-all duration-300 hover:border-zinc-700">
                                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center text-[12px] font-black flex-shrink-0 ${prog.cor}`}>{prog.sigla}</div>
                                    <span className="text-xs md:text-sm text-zinc-300 font-bold">{prog.nome}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="depoimentos" className="relative max-w-full overflow-hidden py-16 md:py-48 bg-zinc-950">
          <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">

            <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]} style={{ width: '100%', height: '100%' }}>
              <CubesBackground />
            </Canvas>
          </div>
          <div className="max-w-[1440px] mx-auto px-6 mb-32 text-center md:text-left relative z-20">
            <h2 className="text-3xl md:text-6xl font-black mb-4 tracking-tighter">
              Feedbacks <span className="text-blue-500">Reais</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-xl">A confiança de quem já passou pela Ghost.informática.</p>
          </div>
          <div className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center [perspective:1200px] overflow-visible">
            <motion.div
              className="relative w-[180px] md:w-[240px] h-[220px] md:h-[280px] [transform-style:preserve-3d]"
              animate={{ rotateY: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {depoimentos.map((item, index) => {
                const angle = index * (360 / totalDepoimentos);
                return (
                  <motion.div
                    key={item.id}
                    className="absolute inset-0"
                    style={{ transform: `rotateY(${angle}deg) translateZ(${radius}px)` }}
                  >
                    <div className="h-full w-full bg-black p-4 md:p-6 rounded-2xl border border-blue-500/40 shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] flex flex-col [backface-visibility:visible] overflow-hidden">
                      <Quote className="text-blue-500/20 w-6 h-6 md:w-8 md:h-8 absolute top-3 right-3" />
                      <div className="relative z-10 flex flex-col h-full text-left">
                        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-5">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-black text-white border border-white/10 flex-shrink-0 text-xs md:text-sm">{item.avatar}</div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-white text-[11px] md:text-sm leading-tight truncate">{item.nome}</h4>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (<Star key={i} className="w-2 md:w-2.5 h-2 md:h-2.5 fill-yellow-500 text-yellow-500" />))}
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow overflow-hidden mb-2 md:mb-3 p-1">
                          <p className="text-white italic text-[10px] md:text-sm leading-relaxed relative z-10 line-clamp-6">"{item.texto}"</p>
                        </div>
                        <div className="mt-2 relative z-10 pt-2 border-t border-zinc-800/50 flex-shrink-0">
                          <span className="text-[7px] md:text-[8px] uppercase tracking-widest font-black px-1.5 py-0.5 bg-blue-900/30 border border-blue-500/30 rounded text-blue-400 inline-block truncate max-w-full">{item.servico}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-32 md:h-32 bg-blue-600/20 blur-[50px] md:blur-[100px] rounded-full pointer-events-none"></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md py-8 md:py-10 mt-12 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center md:text-left">
          <div className="flex flex-col gap-3">
            <p className="text-zinc-500 text-xs md:text-sm">© 2026 Ghost Informática. Todos os direitos reservados.</p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <a href="https://www.instagram.com/ghost.informatica" target="_blank" className="flex items-center gap-3 text-zinc-400 hover:text-pink-500 transition-colors text-sm font-bold tracking-widest uppercase">
                <InstagramLogo className="w-6 h-6" /> @ghost.informática
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 text-zinc-400 text-xs md:text-sm bg-zinc-900/80 py-2.5 px-6 rounded-full border border-zinc-800/50 shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            Atendimento presencial e remoto!
          </div>
        </div>
      </footer>
    </div>
  );
}