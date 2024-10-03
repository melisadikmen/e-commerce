import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SearchPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';
}
