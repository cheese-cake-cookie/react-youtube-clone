import styles from './header.module.css';

function Header({onSearch}) {
  return (
    <header className={styles.header}>
      <button className={styles.logo}><img src="/img/logo.png" alt="logo"/></button>
      <input className={styles.search__keyword} type="search" onKeyDown={(e) => {
        if (e.key === 'Enter') onSearch(e.target.value)
      }}/>
      <i className="icon--search"></i>
      <div className={styles.user}>
        <button className={styles.user__profile}></button>
      </div>
    </header>
  );
}

export default Header;