import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef   } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import axios from 'axios';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  file!:File;
  careerForm!:FormGroup;
  isSubmit = true;
  submitMessage = "";
  submitted = false;
  defaultDesignation = "Select Designation";

  window: any;
$file: any;
files: any;
    constructor(private formBuilder: FormBuilder, private http: HttpClient, private toastr: ToastrService,private router: Router) { }
    ngOnInit() {

      this.careerForm = this.formBuilder.group({
        fname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
        lname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
        email: new FormControl ('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        countrycode: new FormControl (''),
        designation: new FormControl('',[Validators.required,]),
        upload_cv: new FormControl('')
      })


    }

@ViewChild('fileInput') fileInput!: ElementRef;
 selectedFileName: string = '';
 selectedFileNameTemap: string = '';
 selectedFile!: File;



 openFileInput() {
  this.fileInput.nativeElement.click();
}

onFileSelected(event: any,) {
  const file: File = event.target.files[0];
  this.selectedFileName = file.name;
  console.log('file upload', file);
  this.uploadFile(file);

//   var str = this.selectedFileName;
//   console.log(str.length)
// console.log("(0,2): "+ str.substr(0,10)+'.'+this.selectedFileName.split('.').pop());

if (file.name.length > 10) {
  const fileNameArray = file.name.split('.');
  console.log('fileNameArray--',fileNameArray);
  const extension = fileNameArray.pop(); // Remove and get the file extension
  this.selectedFileNameTemap = `${file.name.substr(0, 10)}.....${extension}`;
  console.log(this.selectedFileName)
} else {
  this.selectedFileNameTemap = file.name;
}

}

  // Event handler for when a file is dragged over the drop area
 onDragOver(event: DragEvent) {
    event.preventDefault();
  }

// Event handler for when a file is dropped into the drop area
onDrop(event: DragEvent) {
  event.preventDefault();
  console.log('event',event);
  const files = event.dataTransfer?.files;
  if (files && files.length > 0) {
    this.handleFile(files[0]);
  }

}

// Function to handle the selected file
handleFile(file: File) {
  // console.log('handleFile',file);
    this.selectedFileName = file.name;
    //this.selectedFileName = file.name;
    this.careerForm.value.upload_cv= file.name;
    console.log('file drop', file)
    this.uploadFile(file);
    //this.onFileSelected(file);
  const fileInputElement = document.getElementById('drop-area') as HTMLInputElement;
  fileInputElement.value = file.name;
    // Append the custom file to the file input field
  this.appendCustomFile(fileInputElement, file);

  if (file.name.length > 10) {
    const fileNameArray = file.name.split('.');
    console.log('fileNameArray--',fileNameArray);
    const extension = fileNameArray.pop(); // Remove and get the file extension
    this.selectedFileNameTemap = `${file.name.substr(0, 10)}.....${extension}`;
    console.log(this.selectedFileName)
  } else {
    this.selectedFileNameTemap = file.name;
  }

}

 appendCustomFile(input: HTMLInputElement, file: File): void {
  const fileList = new DataTransfer();
  console.log('test', input.files);
  fileList.items.add(file);
  console.log( fileList );
  if (input.files) {
      input.files = fileList.files;
  } else {
    input.files = fileList.files;
  }

  console.log('test2 ', input.files);
}



uploadFile(file: File) {
  console.log('uploadFile',file);
  this.selectedFile = file;
  // You can use FormData to handle file uploads
  const formData = new FormData();
  formData.append('file', file);
  formData.append('type', 'file');

  axios
          .post(`https://nikqik.manageprojects.in/api/contact.php`, formData)
          .then(response => {
            this.submitMessage = "Message Sent Successfully";
            this.selectedFileName = response.data.file_name;


          })
          .catch(error => {
            console.error(error);
            this.submitMessage = "Message not sent!!";
          })
          .finally(() => {
            this.isSubmit = true;
            setTimeout(() => {
              this.isSubmit = false;
            }, 5000);
          });
        }


        onSubmit() {
          this.submitted = true;

          const fileInput: HTMLInputElement | null = document.getElementById('fileInput') as HTMLInputElement;
          const fileError: HTMLDivElement | null = document.getElementById('fileError') as HTMLDivElement;

          if (this.careerForm.invalid) {
            console.log('submitted invalid',this.careerForm);
            return;
          }  if (!this.selectedFileName) {
            // Custom validation: Check if a file has been selected
            fileError.style.display = 'block';
            // You can show an error message or handle this case according to your UI/UX requirements
          }
          else {
            fileError.style.display = 'none';

            this.submitted = false;
            const formData = this.careerForm.value;
            console.log(formData)
            formData['upload_cv'] = this.selectedFileName;
            formData['careerjob'] = 3;

            axios
              .post(`https://nikqik.manageprojects.in/api/contact.php`, formData)
              .then(response => {
                this.submitMessage = "Message Sent Successfully";
                this.toastr.success('Message Sent Successfully');
                this.careerForm.reset();

                // Reload the window after successful form submission

              })
              .catch(error => {
                console.error(error);
                this.submitMessage = "Message not sent!!";
                this.toastr.error('Message not sent!!');
              })
              .finally(() => {
                this.isSubmit = true;

                setTimeout(() => {
                  window.location.reload();
                  this.isSubmit = false;
                }, 1500);
              });
            }
        }

  @ViewChild('listBooks') listBooks!: ElementRef;

  slides = [
    { img: 'assets/images/open-work-culture1.svg', title: 'Open Work Environment' },
    { img: 'assets/images/salary-benefits1.svg', title: 'Employee’s Provident Fund' },
    { img: 'assets/images/family-health-insurance-img1.svg', title: 'Employee’s State Insurances'},
    { img: 'assets/images/appreciation1.svg', title: 'Copy Performance-Based Compensation & Benefits'},
    { img: 'assets/images/friendly-leave-policy1.svg', title: 'Appreciation Bonus'},
 ];

 slideConfig = {
   dots: false,
   infinite: true,
   loop:true,
   autoplay:true,
   speed: 300,
   fade: false,
   slidesToShow: 5,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i> </button>',
   nextArrow: '<button class="slide-arrow next-arrow"> <i class="fa fa-angle-right" aria-hidden="true"></i></button>',
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     }
   ]
 };
 slickInit(e: any) {
   console.log('slick initialized');
 }
 breakpoint(e: any) {
   console.log('breakpoint');
 }
 afterChange(e: any) {
   console.log('afterChange');
 }
 beforeChange(e: any) {
   console.log('beforeChange');
 }

}
