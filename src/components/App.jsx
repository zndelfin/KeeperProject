import React from "react";
import Heading from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../Note.js";



function App(){
   return (<div>
    <Heading />
    
      {notes.map(noteItem => (
          <Note 
          key = {noteItem.key}
          title = {noteItem.title}
          content = {noteItem.content}
       />
       ))
      }
    
    <Footer />
   </div>);
}

export default App;