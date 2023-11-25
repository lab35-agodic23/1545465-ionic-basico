import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Foto } from 'src/foto.model';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  

  constructor(public photoService: PhotoService) { }
  public fotos: Foto[] = this.photoService.fotos;
  ngOnInit() {}


  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
