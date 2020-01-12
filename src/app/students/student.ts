export class Student {
    private id:Number;
    private name:String;
    private major:String;
    private color:String;

    constructor(id:number , name:String , major:String , color:String){
        this.id = id;
        this.name = name;
        this.major = major;
        this.color = color;
    }

    setId(id :number) : void {
        this.id = id;
    }

    setName(name:String) : void {
        this.name = name; 
    }

    setMajor(major:String) : void {
        this.major= major; 
    }

    setColor(color:String) : void {
        this.color = color; 
    }

    getId() : Number {
         return this.id;
    }

    getName() : String  {
        return this.name; 
    }

    getMajor() : String {
        return this.major; 
    }

    getColor() : String  {
        return this.color ; 
    }

    checkStudentlById(id:Number) : boolean{
        if(this.id == id )
            return true ;
        else
            return false;
    }
}