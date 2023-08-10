import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = this.fb.group({
    name: ['', [
      Validators.minLength(4),
      Validators.required
    ]],
    subject: ['', [
      Validators.minLength(10),
      Validators.required
    ]],
    phone: ['', [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ['', [
      Validators.email,
      Validators.required
    ]],
    message: ['', [
      Validators.minLength(20),
      Validators.required
    ]]
  })

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService) {}

  send() {
    this.notificationService.notify('Mensagem enviada');
    this.contactForm.reset();
  }
}
