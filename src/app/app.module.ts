import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layout/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './layout/about/about.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SidebarModule} from 'primeng/sidebar';
import {MatCardModule} from '@angular/material/card';
import { FaqComponent } from './layout/faq/faq.component';
import { ProductsComponent } from './layout/home/products/products.component';
import { TeamComponent } from './layout/about/team/team.component';
import { DepartmentComponent } from './layout/about/department/department.component';
import {SharedModule} from 'primeng/api';
import {SliderComponent} from './layout/home/slider/slider.component';
import { WhyUsComponent } from './layout/about/why-us/why-us.component';
import { ServicesComponent } from './layout/home/services/services.component';
import { FeaturesComponent } from './layout/home/features/features.component';
import { SubscriptionComponent } from './layout/home/subscription/subscription.Component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, ROUTES} from '@angular/router';
import { ContactComponent } from './layout/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {LayoutModule} from './layout/layout.module';
import { PartnerComponent } from './layout/home/partner/partner.component';
import { LatestNewsComponent } from './layout/latest-news/latest-news.component';
import { NewsComponent } from './layout/news/news.component';
import {SharedModules} from './shared/shared.module';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SharedmoduleModule} from './SharedModule/sharedmodule.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ConfigService} from './configService';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        FaqComponent,
        ProductsComponent,
        DepartmentComponent,
        TeamComponent,
        SliderComponent,
        WhyUsComponent,
        ServicesComponent,
        SubscriptionComponent,
      FeaturesComponent,
      ContactComponent,
      PartnerComponent,
      LatestNewsComponent,
      NewsComponent,

    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule,
        LayoutModule,
        SharedModules,
        CarouselModule,
        SharedmoduleModule,
        NgxSpinnerModule,

    ],

  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
