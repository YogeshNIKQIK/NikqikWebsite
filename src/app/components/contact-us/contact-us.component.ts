import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm!:FormGroup
  isSubmit = true;
  submitMessage = "";
  submitted = false;
    constructor(private formBuilder: FormBuilder, private http: HttpClient, private toastr: ToastrService) { }
    ngOnInit() {

      this.contactForm = this.formBuilder.group({
        // interest: new FormControl('', [Validators.required]),
        fname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
        email: new FormControl ('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        company: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
        message: new FormControl(''),
      })
    }

    onSubmit() {
      this.submitted = true;
      if (this.contactForm.invalid) {
        return;
      } else {
        this.submitted = false;
        const formData = this.contactForm.value;
        formData['contctform'] = 1;
        const data = JSON.stringify(formData);
        let formBody = {
          "body": data
        }
        // console.log(formBody);
        

        axios
          .post(`https://8p78ugp5i0.execute-api.ap-southeast-2.amazonaws.com/dev`, formBody)
          .then(response => {
            // console.log(response);
            this.toastr.success('Message Sent Successfully'); // Show success toast
            this.contactForm.reset();
          })
          .catch(error => {
            console.error(error);
            this.toastr.error('Message not sent!!'); // Show error toast
          })
          .finally(() => {
            this.isSubmit = true;
            setTimeout(() => {
              this.isSubmit = false;
            }, 5000);
          });
        }
      }
}
