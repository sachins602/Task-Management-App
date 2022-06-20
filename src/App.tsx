import { AddNewItem } from "./AddNewItem"
import { Column } from "./Column"
import { AppContainer } from "./styles"
import { useAppState } from "./state/AppStateContext"



export const App = () => {
  const { lists } = useAppState();

  return <AppContainer>
    {lists.map(list => (
      <Column key={list.id} text={list.text} id={list.id} />
    ))}
    <AddNewItem toggleButtonText="+ Add another list" onAdd={() => console.log("Item Added")} />
  </AppContainer>
}

