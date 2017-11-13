import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
	public links = [
		{
			title: 'home',
			link: '/home'
		},
		{
			title: 'feel',
			link: '/feel'
		},
		{
			title: 'sing',
			link: '/sing'
		}
	]

  constructor() { }

  ngOnInit() {
  }

}
