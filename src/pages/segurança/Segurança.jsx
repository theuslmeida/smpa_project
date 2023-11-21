import NavBar from "../../componentes/navbar/nav"
import Formulario from "../../componentes/formulario/formulario"
import NavBarSeg from "../../componentes/navbar/NavSeg"

export default function Segurança(){
return(
    <>
    <NavBarSeg></NavBarSeg>
    <div className="bg-[#EBEBEB] h-full"> 
        <Formulario/>
    </div>
        
    </>
)
}