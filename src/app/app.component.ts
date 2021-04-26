import { Component } from '@angular/core';

class Note {
  title:string="";
  text: string="";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note: Note = new Note();
  notes:Array<Note>=[];

   takeNote(){
     console.log(this.note);
     this.notes.push(this.note);
     this.note=new Note();
   }
}
