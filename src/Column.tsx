import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle, } from "./styles";
import { useAppState } from "./state/AppStateContext"

type ColumnProps = {
    text: string
    id: string
}

export const Column = ({ text }: ColumnProps) => {
    const { getTasksByListId } = useAppState();

    const tasks = getTasksByListId(text);

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => (
                <Card text={task.text} key={task.text} id={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another card"
                onAdd={() => console.log("new Item Added")}
                dark
            />
        </ColumnContainer>
    )

}