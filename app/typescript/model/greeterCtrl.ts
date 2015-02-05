/**
 * Created by bsun on 2/4/15.
 */
module com.axioma.controller {
   export class GreeterCtrl {
      private content:string;

      constructor() {
         this.content = 'This content from GreeterCtrl!';
      }

      public doClick(content:string):void {
         console.log('@' + content + '@');
      }

   }
}