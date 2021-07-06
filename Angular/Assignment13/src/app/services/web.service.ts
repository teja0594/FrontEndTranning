import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseUrl="assets/json/web.json"

  url1="assets/json/web/ai.json"
  url2="assets/json/web/block-chain.json"
  url3="assets/json/web/iot.json"
  url4="assets/json/web/motion-ui.json"
  url5="assets/json/web/pwa.json"
  url6="assets/json/web/sla.json"
  url7="assets/json/web/spa.json"

  constructor(private http:HttpClient) { }


  getAllWebTech():Observable<any>{
    return this.http.get(this.baseUrl);
}
getAI():Observable<any>{
  return this.http.get(this.url1);
}
getBlockChain():Observable<any>{
  return this.http.get(this.url2);
}
getIOT():Observable<any>{
  return this.http.get(this.url3);
}
getMotionUI():Observable<any>{
  return this.http.get(this.url4);
}
getPWA():Observable<any>{
  return this.http.get(this.url5);
}
getServerlessArchitecture():Observable<any>{
  return this.http.get(this.url6);
}
getSPA():Observable<any>{
  return this.http.get(this.url7);
}
}
