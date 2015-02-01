interface Person {
   getName():string;
}

class Student implements Person {

   firstname:string;
   lastname:string;

   constructor(firstname:string, lastname:string) {
      this.firstname = firstname;
      this.lastname = lastname;
   }

   getName() {
      return this.firstname + '--' + this.lastname;
   }
}



