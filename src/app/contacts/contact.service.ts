import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = '/contacts';
  constructor(private http: Http) { }

  // get("/api/contacts")
  getContacts(): Promise<void | Contact[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Contact[])
      .catch(error => {
        console.log('ERROR')
      });
  }
}
