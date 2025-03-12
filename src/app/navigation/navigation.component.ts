import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, NgbModule ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent implements OnInit {
    title = 'Home';
    isCollapsed = true;
    ngOnInit() {
    }
}