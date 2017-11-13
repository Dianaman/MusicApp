import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
	@Output() cerrarMenu:EventEmitter<void> = new EventEmitter<void>();

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

	public seleccionarItem(){
		this.cerrarMenu.emit();
	}

}
