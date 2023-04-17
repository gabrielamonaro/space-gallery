import Search from './Search.png'
import Logo from './Logo.png'
import './style.css'

const Header = () => {
    return (
        <header className='cabecalho'>
            <img src={Logo} alt="Logo do Alura Space"/>
            <div className='cabecalho__container '>
                <input type="text" placeholder="O que você procura?"/>
                <img src={Search} alt="ícone de lupa" />
            </div>
        </header>
        )
}

export default Header