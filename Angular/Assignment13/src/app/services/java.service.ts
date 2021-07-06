import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  baseUrl="assets/json/java.json"

  url1="assets/json/java/core-java.json"
  url2="assets/json/java/adv-java.json"
  url3="assets/json/java/hibernate.json"
  url4="assets/json/java/spring.json"
  url5="assets/json/java/java-applets.json"
  url6="assets/json/java/java-jackson.json"
  url7="assets/json/java/jsf.json"
  constructor(private http:HttpClient) { }

  getAllJavaCourses():Observable<any>{
    return this.http.get(this.baseUrl);
  }
  getJavaCore():Observable<any>{
    return this.http.get(this.url1);
  }
  getAdvJava():Observable<any>{
    return this.http.get(this.url2);
  }
  getJavaApplets():Observable<any>{
    return this.http.get(this.url5);
  }
  getHibernate():Observable<any>{
    return this.http.get(this.url3);
  }
  getSpring():Observable<any>{
    return this.http.get(this.url4);
  }
  getJSF():Observable<any>{
    return this.http.get(this.url7);
  }
  getJavaJackson():Observable<any>{
    return this.http.get(this.url6);
  }
}
