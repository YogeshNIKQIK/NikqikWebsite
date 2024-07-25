import { Component,HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  blogPost: any
  blogPost4: any
  blogCategories:any
  page = null;
  isSticky: boolean = false;
  showCross: boolean = false;
  style : any;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }
  logoData: any =[]
  constructor(public router: Router, private blogservice:BlogService,private renderer: Renderer2) { }

  toggleMenu() {
    this.showCross = !this.showCross;
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      if (this.showCross) {
        navbarCollapse.classList.add('show');
      } else {
        navbarCollapse.classList.remove('show');
      }
    }
  }

  closeMenu() {
    this.showCross = false;
    // alert('asd')
    const elements = document.getElementsByClassName('Services-div');
    for (let i = 0; i < elements.length; i++) {
      this.renderer.setStyle(elements[i], 'display', 'none');
    }

    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

  showMenu(){
    this.showCross = true;
    const elements = document.getElementsByClassName('Services-div');
    for (let i = 0; i < elements.length; i++) {
      this.renderer.setStyle(elements[i], 'display', 'block');
    }
  }

  ngOnInit() {
    this.getPosts();
    this.getcategories();

  }

  getPosts() {
    this.blogservice.getPosts().subscribe(
      (data: {[key: string]: any}) => { // Assuming blog posts are stored in an object
        const postsArray = Object.values(data); // Convert object values to array

        // Convert string dates to Date objects
        postsArray.forEach(post => post.date = new Date(post.date));

        // Sort the posts by date in descending order
        postsArray.sort((a, b) => b.date.getTime() - a.date.getTime());

        // Get only the first three blog posts
        let blogPost = postsArray.slice(0,1);
        let blogPost4 = postsArray.slice(0,4);

        this.blogPost = blogPost.filter(item => item.tags.includes(5));

        this.blogPost4 = blogPost4.filter(item => item.tags.includes(4));

      },
      error => {
        console.error("Error fetching blog posts:", error);
      }
  )
   }

   getcategories(){
    this.blogservice.getcategories().subscribe(
      data => {
        this.blogCategories = data;
    }
  )
   }

  firstFieldValue: string = '';
  secondFieldValue: string = '';
  showSecondField: boolean = false;
  Event:string='';

  showNextField() {
    this.showSecondField = this.firstFieldValue.trim() !== '';
  }
}
