import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
    const { pathname } = useLocation();
    const isActive = pathname === to;

    return (
        <Link
            className={[styles.link, isActive ? styles.linkDestacado : ""].filter(Boolean).join(" ")}
            to={to}
        >
            {children}
        </Link>
    );
}
