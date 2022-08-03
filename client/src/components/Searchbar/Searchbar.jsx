import { useState } from "react";

import styles from "./Searchbar.module.css";

import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  console.log(query);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchbar} onSubmit={onSubmit}>
      <SearchIcon className={styles.icon} />
      <input
        className={styles.input}
        type="text"
        onChange={(event) => setQuery(event.target.value)}
      />
      <button className={styles.button}>
        <SearchIcon />
      </button>
    </form>
  );
}
