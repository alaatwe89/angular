import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, User } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  user = JSON.parse(localStorage.getItem("CURRENT_USER"))

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  uppdateForm: FormGroup;
  isSubmitted: boolean = false;

  ngOnInit() {
    this.uppdateForm = this.formBuilder.group({
      firstname: [''],
      mellanname: [''],      
      lastname: [''],
      birthday:[''],
     
      addresslinefaktura: ['' ],
      postnumber:   ['' ],
      invoicecity:   ['' ],
      invoicecountry:['' ],
      addressline: [''],
      zipcode: ['' ],
      city: ['' ],
      email: [''],
      password: ['' ]
    })
  }

  uppdate(){
    this.authService.update(this.uppdateForm.value).subscribe(res => {
      console.log("får tillbaka: " + res)
      
      //this.user = res;
    });
  }

}
