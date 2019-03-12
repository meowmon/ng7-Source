import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  players: Player[] = [
  { id: 1, name: 'Zoro', age: 24 },
  { id: 2, name: 'Nico Robin' , age: 23 },
  { id: 3, name: 'Luffy' , age: 12},
  { id: 4, name: 'Ussop' , age: 34},
  { id: 5, name: 'Sanji' ,age:23},
  ];
  maxid = 5;  
  newPlayerForm: FormGroup;

  constructor(private formBuilder:FormBuilder) { }
  chosen= false;
  ngOnInit() {
    this.newPlayerForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
    });
  }
  get player() {return this.newPlayerForm.controls}
  chosenOne: Player;
  gothim=false;
  Clicked(player : Player){
    this.chosenOne = player;
    this.gothim=true;
    this.chosen = true;
  }
  add(){
  this.players.push({id: this.maxid++,name:this.player.name.value, age: this.player.age.value})
   if (this.newPlayerForm.invalid) {
      return;
    }
  }
  Delete (player: Player){
    this.players.splice(player.id-1,1)
  }
}


export class Player {
  id: number;
  name: string;
  age: number;
}
