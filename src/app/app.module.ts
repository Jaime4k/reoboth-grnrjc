import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ContenedorComponent } from './contenedor/contenedor.component';
import { SecSoftwareComponent } from './sec-software/sec-software.component';
import { CteAppComponent } from './cte-app/cte-app.component';
import { CteFreComponent } from './cte-fre/cte-fre.component';
import { FireService } from './fire.service';

const config = {
    apiKey: "AIzaSyCEAGTqaHSZT6f269b4F5BuNNzAKNmEpG0",
    authDomain: "prueba-705da.firebaseapp.com",
    databaseURL: "https://prueba-705da.firebaseio.com",
    projectId: "prueba-705da",
    storageBucket: "prueba-705da.appspot.com",
    messagingSenderId: "156093223923",
    appId: "1:156093223923:web:d0f301e5e666a56f"
  };

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  AngularFireModule.initializeApp(config),
                  AngularFireDatabaseModule ],
  declarations: [ ContenedorComponent, SecSoftwareComponent, CteAppComponent, CteFreComponent ],
  bootstrap:    [ ContenedorComponent ],
  providers:    [ FireService ]
})

export class AppModule { }