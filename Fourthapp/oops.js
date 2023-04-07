//encapsulation?

/*function student(sno,name){
this.sno=sno
this.name=name

}
student.prototype.display=function(){
    console.log("sno:"+this.sno +"name:"+this.name)
}

a=new student(1,james)
b=new student(2,Harsha)*/
//--------------------------------------------------------------------------------------------------------
//class code 
class student{
    constructor(sno,name){
        this .sno=sno
        this.name =name
    }
display(){
    console.log(this.sno,this.name)
}}
a=new student (1,"james")
b=new student(2,Harsha)

a.display()
b.display()
//---------------------------------------------------------------------------------------------------------
/*class info{
    constructor(data){
    this.data=data}
}
display();{
    console.log(this .data,"is the data")
}
changeit();{
   /* givenewdata(function(value)){
    this.data=value}.bind(this)*/
  /*  givenewdata((value)=>this.data=value)
}
function givenewdata(value){
let x=["india","earth",chess]
value(x[math.floor(Math.random()*6)])}
Object.info("cricket")
Object.display()
Object.changeit()
Object.display()*/
//-------------------------------------------------------------------------------------------------
//asynchornic
/*function givendata(){
    setTimeout(()=>{
        console.log("processing")
        return "india";

    },3000)
}
info=givendata()
console.log("something else")
console.log(info)*/
/*
function givendata(){
    return new Promise(
        funtion(resolve,reject){
    setTimeout(()=>{
        console.log("processing")
        return ("india");

    },3000)}*/