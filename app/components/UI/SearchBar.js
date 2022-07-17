import { useState } from "react";

import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  
  const changeHandler = (event) => {
      setSearch(event.target.value);
      props.searchChange(event.target.value);
  };

  return (
    <div className={classes.center}>
      <input
        type="text"
        placeholder={props.placeholder}
        className={`input input-bordered w-full max-w-xl`}
        value = {search}
        onChange = {changeHandler}
      />
      <div className={classes.search}>
        <button className={`btn btn-ghost btn-circle`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-9 w-8 ${classes.input}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
