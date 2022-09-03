const nombrePizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");
const formPizzas = document.getElementById("formPizzas");
const numeroPizza = document.getElementById("idPizza");

const pizzas = [
    {
      id: 1,
      nombre: "Muzzarella",
      ingredientes: ["Queso muzarella", "Aceitunas verdes", "Orégano"],
      precio: 1000,
    },
  
    {
      id: 2,
      nombre: "Napolitana",
      ingredientes: ["Queso muzarella", "Aceitunas negras", "Tomate", "Ajo"],
      precio: 1100,
    },
  
    {
      id: 3,
      nombre: "Provolone",
      ingredientes: ["Queso muzarella", "Queso provolone", "Aceitunas verdes"],
      precio: 1100,
    },
  
    {
      id: 4,
      nombre: "Jamón y morrones",
      ingredientes: ["Queso muzarella", "Jamón", "Morrones", "Orégano"],
      precio: 1200,
    },
  
    {
      id: 5,
      nombre: "Calabresa",
      ingredientes: ["Queso muzarella", "Queso provolone", "Longaniza"],
      precio: 1300,
    },
  
    {
      id: 6,
      nombre: "Fugazzetta (porción)",
      ingredientes: ["Queso muzarella", "Jamón"],
      precio: 400,
    },
  ];
  

const comprobarPizza = () => {

    if (pizzas.some((numero) => numero.id == idPizza)) {

        let pizzaAMostrar = pizzas.find((numero) => numero.id == idPizza);

       let  precioPizzaAMostrar = pizzaAMostrar.precio;
       let  nombrePizzaAMostrar = pizzaAMostrar.nombre;
       nombrePizza.classList.remove("error");
       precioPizza.classList.remove("error");
       nombrePizza.textContent = nombrePizzaAMostrar;
       precioPizza.textContent = `$${precioPizzaAMostrar}`;

    }

    else {
        nombrePizza.classList.add("error");
        precioPizza.classList.add("error");
        nombrePizza.textContent = "No hay pizza con ese id";
        precioPizza.textContent = "0";
    }
};


const submitForm = (e) => {
    
    e.preventDefault();
    idPizza = numeroPizza.value;
    comprobarPizza();

    

}

const init = () => {
    
    formPizzas.addEventListener("submit", submitForm);
   
    
    }
    
    init();