export interface VehiculoAPI {
  patente:          string;
  dvPatente:        null;
  modeloVehiculoId: string;
  modeloVehiculo:   ModeloVehiculo;
  anio:             number;
  numeroMotor:      string;
  fechaCreacion:    Date;
  propietarioId:    string;
  propietario:      Propietario;
}

export interface ModeloVehiculo {
  id:              string;
  fechaCreacion:   Date;
  tipoVehiculoId:  string;
  marcaVehiculoId: string;
  marcaVehiculo:   Vehiculo;
  tipoVehiculo:    Vehiculo;
  nombre:          string;
  estado:          boolean;
}

export interface Vehiculo {
  id:                     string;
  nombre:                 string;
  estado:                 boolean;
  convenioTipoVehiculos?: null;
}

export interface Propietario {
  id:              string;
  rut:             string;
  dv:              string;
  nombre:          string;
  apellidoPaterno: null;
  apellidoMaterno: null;
  email:           null;
  telefono:        null;
  direccion:       null;
  regionId:        null;
  comunaId:        null;
}