import {useState} from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {SortableContext, verticalListSortingStrategy,
} from  "@dnd-kit/sortable"
import User from "./User";

function App() {


  const [people, setPeople] = useState ([
    {name: "John", id: 1 },
    {name: "Peter", id: 2 },
    {name: "Sue", id: 3 },
  ])

   const handleDragEnd = () => {}
  return (
   <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
   >
    <h1 className="text-2xl font-bold">Users List</h1>

    <SortableContext
    items={people}
    strategy={verticalListSortingStrategy}
    >
     {people.map((user) =>(
      <User user={user} />
     ))}


    </SortableContext>
   </DndContext>
  )
}
export default App