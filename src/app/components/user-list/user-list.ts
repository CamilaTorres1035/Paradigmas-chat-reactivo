// Componente que muestra la lista de usuarios activos en el chat
import { Component } from '@angular/core'; //Permite definir componentes
import { CommonModule } from '@angular/common'; //Proporciona directivas comunes como ngIf y ngFor
import { ChatService } from '../../../../../chat-reactivo - copia/src/app/services/chat.service'; //Importa el servicio de chat
import { Observable } from 'rxjs'; // Importa Observable para manejar flujos de datos

@Component({
  selector: 'app-user-list', // Identificador de la etiqueta del componente en HTML
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule], // Importa módulos necesarios para el componente
  templateUrl: './user-list.html', // Ruta a la plantilla HTML del componente
  styleUrls: ['./user-list.scss'] // Ruta a los estilos SCSS del componente
})
export class UserList {
  // ATRIBUTOS
  users$: Observable<string[]>; //Observable que emite la lista de usuarios activos
  currentUser: string | null; //Indica el nombre del usuario actual que está usando la aplicación
  allUsers: string[] = []; // Lista completa de usuarios en la sala de chat
  // Para el modal (No implementado)
  showAll: boolean = false;

  
  //El constructor inyecta el servicio ChatService para acceder a la lista de usuarios activos y al usuario actual
  constructor(private chatService: ChatService) {
    this.users$ = this.chatService.users$; //Asigna el observable de usuarios del servicio al atributo users$
    this.currentUser = this.chatService.getCurrentUser(); //Obtiene el nombre del usuario actual del servicio y lo asigna al atributo currentUser
    // Suscribirse para tener la lista completa en memoria
    this.users$.subscribe(users => {
      this.allUsers = users;
    });
    /*
      Aclaración:
      Suscribirse es necesario para obtener el valor actual del observable y mantener la lista actualizada.
      Tras bambalinas, esto no es más que un listener que se activa cada vez que hay un cambio en la lista de usuarios.
      Al activarse, este emite el nuevo valor (la lista actualizada) y se ejecuta la función que actualiza allUsers.
      La función es una función flecha que recibe el nuevo valor (users) y lo asigna a allUsers.
    */
  }

  //Este método permite ver la lista completa de usuarios en un modal (no implementado)
  openAllUsers() {
    this.showAll = true;
  }
  closeAllUsers() {
    this.showAll = false;
  }
}
