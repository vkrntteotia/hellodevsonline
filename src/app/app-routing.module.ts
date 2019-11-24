import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'tech-news', loadChildren: './tech-news/tech-news.module#TechNewsPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogPageModule' },
  { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioPageModule' },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'posts-by-category/:categoryId',
    resolve:{
      special: DataResolverService
    },
    loadChildren: './posts/posts-by-category/posts-by-category.module#PostsByCategoryPageModule' },
  { path: 'show-posts-all', loadChildren: './posts/show-posts-all/show-posts-all.module#ShowPostsAllPageModule' },
  { path: 'show-post/:categoryId',
    resolve:{
      special: DataResolverService
    },
    loadChildren: './posts/show-post/show-post.module#ShowPostPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
