import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hero }                   from '../shared/hero';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';

import { RouterModule, Routes } from '@angular/router';

/* Components */
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product.component';


const NAV_ROUTES: Routes = [
  { path: 'products', component:ProductsComponent  },
  { path: 'product', component:ProductComponent  },
  { path: '**', pathMatch:'full', redirectTo: 'product' }

];

export const app_routing = RouterModule.forRoot( NAV_ROUTES );
/* Note:
  * add tag <router-outlet></router-outlet> in file component (~.component.html)
  * Need import and imports `app_routing`  in file module (~.module.ts) or ignore this message. */




@Component({
  selector: 'hero-form-reactive3',
  templateUrl: './hero-form-reactive.component.html'
})
export class HeroFormReactiveComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = new Hero(18, 'Dr. WhatIsHisName', this.powers[0], 'Dr. What');
  submitted = false;
public(){

}
  const variable: string = []; '' '' ""

 let variable:string = "valor";

  onSubmit() {
    this.submitted = true;
    this.hero = this.heroForm.value;
  }
  }
  heroForm: FormGroup;
  constructor(private fb: FormBuilder{ }
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.heroForm = this.fb.group({
      'name': [this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24),
          forbiddenNameValidator(/bob/i)
        ]
      ],
      'alterEgo': [this.hero.alterEgo],
      'power':    [this.hero.power, Validators.required]
    });
    this.heroForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }
  onValueChanged(data?: any) {
    if (!this.heroForm) { return; }
    const form = this.heroForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = {
    'name': '',
    'power': ''
  };
  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.',
      'numero': 985.50,
      'numero2':15454646.85
    },
    'power': {
      'required': 'Power is required.'
    }
  };
  
}
