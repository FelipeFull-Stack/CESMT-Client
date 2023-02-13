import { createContext, useState } from "react";

const SelectContext = createContext();

function SelectContextComponent(props) {

    const [select, setSelect] = useState({
        selected: ""
    });

    return (
        <SelectContext.Provider value={{ select, setSelect }}>
            {props.children}
        </SelectContext.Provider>
    );
}

export { SelectContext, SelectContextComponent }