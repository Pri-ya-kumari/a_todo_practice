import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
list:any[]=[];
  addtask(item:string){
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list)
  }

  remove(id:number){
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id);

  }

}
