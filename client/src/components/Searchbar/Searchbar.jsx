import styles from "./Searchbar.module.css";

import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.searchbar} onSubmit={onSubmit}>
      <SearchIcon className={styles.icon} />
      <input className={styles.input} type="text" />
      <button className={styles.button}>
        <SearchIcon />
      </button>
    </form>
  );
}
