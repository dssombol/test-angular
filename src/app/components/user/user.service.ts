import { User } from './user';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  _url ="";
  getLogin(_user: User){
    return this.http.post<any>(this._url, _user);
  }
}
