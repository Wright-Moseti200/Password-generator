let values = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "~", "`", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", "?", "/"];
let passValues = document.querySelector("input");
let password = "";
let button = document.querySelector("button");

function generate()

{
    
    for (let i = 0; i < 15; i++)
    {
        let index = Math.floor(Math.random()*values.length);
        password += values[index];
    }
    passValues.value = password;
    password = "";

}

