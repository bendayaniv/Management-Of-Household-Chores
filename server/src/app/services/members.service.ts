import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private httpClient: HttpClient) { }

  public getAllMembers(): Observable<Member[]> {
      return this.httpClient.get<Member[]>("http://localhost:3001/api/members");
  }

  public getOneFamilyMember(id: number): Observable<Member> {
      return this.httpClient.get<Member>("http://localhost:3001/api/members/" + id);
  }
  
}
