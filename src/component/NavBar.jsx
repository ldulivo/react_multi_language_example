import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
/* className={(navData) => (navData.isActive ? 'active' : '')} */

const NavBar = () => {
  const { t, i18n } = useTranslation('global')
  
  return (
    <nav className={styles.NavBar}>
      <NavLink
        className={ (navData) => (navData.isActive ? styles.active : '') }
        to='/home'
      >
        {t('global.home')}
      </NavLink>
      <NavLink
        className={ (navData) => (navData.isActive ? styles.active : '') }
        to='aboutme'
      >
        {t('global.aboutme')}
      </NavLink>
      <NavLink
        className={ (navData) => (navData.isActive ? styles.active : '') }
        to='contactme'
      >
        {t('global.contactme')}
      </NavLink>
      <div className={styles.button}>
        <button
          disabled={i18n.resolvedLanguage === 'es'}
          onClick={() => i18n.changeLanguage('es')}>
          Es
        </button>
        <button
          disabled={i18n.resolvedLanguage === 'en'}
          onClick={() => i18n.changeLanguage('en')}>
          En
        </button>
      </div>

      <div className={ `${styles.bandera} ${i18n.resolvedLanguage === 'es' ? styles.spanish : ''}` }></div>
    </nav>
  );
}

export default NavBar;