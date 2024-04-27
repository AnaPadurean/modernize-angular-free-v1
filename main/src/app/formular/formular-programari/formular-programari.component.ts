import { Component, NgModule } from '@angular/core';
import { FormularServiceService } from '../formular-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-formular-programari',
  standalone: true,
  templateUrl: './formular-programari.component.html',
  styleUrls: ['./formular-programari.component.scss'],
  imports: [ MatIconModule, MatPaginatorModule, MatTableModule, MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule],
})
export class FormularProgramariComponent {
  programare: any = {}; // obiect pentru stocarea datelor de programare
  constructor(private programareService: FormularServiceService) { }

  submitForm() {
    // Trimite datele de programare către serviciul backend pentru procesare și salvare
    this.programareService.saveProgramare(this.programare).subscribe(
      (response:any) => {
        // Handle success
        console.log('Programare înregistrată cu succes:', response);
        alert('Programare înregistrată cu succes!');
      },
      (error:any) => {
        // Handle error
        console.error('Eroare înregistrare programare:', error);
        alert('Eroare înregistrare programare. Vă rugăm să încercați din nou.');
      }
    );
  }

  
}
