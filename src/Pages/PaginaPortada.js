import React, {useState} from 'react'
import NavbarGeneral from '../Components/NavbarGeneral'
import './CSS/PaginaPortada.css'

import Arcanine from '../Images/Arcanine.jpg'
import Altaria from '../Images/Altaria.jpg'
import Aerodactyl from '../Images/Aerodactyl.jpg'
import Aggron from '../Images/Aggron.jpg'
import Groudon from '../Images/groudon.jpg'
import Ampharos from '../Images/Ampharos.jpg'
import Articuno from '../Images/Articuno.jpg'
import Blastoise from '../Images/Blastoise.jpg'
import Blaziken from '../Images/Blaziken.jpg'
import Charizard from '../Images/Charizard.jpg'
import Cloister from '../Images/Cloister.jpg'
import Crobat from '../Images/Crobat.jpg'
import Deoxys from '../Images/Deoxys2.jpg'
import Dodrio from '../Images/Dodrio.jpg'
import Donphan from '../Images/Donphan2.jpg'
import Dragonite from '../Images/dragonite.jpg'
import Dugtrio from '../Images/Dugtrio.jpg'
import Dusclops from '../Images/Dusclops.jpg'
import Electivire from '../Images/Electivire.jpg'
import Entei from '../Images/Entei.jpg'
import Feraligator from '../Images/Feraligator.jpg'
import Flygon from '../Images/Flygon.jpg'
import Gengar from '../Images/Gengar.jpg'
import Golem from '../Images/Golem.jpg'
import Gyarados from '../Images/Gyarados.jpg'
import Hariyama from '../Images/Hariyama.jpg'
import Lugia from '../Images/Lugia.jpg'
import Machamp from '../Images/Machamp.jpg'
import Mewtwo from '../Images/Mewtwo.jpg'
import Raikou from '../Images/Raikou.jpg'



import Logo from '../Images/logo.jpg'
import FiltroPortada from '../Components/FiltroPortada'




const PaginaPortada = () => {

    const [filtro, setFiltro] = useState(false)

    const handleClickBoton = ()=>
    {
        setFiltro(!filtro)
    }

    const handleClick = ()=>
    {
        
    }



    return (
        <div className="gridPortada">
            <div>
                <NavbarGeneral />
            </div>
            <div className="gridSEparaPortada">
                <div className="GridseparaTitPortada">
                    <div className="tamañoMensajeBienvenida">
                        Bienvenido Juan
                    </div>
                    <div className="tamñoTii">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="estilodFiltroPortada">
                        <FiltroPortada
                        filtro = {filtro}
                        handleClick={handleClick}
                        handleClickBoton={handleClickBoton}
                        />
                    </div>
                </div>
                <div className="mosaico">
                    <div className="tamañoImagenMosaico">
                        <img src={Arcanine} alt="arcanine" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Altaria} alt="altaria" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Aerodactyl} alt="Aerodactyl" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Aggron} alt="Aggron" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Groudon} alt="Groudon" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Ampharos} alt="Ampharos" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Articuno} alt="Articuno" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Blastoise} alt="Blastoise" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Blaziken} alt="Blaziken" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Charizard} alt="Charizard" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Cloister} alt="Cloister" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Crobat} alt="Crobat" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Deoxys} alt="Deoxys" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Dodrio} alt="Dodrio" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Donphan} alt="Donphan" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Dragonite} alt="Dragonite" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Dugtrio} alt="Dugtrio" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Dusclops} alt="Dusclops" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Electivire} alt="Electivire" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Entei} alt="Entei" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Feraligator} alt="Feraligator" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Flygon} alt="Flygon" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Gengar} alt="Gengar" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Golem} alt="Golem" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Gyarados} alt="Gyarados" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Hariyama} alt="Hariyama" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Lugia} alt="Lugia" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Machamp} alt="Machamp" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Mewtwo} alt="Mewtwo" />
                    </div>
                    <div className="tamañoImagenMosaico">
                        <img src={Raikou} alt="Raikou" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaPortada
