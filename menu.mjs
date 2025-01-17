import { leer} from "./utilidades.mjs";
import { agregarTarea} from "./agregarTareas.mjs";
import { mostrarOp, verTarea } from "./mostrarTareas.mjs";
import { buscarPorCoincidencia } from "./buscarTarea.mjs";

export function Menu(){ 
    console.clear();
    console.log(`   
                              ╔═══════════════════════════════════╗
                              ║      [1] Ver mis tareas           ║
                              ║      [2] Buscar mis tareas        ║
                              ║      [3] Agregar una tarea        ║​
                              ║      [0] Salir                    ║​
                              ╚═══════════════════════════════════╝ `);
    opciones(leer("> "));
}

function opciones(op){

    switch(Number(op)){
        case 1:
            mostrarOp();
            verTarea();
            Menu();
            break;

        case 2:
            buscarPorCoincidencia();
            op = leer("Presione una tecla para continuar");
            Menu();
            break;

        case 3:
            agregarTarea();
            op = leer("Presione una tecla para continuar");
            Menu();
            break;

        case 0:
            console.log("Saliendo...");
            process.exit(0);
            break;

        default:
            console.log(`-OPCION NO VALIDA-`);
            op = leer("");
            Menu();
            break;
    }
}