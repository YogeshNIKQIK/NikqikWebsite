import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

$path: any;
blogPost: any
blogCategories:any
page = null;

constructor(private blogservice:BlogService) { }


ngOnInit() {
  this.getPosts();
}

getPosts() {
  this.blogservice.getPosts().subscribe(
    (data: {[key: string]: any}) => { // Assuming blog posts are stored in an object
      const postsArray = Object.values(data); // Convert object values to array

      // Convert string dates to Date objects
      postsArray.forEach(post => post.date = new Date(post.date));

      // Sort the posts by date in descending order
      postsArray.sort((a, b) => b.date.getTime() - a.date.getTime());

      // Get only the first two blog posts
      this.blogPost = postsArray.slice(0, 2); // Adjusted to slice only 2 posts
    },
    error => {
      console.error("Error fetching blog posts:", error);
    }
  )
}

}
