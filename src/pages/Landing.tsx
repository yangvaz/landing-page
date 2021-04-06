import '../styles/pages/landing.css';

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

      <section className="cards">

      </section>
  
    </div>
  );
}

export default Landing;
