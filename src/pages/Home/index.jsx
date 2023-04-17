import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import banner from '../../assets/images/foto-destaque.png'
import './style.css'
import Galeria from "../../Components/Galeria";

export default function Home()
{
    return(
    <>
        <Header/>

        <main>
            <Menu></Menu>

            <section className="principal">
                <div className="container-imagem">
                    <img src={banner} alt="Foto da terra vista do espaço." />
                </div>
                    <h1> A galeria mais completa de fotos do espaço!</h1>
            </section>
        </main>

        <Galeria></Galeria>
    </>
    )
}