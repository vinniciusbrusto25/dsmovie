import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

//Compnente react javascript xD
//Todo componente react é uma função javascript basicamente.
function Navbar() {
    return (
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/vinniciusbrusto25">
              <div className="dsmovie-contact-container">
                <GithubIcon />
                <p className="dsmovie-contact-link">/vinniciusbrusto25</p>
              </div>
              </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;