import { Component, OnInit, Input } from "@angular/core";
import * as JWT from "jwt-decode";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setUser();
  }

  setUser() {
    if (localStorage.getItem("access_token")) {
      this.isAuthenticated = true;
    }
  }

  logout() {
    localStorage.removeItem("access_token");
    this.router.navigate(["/"]);
  }
}
