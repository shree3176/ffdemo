import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private _router: Router){}

// 1 Clicking this button invokes the navigateToProductDetail() method.
// 2 Angular will inject the instance of Router into the router variable.
// 3 Navigates to the configured product route programmatically
  navigateToProductDetail(){
    this._router.navigate(["/heroes"]);                      
 }
}
