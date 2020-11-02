import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './pipe/safeHtml.pipe';
import { FilterPipe } from './pipe/searchEmployee.pipe';
import { SortByPipe } from './pipe/sortBy.pipe';


@NgModule({
  declarations: [
    SafeHtmlPipe,
    FilterPipe,
    SortByPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
