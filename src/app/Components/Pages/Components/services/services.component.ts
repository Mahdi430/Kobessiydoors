import { Component } from '@angular/core';
import { ImageItem } from '../../../../Modelimage/Image.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,
    FormsModule ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  images: ImageItem[] = [];
  price: number = 0;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images.push({
          url: e.target.result,
          price: this.price
        });
        this.price = 0;
      };
      reader.readAsDataURL(file);
    }
  }

  addImage(event: any) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }
}

