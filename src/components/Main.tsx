import {PlusCircle} from "@phosphor-icons/react";
import styles from "./Main.module.css";


export const Main  = () =>{
    return(
        <main>
            <form className={styles.main_form} action="">
                <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa"/>
                <button className={styles.button}>Criar  <PlusCircle size={32} /> </button>
            </form>
        </main>
    )
}