import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from '../../components/home/home';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Home],
  imports: [CommonModule, RouterModule],
})
export class HomeModule {}
