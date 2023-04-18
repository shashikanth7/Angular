import { Component } from '@angular/core';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private bottomSheet: MatBottomSheet){}
  openSheet(){
    this.bottomSheet.open(BottomsheetComponent);
}}
