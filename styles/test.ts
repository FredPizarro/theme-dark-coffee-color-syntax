import {Component} from 'angular/core';

@Component({  selector: 'sky-rider' })

export class testComponent{
  title: string;

TitleForm : FormControl = new FormControl();

  if(this.title == "skyrider"){
    return "valores";

  }else{
    alert("sky rider");
  }
}
