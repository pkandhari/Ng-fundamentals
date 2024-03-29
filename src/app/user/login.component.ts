import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html',
    styles: [`
    em{float:right;color:#E05C65;padding-left:10px}
    `]
})

export class LoginComponent {
    userName: any
    password: any
    mouseoverLogin: any
    constructor(private authService: AuthService, private router: Router) {

    }

    login(formData: any) {
        this.authService.loginUser(formData.userName, formData.password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
}