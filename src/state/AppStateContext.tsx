import { createContext, useContext } from "react";

type Task = {
    id: string
    text: string
}
type List = {
    id: string
    text: string
    tasks: Task[]
}

export type AppState = {
    lists: List[]
}

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "To Do",
            tasks: [{ id: "c1", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "To Do",
            tasks: [{ id: "c2", text: "Begin to use Static Typing" }]
        }]

}

type AppStateContextProps = {
    lists: List[]
    getTasksByListId: (id: string) => Task[]
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({ children }: { children: React.ReactNode }) => {
    const { lists } = appData;

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || [];
    }

    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}