import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { User } from "../../models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  login(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      client_id: "68d2bd6b-70cd-4d81-a5b4-6c4cf413f3b7",
      client_secret: "secret",
      grant_type: "password"
    };
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    this.authService.login(formData).subscribe(res => {
      console.log(res);
      localStorage.setItem("access_token", `Bearer ${res.access_token}`);
      this.router.navigate(["/"]);
    });
  }
}
