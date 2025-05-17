import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-listado',
  standalone: false,
  templateUrl: './producto-listado.component.html',
  
})
export class ProductoListadoComponent {
  producto: Producto[];

  constructor(private productoServicio: ProductoService, 
    private enrutador: Router){}

  ngOnInit(){
    //cargar los productos
    this.ObtenerProductos();
  }

  private ObtenerProductos(){
    this.productoServicio.obtenerProductosLista().subscribe(
      (
        datos =>{
          this.producto = datos;
        }
      )
    )
  }

  editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id])

  }

  eliminarProducto(id: number){
    if(confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoServicio.eliminarProducto(id).subscribe({
        next: () => this.ObtenerProductos(),
        error: (error) => console.log(error)
      });
    }
  }

}
