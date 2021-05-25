import { createMuiTheme } from '@material-ui/core/styles'

const fundoEscuro = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#354f52',
        },
        background: {
          default: '#cad2c5',
          paper: '#cad2c5',
        },
      },
}))

const fundoClaro = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#264653',
        },
        background: {
          default: '#2a9d8f',
          paper: '#2a9d8f',
        }

      },    

}))



export { fundoEscuro, fundoClaro }