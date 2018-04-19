// Default Parameters
// ES before ES6
interface People {
   name: string;
   id: number;
   say(): string;
   think(target: string): string;
}

class EmployerWithES5 implements People {
   name: string;
   id: number;
   constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
   }
   // Mix string with value of variable
   say = function (): any {
      return 'My name is ' + this.name + '. I am a employer with id ' + this.id;
   };
   // Function Declared
   think = function (target?: string): string {
      return `${this.name} will become ${target ? target : 'Manager'} in this year`;
   }

}

class ManagerWithES6 implements People {
   // Combine declare properties and constructor
   constructor(public name: string = 'Hoa', public id: number = 4, public sex: string) {
      this.name = name;
      this.id = id;
      this.sex = sex || 'male';
   }
   // Template Literals
   say = (): string => {
      return `My name is ${this.name}. I am a manager with id ${this.id}`;
   };
   // Arrow Function
   // Default Parameters
   think = (target: string = 'President') => `${this.name} will become ${target} in this year with ES6`;
}