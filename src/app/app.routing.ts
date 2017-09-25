import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/userComponent/user.component';
import {AboutComponent} from './components/aboutComponent/about.component';
import {FooterComponent} from './components/FooterComponent/footer.component';

const appRoutes: Routes = [
    {
        path: 'development',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);