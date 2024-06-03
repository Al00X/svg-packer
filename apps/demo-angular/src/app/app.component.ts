import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon';

@Component({
  standalone: true,
  imports: [RouterModule, IconComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
