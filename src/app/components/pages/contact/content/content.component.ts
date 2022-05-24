import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  contactinfo = [
    {
      icon: "fas fa-phone-alt",
      title: "Phone",
      text: "Start working with FUNDNLY that can provide everything",
      info: "+(347)123 456 7890",
    },
    {
      icon: "far fa-envelope",
      title: "Email",
      text: "Start working with FUNDNLY that can provide everything",
      info: "contact@example.com",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      text: "Start working with FUNDNLY that can provide everything",
      info: "View on Google map",
    },
  ];
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('smtp_server', 'template_8uQnFG6N_clone', e.target as HTMLFormElement, 'user_XWPdjpTv0DgrQb9FN3tWr')
      .then((result: EmailJSResponseStatus) => {
        alert("This form has been submitted.");
        location.href = '#';
        console.log(result.text);
      }, (error) => {
        alert("This form has been not submitted.");
        location.href = '#';
        console.log(error.text);
      });
  }

  ngOnInit(): void {
  }

}
