import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { authService } from 'src/app/services/auth.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


 



  constructor(

    private authService: authService,
  private alertCtrl: AlertController,
  private router: Router,
  
  ) { }

  ngOnInit() {
  }
  async loginUser(email: string, password: string): Promise<void> {

    this.authService.loginUser(email, password).then(
      () => {
        this.router.navigateByUrl('home');
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      }
    );
  }

}