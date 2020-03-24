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


 

  firebaseAuthentication: any;
  authService: any;
  constructor(
    public navCtrl: NavController,
    private auth: authService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async loginUser(credentials: { email: any; password: any; }): Promise<void> {
    this.authService.loginUser(credentials.email, credentials.password).then(
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