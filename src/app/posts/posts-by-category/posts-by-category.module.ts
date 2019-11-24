import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PostsByCategoryPage } from './posts-by-category.page';

const routes: Routes = [
  {
    path: '',
    component: PostsByCategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostsByCategoryPage]
})
export class PostsByCategoryPageModule {}
