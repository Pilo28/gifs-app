import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTag')
  public tagInput!:ElementRef<HTMLInputElement>

  searchTag(){
    const newTag = this.tagInput.nativeElement.value
    console.log({newTag})
  }
}
  