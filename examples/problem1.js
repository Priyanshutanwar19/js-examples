let userRole="editor";
let isAuthenticated = true;
let userAge= 20;
if(!isAuthenticated){
    console.log("Please login");
}
else if(isAuthenticated && userRole=="admin"){
    console.log("Welcome to the dashboard");
}else{
    console.log("Acess denied");
}
