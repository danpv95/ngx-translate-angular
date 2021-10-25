import { Component } from '@angular/core';
import { TraductorService } from './services/traductor.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  langs: string[] = [];

  constructor(private translate: TranslateService){

    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(["es", "en"]);

    this.langs = this.translate.getLangs();

    translate.get(this.langs).subscribe(res=>{
      console.log(res);
    });
  }

  camnbiarLang(lang: string){
    this.translate.use(lang);
  }
}
