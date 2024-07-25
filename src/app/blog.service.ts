import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  endpoint = 'https://nikqik.manageprojects.in/nikqikblog';
  constructor(private http: HttpClient) {}
  getPosts(){
      const url = `${this.endpoint}/wp-json/wp/v2/posts?_embed=true`
      return this.http.get(url)
 }

  getcategories(){
      const url = `${this.endpoint}/wp-json/wp/v2/categories`
      return this.http.get(url)
   }
}
