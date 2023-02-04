
import { createContext } from "react";
import ContextD from "./ContextD";

const FirstName = createContext();
const LastName = createContext();

const ContextA = () => {


    return (
        <>
            <FirstName.Provider value={"Imtiyaz"}>
                <LastName.Provider value={"Ahamd"}>
                    <ContextD />
                </LastName.Provider>
            </FirstName.Provider>

        </>


    )
}

export default ContextA;
export { FirstName, LastName };

