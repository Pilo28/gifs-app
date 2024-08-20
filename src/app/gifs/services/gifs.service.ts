import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  gifList:Gif[] = []

  private _tagsHistory:string[] = []
  private apiKey = environment.apiKey;
  private urlBase = environment.urlBase;

  private http = inject(HttpClient);

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistoy(tag:string){
    tag = tag.toLocaleLowerCase();

    if ( this._tagsHistory.includes( tag ) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }
    this._tagsHistory.unshift( tag );
    this._tagsHistory = this.tagsHistory.splice(0,10);
  }
  searchTag(tag:string):void{
    if(tag.length === 0) return
    this.organizeHistoy(tag)

    const params = {
      api_key: this.apiKey,
      q: tag,
      limit: 10
    }

    this.http.get<SearchResponse>(`${this.urlBase}/search`, {params})
      .subscribe(response => {
        this.gifList = response.data
      })
  }
}
