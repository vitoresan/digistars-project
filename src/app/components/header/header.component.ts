import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/models/resource';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  resources: Resource[]

  constructor(
    private resourcesServices: ResourcesService
  ) { }

  ngOnInit(): void {
    this.getSystemResources();
  }

  getSystemResources() {
    this.resources = this.resourcesServices.getSystemResources()
  }

}
