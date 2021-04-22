import DateFnsUtils from "@date-io/date-fns";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";

function CalculadoraInflacionContable() {
  const [juris, setJuris] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
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
  }));
  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event) => {
    setJuris(event.target.value);
  };

  const handleCalcular = (event) => {
    console.log(event);
  };

  return (
    <Container>
      <form noValidate autoComplete="off">
        <Typography variant="h6" color="primary">
          Calculadora ajuste por inflación contable
        </Typography>
        <Grid container justify="space-around">
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <TextField
                id="standard-password-input"
                label="$ Ingrese importe"
                type="number"
                autoComplete="current-password"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container justify="space-around" className={classes.resultGrid}>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Origen"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <Typography variant="subtitle2">
                  IPC Nacional empalmado con el IPIM: 385,8826
                </Typography>
              </MuiPickersUtilsProvider>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Destino"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <Typography variant="subtitle2">
                  IPC Nacional empalmado con el IPIM: 7,4671
                </Typography>
              </MuiPickersUtilsProvider>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCalcular}
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
          <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary">
              nuevo cálculo
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary">
              historial de cálculos
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CalculadoraInflacionContable;
