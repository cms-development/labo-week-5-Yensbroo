import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ArticleModule } from "./articles/article.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { CoreModule } from "./core/core.module";
import { STHttpInterceptor } from "./services/http.interceptor";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArticleModule,
    AuthenticationModule,
    CoreModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: STHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
