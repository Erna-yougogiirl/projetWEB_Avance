import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-session-itel-list',
  templateUrl: './session-itel-list.component.html',
  styleUrls: ['./session-itel-list.component.css']
})
export class SessionItelListComponent implements OnInit {
  
  sessionItems =[
    { id : 1, 
      nom :'Web',
      track : 'MEAN STACK',
      date : new Date('2020-06-13'),
      duree :3,
      local :'lyon',
      participants :0,
      isCompleted : false
    },
    { id:1,
      nom:'mobile',
      track: 'MEAN STACK',
      date: new Date('2020-06-13'),
      duree:3,
      local:'lyon',
      participants:0,
      isCompleted : false
    },
    {
      id:1,
    nom:'Formation Web',
    track: 'MEAN STACK',
    date: new Date('2020-06-13'),
    duree:3,
    local:'lyon',
    participants:0,
    isCompleted : false
    }
  ];
 
  constructor() { }

  ngOnInit(): void {
    
  }
  

}
