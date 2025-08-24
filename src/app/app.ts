import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PostoListComponent } from './components/posto-list/posto-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PostoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'abastecerSalvadorApp';
}
