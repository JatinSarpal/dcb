import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  page = ''
  constructor(public route: ActivatedRoute , public router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.page = param['field'];
      console.log(this.page)
    })
  }

}
