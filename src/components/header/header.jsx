import styles from './header.module.css';

function Header(props) {
  const {handleSearch, selectVideo} = props;

  return (
    <header className={styles.header}>
      <button className={styles.logo} onClick={() => {
        selectVideo(null)
      }}><img src="/img/logo.png" alt="logo"/></button>
      <input className={styles.search__keyword} type="search" onKeyDown={handleSearch}/>
      <i className="icon--search"></i>
      <div className={styles.user}>
        <button className={styles.user__profile}></button>
      </div>
    </header>
  );
}

export default Header;