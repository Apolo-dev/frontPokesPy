import React, {useState} from 'react'
import NavbarGeneral from '../Components/NavbarGeneral'
import './CSS/PaginaPortada.css'
import {useAuth} from '../contextos/AuthContext'

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

    const {usuario} = useAuth()
    console.log(usuario);

    const [filtro, setFiltro] = useState(false)

    const handleClickBoton = ()=>
    {
        setFiltro(!filtro)
    }

    const handleClick = ()=>
    {
        console.log('algo');
    }



    return (
        <div className="gridPortada">
            <div>
                <NavbarGeneral />
            </div>
            <div className="gridSEparaPortada">
                <div className="GridseparaTitPortada">
                    <div className="tama??oMensajeBienvenida">
                        Bienvenido Juan
                    </div>
                    <div className="tam??oTii">
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
                    <div className="tama??oImagenMosaico">
                        <img src={Arcanine} alt="arcanine" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Altaria} alt="altaria" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Aerodactyl} alt="Aerodactyl" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Aggron} alt="Aggron" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Groudon} alt="Groudon" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Ampharos} alt="Ampharos" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Articuno} alt="Articuno" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Blastoise} alt="Blastoise" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Blaziken} alt="Blaziken" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Charizard} alt="Charizard" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Cloister} alt="Cloister" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Crobat} alt="Crobat" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Deoxys} alt="Deoxys" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Dodrio} alt="Dodrio" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Donphan} alt="Donphan" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Dragonite} alt="Dragonite" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Dugtrio} alt="Dugtrio" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Dusclops} alt="Dusclops" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Electivire} alt="Electivire" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Entei} alt="Entei" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Feraligator} alt="Feraligator" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Flygon} alt="Flygon" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Gengar} alt="Gengar" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Golem} alt="Golem" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Gyarados} alt="Gyarados" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Hariyama} alt="Hariyama" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Lugia} alt="Lugia" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Machamp} alt="Machamp" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Mewtwo} alt="Mewtwo" />
                    </div>
                    <div className="tama??oImagenMosaico">
                        <img src={Raikou} alt="Raikou" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaPortada
