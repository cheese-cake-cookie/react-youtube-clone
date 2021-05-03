import styles from './header.module.css';

function Header(props) {
  const {handleSearch} = props;

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#"><img src="/img/logo.png" /></a>
      <input className={styles.search__keyword} type="search" onKeyDown={handleSearch}/>
      <i className="icon--search"></i>
      <div className={styles.user}>
        <a className={styles.user__profile} href="#"></a>
      </div>
    </header>
  );
}

export default Header;