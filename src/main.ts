import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // For animations
import { CommonModule } from '@angular/common';  // CommonModule for directives like ngIf, ngFor

// Bootstrap the app without the imports in ApplicationConfig
bootstrapApplication(AppComponent, {
  providers: [],  // Add any required providers here
})
  .catch((err) => console.error(err));
