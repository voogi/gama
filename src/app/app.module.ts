import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './views/main/main.component';
import {ProductsComponent} from './views/products/products.component';

const appRoutes: Routes = [
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        ProductsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {
            enableTracing: true
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
