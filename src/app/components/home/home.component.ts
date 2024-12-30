import { Component, OnInit, AfterViewInit, ViewChild, ElementRef   } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import axios from 'axios';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isSubmit = true;
  submitMessage = "";
  submitted = false;
  enqueryForm!:FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private toastr: ToastrService) { }
  ngOnInit() {

    this.enqueryForm = this.formBuilder.group({
      fname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
      email: new FormControl ('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.enqueryForm.invalid) {
      return;
    } else {
      this.submitted = false;
      const formData = this.enqueryForm.value;
      const data = JSON.stringify(formData);
        let formBody = {
          "body": data
        }
      // console.log(formData);
      // formData['enqueryform'] = 2;

      axios
        .post(`https://8p78ugp5i0.execute-api.ap-southeast-2.amazonaws.com/dev`, formBody)
        .then(response => {
          this.toastr.success('Message Sent Successfully'); // Show success toast
          this.enqueryForm.reset();
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


  @ViewChild('listBooks') listBooks!: ElementRef;

   slides = [
     { img: 'assets/images/forum_11876045.png', title: 'ITSM Process Consulting', description: 'Imagine your IT operations running smoothly, efficiently, and seamlessly aligned with your business goals.', link: 'services-detail#it-service-management-process-consulting' },
     { img: 'assets/images/1641623.webp', title: 'ITSM Tools Consulting & Implementation', description: 'Streamlining Your Operations with Cutting-edge IT Service Management Tools', link: 'services-detail#it-service-management-tools-implementation' },
     { img: 'assets/images/cloud_14217783.png', title: 'Cloud Consulting Professional Services', description: 'In today digital world, exceptional customer experience is the key to loyalty and growth.', link: 'services-detail#cloud-contact-center-professional-services' },
     { img: 'assets/images/high-quality_5733207.png', title: 'Quality Assurance', description: 'In today fast-paced world, delivering quality isnt just optional, its essential.', link: 'services-detail#quality-assuarance' },
     { img: 'assets/images/process_10740747.png', title: 'Project Management', description: 'Every successful project starts with a vision', link: 'services-detail#project-management' },
     { img: 'assets/images/data-analytics_1548914.png', title: 'Data Analytics', description: 'In today digital world, data is a treasure trove of insights, but only if you have the keys to unlock its potential.', link: 'services-detail#data-analytics' },
     { img: 'assets/images/system_7521596.png', title: 'Organizational Change Management', description: 'We help your organization embrace transformation by fostering a culture that values innovation, adaptability.', link: 'services-detail#organizational-change-management' },
     { img: 'assets/images/statistics_7984698.png', title: 'Business Analysis', description: 'In today competitive landscape, success hinges on making informed decisions.', link: 'services-detail#business-analysis' },
     { img: 'assets/images/group_598523.png', title: 'Staff Augmentation', description: 'Filling talent gaps can feel like trying to plug a leak on a moving boat.', link: 'services-detail#staff-augmentation' },
     { img: 'assets/images/global-services_12876196.png', title: 'Managed Services', description: 'In todayfast-paced world, running a business means a million demands on your time.', link: 'services-detail#managed-services' },
     { img: 'assets/images/web-app-development.png', title: 'Web & Custom App Development', description: 'Ready to elevate your digital presence to new heights?', link: 'services-detail#web-app-development' },
  ];

  slideConfig = {
    dots: true,
    infinite: true,
    loop:true,
    autoplay:false,
    speed: 300,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> Prev</button>',
    nextArrow: '<button class="slide-arrow next-arrow">Next <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
        breakpoint: 768,
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


  slideConfig1 = {
    dots: true,
    infinite: true,
    loop:true,
    autoplay:true,
    speed: 300,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> Prev</button>',
    nextArrow: '<button class="slide-arrow next-arrow">Next <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
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
