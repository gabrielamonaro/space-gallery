import Search from './Search.png'
import Logo from './Logo.png'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo do Alura Space"/>
            <div>
                <input type="text" placeholder="O que você procura?"/>
                <img src={Search} alt="ícone de lupa" />
            </div>
        </header>
        )
}

export default Header