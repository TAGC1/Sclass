import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(

    private authService: authService,
  private alertCtrl: AlertController,
  private router: Router,
  
  ) { }

  ngOnInit() {
  }

  async signupUser(email: string, password: string): Promise<void> { 
    this.authService.signupUser(email, password).then(
      () => {
        this.router.navigateByUrl('pages/feed');
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
