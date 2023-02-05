import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/servicios/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public credentials: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private auhtService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getFormBuilder();
  }

  getFormBuilder(){
    this.credentials = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async login(){
    const loading = await this.loadingController.create();
    await loading.present();

    await loading.dismiss();

    this.router.navigateByUrl('/menu/linea', {replaceUrl: true});


    /*this.auhtService.login(this.credentials.value).subscribe(
      async _ => {
        await loading.dismiss();
        this.router.navigateByUrl('/menu', { replaceUrl: true });
      }, 
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Authenticacion Fallida',
          message: res.error.msg,
          buttons: ['Ok'],
        });
        await alert.present();
      }
    );*/
  }

}
