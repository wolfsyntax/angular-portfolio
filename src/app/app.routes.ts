import { Routes } from '@angular/router';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component'
import { SettingsComponent } from './core/pages/settings/settings.component'
export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '**', redirectTo: '' }
];

/*
https://www.angular.courses/blog/angular-folder-structure-guide
https://nx.dev/blog/architecting-angular-applications
https://www.angulararchitects.io/blog/the-perfect-project-setup-for-angular-structure-and-automation-for-more-quality/
https://coreui.io/answers/how-to-use-router-outlet-in-angular/
https://dev.to/xrdev38/10-modern-best-practices-for-structuring-large-scale-angular-applications-2m9d
*/