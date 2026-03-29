import { Monitor, Zap, Package, Rocket, Laptop, Server } from 'lucide-react';
import Image from 'next/image';

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

interface Servico {
  id: number;
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
  classesSoftwares?: {
    classe: string;
    softwares: { nome: string; sigla: string; cor: string }[];
  }[];
}

export default function Home() {
  const meusServicos: Servico[] = [
    {
      id: 1,
      titulo: "Desenvolvimento de Sites",
      descricao: "Vitrines virtuais, sites institucionais e e-commerces rápidos e seguros para destacar sua empresa.",
      icone: <Monitor className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
    },
    {
      id: 2,
      titulo: "Formatação e Otimização",
      descricao: "Seu computador rápido de novo. Backup de dados, instalação limpa do sistema e otimização de desempenho.",
      icone: <Zap className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
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
      icone: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500/30 overflow-hidden">
      
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      
      
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none z-0"></div>

      <header className="border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          
          
          <div className="text-xl font-bold flex items-center gap-3 cursor-pointer group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-zinc-800 group-hover:border-blue-500/50 transition-colors">
              <Image 
                src="/logo-ghost.png" 
                alt="Logo Ghost Informática"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="hidden sm:block">Ghost<span className="text-blue-500">.informática</span></span>
            <span className="sm:hidden">Ghost</span>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden md:flex gap-6 text-zinc-400 font-medium text-sm mr-2">
              <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            </nav>
            
            <a 
              href="https://www.instagram.com/ghost.informatica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-400 hover:text-pink-500 transition-colors"
              title="Siga no Instagram"
            >
              <InstagramLogo className="w-5 h-5" />
              <span className="hidden lg:block text-sm font-medium">@ghost.informática</span>
            </a>

            <a 
              href="https://wa.me/5545999259633?text=Olá!%20Vim%20pelo%20seu%20site." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2 px-5 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        
        <section id="inicio" className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Soluções completas em <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Tecnologia
            </span> para você
          </h1>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            Do conserto do seu computador até a criação da presença digital do seu negócio. Serviços técnicos especializados e desenvolvimento web moderno.
          </p>
          <a 
            href="https://wa.me/5545999259633?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-zinc-100 hover:bg-white text-zinc-900 font-bold py-3.5 px-8 rounded-full transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <WhatsAppLogo className="w-5 h-5" />
            Fazer Orçamento
          </a>
        </section>

        <section id="servicos" className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Meus Serviços</h2>
            <p className="text-zinc-400">Como posso ajudar a otimizar sua rotina e seus negócios hoje.</p>
          </div>
          
          <div className="flex flex-col gap-5">
            {meusServicos.map((servico) => (
              <div 
                key={servico.id} 
                className="group bg-zinc-900/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-zinc-800/80 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  
                  <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-800 group-hover:border-blue-500/30 transition-colors flex-shrink-0">
                    {servico.icone}
                  </div>
                  
                  <div className="flex-1 w-full">
                    <h3 className="text-xl font-bold mb-2 text-zinc-100 group-hover:text-blue-400 transition-colors">
                      {servico.titulo}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {servico.descricao}
                    </p>

                    {servico.classesSoftwares && (
                      <div className="overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0 group-hover:max-h-[800px] group-hover:opacity-100 group-hover:mt-6">
                        <div className="flex flex-col gap-6 border-t border-zinc-800/50 pt-6">
                          {servico.classesSoftwares.map((classe, idxClasse) => (
                            <div key={idxClasse}>
                              <p className="text-sm font-semibold text-zinc-300 mb-3 tracking-wide">{classe.classe}</p>
                              <div className="flex flex-wrap gap-3">
                                {classe.softwares.map((prog, index) => (
                                  <div 
                                    key={index} 
                                    className={`flex items-center gap-2 bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-zinc-800 shadow-sm transition-all duration-500 transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100`}
                                    style={{ transitionDelay: `${(idxClasse * 150) + (index * 75) + 300}ms` }}
                                  >
                                    <div className={`w-7 h-7 rounded border flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 ${prog.cor}`}>
                                      {prog.sigla}
                                    </div>
                                    <span className="text-sm text-zinc-300 font-medium">{prog.nome}</span>
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

      </main>

      <footer className="border-t border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md py-10 mt-12 relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          <div className="flex flex-col gap-4">
            <p className="text-zinc-500 text-sm">
              © 2026 Ghost Informática. Todos os direitos reservados.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <a 
                href="https://www.instagram.com/ghost.informatica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-pink-500 transition-colors text-sm font-medium"
              >
                <InstagramLogo className="w-5 h-5" />
                @ghost.informática
              </a>
              
              <span className="hidden sm:block text-zinc-700">•</span>

              <a 
                href="https://wa.me/5545999259633?text=Olá!%20Vim%20pelo%20seu%20site." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition-colors text-sm font-medium"
              >
                <WhatsAppLogo className="w-5 h-5" />
                (45) 99925-9633
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 text-sm bg-zinc-900/80 py-2 px-4 rounded-full border border-zinc-800/50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Atendimento presencial e remoto!
          </div>
        </div>
      </footer>

    </div>
  );
}