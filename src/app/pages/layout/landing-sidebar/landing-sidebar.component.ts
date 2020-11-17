import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-menu.service';

@Component({
  selector: 'app-landing-sidebar',
  templateUrl: './landing-sidebar.component.html',
  styleUrls: ['./landing-sidebar.component.scss']
})
export class LandingSidebarComponent implements OnInit {

  @Input() sidebarItems: any;

  isSubmenu: boolean;
  arrowimg = 'arrow-right-white';

  constructor() { }

  submenuFun() {
    this.isSubmenu = !this.isSubmenu;
    this.arrowimg = this.arrowimg == 'arrow-down-white' ? 'arrow-right-white' : 'arrow-down-white' ;

  }

  ngOnInit() {
  }

  arrowClicked(item) {
    item.disabled = !item.disabled;

  }

}
