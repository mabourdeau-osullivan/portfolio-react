import React, { useState, useMemo } from "react";

function Memo() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    const reversedValue = useMemo(() => {
        return value.split("").reverse().join("");
    }, [value]);

return (
    <div>
        <button onClick={() => setCount(count + 1)}>Augmenter le</button>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <p>Je suis Memo: <strong>{reversedValue}</strong></p>
        </div>
);

}

export default Memo;