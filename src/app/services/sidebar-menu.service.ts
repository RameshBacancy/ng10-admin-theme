import { Injectable } from '@angular/core';
import * as data from '../../assets/JSON/sidebar-menu.json';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  getadmindata() {
    return data.admin;
  }
}
