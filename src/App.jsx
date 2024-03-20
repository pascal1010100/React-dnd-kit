import {useState} from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove
} from  "@dnd-kit/sortable"
import User from "./User";

function App() {
  const [people, setPeople] = useState ([
    {name: "John", id: 1 },
    {name: "Peter", id: 2 },
    {name: "Sue", id: 3 },
  ])

   const handleDragEnd = (event ) => {
const {active, over} = event
    

    const oldIndex = people.findIndex(person => person.id === active.id)
    const newIndex = people.findIndex(person => person.id === over.id)
  
    console.log("oldIdex" , oldIndex )
    console.log("newIndex" , newIndex)

    const newOrder = arrayMove (people, oldIndex,newIndex)
    console.log(newOrder)
  }

  return (
   <DndContext collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}>
   <h1 className="text-2xl font-bold">Users List</h1>

    <SortableContext
    items={people}
    strategy={verticalListSortingStrategy}
    >
     {people.map((user) =>(
      <User  user={user} key={user.id}  />
     ))}


    </SortableContext>
   </DndContext>
  )
}
export default App