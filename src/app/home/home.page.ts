import { Component } from '@angular/core';

@Component({


  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [{
    itemName : 'Programando',
    itemDeuDate: '01-11-23',
    itemPriority: 'Alta',
    itemCategory: 'Proyectos'
  },
  {
    itemName : 'Diseñando',
    itemDeuDate: '02-11-23',
    itemPriority: 'Baja',
    itemCategory: 'Diseños'
  },
  {
    itemName : 'Comprando',
    itemDeuDate: '03-11-23',
    itemPriority: 'Intermedia',
    itemCategory: 'Personales'
  },
  {
    itemName : 'Ejercitando',
    itemDeuDate: '04-11-23',
    itemPriority: 'Alta',
    itemCategory: 'Personales'
  }

]
  today : number = Date.now();

    
    
    constructor() {}

}

  
  
  
    








