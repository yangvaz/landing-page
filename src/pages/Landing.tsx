import "../styles/pages/landing.css";
import {
  Camera,
  Coffee,
  GitHub,
  Gitlab,
  Map,
  Navigation,
  Wifi,
} from "react-feather";
import avocadoIcon from "../assets/avocado-icon.png";

function Landing() {
  return (
    <div className="main-container">
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
            <li> Destinos </li>
            <li> Pacotes </li>
            <li> Promoções </li>
            <li>
              {" "}
              <div className="faleConosco"> Fale conosco </div>{" "}
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

      <section className="pacotes">
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

      <section className="services">
        <h1 className="servicesTitle"> Serviços </h1>
        <div className="containerInfoServices">

          <div className="infoService">
            <Map />
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
    </div>
  );
}

export default Landing;
