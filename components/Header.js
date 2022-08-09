import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>CryptoDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest crypto dev news
      </p>
    </div>
  )
}

export default Header
