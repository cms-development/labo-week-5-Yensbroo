import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ArticleModule } from "./articles/article.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ArticleModule, AuthenticationModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
