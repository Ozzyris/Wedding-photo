import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// =============================================================================
// VIEWS
// =============================================================================
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PhotoComponent } from './views/photo/photo.component';
import { CameraComponent } from './views/camera/camera.component';

// =============================================================================
// COMPONENTS
// =============================================================================

// =============================================================================
// DIRECTIVES
// =============================================================================

// =============================================================================
// PIPES
// =============================================================================

// =============================================================================
// EXTERNAL PACKAGE
// =============================================================================

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		PhotoComponent,
		CameraComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule{}
