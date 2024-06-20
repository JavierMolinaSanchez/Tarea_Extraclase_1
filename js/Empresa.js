class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  
  class Empleado extends Persona {
    constructor(nombre, edad, puesto, salario) {
      super(nombre, edad);
      this.puesto = puesto;
      this.salario = salario;
    }
  }
  
  let empleados = [];
  
  function agregarEmpleado() {    
    let nombre = prompt("Ingrese el nombre del empleado:");
    let noEsletra = true;
    let noEsNum = true;
    if (!/^[a-zA-Z]+/.test(nombre)) {
      noEsletra = false;      
    }
    let edad = prompt("Ingrese la edad del empleado:");   
    let salario = prompt("Ingrese el salario del empleado:");
    let puesto = prompt("Ingrese el número de puesto del empleado:");
    if (isNaN(edad) || isNaN(salario) || isNaN(puesto) ) {
      noEsNum = false;
    }    
    if (noEsNum && noEsletra){
      let empleadoExistente = empleados.find(empleado => empleado.nombre === nombre);
    if (empleadoExistente) {
      console.log("Empleado no agregado correctamente. Ya existe un empleado con ese nombre.\n");
    } else {
      let empleado = new Empleado(nombre, edad, puesto, salario);      
      empleados.push(empleado);
      console.log("Empleado agregado correctamente.\n");
    }
    }
    else if(!noEsletra){
      console.log("Empleado no agregado correctamente. El nombre solo puede contener letras.\n");
    }
    else if(!noEsNum){
      console.log("Empleado no agregado correctamente. Solo el nombre solo puede contener letras.\n");
    }
    
  }
  
  function actualizarPuesto() {
    if (empleados.length == 0){
      console.log("No hay empleados\n");      
    }else{
    let nombre = prompt("Ingrese el nombre del empleado cuyo puesto desea actualizar:");  
    let empleadoEncontrado = empleados.find(empleado => empleado.nombre === nombre ); 
        
    if (empleadoEncontrado) {
      let nuevoPuesto = prompt("Ingrese el nuevo número de puesto del empleado:");
      empleadoEncontrado.puesto = nuevoPuesto;
      console.log("Puesto actualizado correctamente.\n");
    } else {
      console.log("Empleado no encontrado.\n");
    }
   }
  }
  
  function listarEmpleados() {
    console.log("Lista de empleados:\n");
    if (empleados.length == 0){
      console.log("No hay empleados\n");      
    }else{
      empleados.forEach(empleado => {
        console.log(`Nombre: ${empleado.nombre}, Edad: ${empleado.edad}, Puesto: ${empleado.puesto}, Salario: ${empleado.salario}`);      
      });
    }
    
    console.log("\n");
  }
  
  function mostrarMenu() {   
    console.log("1. Agregar empleado");
    console.log("2. Actualizar número de puesto de empleado");
    console.log("3. Listar empleados");   
    console.log("4. Salir\n");
  }
  
  let opcion;
  do {
    mostrarMenu();
    opcion = prompt("1. Agregar empleado.\n2. Actualizar puesto de empleado.\n3. Listar empleados.\n\nSeleccione una opción (1-4):");
    switch (opcion) {
      case "1":
        agregarEmpleado();
        break;
      case "2":
        actualizarPuesto();
        break;
      case "3":
        listarEmpleados();
        break;
      case "4":
        console.log("Saliendo del programa.");
        alert("Saliendo del programa.");
        break;
      default:
        console.log("Opción no válida.");
        alert("Opción no válida.");
        break;
    }
  } while (opcion !== "4");
  