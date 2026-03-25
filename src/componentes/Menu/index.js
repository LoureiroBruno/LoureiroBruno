import styles from './Menu.module.css'; 
import { Link } from "react-router-dom";
import MenuLink from '../MenuLink';

export default function Menu () {
    return (
        <header className={styles.cabecalho}>
            <nav className={styles.navegacao}>
                <Link className={styles.marca} to="/">
                    <span className={styles.marcaIcone}>BL</span>

                    <span className={styles.marcaTexto}>
                        <strong>Bruno Loureiro</strong>
                        <span>Portfólio Full Stack</span>
                    </span>
                </Link>

                <div className={styles.links}>
                    <MenuLink to="/">
                        Início
                    </MenuLink>
                    <MenuLink to="/sobremim">
                        Sobre Mim
                    </MenuLink>
                </div>
            </nav>
        </header>
    )
}
