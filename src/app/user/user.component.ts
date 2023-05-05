import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user: { id: string; name: string };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });

    this.route.queryParams.subscribe((data)=>{
      console.log(data)
    })

    this.route.fragment.subscribe((data)=>{
      console.log(data)
    })
  }

  onDetails() {
    this.router.navigate(['/users', 2, 'raeezNazar'], {
      queryParams: { page: 1, search: 'raeezNazar' },
      fragment: 'loading',
    });
  }

  userEdit(){

    alert("jj")

    this.router.navigate(['/users',this.user.id, this.user.name,'edit' ], {
      queryParamsHandling:'preserve'
    })

  }


}
