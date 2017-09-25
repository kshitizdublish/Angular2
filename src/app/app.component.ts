import { Component } from '@angular/core';  // required for all components

@Component({  // decorator
  selector: 'my-app',
  template: `
			<nav class="navbar navbar-inverse">
				<div class="container-fluid">
					<div class="navbar-header">
						<a class="navbar-brand">Angular2 All</a>
					</div>
					<ul class="nav navbar-nav">
						<li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}">
							<a [routerLink]="['/about']">About</a>
						</li>
						<li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}">
							<a [routerLink]="['/development']">Development</a>
						</li>
					</ul>
				</div>
			</nav>
			<router-outlet></router-outlet>
			<app-footer></app-footer>
        	`,
})
export class AppComponent  {
 
}
