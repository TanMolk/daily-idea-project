import {useState} from "react";

export default function Todo({name, ifCompleted}) {
    const [completeState, setCompleteState] = useState(ifCompleted);

    return (
        <div
            style={{
                margin: "0 auto"
            }}
        >
            <p
                style={{
                    display: "inline-block",
                }}>
                {name}
            </p>
            <input
                style={{
                    display: "inline-block"
                }}
                type={"checkbox"}
                checked={completeState}
                onChange={() => setCompleteState(!completeState)}
            />
        </div>
    );
}