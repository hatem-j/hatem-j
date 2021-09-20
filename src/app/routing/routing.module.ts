import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalLayoutComponent } from '../layout/vertical';
import { PublicLayoutComponent } from '../layout/public';

import { PageDashboardComponent } from '../pages/dashboards/dashboard-1';
import { PageDoctorsComponent } from '../pages/labo/doctors';
import { PagePatientsComponent } from '../pages/labo/patients';
import { PageDoctorProfileComponent } from '../pages/labo/doctor-profile';
import { PagePaymentsComponent } from '../pages/labo/payments';
import { PageAppointmentsComponent } from '../pages/labo/appointments';
import { PageDepartmentsComponent } from '../pages/labo/departments';
import { PagePatientProfileComponent } from '../pages/labo/patient-profile';
import { PageInvoiceComponent } from '../pages/apps/service-pages/invoice';
import { PagePricingComponent } from '../pages/apps/service-pages/pricing';
import { PageTimelineComponent } from '../pages/apps/service-pages/timeline';
import { PageUserProfileComponent } from '../pages/apps/service-pages/user-profile';
import { PageEditAccountComponent } from '../pages/apps/service-pages/edit-account';
import { PageCalendarComponent } from '../pages/apps/service-pages/calendar';
import { PageSettingsComponent } from '../pages/settings';
import { Page404Component } from '../pages/apps/sessions/page-404';
import { Page500Component } from '../pages/apps/sessions/page-500';
import { SignInComponent } from '../pages/sign-in';

const VERTICAL_ROUTES: Routes = [
  { path: 'default-dashboard', component: PageDashboardComponent },
  { path: 'armoires', component: PageDoctorsComponent },
  { path: 'doctor-profile', component: PageDoctorProfileComponent },
  { path: 'reactifs', component: PagePatientsComponent },
  { path: 'patient-profile/:id', component: PagePatientProfileComponent },
  { path: 'payments', component: PagePaymentsComponent },
  { path: 'kanban', component: PageAppointmentsComponent },
  { path: 'departments', component: PageDepartmentsComponent },
  { path: 'invoices', component: PageInvoiceComponent },
  { path: 'pricing', component: PagePricingComponent },
  { path: 'events-timeline', component: PageTimelineComponent },
  { path: 'user-profile', component: PageUserProfileComponent },
  { path: 'edit-account', component: PageEditAccountComponent },
  { path: 'events-calendar', component: PageCalendarComponent },
  { path: 'settings', component: PageSettingsComponent }
];

const PUBLIC_ROUTES: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'page-404', component: Page404Component },
  { path: 'page-500', component: Page500Component },
  { path: '**', component: Page404Component }
];

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/vertical/default-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'vertical',
    component: VerticalLayoutComponent,
    children: VERTICAL_ROUTES
  },
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: PUBLIC_ROUTES
  },
  {
    path: '**',
    component: PublicLayoutComponent,
    children: PUBLIC_ROUTES
  }
];

@NgModule({
  imports: [

  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
