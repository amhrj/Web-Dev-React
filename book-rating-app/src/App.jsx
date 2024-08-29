import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const books = [
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "The Magician's Nephew",
    author: "C. S. Lewis",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
  },
];

function NewBook(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
    </>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Like</button>
      <button onClick={() => setCount(count - 1)}>Dislike</button>
    </>
  )
}

function App() {
  return (
    <>
      {books.map((book) => 
        (<NewBook {...book} />)
    )}
      <Counter />
    </>
  );
}

export default App;
