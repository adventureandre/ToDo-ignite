import styles from "./Tarefas.module.css"
import {Trash} from "@phosphor-icons/react";

export const Tarefas = ()=>{
    return(
        <div className={styles.tarefas}>
            <div className={styles.info}>
                <span className={styles.info_total}>
                    Tarefas criadas <em className={styles.rounded}>5</em>
                </span>
                <span className={styles.info_executadas}>
                    Concluídas <em className={styles.rounded}>2 de 5</em>
                </span>
            </div>

            <ul className={styles.list}>
                <li className={styles.itens}>
                    <input type="checkbox" name='completed' id='completed'/>
                        <label htmlFor='completed'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </label>
                <button><Trash/></button>
                </li>
                <li className={styles.itens}>
                    <input type="checkbox" name='completed' id='completed'/>
                    <label htmlFor='completed'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </label>
                    <button><Trash/></button>
                </li>

                <li className={styles.itens}>
                    <input type="checkbox" name='completed' id='completed'/>
                    <label htmlFor='completed'>Lorem Ipsum han unknown printer took a galley of type and scrambled it to </label>
                    <button><Trash/></button>
                </li>
            </ul>
        </div>
    )
}