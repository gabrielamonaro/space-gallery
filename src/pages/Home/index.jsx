import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import banner from '../../assets/images/foto-destaque.png'
import './style.css'
import Galeria from "../../Components/Galeria";
import Populares from "../../Components/Populares";

export default function Home()
{
    return(
    <>
        <Header/>

        <main>
            <div className="first-section">
                <Menu></Menu>

                <section className="principal">
                    <div className="container-imagem">
                        <img src={banner} alt="Foto da terra vista do espaço." />
                    </div>
                        <h1> A galeria mais completa de fotos do espaço!</h1>
                </section>
            </div>
            <div className="second-section">
                <Galeria></Galeria>
                <Populares className="populares"></Populares>
            </div>
        
                
           
        </main>

    </>
    )
}