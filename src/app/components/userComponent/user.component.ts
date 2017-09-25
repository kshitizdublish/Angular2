import { Component } from '@angular/core';  // required for all components
import {PostService} from '../../services/posts.service';

@Component({  // decorator
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})
export class UserComponent  {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postService: PostService) {
        this.name = 'Kshitiz Dublish';
        this.email = 'kshtzdublish@gmail.com';
        this.address = {
            street: '1612, Preet Nagar ',
            town: 'Mawana ',
            city: 'Meerut ',
            state: 'Uttar Pradesh - 250401'
        };
        this.hobbies = ['Music', 'TableTennis'];

        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    toggleHobbies() {
         this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby: string) {
        this.hobbies.push(hobby);
    }

    deleteHobby(i: number) {
      this.hobbies.splice(i, 1);
    }
}

interface address {
    street: string;
    town: string;
    city: string;
    state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
