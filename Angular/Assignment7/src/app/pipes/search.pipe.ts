import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any,args: any) {
      if(args=='all')
      {
        return value;
      }
      else{

        // var resultval:any=[]
        // for(var i=0;i<value.length;i++) {
        //   if(!value[i].name.toLowerCase().search(args)) {
        //     resultval.push(value[i])
        //   } }

        var resultval:any=[]
       // value.forEach((obj:any)=> (!obj.name.toLowerCase().search(args)) ? resultval.push(obj) : console.log(-1))


        value.forEach((obj:any)=> (obj.name.toLowerCase().includes(args)) ? resultval.push(obj) : console.log(-1))
        return resultval;
      }

  }

}
