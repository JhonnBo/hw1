import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';
import { JobsComponent } from './jobs/jobs.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotoComponent, JobsComponent, KnowledgeComponent, AboutComponent, LinksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw1';
}
