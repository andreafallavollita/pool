import React, { useState } from 'react';
import { Search, Phone, ChevronRight, ChevronDown, ChevronUp, Info, Menu, X, SlidersHorizontal, Check, Image as ImageIcon } from 'lucide-react';

// --- Data ---
const categoriesData = [
  {
    tipologia: "Bagno chimico mobile",
    struttura: "Cabina in plastica con serbatoio chimico",
    impianti: "Non necessari",
    caratteristiche: "Sistema di disinfezione chimica, lavamani integrato, uso senza fognatura",
    comfort: "Base",
    utilizzo: "Cantieri, eventi, fiere",
    mobilita: "Molto alta",
    products: [
      { brand: "Sebach", title: "Bagno chimico mobile per disabili Top San HN con meccanismo di pulizia brevettato", url: "#" },
      { brand: "Sebach", title: "Bagno chimico mobile igienizzabile Top San No Touch", url: "#" }
    ]
  },
  {
    tipologia: "Bagno mobile con tanica estraibile",
    struttura: "Cabina compatta con serbatoio rimovibile",
    impianti: "Non necessari",
    caratteristiche: "Tanica per rifiuti rimovibile per svuotamento rapido",
    comfort: "Medio",
    utilizzo: "Piccoli cantieri, manutenzioni",
    mobilita: "Molto alta",
    products: [
      { brand: "Sebach", title: "Bagno mobile prefabbricato con tanica rimovibile Remove", url: "#" }
    ]
  },
  {
    tipologia: "Bagno prefabbricato mobile",
    struttura: "Modulo prefabbricato in pannelli o metallo",
    impianti: "Possibili allacciamenti acqua e scarico",
    caratteristiche: "Più resistente del bagno chimico, con impianti integrabili",
    comfort: "Alto",
    utilizzo: "Cantieri lunghi, aziende, eventi grandi",
    mobilita: "Media",
    products: [
      { brand: "Emmecinque", title: "Bagno modulare prefabbricato in cemento", url: "#" },
      { brand: "Emmecinque", title: "Bagno prefabbricato per disabili e portatori di handicap", url: "#" },
      { brand: "Unimetal", title: "Prefabbricati monoblocco a uso servizi igienici", url: "#" },
      { brand: "Sebach", title: "Prefabbricato monoblocco linea Stay Box Smart con servizi igienici", url: "#" },
      { brand: "Emmecinque", title: "Servizi igienici prefabbricati per esterni", url: "#" },
      { brand: "Emmecinque", title: "Servizi igienici pubblici prefabbricati per esterni", url: "#" }
    ]
  },
  {
    tipologia: "Modulo bagno multi-WC",
    struttura: "Struttura prefabbricata con più cabine",
    impianti: "Necessari",
    caratteristiche: "Più servizi nello stesso blocco",
    comfort: "Alto",
    utilizzo: "Cantieri con molti lavoratori, eventi",
    mobilita: "Media",
    products: [
      { brand: "Sebach", title: "Bagno modulare prefabbricato linea Stay Box Smart", url: "#" },
      { brand: "Sebach", title: "Bagni prefabbricati Box Smart 2WC con due vani WC", url: "#" },
      { brand: "Sebach", title: "Bagno prefabbricato Box Smart 6WC con sei vani WC e due lavandini doppi", url: "#" },
      { brand: "Emmecinque", title: "Blocco di bagni prefabbricati in calcestruzzo armato antisismico", url: "#" },
      { brand: "Emmecinque", title: "Box bagni prefabbricati in calcestruzzo per servizi igienici", url: "#" },
      { brand: "Emmecinque", title: "Modulo bagni prefabbricati per ambiti produttivi", url: "#" },
      { brand: "Ceitbybox", title: "Box bagno prefabbricato modulare", url: "#" },
      { brand: "Unimetal", title: "Cellula bagno prefabbricato", url: "#" }
    ]
  },
  {
    tipologia: "Bagno mobile con doccia",
    struttura: "Modulo prefabbricato con WC e doccia",
    impianti: "Necessari",
    caratteristiche: "Modulo prefabbricato con WC e doccia",
    comfort: "Alto",
    utilizzo: "Cantieri, impianti sportivi, campeggi",
    mobilita: "Media",
    products: [
      { brand: "Sebach", title: "Box Smart Shower bagno completo con doccia", url: "#" },
      { brand: "Emmecinque", title: "Allestimento bagni pubblici prefabbricati per campeggi", url: "#" },
      { brand: "Emmecinque", title: "Blocco bagni e docce prefabbricato in calcestruzzo", url: "#" }
    ]
  }
];

// --- Components ---

const Header = () => (
  <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
    {/* Top Bar */}
    <div className="bg-white border-b border-gray-100 text-xs text-gray-600 py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-6">
        <a href="#" className="hover:text-[#E87B41]">Esponi i tuoi prodotti</a>
        <a href="#" className="hover:text-[#E87B41]">Chi siamo</a>
        <a href="#" className="hover:text-[#E87B41]">Contatti</a>
        <a href="#" className="hover:text-[#E87B41]">Area clienti</a>
        <span className="flex items-center gap-1 font-semibold text-gray-800"><Phone size={14} /> +39 02 4983569</span>
      </div>
    </div>

    {/* Main Header */}
    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-8 w-full md:w-auto">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <div className="text-[#E87B41] font-black text-3xl leading-none tracking-tighter">
            POOL<br />INDUSTRIALE
          </div>
        </a>
        
        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-2">
          <button className="bg-[#E87B41] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
            Prodotti <ChevronDown size={16} />
          </button>
          <button className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
            Servizi <ChevronDown size={16} />
          </button>
          <button className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
            Settori
          </button>
          <button className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
            Soluzioni
          </button>
          <button className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
            Aziende
          </button>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-[400px] relative">
        <input 
          type="text" 
          placeholder="Cerca i prodotti dei migliori fornitori" 
          className="w-full border-2 border-[#E87B41] rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#E87B41]/50 text-sm"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E87B41]">
          <Search size={20} />
        </button>
      </div>
    </div>
  </header>
);

const BreadcrumbArea = () => (
  <div className="bg-[#232323] text-white py-8 relative overflow-hidden">
    {/* Decorative background pattern (simulated with CSS) */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
        <a href="#" className="hover:text-white underline">Strutture</a>
        <ChevronRight size={14} />
        <a href="#" className="hover:text-white underline">Bagni Spogliatoi</a>
        <ChevronRight size={14} />
        <span className="text-[#E87B41]">Bagni mobili</span>
      </div>
      
      <div className="bg-white text-gray-900 inline-flex items-center gap-3 px-6 py-3 rounded shadow-sm">
        <div className="w-4 h-4 bg-[#E87B41]"></div>
        <h1 className="text-2xl md:text-3xl font-light">Bagni mobili</h1>
      </div>
    </div>
  </div>
);

const Sidebar = () => (
  <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
    {/* Categories */}
    <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4 cursor-pointer">
        <h3 className="font-semibold text-gray-800">Categorie</h3>
        <ChevronDown size={18} className="text-gray-500" />
      </div>
      <div className="text-sm text-gray-600 space-y-2">
        <div className="hover:text-[#E87B41] cursor-pointer">Tutte le categorie</div>
        
        <div className="pt-2">
          <div className="flex items-center gap-1 font-semibold text-gray-800 mb-2 cursor-pointer">
            <ChevronDown size={16} /> Strutture
          </div>
          <div className="pl-5 space-y-2 border-l border-gray-200 ml-2">
            <div className="hover:text-[#E87B41] cursor-pointer">Allestimenti e arredi</div>
            <div>
              <div className="font-medium text-gray-800 mb-1 cursor-pointer">Bagni Spogliatoi</div>
              <div className="pl-3 space-y-2 text-gray-500">
                <div className="hover:text-[#E87B41] cursor-pointer">Armadietti e casellari</div>
                <div className="font-bold text-gray-900">Bagni mobili</div>
                <div className="hover:text-[#E87B41] cursor-pointer">Panche per spogliatoi</div>
                <div className="hover:text-[#E87B41] cursor-pointer">Sanitari per bagni</div>
                <div className="hover:text-[#E87B41] cursor-pointer">Spogliatoi prefabbricati</div>
              </div>
            </div>
            <div className="hover:text-[#E87B41] cursor-pointer">Box modulari prefabbricati</div>
            <div className="hover:text-[#E87B41] cursor-pointer">Carpenteria metallica Soppalchi</div>
            <div className="hover:text-[#E87B41] cursor-pointer">Chiusure e portoni</div>
          </div>
        </div>
      </div>
    </div>

    {/* Filters */}
    <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
        <h3 className="font-semibold text-gray-800">Filtra i risultati</h3>
        <SlidersHorizontal size={16} className="text-gray-500" />
      </div>

      {/* Aziende Filter */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2 cursor-pointer">
          <h4 className="text-sm font-medium text-gray-700">Aziende</h4>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          {['CEIT BYBOX', 'EMMECINQUE MONOBLOCCHI SRL', 'SEBACH SPA', 'UNIMETAL SPA'].map(company => (
            <label key={company} className="flex items-center gap-2 cursor-pointer hover:text-[#E87B41]">
              <input type="checkbox" className="rounded border-gray-300 text-[#E87B41] focus:ring-[#E87B41]" />
              {company}
            </label>
          ))}
        </div>
      </div>

      {/* Caratteristiche Filter */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2 cursor-pointer">
          <h4 className="text-sm font-medium text-gray-700">Caratteristiche</h4>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          {['mobile', 'modulare'].map(item => (
            <label key={item} className="flex items-center gap-2 cursor-pointer hover:text-[#E87B41]">
              <input type="checkbox" className="rounded border-gray-300 text-[#E87B41] focus:ring-[#E87B41]" />
              {item}
            </label>
          ))}
        </div>
      </div>

      <button className="w-full py-2 mt-4 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center gap-2 transition-colors">
        <X size={14} /> Reset filtri
      </button>
    </div>
  </aside>
);

const Footer = () => (
  <footer className="bg-[#232323] text-gray-300 pt-12 pb-8 mt-16 border-t-4 border-[#E87B41]">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <div>
        <h4 className="text-[#E87B41] font-bold mb-4">Pool Industriale</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">Chi siamo</a></li>
          <li><a href="#" className="hover:text-white">Esponi i tuoi prodotti</a></li>
          <li><a href="#" className="hover:text-white">Rassegna Cartacea</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-[#E87B41] font-bold mb-4">Redazione</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">Fiere</a></li>
          <li><a href="#" className="hover:text-white">Case History</a></li>
          <li><a href="#" className="hover:text-white">News</a></li>
          <li><a href="#" className="hover:text-white">Interviste</a></li>
          <li><a href="#" className="hover:text-white">Cataloghi</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-[#E87B41] font-bold mb-4">Info</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">Contatti</a></li>
          <li>+39 02 4983569</li>
          <li><a href="#" className="hover:text-white underline">Area clienti</a></li>
          <li><a href="#" className="hover:text-white">Faq</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-[#E87B41] font-bold mb-4">Social</h4>
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#E87B41] cursor-pointer transition-colors">
            <span className="font-bold text-white">X</span>
          </div>
          <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#E87B41] cursor-pointer transition-colors">
            <span className="font-bold text-white">in</span>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-700 text-xs text-gray-500">
      <div className="text-[#E87B41] font-black text-2xl leading-none tracking-tighter mb-4 opacity-50">
        POOL<br />INDUSTRIALE
      </div>
      <p className="mb-2">2026 Pool Industriale © edito da M.E.D.I.A. Srl | Tutti i diritti riservati | C.F. e P.IVA 07852750152 | info@poolindustriale.it | Tel +39 02 4983569</p>
      <p className="flex gap-4">
        <a href="#" className="hover:text-white underline">Privacy Policy</a>
        <a href="#" className="hover:text-white underline">Cookie Policy</a>
        <a href="#" className="hover:text-white underline">Termini e condizioni</a>
        <a href="#" className="hover:text-white underline">Le tue preferenze relative alla privacy</a>
      </p>
    </div>
  </footer>
);

export default function App() {
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>(
    categoriesData.reduce((acc, _, idx) => ({ ...acc, [idx]: true }), {})
  );

  const toggleCategory = (idx: number) => {
    setOpenCategories(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-gray-800">
      <Header />
      <BreadcrumbArea />
      
      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1">
          
          {/* Global CTA */}
          <div className="mb-8 flex justify-end">
            <button className="bg-[#E87B41] hover:bg-[#d66a30] text-white px-6 py-3 rounded font-medium flex items-center gap-2 shadow-sm transition-colors">
              <Info size={18} />
              RICHIEDI INFO/PREVENTIVI
            </button>
          </div>

          {/* SEO Description */}
          <div className="mb-10 bg-white p-6 rounded shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Soluzioni per Bagni Mobili</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dal 1975 selezioniamo i migliori fornitori per l'organizzazione delle aziende italiane. 
              Le risposte migliori per ogni esigenza delle aziende. Scopri la nostra gamma completa di <strong>bagni mobili</strong>, 
              progettati per offrire comfort, igiene e praticità in ogni situazione: dai cantieri edili agli eventi all'aperto, 
              fino alle installazioni industriali a lungo termine. Sfoglia le diverse tipologie e richiedi un preventivo ai nostri fornitori certificati.
            </p>
          </div>

          {/* Categories Loop */}
          <div className="space-y-12">
            {categoriesData.map((category, idx) => (
              <article key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                
                {/* Category Header (Accordion Toggle) */}
                <div 
                  className="bg-gray-50 p-6 cursor-pointer flex justify-between items-center hover:bg-gray-100 transition-colors"
                  onClick={() => toggleCategory(idx)}
                >
                  <h2 className="text-2xl font-bold text-[#E87B41] m-0">{category.tipologia}</h2>
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#E87B41] border border-gray-200 transition-transform duration-200">
                    {openCategories[idx] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                
                {/* Collapsible Content */}
                {openCategories[idx] && (
                  <div className="border-t border-gray-200">
                    {/* Semantic Table for LLMs and Users */}
                    <div className="bg-gray-50 p-6 border-b border-gray-200 overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-600 border border-gray-200">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                          <tr>
                            <th scope="col" className="px-4 py-3 border-b border-r border-gray-200 w-1/5">Struttura</th>
                            <th scope="col" className="px-4 py-3 border-b border-r border-gray-200 w-1/6">Impianti</th>
                            <th scope="col" className="px-4 py-3 border-b border-r border-gray-200 w-1/3">Caratteristiche principali</th>
                            <th scope="col" className="px-4 py-3 border-b border-r border-gray-200 w-1/12">Comfort</th>
                            <th scope="col" className="px-4 py-3 border-b border-r border-gray-200 w-1/6">Utilizzo principale</th>
                            <th scope="col" className="px-4 py-3 border-b border-gray-200 w-1/12">Mobilità</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white">
                            <td className="px-4 py-3 border-r border-gray-200 font-medium text-gray-800">{category.struttura}</td>
                            <td className="px-4 py-3 border-r border-gray-200">{category.impianti}</td>
                            <td className="px-4 py-3 border-r border-gray-200">{category.caratteristiche}</td>
                            <td className="px-4 py-3 border-r border-gray-200 text-center">
                              <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-semibold">{category.comfort}</span>
                            </td>
                            <td className="px-4 py-3 border-r border-gray-200">{category.utilizzo}</td>
                            <td className="px-4 py-3 border-gray-200 text-center font-medium text-[#E87B41]">{category.mobilita}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Products List */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                        <div className="w-1 h-6 bg-[#E87B41] rounded"></div>
                        Prodotti disponibili ({category.products.length})
                      </h3>
                      
                      <div className="space-y-4">
                        {category.products.map((product, pIdx) => (
                          <div key={pIdx} className="flex flex-col md:flex-row items-stretch gap-0 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group bg-white">
                            
                            {/* Product Image */}
                            <div className="w-full md:w-48 h-48 md:h-auto bg-gray-100 flex-shrink-0 relative overflow-hidden">
                              <div className="w-full h-full min-h-[192px] flex flex-col items-center justify-center text-gray-400 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                                <ImageIcon size={40} className="opacity-50 mb-2" />
                                <span className="text-xs font-medium uppercase tracking-wider opacity-50">Immagine</span>
                              </div>
                            </div>
                            
                            {/* Product Details */}
                            <div className="flex-1 p-5 flex flex-col justify-center">
                              <div className="text-xs font-bold text-[#E87B41] uppercase tracking-wider mb-2">{product.brand}</div>
                              <h4 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-[#E87B41] transition-colors">
                                {product.title}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mt-auto">
                                <Check size={16} className="text-green-500" />
                                <span>Prodotto certificato</span>
                              </div>
                            </div>
                            
                            {/* CTA Area */}
                            <div className="w-full md:w-64 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200 p-5 flex flex-col items-center justify-center gap-3">
                              <button className="w-full bg-[#E87B41] hover:bg-[#d66a30] text-white px-4 py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors shadow-sm">
                                <Info size={16} />
                                Richiedi preventivo
                              </button>
                              <a href={product.url} className="text-sm text-gray-500 hover:text-[#E87B41] underline underline-offset-2 transition-colors">
                                Vedi scheda tecnica
                              </a>
                            </div>
                            
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
