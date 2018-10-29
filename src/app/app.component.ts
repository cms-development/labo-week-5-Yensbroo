import { Component } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";
import * as JWT from "jwt-decode";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "steve-tielens";

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}
}
