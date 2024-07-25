import { Component , OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit{
  blogPost: any
  blogPost4: any
  blogCategories:any
  page = null;
  constructor(private blogservice:BlogService) { }

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
        let blogPost = postsArray.slice(0,6);

        this.blogPost = blogPost.filter(item => item.tags.includes(5));

        this.blogPost4 = blogPost.filter(item => item.tags.includes(4));

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
