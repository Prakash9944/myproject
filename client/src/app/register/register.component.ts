import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private backendCall: BackendserviceService) { }

  ngOnInit() {
  }

}
