export class Material {
    private id : Number;
    private title : String;
    private date : String ;

    constructor(id:Number , title:String , date:String){
        this.id = id;
        this.title = title;
        this.date = date;
    }

    setId(id:Number) : void{
        this.id = id;
    }

    setTitle(title:String) : void{
        this.title = title;
    }

    setDate(date:String) : void{
        this.date = date;
    }
    
    getId() : Number{
        return this.id;
    }

    getTitle() : String{
        return this.title;
    }

    getDate() :String{
        return this.date;
    }

    checkMaterialById(id:Number) : Boolean{
        if(this.id== id)
            return true;
        else
            return false;
    }
}