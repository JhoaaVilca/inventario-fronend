import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlBackend = "http://localhost:8080/inventario-app/productos";


  constructor(private clienteHttp: HttpClient) { }

  obtenerProductosLista():Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.urlBackend);
  }

  agregarProductos(producto: Producto): Observable<Object>{
    return this.clienteHttp.post(this.urlBackend, producto);
  }

  obtenerProductosporId(id: number){
    return this.clienteHttp.get<Producto>(`${this.urlBackend}/${id}`);
  }

  editarProducto(id: number, producto: Producto): Observable<object>{
    return this.clienteHttp.put(`${this.urlBackend}/${id}`, producto);
  }
}

