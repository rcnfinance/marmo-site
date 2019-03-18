import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './marmo-landing/menu/menu.component';
import { FeaturesComponent } from './marmo-landing/features/features.component';
import { MultilanguajeComponent } from './marmo-landing/multilanguaje/multilanguaje.component';
import { NpmCommandsComponent } from './marmo-landing/npmCommands/npmCommands.component';
import { InfoComponent } from './marmo-landing/info/info.component';
import { HomeComponent } from './marmo-landing/home/home.component';
import { FooterComponent } from './marmo-landing/footer/footer.component';
import { AdvantagesComponent } from './marmo-landing/advantages/advantages.component';
import { MarmoLandingComponent } from './marmo-landing/marmo-landing.component';
import { HighlightModule } from 'ngx-highlightjs';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import python from 'highlight.js/lib/languages/python';
import { SocialComponent } from './marmo-landing/social/social.component';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: javascript},
    {name: 'java', func: java},
    {name: 'python', func: python},
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeaturesComponent,
    MultilanguajeComponent,
    NpmCommandsComponent,
    InfoComponent,
    NpmCommandsComponent,
    HomeComponent,
    FooterComponent,
    AdvantagesComponent,
    MarmoLandingComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
