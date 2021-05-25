import { useState } from 'react'
import Formulario from './formulario'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { fundoEscuro, fundoClaro} from './temas'
import aranha from "./image/aranha.jpg";
import witcher from "./image/witcher.jpg";

const Atividade = () => {

    const [ atual, setTema ] = useState( fundoClaro )
    const [ claro, setClaro ] = useState( true )

    const mudarTema = () => {
        if (claro) {
            setTema( fundoEscuro )
            localStorage.setItem("background",'url('+ witcher+')')
        }
        else{
            setTema( fundoClaro )
            localStorage.setItem("background",'url('+ aranha+')')
        }

        setClaro( !claro )
    }
   
        

    return (
        <ThemeProvider theme={ atual }>
            <CssBaseline />
            <Formulario atual={ mudarTema }/>            
        </ThemeProvider>
    )
}

export default Atividade