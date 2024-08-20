import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private GifsService:GifsService){}

  get tags(){
    return this.GifsService.tagsHistory;
  }
}
