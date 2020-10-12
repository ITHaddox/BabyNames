import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BabyName } from './../models/baby-name';
import { API_URL } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class BabyNameService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllBabyNames(username) {
    return this.http.get<BabyName[]>(`${API_URL}/baby/users/${username}/names`);
  }

  deleteBabyName(username, id){
    return this.http.delete(`${API_URL}/baby/users/${username}/names/${id}`);
  }

  retrieveBabyName(username, id){
    return this.http.get<BabyName>(`${API_URL}/baby/users/${username}/names/${id}`);
  }

  updateBabyName(username, id, babyName){
    return this.http.put(
          `${API_URL}/baby/users/${username}/names/${id}`
                , babyName);
  }

  createBabyName(username, babyName) {
    return this.http.post<BabyName>(`${API_URL}/baby/users/${username}/names`, babyName);
  }



  retrieveGreeting(){
    return this.http.get<any>(`${API_URL}/userhub/greeting`)
  }
}
