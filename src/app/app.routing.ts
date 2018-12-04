import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { EgresadoNewComponent } from './components/egresado-new/egresado-new.component';
import { EgresadoEditComponent } from './components/egresado-edit/egresado-edit.component';
import { EgresadoDetailComponent } from './components/egresado-detail/egresado-detail.component';
import { AdminNewComponent } from './components/admin-new/admin-new.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminDetailComponent } from './components/admin-detail/admin-detail.component';


const appRoutes: Routes = [
	{path:'', component: DefaultComponent},
	{path:'inicio', component: DefaultComponent},
	{path:'menu', component: LoginComponent},
	{path:'login', component: LoginComponent},
	{path:'logout/:sure', component: LoginComponent},
	{path:'registro', component: RegisterComponent},
	{path:'crear-egresado', component: EgresadoNewComponent},
	{path:'editar-egresado/:id', component: EgresadoEditComponent},
	{path:'usuario/:id', component: EgresadoDetailComponent},
	{path:'crear-admin', component: AdminNewComponent},
	{path:'editar-admin/:id', component: AdminEditComponent},
	{path:'admin/:id', component: AdminDetailComponent},
	{path:'**', component: DefaultComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);