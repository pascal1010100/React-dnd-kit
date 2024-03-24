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
    
    setPeople((people) => {
    const oldIndex = people.findIndex(person => person.id === active.id)
    const newIndex = people.findIndex(person => person.id === over.id)
  
   return arrayMove(people, oldIndex, newIndex);
   });
  }


  return (
    <div className="flex justify-center items-center">
         <div className="w-4/6" >
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
    </div>
    </div>
  )
}
export default App