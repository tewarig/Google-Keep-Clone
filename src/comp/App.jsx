import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import notes from "../notes"


function App() {
  return (
    <div>
      <Header />
     {notes.map((notesitem) =>
{
  return <Note key={notesitem.key}title={notesitem.title} content={notesitem.content}/>
})}

      <Footer />
    </div>
  );
}

export default App;
