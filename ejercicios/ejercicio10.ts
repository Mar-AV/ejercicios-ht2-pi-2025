enum Prioridad {
    ALTA = '🔴',
    MEDIA = '🟡',
    BAJA = '🔵'
}

enum EstadoTarea {
    PENDIENTE = 'Pendiente',
    EN_PROGRESO = 'En Progreso',
    FINALIZADA = 'Finalizada'
}

interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
    prioridad: Prioridad; 
    estado: EstadoTarea;  
}

class GestorTareas {
    private tareas: Tarea[] = [];

    agregarTarea(titulo: string, prioridad: Prioridad) {
        const nuevaTarea: Tarea = {
            id: Date.now(), 
            titulo: titulo,
            completada: false, 
            prioridad: prioridad, 
            estado: EstadoTarea.PENDIENTE 
        };
        this.tareas.push(nuevaTarea); 
        console.log(`Tarea agregada: "${titulo}" con prioridad ${prioridad}`);
    }

    listarTareas() {
        console.log("\n--- Lista de Tareas Actual ---");
        if (this.tareas.length === 0) {
            console.log("No hay tareas pendientes.");
            return;
        }

        this.tareas.forEach(tarea => {
        
            console.log(`[${tarea.prioridad}] ${tarea.titulo} - Estado: ${tarea.estado}${tarea.completada ? ' (Completada)' : ''}`);
        });
    }

   
}

const gestor = new GestorTareas();

gestor.agregarTarea('Estudiar para el examen final', Prioridad.ALTA);
gestor.agregarTarea('Revisar correo electrónico', Prioridad.MEDIA);
gestor.agregarTarea('Comprar los ingredientes para la cena', Prioridad.BAJA);
gestor.agregarTarea('Llamar al banco', Prioridad.ALTA); 

gestor.listarTareas();

