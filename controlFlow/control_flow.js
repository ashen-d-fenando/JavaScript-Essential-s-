let userRole = "admin";
let accessLevel;

if(userRole ==='admin'){
    accessLevel = "Full access granted";
}else if(userRole ==="manager"){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "No access Granted";
}

console.log("Access Level",accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole ==="admin"){
        userMessage = "Welcome , Admin!";
    }else{
        userMessage = "Welcome user";
    }
}else{
    userMessage = "Please log in to access the system ";
}

console.log("User Message",userMessage);


let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User category: ",userCategory);

let isAuthenticated  = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:",authenticationStatus);


//Practical Task

let person = "employee";
let message;

switch(person){
    case "employee":
        console.log("You are an Employee of the Dietary Service");
        break;
    case "enrolled-member":
        console.log("You are Enrollrd Member of Dietary Services ");
        break;
    case 'subscriber':
        console.log("You are a subscriber of this Dietary Services");
        break;
    default:
        console.log("You are not a Subscriber , please Subscribe first");

}
