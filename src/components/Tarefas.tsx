import styles from "./Tarefas.module.css"
import {Trash} from "@phosphor-icons/react";
import {tarefaProps} from "./Main.tsx";

interface TarefasProps {
    tarefas: tarefaProps[];
    mudaStatusTarefa: (id: string) => void;
    deletaTarefa: (id:string) => void;
}

export const Tarefas: React.FC<TarefasProps> = ({ tarefas, mudaStatusTarefa, deletaTarefa }) => {
    const totalConcluidas =  tarefas.filter((tarefa)=>tarefa.completa).length

    return(
        <div className={styles.tarefas}>
            <div className={styles.info}>
                <span className={styles.info_total}>
                    Tarefas criadas <em className={styles.rounded}>{tarefas.length}</em>
                </span>
                <span className={styles.info_executadas}>
                    Concluídas <em className={styles.rounded}>{totalConcluidas} de {tarefas.length}</em>
                </span>
            </div>
            <ul className={styles.list}>
                {tarefas.map((tarefa:tarefaProps) => (
                    <li key={tarefa.id} className={styles.itens}>
                            <input
                                type="checkbox"
                                name="completed"
                                id={`completed-${tarefa.id}`}
                                onChange={()=>mudaStatusTarefa(tarefa.id)}
                            />
                        <label htmlFor={`completed-${tarefa.id}`}
                               className={tarefa.completa ? styles.completed : ""}
                        >{tarefa.titulo}</label>
                        <button onClick={()=> deletaTarefa(tarefa.id)}>
                            <Trash />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}