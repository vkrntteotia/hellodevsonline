import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowPostsAllPage } from './show-posts-all.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPostsAllPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowPostsAllPage]
})
export class ShowPostsAllPageModule {}
