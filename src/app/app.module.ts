import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';

import { EgresadoNewComponent } from './components/egresado-new/egresado-new.component';
import { EgresadoEditComponent } from './components/egresado-edit/egresado-edit.component';
import { EgresadoDetailComponent } from './components/egresado-detail/egresado-detail.component';
import { AdminNewComponent } from './components/admin-new/admin-new.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminDetailComponent } from './components/admin-detail/admin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,   
    EgresadoNewComponent,
    EgresadoEditComponent,
    EgresadoDetailComponent,
    AdminNewComponent,
    AdminEditComponent,
    AdminDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
