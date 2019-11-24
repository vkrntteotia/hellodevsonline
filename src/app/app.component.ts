import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Tech News',
      url: '/tech-news',
      icon: 'list'
    },
    {
      title: 'About us',
      url: '/about-us',
      icon: 'list'
    },
    {
      title: 'Blog',
      url: '/blog',
      icon: 'list'
    },
    {
      title: 'Portfolio',
      url: '/portfolio',
      icon: 'list'
    },
    {
      title: 'Gallery',
      url: '/gallery',
      icon: 'list'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'list'
    },
    {
      title: 'Contact us',
      url: '/contact-us',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataservice: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
