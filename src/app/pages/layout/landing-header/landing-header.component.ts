import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { SpinnerService } from 'src/app/services/spinner.service';
@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onViewSidebar: EventEmitter<any> = new EventEmitter();
  @Input() showsidebar: boolean;
  @Input() menuData;
  public viewSideBar = false;
  public headerMenu = false;
  public openMessageWindow = false;
  public showUnreadMessage = true;
  public sidebarItems;
  showtabs = true;

  constructor(private router: Router, private userService: UserService, private spinner: SpinnerService) { }

  ngOnInit() {
  }
  /**
   * Navigates to Dashboard
   */
  public toDashboard() {
  }
  /**
   * For open header menu
   */
  public openMenu() {
    this.headerMenu = !this.headerMenu;
  }

  /**
   * For handling click outside event for menu
   */
  public handleClickOutside() {
    this.headerMenu = false;
  }

  public openMessageModal() {
    this.openMessageWindow = !this.openMessageWindow;
  }


  onViewSideBar() {
    this.viewSideBar = !this.viewSideBar;
    this.onViewSidebar.emit(this.viewSideBar);
  }

  onLogOut() {
      this.userService.logout();
      localStorage.clear();
      this.router.navigate(['/auth/login']);
      this.spinner.closeSpinner();
  }



}
