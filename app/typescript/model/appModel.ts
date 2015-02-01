module com.axioma.model.AppModel {

   export interface Person {
      getName():string;
   }

   export interface ClassRegister {
      registerClass(className:string):void;
   }

   export class Student implements Person, ClassRegister {

      private firstname:string;
      private lastname:string;

      constructor(firstname:string, lastname:string) {
         this.firstname = firstname;
         this.lastname = lastname;
      }

      getName() {
         return this.firstname + '--' + this.lastname;
      }

      registerClass(className:string) {
         console.log('register [' + className + ']');
      }

   }
}



