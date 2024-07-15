import React, { useState} from "react";
import "./style.css";
/**
 * create a search box 
 *  implement debounce function
 */
export default function App() {

  const [searchInput, setSearchInput] = useState('');

  const onSeachInputHandler = (e) => {
    console.log("Event ", e.target.value);
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
  }

  useEffect(() =>  console.log('You are searching something'),[searchInput])

  const searchDebounce = (value, delay = 300) => {
    let timerId;
    timerId = setTimeout(() => console.log("Value ", value), delay);
    clearInterval(timerId);
  }


  return (
    <div>
      <label htmlFor="search"></label>
      <input type="text" id="search" placeholder="enter some text" onChange={onSeachInputHandler}/>
    </div>
  );
}