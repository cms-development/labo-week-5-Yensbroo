import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  login() {
    const data = {
      username: "frank",
      password: "test123",
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
    });
  }
}
