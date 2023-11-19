import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Main.module.css";
import { Tarefas } from "./Tarefas.tsx";
import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";

 export interface tarefaProps {
    id: string;
    titulo: string;
    completa: boolean;
}

export const Main = () => {
    const [tarefas, setTarefas] = useState<tarefaProps[]>([]);

    const [novaTarefa, setNovaTarefa] = useState("");

    const adicionarTarefa = (e: React.FormEvent) => {
        e.preventDefault();
        if (novaTarefa !== "") {
            const createNovaTarefa: tarefaProps = {
                id: uuidv4(),
                titulo: novaTarefa,
                completa: false,
            };

            setTarefas([...tarefas, createNovaTarefa]);
            setNovaTarefa("");
        }
    };

    const handleStatusTarefa = (id: string) =>{
        const novaTarefa =  tarefas.map((tarefa) =>
        tarefa.id === id ? {...tarefa, completa: !tarefa.completa} : tarefa
        );

        setTarefas(novaTarefa);
    }

    const handleDeletarTarefa = (id:string)=>{
        const novasTarefas = tarefas.filter((tarefa)=> tarefa.id !== id);
        setTarefas(novasTarefas)
    }


    return (
        <main className={styles.main}>
            <form className={styles.main_form} action="" onSubmit={adicionarTarefa}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                />
                <button className={styles.button}>
                    Criar <PlusCircle size={32} />
                </button>
            </form>
            <Tarefas tarefas={tarefas} mudaStatusTarefa={handleStatusTarefa} deletaTarefa={handleDeletarTarefa}/>
        </main>
    );
};
