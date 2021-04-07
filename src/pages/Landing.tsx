import "../styles/pages/landing.css";
import { Circle, Coffee, Gitlab, Wifi } from "react-feather";

function Landing() {
  return (
    <div className="main-container">
      <header>
        <nav className="navbar">
          {/* <img src="" alt="Logo landing page" /> */}
          <p> Portfólio Yan </p>
          <ul>
            <li> Nome </li>
            <li> Github </li>
            <li> Serviços </li>
            <li> Contato </li>
          </ul>
        </nav>

        <div className="header-content">
          <h1> Header Image </h1>
          <p> Detalhes do título acima.... </p>
          <button> Saiba mais </button>
        </div>
      </header>

      <section className="pacotes">
        <h1 className="pacotesTitle"> Veja os pacotes: </h1>

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
              <h1> Pacote 5 noites - Hotel Premium </h1>
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
              <p> R$ 1500,00 </p>
            </div>
          </div>

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
              <h1> Pacote 5 noites - Hotel Premium </h1>
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
              <p> R$ 1500,00 </p>
            </div>
          </div>

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
              <h1> Pacote 5 noites - Hotel Premium </h1>
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
              <p> R$ 1500,00 </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
