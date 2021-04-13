import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  url:string = "http://devinp-com.umbler.net/php/";//substitui a URL do servidor local pela url do servidor online == http://devinp-com.umbler.net/php/

  constructor() { }

  getUrl(){
    return this.url;
  }
}
