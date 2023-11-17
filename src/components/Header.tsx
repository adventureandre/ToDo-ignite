import Logo from "../Logo.png";
import styles from "./Header.module.css";

export const Header = () => {
    return(
        <div className={styles.header}>
            <img className={styles.logo} src={Logo} alt=""/>
        </div>
    );
}