import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

import { environment } from '../../environments/environment';
import { UIModule } from '../ui/ui.module';
import { LayoutModule } from '../layout/layout.module';
import { BasePageComponent } from './base-page';

import { PageDashboardComponent } from './dashboards/dashboard-1';

import { PageDoctorsComponent } from './labo/doctors';
import { PagePatientsComponent } from './labo/patients';
import { PageDoctorProfileComponent } from './labo/doctor-profile';
import { PagePaymentsComponent } from './labo/payments';
import { PageAppointmentsComponent } from './labo/appointments';
import { PageDepartmentsComponent } from './labo/departments';
import { PagePatientProfileComponent } from './labo/patient-profile';
import { PageInvoiceComponent } from './apps/service-pages/invoice';
import { PagePricingComponent } from './apps/service-pages/pricing';
import { PageTimelineComponent } from './apps/service-pages/timeline';
import { PageUserProfileComponent } from './apps/service-pages/user-profile';
import { PageEditAccountComponent } from './apps/service-pages/edit-account';
import { PageCalendarComponent } from './apps/service-pages/calendar';
import { PageSettingsComponent } from './settings';
import { Page404Component } from './apps/sessions/page-404';
import { Page500Component } from './apps/sessions/page-500';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SignInComponent } from './sign-in';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    ChartsModule,
    NgxChartsModule,
    NgxEchartsModule.forRoot({
      echarts: { init: echarts.init }
    }),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapApiKey
    }),
    LeafletModule,
    FullCalendarModule,
    NzDatePickerModule,
    NzDividerModule,
    NzTableModule,
    DragDropModule,

    UIModule,
    LayoutModule
  ],
  declarations: [
    BasePageComponent,
    PageDashboardComponent,
        PageDoctorsComponent,
    PagePatientsComponent,
    PageDoctorProfileComponent,
    PagePaymentsComponent,
    PageAppointmentsComponent,
    PageDepartmentsComponent,
    PagePatientProfileComponent,
    PageInvoiceComponent,
    PagePricingComponent,
    PageTimelineComponent,
    PageUserProfileComponent,
    PageEditAccountComponent,
    PageCalendarComponent,
    PageSettingsComponent,
    Page404Component,
    Page500Component,
     SignInComponent
  ],
  exports: [ ],
  entryComponents: [ ]
})
export class PagesModule {}
