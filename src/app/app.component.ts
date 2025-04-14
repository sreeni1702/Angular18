import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from "./Components/header/header.component";
import { InterpolationComponent } from "./Components/interpolation/interpolation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, HeaderComponent, InterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true 
})
export class AppComponent {
  title = 'Angular18Core';
}
