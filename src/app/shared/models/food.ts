export class foods{
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean=true;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string
    origins!:string[];
}