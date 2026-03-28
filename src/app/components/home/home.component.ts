import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from "@angular/common";
import { VisionComponent } from "../vision/vision.component";
import { ServicesComponent } from "../services/services.component";
import { DifferentialComponent } from '../differential/differential.component';
import { PartnersComponent } from '../partners/partners.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, VisionComponent, ServicesComponent, DifferentialComponent, PartnersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
