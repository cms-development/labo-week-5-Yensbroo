import { Component } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "steve-tielens";
  isAuthenticated: Boolean = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.setUser();
    console.log(this.isAuthenticated);
  }

  setUser() {
    if (localStorage.getItem("access_token")) {
      this.isAuthenticated = true;
    }
  }
}
