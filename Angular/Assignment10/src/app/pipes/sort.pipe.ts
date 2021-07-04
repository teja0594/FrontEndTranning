import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  //initialValue:any;
  transform(value:any,args:any):any {

    return this.getOrder(value,args)
    // if(args=='low') {
    //   //   // -----------WrittenLogic Code----------
    //   // var assendValue=value
    //   // for (var i=0;i<assendValue.length-1;i++) {
    //   // for (var j=0;j<assendValue.length-i-1;j++) { ----------Bubble Sort--------------
    //   //     if (assendValue[j].price > assendValue[j+1].price) {
    //   //         var temp = assendValue[j];
    //   //         assendValue[j] = assendValue[j+1];
    //   //         assendValue[j+1] = temp;
    //   //    } } }
    //   //  -------------InBuiltMethod & Lamda Function--------------
    //
    //   var assendValue=value.sort((obj1:any,obj2:any) => (obj1.price < obj2.price)? -1 : 1)
    //  return assendValue
    // }
    // else if(args=='high') {
    //   var DesendValue=value.sort((obj1:any,obj2:any) => (obj1.price > obj2.price)? -1 : 1)
    //  return DesendValue
    // }
    // else if(args=='a-z') {
    //   var DesendValue=value.sort((obj1:any,obj2:any) => (obj1.name < obj2.name)? -1 : 1)
    //  return DesendValue
    // }
    // else if(args=='z-a') {
    //   var DesendValue=value.sort((obj1:any,obj2:any) => (obj1.name > obj2.name)? -1 : 1)
    //  return DesendValue
    // }
    // else
    //   return this.initialValue

  }

//-----------optmizedCode--------------

  getOrder(value:any,orderType:any):any
  {
   return value.sort((obj1:any,obj2:any) =>
   (orderType=='a-z'||orderType=='z-a') ? this.setOrder(obj1.name,obj2.name,orderType) : this.setOrder(obj1.price,obj2.price,orderType))
  }
  setOrder(param1:any,param2:any,order:any):any{

    return (order=='a-z'||order=='low') ? ((param1 < param2) ? -1 : 1) : ((param2 > param1) ? 1 : -1)
  }
}
