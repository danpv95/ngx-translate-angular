import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor( private translate: TranslateService ) { 
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
