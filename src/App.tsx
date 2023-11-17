import './App.css'
import {v4 as uuidv4} from 'uuid';
import {Header} from "./components/Header.tsx";
import {Main} from "./components/Main.tsx";

const tasks = [
    {
        id: uuidv4(),
        title: "Comer arroz",
        isComplete: true
    },
    {
        id: uuidv4(),
        title: "Comer farinha",
        isComplete: true
    },
    {
        id: uuidv4(),
        title: "Comer açucar",
        isComplete: true
    }
]

export function App() {
    console.log(tasks)
    return (
        <>
<Header/>
<Main/>
        </>
    )
}
