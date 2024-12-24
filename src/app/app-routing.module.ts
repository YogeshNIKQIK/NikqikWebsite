import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services-detail', component: ServicesDetailComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'servicely-technology-solutions', component: ServicelyTechnologySolutionsComponent },
  { path: 'freshworks-technology-solutions', component: FreshworksTechnologySolutionsComponent },
  { path: 'microsoft-technology-solutions', component: MicrosoftTechnologySolutionsComponent },
  { path: 'servicenow-technology-partner', component: ServicenowTechnologyPartnerComponent },
  { path: 'salesforce-technology-services', component: SalesforceTechnologyServicesComponent },
  { path: 'uipath-technology-solutions', component: UipathTechnologySolutionsComponent },
  { path: 'aws-technology-services', component: AwsTechnologyServicesComponent },
  { path: 'python-technology-solutions', component: PythonTechnologySolutionsComponent },
  { path: 'it-service-management-process-consulting', component: ItServiceManagementProcessConsultingComponent },
  { path: 'it-service-management-tools-implementation', component: ItServiceManagementToolsImplementationComponent },
  { path: 'cloud-contact-center-professional-services', component: CloudContactCenterProfessionalServicesComponent },
  { path: 'quality-assuarance', component: QualityAssuaranceComponent },
  { path: 'project-management', component: ProjectManagementComponent },
  { path: 'data-analytics', component: DataAnalyticsComponent },
  { path: 'organizational-change-management', component: OrganizationalChangeManagementComponent },
  { path: 'business-analysis', component: BusinessAnalysisComponent },
  { path: 'staff-augmentation', component: StaffAugmentationComponent },
  { path: 'managed-services', component: ManagedServicesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'reviews', component: ReviewsComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
