import {
  Camera,
  Coffee,
  GitHub,
  Gitlab,
  Mail,
  Map as MapIcon,
  MapPin,
  Navigation,
  Phone,
  Wifi,
} from "react-feather";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-scroll";

import "../styles/pages/landing.css";
import "../styles/pages/leaflet.css";
import mapIcon from "../utils/mapMarker";

import avocadoIcon from "../assets/avocado-icon.png";

const TOKEN_MAPBOX = process.env.REACT_APP_MAPBOX_TOKEN;
const DARK_STYLE = 'cknjre7ng123617nkyiyncfrn';
const URL_MAP = `https://api.mapbox.com/styles/v1/yangvaz/${DARK_STYLE}/tiles/256/{z}/{x}/{y}@2x?access_token=${TOKEN_MAPBOX}`;

function Landing() {
  return (
    <div id="home" className="main-container">
      <header>
        <nav className="navbar">
          <div className="logomarkDeveloper">
            <p> Desenvolvido por Yan </p>
            <img src={avocadoIcon} alt="avocado icon" className="avocadoIcon" />
            <a href="https://github.com/yangvaz">
              {" "}
              <GitHub className="githubLink" />{" "}
            </a>
          </div>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={1000}>
                Home{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="pacotes" smooth={true} duration={1000}>
                {" "}
                Pacotes{" "}
              </Link>
            </li>
            <li>
              <Link to="servicos" smooth={true} duration={1000}>
                Serviços
              </Link>
            </li>
            <li>
              {" "}
              <Link to="contato" smooth={true} duration={1000}>
                <div className="faleConosco"> Contato </div>{" "}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-content">
          <h1> Take a Travel </h1>
          <p>
            {" "}
            Os melhores pacotes e experiências de viagem estão aqui. Conheça.{" "}
          </p>
          <button className="saibaMais"> Saiba mais </button>
        </div>
      </header>

      <section id="pacotes" className="pacotes">
        <h1 className="pacotesTitle"> Pacotes em destaque </h1>

        <div className="cardsContainer">
          <div className="card">
            <div className="card-tag card-tag-top">
              <p> Promoção </p>
            </div>
            <img
              className="card-image"
              src="https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1345&q=80"
              alt="miami"
            />
            <div className="card-content">
              <h1> Pacote Miami. 5 noites - Hotel Premium </h1>
              <ul>
                <li>
                  {" "}
                  <Coffee /> Café da manhã incluso{" "}
                </li>
                <li>
                  {" "}
                  <Wifi /> Wifi{" "}
                </li>
                <li>
                  {" "}
                  <Gitlab /> Pet friendly{" "}
                </li>
              </ul>
            </div>
            <div className="card-tag card-tag-bottom">
              <p> R$ 3000,00 </p>
            </div>
          </div>

          <div className="card">
            <div className="card-tag card-tag-top">
              <p> Promoção </p>
            </div>
            <img
              className="card-image"
              src="https://images.unsplash.com/photo-1514813621023-7a1e3fca8c1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="russia"
            />
            <div className="card-content">
              <h1> Pacote Russia. 4 noites - Hotel 3 estrelas </h1>
              <ul>
                <li>
                  {" "}
                  <Coffee /> Café da manhã incluso{" "}
                </li>
                <li>
                  {" "}
                  <Wifi /> Wifi{" "}
                </li>
                <li>
                  {" "}
                  <Gitlab /> Pet friendly{" "}
                </li>
              </ul>
            </div>
            <div className="card-tag card-tag-bottom">
              <p> R$ 2700,00 </p>
            </div>
          </div>

          <div className="card">
            <div className="card-tag card-tag-top">
              <p> Promoção </p>
            </div>
            <img
              className="card-image"
              src="https://images.unsplash.com/photo-1496773589367-79ee06195d0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="cape town"
            />
            <div className="card-content">
              <h1> Pacote Cidade do Cabo. 7 dias + Safari </h1>
              <ul>
                <li>
                  {" "}
                  <Coffee /> Café da manhã incluso{" "}
                </li>
                <li>
                  {" "}
                  <Wifi /> Wifi{" "}
                </li>
                <li>
                  {" "}
                  <Gitlab /> Pet friendly{" "}
                </li>
              </ul>
            </div>
            <div className="card-tag card-tag-bottom">
              <p> R$ 4200,00 </p>
            </div>
          </div>

          <div className="card">
            <div className="card-tag card-tag-top">
              <p> Promoção </p>
            </div>
            <img
              className="card-image"
              src="https://images.unsplash.com/photo-1533747732305-e29603106e0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
              alt="peru"
            />
            <div className="card-content">
              <h1> Pacote Peru - 3 dias </h1>
              <ul>
                <li>
                  {" "}
                  <Coffee /> Café da manhã incluso{" "}
                </li>
                <li>
                  {" "}
                  <Wifi /> Wifi{" "}
                </li>
                <li>
                  {" "}
                  <Gitlab /> Pet friendly{" "}
                </li>
              </ul>
            </div>
            <div className="card-tag card-tag-bottom">
              <p> R$ 1200,00 </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="services">
        <h1 className="servicesTitle"> Serviços </h1>
        <div className="containerInfoServices">
          <div className="infoService">
            <MapIcon />
            <div className="textContent">
              <h3> Tours guiados </h3>
              <span>
                {" "}
                Os tours guiados são passeios que são realizados com auxílio de
                um guia, que além de dar informações sobre o local, vai nos
                condunzir ao longo do trajeto{" "}
              </span>
            </div>
            <button className="howThisWorks"> How this works ? </button>
          </div>

          <div className="infoService">
            <Camera />
            <div className="textContent">
              <h3> Fotografia profissional </h3>
              <span>
                {" "}
                Nossos fotógrafos estão acostumados a registrar os melhores
                momentos das viagens para que você aproveite a paisagem sem se
                preocupar.{" "}
              </span>
            </div>
            <button className="howThisWorks"> How this works ? </button>
          </div>

          <div className="infoService">
            <Navigation />
            <div className="textContent">
              <h3> Aluguel de veículo </h3>
              <span>
                {" "}
                Para os clientes que preferem explorar o ambiente por contra
                própria, que curtem essa liberdade, oferecemos o serviço de
                aluguel de veículos com preços super em conta.{" "}
              </span>
            </div>
            <button className="howThisWorks last"> How this works ? </button>
          </div>
        </div>
      </section>

      <section id="contato" className="contato">
        <div className="contato-card">
          <h1> Entre em contato </h1>
          <ul>
            <li>
              {" "}
              <MapPin /> Champ de Mars, 5 Avenue Anatole{" "}
            </li>
            <li>
              {" "}
              <Mail /> contato@travel-agency.com.br{" "}
            </li>
            <li>
              {" "}
              <Phone /> (31) 9 9422-4699{" "}
            </li>
          </ul>
        </div>

        <div className="map">
          <MapContainer
            center={[48.8583701, 2.2922926]}
            zoom={13.5}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer url={URL_MAP} />

            <Marker key={1} position={[48.8583701, 2.2922926]} icon={mapIcon}>
              <Popup>generic pop up</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </div>
  );
}

export default Landing;
