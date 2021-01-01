import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule ,
    FormsModule ,
    MatInputModule ,
    MatButtonModule ,
    MatRadioModule,
    MatDatepickerModule ,
    MatDividerModule ,
    ReactiveFormsModule ,
  ],
  exports:[
    MatFormFieldModule ,
    FormsModule ,
    MatInputModule ,
    MatButtonModule ,
    MatRadioModule,
    MatDatepickerModule ,
    MatDividerModule ,
    ReactiveFormsModule ,
  ]
})
export class FormSetModule { }
