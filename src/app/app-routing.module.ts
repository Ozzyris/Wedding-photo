import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// =============================================================================
// VIEWS
// =============================================================================
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PhotoComponent } from './views/photo/photo.component';
import { CameraComponent } from './views/camera/camera.component';

// =============================================================================
// ROUTES
// =============================================================================
const routes: Routes = [
	{ path: 'login', component: LoginComponent, data: { title: 'Wedding photo' } },
	{ path: '',   redirectTo: 'login', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent, data: { title: 'Wedding photo - dashboard' } },
	{ path: 'photo', component: PhotoComponent, data: { title: 'Wedding photo - photo' } },
	{ path: 'camera', component: CameraComponent, data: { title: 'Wedding photo - camera' } },
]


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
