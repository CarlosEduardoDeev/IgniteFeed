import styles from '../Header/Header.module.css'

import igniteLogo from '../../Assets/ignite-logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
       <img src={igniteLogo}/>
        </header>
    )
}