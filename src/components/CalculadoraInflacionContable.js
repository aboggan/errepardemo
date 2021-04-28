import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import React from "react";

function CalculadoraInflacionContable() {
  const [juris, setJuris] = React.useState("");
  const [mesOrigen, setMesOrigen] = React.useState(1);
  const [mesDestino, setMesDestino] = React.useState(1);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      marginBottom: theme.spacing(4),
      minWidth: 120,
    },
    select: {
      minHeight: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
    resultado: {
      marginTop: 20,
      marginBottom: 20,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 15,
      backgroundColor: "#a9f2d6",
      fontWeight: "bold",
    },
    resultGrid: {
      "& button": {
        margin: "15px 0",
      },
    },
    calcularBtn: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2)
    },
    fechaLabel: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
  }));
  const classes = useStyles();

  const handleChange = (event) => {
    setJuris(event.target.value);
  };

  const handleCalcular = (event) => {
    console.log(event);
  };

  const handleMesOrigen = (event) => {
    setMesOrigen(event.target.value)
  }

  const constHandleMesDestino = (event) => {
    setMesDestino(event.target.value)
  }

  return (
    <Container>
      <form noValidate autoComplete="off">
        <Typography variant="h5" color="primary" gutterBottom={true}>
          Calculadora ajuste por inflación contable
        </Typography>
        <Grid container justify="space-around" paddingLeft={0} md={6}>
          <Grid item xs={12} md={12}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                Seleccione la juridicción
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={juris}
                onChange={handleChange}
              >
                <MenuItem value={"Buenos Aires"}>Buenos Aires</MenuItem>
                <MenuItem value={"Cordoba"}>Córdoba</MenuItem>
                <MenuItem value={"Mendoza"}>Mendoza</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <TextField
                id="standard-password-input"
                label="$ Ingrese importe"
                type="tel"
                autoComplete="current-password"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container justify="space-between" md={6}>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom={true} className={classes.fechaLabel}>
              Origen
            </Typography>
          </Grid>
          <Grid item xs={7} >
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel id="demo-simple-select-outlined-label">
                Mes
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={mesOrigen}
                onChange={handleMesOrigen}
                label="Mes"
              >
                <MenuItem value={1}>Enero</MenuItem>
                <MenuItem value={2}>Febrero</MenuItem>
                <MenuItem value={3}>Marzo</MenuItem>
                <MenuItem value={4}>Abril</MenuItem>
                <MenuItem value={5}>Mayo</MenuItem>
                <MenuItem value={6}>Junio</MenuItem>
                <MenuItem value={7}>Julio</MenuItem>
                <MenuItem value={8}>Agosto</MenuItem>
                <MenuItem value={9}>Septiembre</MenuItem>
                <MenuItem value={10}>Octubre</MenuItem>
                <MenuItem value={11}>Noviembre</MenuItem>
                <MenuItem value={12}>Diciembre</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} >
            <TextField
              id="outlined-basic"
              label="Año"
              variant="outlined"
              type="tel"
              inputProps={{
                maxLength: 4,
              }}
            />
          </Grid>

          <Grid item xs={12} gutterBottom={true}>
            <Typography variant="subtitle2" gutterBottom={true}>
              IPC Nacional empalmado con el IPIM: 385,8826
            </Typography>
          </Grid>






          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom={true} className={classes.fechaLabel}>
              Destino
            </Typography>
          </Grid>
          <Grid item xs={7} >
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel id="demo-simple-select-outlined-label">
                Mes
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={mesDestino}
                onChange={constHandleMesDestino}
                label="Mes"
              >
                <MenuItem value={1}>Enero</MenuItem>
                <MenuItem value={2}>Febrero</MenuItem>
                <MenuItem value={3}>Marzo</MenuItem>
                <MenuItem value={4}>Abril</MenuItem>
                <MenuItem value={5}>Mayo</MenuItem>
                <MenuItem value={6}>Junio</MenuItem>
                <MenuItem value={7}>Julio</MenuItem>
                <MenuItem value={8}>Agosto</MenuItem>
                <MenuItem value={9}>Septiembre</MenuItem>
                <MenuItem value={10}>Octubre</MenuItem>
                <MenuItem value={11}>Noviembre</MenuItem>
                <MenuItem value={12}>Diciembre</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} >
            <TextField
              id="outlined-basic"
              label="Año"
              variant="outlined"
              type="tel"
              inputProps={{
                maxLength: 4,
              }}
            />
          </Grid>








          <Grid item xs={12} gutterBottom={true}>
            <Typography variant="subtitle2" gutterBottom={true}>
              IPC Nacional empalmado con el IPIM: 385,8826
            </Typography>
          </Grid>




          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCalcular}
              fullWidth={true}
              className={classes.calcularBtn}
            >
              calcular
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.resultado}>
              <Grid container>
                <Grid item xs={6}>
                  Importe
                </Grid>
                <Grid item xs={6}>
                  $ 70.000.000,00
                </Grid>
                <Grid item xs={6}>
                  Importe Ajustado
                </Grid>
                <Grid item xs={6}>
                  $ 263.962.221,01
                </Grid>
                <Grid item xs={6}>
                  Ajuste
                </Grid>
                <Grid item xs={6}>
                  $ 193.962.221,01
                </Grid>
                <Grid item xs={6}>
                  Coeficiente
                </Grid>
                <Grid item xs={6}>
                  3,7709
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          
          <Grid item xs={12}>
          <Divider variant="middle" />
            <Button variant="outlined" color="primary" fullWidth={true}>
              nuevo cálculo
            </Button>
            
          </Grid>
          
          <Grid item xs={12}>
          <Divider variant="middle" />
            <Button variant="text" color="primary" fullWidth={true}>
              historial de cálculos
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CalculadoraInflacionContable;
