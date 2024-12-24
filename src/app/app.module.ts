import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './leadingpage/footer/footer.component';
import { HeaderComponent } from './leadingpage/header/header.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { InnerfooterComponent } from './leadingpage/innerfooter/innerfooter.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesDetailComponent } from './components/services-detail/services-detail.component';
import { InsightsComponent } from './components/insights/insights.component';
import { CareersComponent } from './components/careers/careers.component';
import { ServicelyTechnologySolutionsComponent } from './technologies/servicely-technology-solutions/servicely-technology-solutions.component';
import { FreshworksTechnologySolutionsComponent } from './technologies/freshworks-technology-solutions/freshworks-technology-solutions.component';
import { MicrosoftTechnologySolutionsComponent } from './technologies/microsoft-technology-solutions/microsoft-technology-solutions.component';
import { ServicenowTechnologyPartnerComponent } from './technologies/servicenow-technology-partner/servicenow-technology-partner.component';
import { SalesforceTechnologyServicesComponent } from './technologies/salesforce-technology-services/salesforce-technology-services.component';
import { UipathTechnologySolutionsComponent } from './technologies/uipath-technology-solutions/uipath-technology-solutions.component';
import { AwsTechnologyServicesComponent } from './technologies/aws-technology-services/aws-technology-services.component';
import { PythonTechnologySolutionsComponent } from './technologies/python-technology-solutions/python-technology-solutions.component';
import { ItServiceManagementProcessConsultingComponent } from './services/it-service-management-process-consulting/it-service-management-process-consulting.component';
import { ItServiceManagementToolsImplementationComponent } from './services/it-service-management-tools-implementation/it-service-management-tools-implementation.component';
import { CloudContactCenterProfessionalServicesComponent } from './services/cloud-consulting-professional-services/cloud-contact-center-professional-services.component';
import { QualityAssuaranceComponent } from './services/quality-assuarance/quality-assuarance.component';
import { ProjectManagementComponent } from './services/project-management/project-management.component';
import { DataAnalyticsComponent } from './services/data-analytics/data-analytics.component';
import { OrganizationalChangeManagementComponent } from './services/organizational-change-management/organizational-change-management.component';
import { BusinessAnalysisComponent } from './services/business-analysis/business-analysis.component';
import { StaffAugmentationComponent } from './services/staff-augmentation/staff-augmentation.component';
import { ManagedServicesComponent } from './services/managed-services/managed-services.component';
import { ProductComponent } from './components/product/product.component';
import { ReviewsComponent } from './components/reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactUsComponent,
    InnerfooterComponent,
    AboutUsComponent,
    ServicesComponent,
    ServicesDetailComponent,
    InsightsComponent,
    CareersComponent,
    ServicelyTechnologySolutionsComponent,
    FreshworksTechnologySolutionsComponent,
    MicrosoftTechnologySolutionsComponent,
    ServicenowTechnologyPartnerComponent,
    SalesforceTechnologyServicesComponent,
    UipathTechnologySolutionsComponent,
    AwsTechnologyServicesComponent,
    PythonTechnologySolutionsComponent,
    ItServiceManagementProcessConsultingComponent,
    ItServiceManagementToolsImplementationComponent,
    CloudContactCenterProfessionalServicesComponent,
    QualityAssuaranceComponent,
    ProjectManagementComponent,
    DataAnalyticsComponent,
    OrganizationalChangeManagementComponent,
    BusinessAnalysisComponent,
    StaffAugmentationComponent,
    ManagedServicesComponent,
    ProductComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
