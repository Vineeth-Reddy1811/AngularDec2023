// export class Ingredient{

//     public name : string;
//     public amount : number;

//     constructor(name:string, amount:number) {
//         this.name=name;
//         this.amount=amount;
//     }
// }
// Instead of all this we can simply write

export class Ingredient{
    constructor(public name:string, public amount:number) {
        
    }
}