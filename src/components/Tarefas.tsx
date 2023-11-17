import styles from "./Tarefas.module.css"

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
        </div>
    )
}