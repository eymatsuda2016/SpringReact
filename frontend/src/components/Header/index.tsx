import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMETA"/>
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://github.com/eymatsuda2016">eymatsuda2016</a>
                    </p>
            </div>
        </header>

    )
}

export default Header