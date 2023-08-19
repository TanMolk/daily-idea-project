import Todo from "./component/Todo";
import {useEffect, useState} from "react";
import Web3Util from "./utils/Web3Util";

await Web3Util.init();
export default function App() {
    const [data, setData] = useState([]);
    const [inputName, setInputName] = useState("");

    const addItem = (name) => {
        Web3Util.addTodo(name)
            .then(() => {
                setInputName("");
                getTodoList();
            });
    }

    const getTodoList = () => {
        Web3Util.getTodoList().then((data) => {
            setData(data);
        });
    }

    useEffect(() => {
        getTodoList();
    }, [])

    return (
        <>
            <header></header>

            <section>
                <div>
                    <input
                        type={"text"}
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            addItem(inputName);
                        }}
                    >
                        添加
                    </button>
                </div>
                <div>
                    {data.map((d, index) => {
                        return (<Todo key={index} name={d.name} ifCompleted={d.ifCompleted}/>)
                    })}
                </div>
            </section>

            <footer>

            </footer>
        </>
    );
}