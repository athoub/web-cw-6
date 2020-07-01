// السوال الاول

// logger()


let web = ["lulu","athoub","dalal"];


function logger(web){
    for(let i = 0; i<web.length;i++)
    {console.log(web[i]);}
    }
logger(web);


// السوال الثاني

let temps1 = [20,30,40,50,60,];
let value = 40 ;// threshold - قيمه مبدئيه

let temps2 = [] ;

function hottestDays(array,th,empty_array){

for (let i = 0 ; i < array.length;i++){
if(array[i]<th)
    empty_array.push(array[i]);
}
return temps2;

}

console.log(hottestDays(temps1, value , temps2));
















// السوال الثالث
let books = [
   
    {
        name : "book1",
        ID:1
    },
    {
        name : "book2",
        ID:2
    },
    {
        name : "book3",
        ID:3
    },
    {
        name : "book4",
        ID:4
    },
];
    //  let bookID= 5;
    function getBookByID(){
        let holder = false;
        let bookID=prompt("ادخل رقم الكتاب")
        for (let i = 0 ; i < books.length;i++){
if (books[i].ID == bookID){
// return books [i];
console.log("وجدته");
      holder = true ; } 
       }
   if( holder==false){
console.log("error");

   } }

// console.log(getBookByID(bookID, books));
// // 4
let userInput = "";
let output =[];
userInput = prompt ("السلعه");



while (userInput !=="انتهيت"){
// userInput = prompt ("السلعه");
let price =parseFloat( prompt("السعر"))
let  quantity=parseInt(prompt("الكميه"))

let object = {
    name: userInput,
    price: price,
    quantity:quantity,
};


output.push(object);


// userInput = prompt("السلعه");


}


let totalprice = 0 ;

for (let i = 0; i < output.length;i++) {

console.log(
    output[i].quantity+
    " "+
    output[i].name+
    " "+
    output[i].quantity*output[i].price
);
totalprice+=output[i].quantity*output.price;}