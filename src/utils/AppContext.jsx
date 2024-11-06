import { createContext, useEffect, useState } from "react"

export const Context = createContext(); 
function AppContext({children}){
    const storeData = localStorage.getItem("movie_seen")
    const initStateHistory =  storeData ? JSON.parse(storeData) : []
    const [modal, setModal] = useState(false)
    const [dataId, setDataId] = useState()
    const [history, setHistory] = useState(initStateHistory)

    useEffect(() => {
        localStorage.setItem("movie_seen", JSON.stringify(history))
    },[history])

    
    return <Context.Provider value={{modal, setModal, dataId, setDataId, history, setHistory}}>{children}</Context.Provider>
}
export default AppContext