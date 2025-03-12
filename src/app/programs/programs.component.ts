import { Component } from "@angular/core";

@Component({
  selector: 'app-programs',
  imports: [],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})

export class ProgramsComponent {
    public navigateToSection(section: string) {
        window.location.hash = '';
        window.location.hash = section;
  }
}