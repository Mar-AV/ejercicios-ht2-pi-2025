"use strict";

var Prioridad;
(function (Prioridad) {
    Prioridad["ALTA"] = "🔴";
    Prioridad["MEDIA"] = "🟡";
    Prioridad["BAJA"] = "🔵";
})(Prioridad || (Prioridad = {}));
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["PENDIENTE"] = "Pendiente";
    EstadoTarea["EN_PROGRESO"] = "En Progreso";
    EstadoTarea["FINALIZADA"] = "Finalizada";
})(EstadoTarea || (EstadoTarea = {}));
class GestorTareas {
    constructor() {
        this.tareas = [];
      
    }
  
    agregarTarea(titulo, prioridad) {
        const nuevaTarea = {
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

