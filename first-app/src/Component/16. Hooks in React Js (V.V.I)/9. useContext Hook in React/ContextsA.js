
import { createContext } from "react";
import ContextB from "./ContextB";

const FirstName = createContext();
const LastName = createContext();


const ContextsA = () => {


    return (
        <>
            <FirstName.Provider value={"Imtiyaz"}>
                <LastName.Provider value={"Ahamd"}>
                    <ContextB />
                </LastName.Provider>
            </FirstName.Provider>

        </>

    )
}

export default ContextsA;
export { FirstName, LastName };

