import { Paper, Typography,  Button, CssBaseline, TextField, Grid, Avatar, Link, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" target="_blank" href="https://www.linkedin.com/in/carlos-viscovicce/">
          Carlos Viscovicce
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: localStorage.getItem("background"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      marginTop: '40%',
      marginLeft: 50,
      marginRight: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      marginTop: 10,
      width: '100%',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
      },
    submit: {
      width: '99%',
      marginTop: 10,
      marginRight: 50,
    },
  }));

 const Formulario = ({ atual }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" style={{ height: '100vh' }} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8} className={classes.image} />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <AccessibleForwardIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">
            Realizar login de usuario
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario/Email"
              name="usuario"
              autoComplete="user"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
            />
            <Grid container>
              <Grid item xs>
                <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Login
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={ atual }
                >
                Alterar tema
                </Button>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Formulario