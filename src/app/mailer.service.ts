import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(private http: HttpClient) { }
  Send = (message: any, callback: (success: boolean) => void) => {
    
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/X-www-form-urlencoded'
        })
      };

      let body = `name=${message.name}&phone=${message.phone}&email=${message.email}`;

      this.http.post('/sendMessage', body, httpOptions).subscribe(value => {
         callback(true);
      }, error => {
          callback(false);
      });
  }
}
