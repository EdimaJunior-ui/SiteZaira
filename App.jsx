import React, { useState, useEffect } from 'react';
import Timeline from './components/Timeline/Timeline';
import NavigationMenu from './components/common/NavigationMenu';
import HieroglyphTranslator from './components/interactive/HieroglyphTranslator';
import Modal from './components/common/Modal';
import InfoCard from './components/common/InfoCard';
import Footer from './components/common/Footer';
import ThemeToggle from './components/common/ThemeToggle';
import SearchBar from './components/common/SearchBar';
import './styles/index.css';

function App() {
  // Estados principais
  const [activeSection, setActiveSection] = useState('timeline');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Definir as seções para o menu de navegação
  const sections = [
    { id: 'timeline', title: 'Linha do Tempo' },
    { id: 'social', title: 'Estrutura Social' },
    { id: 'religion', title: 'Religião' },
    { id: 'architecture', title: 'Arquitetura' },
    { id: 'science', title: 'Ciência' },
    { id: 'culture', title: 'Cultura' },
    { id: 'translator', title: 'Tradutor de Hieróglifos' }
  ];

  // Dados para pesquisa
  const searchableContent = [
    { id: 'pharaoh', title: 'Faraós do Egito', section: 'social', content: 'Os faraós eram os governantes supremos do Egito Antigo, considerados deuses vivos.' },
    { id: 'pyramid', title: 'Pirâmides', section: 'architecture', content: 'As pirâmides são monumentos funerários construídos para abrigar os corpos dos faraós.' },
    { id: 'mummy', title: 'Múmias', section: 'religion', content: 'A mumificação era o processo de preservação do corpo após a morte, permitindo a vida no além.' },
    { id: 'hieroglyphs', title: 'Hieróglifos', section: 'culture', content: 'Sistema de escrita que utilizava símbolos pictóricos para representar sons e ideias.' },
    { id: 'nile', title: 'Rio Nilo', section: 'science', content: 'O Nilo era a fonte de vida do Egito, permitindo agricultura em uma região desértica.' }
  ];

  // Função de pesquisa
  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const term = searchTerm.toLowerCase();
    const results = searchableContent.filter(
      item => item.title.toLowerCase().includes(term) || 
              item.content.toLowerCase().includes(term)
    );
    setSearchResults(results);
  };

  // Função para abrir o modal com conteúdo específico
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Função para renderizar a seção ativa ou os resultados da pesquisa
  const renderContent = () => {
    if (isSearching && searchResults.length > 0) {
      return (
        <div className="search-results">
          <h2>Resultados da Pesquisa</h2>
          <div className="info-cards-grid">
            {searchResults.map(result => (
              <InfoCard
                key={result.id}
                title={result.title}
                description={result.content}
                icon="🔍"
                onClick={() => setActiveSection(result.section)}
              />
            ))}
          </div>
        </div>
      );
    } else if (isSearching) {
      return (
        <div className="search-results">
          <h2>Nenhum resultado encontrado</h2>
          <p>Tente outros termos de pesquisa relacionados ao Egito Antigo.</p>
        </div>
      );
    } else {
      return renderActiveSection();
    }
  };

  // Função para renderizar a seção ativa
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'timeline':
        return <Timeline />;
      case 'translator':
        return <HieroglyphTranslator />;
      case 'social':
        return (
          <div className="section-container">
            <h2>Estrutura Social Egípcia</h2>
            <p>A sociedade egípcia era altamente estratificada e organizada como uma pirâmide social.</p>
            
            <div className="info-cards-grid">
              <InfoCard 
                title="Faraó"
                description="No topo da hierarquia social estava o Faraó, considerado um deus vivo e representante divino na terra."
                icon="👑"
                facts={[
                  "O título 'Faraó' significa literalmente 'Grande Casa'",
                  "Usava a coroa dupla para simbolizar o domínio sobre o Alto e Baixo Egito",
                  "Era o supremo líder político, militar e religioso"
                ]}
                detailedContent={
                  <div>
                    <p>Os faraós eram considerados a encarnação do deus Hórus e filhos de Rá. Sua posição era hereditária, e o título podia ser passado para homens e mulheres, embora rainhas governantes fossem raras.</p>
                    <p>O faraó usava símbolos específicos de poder:</p>
                    <ul>
                      <li>Coroa dupla (Pschent) - União do Alto e Baixo Egito</li>
                      <li>Barba postiça - Símbolo de divindade</li>
                      <li>Cetro e mangual - Representando poder e fertilidade</li>
                    </ul>
                    <p>Entre os faraós mais conhecidos estão Tutancâmon, Ramsés II, Hatshepsut e Cleópatra VII.</p>
                  </div>
                }
                onCardClick={openModal}
              />
              
              <InfoCard 
                title="Nobres e Sacerdotes"
                description="Logo abaixo do faraó estava a elite privilegiada que auxiliava na administração do reino e nos ritos religiosos."
                icon="🏛️"
                facts={[
                  "Administravam províncias como nomarcas",
                  "Não pagavam impostos e possuíam grandes propriedades",
                  "Os sacerdotes serviam como intermediários entre os deuses e o povo"
                ]}
                detailedContent={
                  <div>
                    <h3>Nobres</h3>
                    <p>A nobreza era formada por parentes do faraó e famílias de alto status social. Eles ocupavam cargos importantes como vizires (primeiros-ministros), governadores provinciais e generais.</p>
                    
                    <h3>Sacerdotes</h3>
                    <p>A classe sacerdotal tinha enorme influência devido ao papel central da religião na sociedade egípcia. O Sumo Sacerdote de Amon chegou a rivalizar com o próprio faraó em períodos de declínio do poder central.</p>
                    
                    <p>Tanto nobres quanto sacerdotes viviam em luxuosas residências, tinham acesso à educação formal e eram mumificados após a morte.</p>
                  </div>
                }
                onCardClick={openModal}
              />
              
              <InfoCard 
                title="Escribas"
                description="Os escribas eram profissionais especializados que dominavam a arte da escrita hieroglífica e eram essenciais para a administração."
                icon="📜"
                facts={[
                  "Passavam anos estudando para dominar a escrita",
                  "Eram muito respeitados e isentos de trabalhos físicos e impostos",
                  "Apenas cerca de 1% da população sabia ler e escrever"
                ]}
                detailedContent={
                  <div>
                    <p>Os escribas formavam a base da burocracia egípcia. Somente homens podiam se tornar escribas, e o treinamento começava na infância, geralmente seguindo a profissão do pai.</p>
                    <p>Suas principais responsabilidades incluíam:</p>
                    <ul>
                      <li>Registrar colheitas e calcular impostos</li>
                      <li>Escrever cartas oficiais e documentos legais</li>
                      <li>Manter registros de propriedades e censos</li>
                      <li>Copiar textos religiosos e literários</li>
                    </ul>
                    <p>Os escribas usavam paletas com tinta preta (feita de carvão) e vermelha (feita de ocre), e escreviam em papiros ou ostracas (fragmentos de cerâmica).</p>
                  </div>
                }
                onCardClick={openModal}
              />
              
              <InfoCard 
                title="Camponeses e Artesãos"
                description="A maioria da população egípcia trabalhava na agricultura ou como artesãos especializados."
                icon="🌾"
                facts={[
                  "Pagavam impostos em forma de parte de suas colheitas",
                  "Trabalhavam nas grandes construções durante a época de inundação do Nilo",
                  "Artesãos formavam guildas especializadas em diferentes ofícios"
                ]}
                detailedContent={
                  <div>
                    <h3>Camponeses</h3>
                    <p>Representavam cerca de 80% da população egípcia. Viviam em casas simples feitas de tijolos de barro e trabalhavam nas terras pertencentes ao faraó, templos ou nobres.</p>
                    <p>O ano agrícola era dividido em três estações:</p>
                    <ul>
                      <li>Inundação (Akhet) - Quando o Nilo transbordava</li>
                      <li>Cultivo (Peret) - Época de plantio</li>
                      <li>Colheita (Shemu) - Época de colheita</li>
                    </ul>
                    
                    <h3>Artesãos</h3>
                    <p>Incluíam carpinteiros, oleiros, tecelões, metalúrgicos e joalheiros. Trabalhavam em oficinas reais ou em pequenos negócios familiares, transmitindo suas habilidades de geração em geração.</p>
                  </div>
                }
                onCardClick={openModal}
              />
              
              <InfoCard 
                title="Escravos e Servos"
                description="Na base da pirâmide social estavam os escravos, principalmente prisioneiros de guerra e pessoas endividadas."
                icon="⛓️"
                facts={[
                  "A escravidão no Egito era diferente da visão moderna de escravidão",
                  "Alguns escravos podiam possuir propriedades e comprar sua liberdade",
                  "Muitos 'escravos' eram na verdade servos com certos direitos legais"
                ]}
                detailedContent={
                  <div>
                    <p>A escravidão no Antigo Egito era mais complexa do que em outras sociedades antigas. Os escravos não eram considerados propriedade no sentido estrito e tinham certos direitos protegidos por lei.</p>
                    <p>Fontes de escravos:</p>
                    <ul>
                      <li>Prisioneiros de guerra capturados em campanhas militares</li>
                      <li>Pessoas que se vendiam para pagar dívidas</li>
                      <li>Crianças vendidas por famílias em extrema pobreza</li>
                      <li>Criminosos condenados</li>
                    </ul>
                    <p>Ao contrário da crença popular, os grandes monumentos como as pirâmides não foram construídos por escravos, mas por camponeses que trabalhavam como parte de seu serviço ao estado durante a estação de inundação.</p>
                  </div>
                }
                onCardClick={openModal}
              />
            </div>
          </div>
        );
      case 'religion':
        return (
          <div className="section-container">
            <h2>Religião Egípcia</h2>
            <p>A religião permeava todos os aspectos da vida no Antigo Egito e era fundamentada na crença em múltiplos deuses e na vida após a morte.</p>
            
            <div className="info-cards-grid">
              <InfoCard 
                title="Deuses Principais"
                description="Os egípcios adoravam centenas de deidades, cada uma associada a diferentes aspectos da vida e do universo."
                icon="🏺"
                facts={[
                  "Rá - Deus sol, um dos mais importantes do panteão",
                  "Osíris - Deus da morte e ressurreição",
                  "Ísis - Deusa da maternidade e magia",
                  "Anúbis - Deus associado à mumificação e proteção dos mortos"
                ]}
                detailedContent={
                  <div>
                    <p>O panteão egípcio incluía mais de 2.000 deidades, embora apenas algumas dezenas fossem amplamente cultuadas. Os deuses podiam ser representados como:</p>
                    <ul>
                      <li>Totalmente humanos</li>
                      <li>Totalmente animais</li>
                      <li>Híbridos com corpo humano e cabeça de animal</li>
                    </ul>
                    <p>Muitos deuses estavam associados a locais específicos, como Ptah em Mênfis ou Amon em Tebas. Os mitos e relações entre os deuses formavam um sistema religioso complexo que evoluiu ao longo dos milênios.</p>
                  </div>
                }
                onCardClick={openModal}
              />
              
              <InfoCard 
                title="Vida Após a Morte"
                description="Os egípcios acreditavam fortemente na existência após a morte e desenvolveram elaboradas práticas funerárias."
                icon="⚰️"
                facts={[
                  "O coração era pesado contra a pena da verdade no julgamento",
                  "O Livro dos Mortos continha fórmulas para navegar no além",
                  "Objetos pessoais eram enterrados com o morto para uso na outra vida"
                ]}
                detailedContent={
                  <div>
                    <p>A crença na vida após a morte era central para a religião egípcia. Os egípcios acreditavam que a alma (Ka e Ba) precisava do corpo preservado para continuar existindo.</p>
                    <p>Após a morte, a alma enfrentava um julgamento perante Osíris, onde o coração era pesado contra a pena da verdade (Maat). Se o coração fosse mais leve, a pessoa ganhava a vida eterna. Se mais pesado, seria devorado pelo monstro Ammit.</p>
                    <p>Os egípcios passavam a vida se preparando para a morte, construindo tumbas elaboradas e acumulando bens para levar ao além. Os mais ricos podiam contratar artesãos para criar tumbas decoradas com pinturas e textos sagrados.</p>
                  </div>
                }
                onCardClick={openModal}
              />
              
              <InfoCard 
                title="Mumificação"
                description="O processo de preservação do corpo era essencial para garantir a vida após a morte."
                icon="🧟"
                facts={[
                  "O processo completo durava cerca de 70 dias",
                  "Os órgãos eram removidos e preservados em vasos canopos",
                  "O cérebro era removido pelo nariz e descartado"
                ]}
                detailedContent={
                  <div>
                    <p>A mumificação era um processo complexo reservado inicialmente apenas para a realeza, mas que gradualmente se tornou disponível para quem pudesse pagar:</p>
                    <ol>
                      <li>Lavagem do corpo com vinho de palma e água do Nilo</li>
                      <li>Remoção do cérebro através das narinas</li>
                      <li>Incisão no lado esquerdo para remover órgãos internos</li>
                      <li>Preservação dos órgãos em quatro vasos canopos</li>
                      <li>Desidratação do corpo com natrão</li>
                      <li>Preenchimento da cavidade corporal com linho, serragem e resinas</li>
                      <li>Envolvimento do corpo com bandagens de linho</li>
                      <li>Aplicação de amuletos protetores entre as camadas</li>
                      <li>Posicionamento de máscara funerária sobre o rosto</li>
                    </ol>
                    <p>O processo era acompanhado por rituais e encantamentos para proteger o falecido em sua jornada.</p>
                  </div>
                }
                onCardClick={openModal}
              />
              
              <InfoCard 
                title="Templos e Cultos"
                description="Os templos eram centros de adoração e poder econômico no Antigo Egito."
                icon="🗿"
                facts={[
                  "Os templos possuíam próprias fazendas e oficinas",
                  "Apenas sacerdotes podiam entrar nas áreas mais sagradas",
                  "Festivais religiosos eram celebrados ao longo do ano"
                ]}
                detailedContent={
                  <div>
                    <p>Os templos egípcios eram considerados a morada dos deuses na terra. Sua arquitetura seguia um padrão que simbolizava a criação do mundo:</p>
                    <ul>
                      <li>Pilones (entradas monumentais) representando as montanhas do horizonte</li>
                      <li>Pátio aberto simbolizando as primeiras terras a emergir das águas</li>
                      <li>Sala hipostila (com colunas) representando o pântano primordial</li>
                      <li>Santuário interior simbolizando o monte primordial da criação</li>
                    </ul>
                    <p>Os templos funcionavam como complexos econômicos, políticos e culturais, empregando milhares de pessoas e controlando grandes extensões de terra. Os mais famosos são os templos de Karnak e Luxor, dedicados ao deus Amon.</p>
                  </div>
                }
                onCardClick={openModal}
              />
            </div>
          </div>
        );
      case 'architecture':
        return (
          <div className="section-container">
            <h2>Arquitetura Egípcia</h2>
            <p>A arquitetura do Antigo Egito é conhecida por suas construções monumentais e duradouras que desafiam o tempo.</p>
            
            <div className="info-cards-grid">
              <InfoCard 
                title="Pirâmides"
                description="As pirâmides são os monumentos mais icônicos do Egito Antigo, construídas como tumbas para os faraós."
                icon="🔺"
                facts={[
                  "A Grande Pirâmide de Gizé tem 146 metros de altura original",
                  "Foi construída com aproximadamente 2,3 milhões de blocos de pedra",
                  "As pirâmides foram alinhadas com precisão astronômica"
                ]}
                detailedContent={
                  <div>
                    <p>As pirâmides evoluíram a partir das mastabas (tumbas retangulares). A primeira pirâmide foi a Pirâmide Escalonada de Djoser, projetada pelo arquiteto Imhotep.</p>
                    <p>As pirâmides não foram construídas por escravos, mas por trabalhadores qualificados e camponeses durante a estação de inundação do Nilo, quando não podiam trabalhar nos campos.</p>
                    <p>A era das grandes pirâmides ocorreu principalmente durante o Antigo Império, com o complexo de Gizé sendo a obra-prima dessa tradição.</p>
                  </div>
                }
                onCardClick={openModal}
              />
              
              <InfoCard 
                title="Templos"
                description="Os templos egípcios eram projetados como moradas para os deuses e centros de atividade religiosa."
                icon="🏛️"
                facts={[
                  "Seguiam um layout padronizado simbolizando a criação do mundo",
                  "O templo de Karnak é o maior complexo religioso já construído",
                  "As paredes eram cobertas de hieróglifos e relevos coloridos"
                ]}
                detailedContent={<div><p>Mais detalhes sobre os templos...</p></div>}
                onCardClick={openModal}
              />
            </div>
          </div>
        );
      case 'science':
        return (
          <div className="section-container">
            <h2>Ciência e Conhecimento Egípcio</h2>
            <p>Os egípcios desenvolveram conhecimentos avançados em várias áreas científicas.</p>
            
            <div className="info-cards-grid">
              <InfoCard 
                title="Medicina"
                description="Os médicos egípcios eram os mais avançados do mundo antigo."
                icon="⚕️"
                facts={[
                  "O Papiro Edwin Smith contém os primeiros casos documentados de cirurgia",
                  "Tinham especialistas para diferentes áreas do corpo",
                  "Combinavam tratamentos práticos com magia e orações"
                ]}
                detailedContent={<div><p>Mais detalhes sobre medicina egípcia...</p></div>}
                onCardClick={openModal}
              />
              
              <InfoCard 
                title="Matemática e Astronomia"
                description="Os egípcios desenvolveram sistemas matemáticos para propósitos práticos como agricultura e construção."
                icon="🔢"
                facts={[
                  "Criaram um sistema decimal e fracionário",
                  "Conheciam o valor de π com razoável precisão",
                  "Desenvolveram um calendário de 365 dias baseado nas estrelas"
                ]}
                detailedContent={<div><p>Mais detalhes sobre matemática e astronomia...</p></div>}
                onCardClick={openModal}
              />
            </div>
          </div>
        );
      case 'culture':
        return (
          <div className="section-container">
            <h2>Cultura e Arte Egípcia</h2>
            <p>A expressão artística e cultural egípcia seguia convenções rígidas que perduraram por milênios.</p>
            
            <div className="info-cards-grid">
              <InfoCard 
                title="Arte e Pintura"
                description="A arte egípcia era altamente estilizada e seguia um conjunto específico de regras de representação."
                icon="🎨"
                facts={[
                  "Figuras humanas eram desenhadas com a cabeça de perfil, olhos frontais e torso frontal",
                  "O tamanho das figuras indicava sua importância social",
                  "Usavam cores simbólicas: amarelo para eternidade, vermelho para vida"
                ]}
                detailedContent={<div><p>Mais detalhes sobre arte egípcia...</p></div>}
                onCardClick={openModal}
              />
              
              <InfoCard 
                title="Escrita e Literatura"
                description="Os hieróglifos eram mais que um sistema de escrita - eram considerados sagrados e mágicos."
                icon="📚"
                facts={[
                  "Existiam três tipos de escrita: hieroglífica, hierática e demótica",
                  "Contos, poemas e textos religiosos formavam a literatura egípcia",
                  "A Pedra de Roseta foi fundamental para decifrar os hieróglifos"
                ]}
                detailedContent={<div><p>Mais detalhes sobre escrita e literatura...</p></div>}
                onCardClick={openModal}
              />
            </div>
          </div>
        );
      default:
        return <div>Seção não encontrada</div>;
    }
  };

  // Efeito para resetar a pesquisa quando mudar de seção
  useEffect(() => {
    setIsSearching(false);
    setSearchResults([]);
  }, [activeSection]);

  return (
    <div className="App">
      <ThemeToggle />
      
      <header className="App-header">
        <h1>Bem-vindo à Linha do Tempo das Sociedades Egípcias</h1>
        <p>Explore a história e cultura do Antigo Egito de forma interativa.</p>
        <div className="search-wrapper">
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>
      
      <NavigationMenu 
        sections={sections} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main>
        {renderContent()}
      </main>
      
      <Footer />
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title || "Informação"}
      >
        {modalContent.content}
      </Modal>
      
      <button 
        className="help-button"
        onClick={() => openModal({
          title: "Ajuda & Informações",
          content: (
            <div>
              <p>Este site é um projeto educacional sobre o Antigo Egito.</p>
              <p>Navegue pelas diferentes seções usando o menu no topo.</p>
              <p>Use a barra de pesquisa para encontrar conteúdos específicos.</p>
              <p>Na linha do tempo, explore os diferentes períodos da história egípcia.</p>
              <p>Experimente o tradutor de hieróglifos para ver como seu nome ficaria em símbolos semelhantes aos hieróglifos!</p>
              <p>Clique no botão de tema no canto superior direito para alternar entre modo claro e escuro.</p>
              <p>Nos cards informativos, clique no cabeçalho para expandir e ver mais fatos ou clique no card para abrir informações detalhadas.</p>
            </div>
          )
        })}
      >
        ?
      </button>
    </div>
  );
}

export default App;
