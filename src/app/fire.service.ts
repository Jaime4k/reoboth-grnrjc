import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FireService {

  constructor(private bd: AngularFireDatabase) { }

  obt_lst (ruta: string): Observable<any[]> {

    let rm: AngularFireList<any[]> = this.bd.list('rt/sft' + ruta);

    return rm.snapshotChanges().map(cgs => {
      return cgs.map(c => ({key: c.payload.key, ...c.payload.val()}) );
    });
  }

  agr (ruta: string, objeto: any): void{
    
    this.bd.list('rt/sft/' + ruta).push(objeto);
  }

  agregar_inicial (ruta: string): void{

    let obj = {
              "titulo": "AccesoFacil",
              "cabecera": "",              
              "icono": {
                "tipo": "url",
                "fuente":""
                      },
              "caracteristicas": [
                  {
                    "titulo": "Bases de Datos",
                    "cabecera": "",
                    "icono": {
                      "tipo": "svg",
                      "fuente":""
                      }
                  },

                  {
                    "titulo": "Tablas de Datos",
                    "cabecera": "",
                    "icono": {
                      "tipo": "svg",
                      "fuente":""
                      }
                  },

                  {
                    "titulo": "Controles",
                    "cabecera": "",
                    "icono": {
                      "tipo": "svg",
                      "fuente":""
                      }
                  },

                  {
                    "titulo": "Funciones",
                    "cabecera": "",
                    "icono": {
                      "tipo": "svg",
                      "fuente":""
                      }
                  }
                ]
              }

    this.bd.list('rt/sft/' + ruta).push(obj);
  }
}