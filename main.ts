#! /usr/bin/env node

import inquirer from "inquirer";
const apiLink =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
const myPin = 1234;
let myBalance = 50000;

const userName = await inquirer.prompt(
    [
        {
            message:"please Enter your name ! ",
            name:"name",
            type:"input"
        }
    ]
);
console.log(`welcome Mr/Ms ${userName.name} to Use the Easy paisa Service's !`);

const userInput = await inquirer.prompt(
    [
        {
            message:"please select one option Whould you Want to access them ! ",
            name:"option",
            type:"list",
            choices:["Transfer money","Bill payment","Easy load","Savings"]
        }
    ]
);
// 1-Transfer money section
if(userInput.option === "Transfer money"){
let transOption = await inquirer.prompt(
    {
        message:"please select your Network !",
        name:"netork",
        type:"list",
        choices:["To Jazcash","U paisa","Easy paisa"]
    }
);
if(transOption.netork ==="To Jazcash"){
    let  amountAns = await inquirer.prompt(
        {
          message:"Please enter your Amount !",
          name:"amount",
          type:"number"
    }
    );
    if(amountAns.amount <= myBalance){
        myBalance -= amountAns.amount;
        console.log(`Your Remaining (current) Balance is ${myBalance}`);
        console.log(`Thanks for visiting to use (Easy paisa) services !`);
        console.log(`For servises (complane) or more informations please contact Us : Helpline:Email addres... (hasnainabass243@gmail.com)!`);
        }else{
            console.log(`you Don't sent ${amountAns.amount} amount`);
            console.log(`Yor current Balance is(${myBalance}`);
             (`!please Enter Amount under the (Current Balance)`)
            console.log(`please sent again Thanks!`);
            
        }

}
// ..
if(transOption.netork ==="U paisa"){
    let  amountAns = await inquirer.prompt(
        {
          message:"Please enter your Amount !",
          name:"amount",
          type:"number"
    }
    );
    if(amountAns.amount <= myBalance){
        myBalance -= amountAns.amount;
        console.log(`Your Remaining (current) Balance is ${myBalance}`);
        console.log(`Thanks for visiting to use (Easy paisa) services !`);
        console.log(`for servises (complane) or more informations please contact Us : Helpline:Email addres... (iqrarao553@gmail.com)!`);
        }else{
            console.log(`you Don't sent ${amountAns.amount} amount`);
            console.log(`Yor current Balance is(${myBalance})`); (`! please Enter Amount under the (Current Balance)`);
            console.log("please sent again Thanks!");
            
        }

}
// ''
if(transOption.netork ==="Easy paisa"){
    let  amountAns = await inquirer.prompt(
        {
          message:"Please enter your Amount !",
          name:"amount",
          type:"number"
    }
    );
    if(amountAns.amount <= myBalance){
        myBalance -= amountAns.amount;
        console.log(`Your Remaining (current) Balance is ${myBalance}`);
        console.log(`Thanks for visiting to use (Easy paisa) services !`);
        console.log(`For servises (complane) or more informations please contact Us : Helpline:Email addres... (iqrarao553@gmail.com)!`);
        }else{
            console.log(`you Don't sent ${amountAns.amount} amount`);
            console.log(`Yor current Balance is${myBalance}`); 
            (`! please Enter Amount under the (Current Balance)`);
            console.log("please sent again Thanks!");
            
        }

}

}
// 2-Bill payment section
if(userInput.option ==="Bill payment"){
let billAmount = await inquirer.prompt(
    {
        message:"Enter your bill Pament",
        name:"bill",
        type:"number"
    }
);
if(billAmount.bill <= myBalance){
    myBalance -= billAmount.bill;
    console.log(`Your Remaining (current) Balance is ${myBalance}`);
    console.log(`Thanks for visiting to use (Easy paisa) services !`);
    console.log(`For servises (complane) or more informations please contact Us : Helpline:Email addres..(iqrarao553@gmail.com)!`);
    }else{
        console.log(`you Don't pay ${billAmount.bill} amount`);
        console.log(`Yor current Balance is(${myBalance})`);
        (` ! please Enter Amount under the (Current Balance)`);
        console.log("please pay again Thanks!");
        
    }

}
// 3-Easy Load section 

if(userInput.option ==="Easy load"){}
    let copmName = await inquirer.prompt(
        {
            message:("please select your Network !"),
            name:"netorks",
            type:"list",
            choices:["Jazz/Warid","U-phone","Telenor","Zong"]
        }
    );
// ..
if(copmName.netorks ==="Jazz/Warid"){
    let  amountAns = await inquirer.prompt(
        {
          message:"Please enter your Amount !",
          name:"amount",
          type:"number"
        }
    );
    if(amountAns.amount<= myBalance){
        myBalance -= amountAns.amount;
        console.log(`Your Remaining (current) Balance is ${myBalance}`);
        console.log(`Thanks for visiting to use (Easy paisa) services !`);
        console.log(`For servises (complane) or more informations please contact Us : Helpline:Email addres... (iqrarao553@gmail.com!`);
        }else{
            console.log(`you Don't take Load Rs :${amountAns.amount} `);
            console.log(`Yor current Balance is(${myBalance}`) ;
            (`! please Enter Amount under the (Current Balance)`);
            console.log("lease try again Thanks!");
        }

}
// ..
if(copmName.netorks ==="U-phone"){
    let  amountAns = await inquirer.prompt(
        {
          message:"Please enter your Amount !",
          name:"amount",
          type:"number"
        }
    );
    if(amountAns.amount<= myBalance){
        myBalance -= amountAns.amount;
        console.log(`Your Remaining (current) Balance is ${myBalance}`);
        console.log(`Thanks for visiting to use (Easy paisa) services !`);
        console.log(`For servises (complane) or more informations please contact Us : Helpline:Email addres... (iqrarao553@gmail.com)!`);
        }else{
            console.log(`you Don't take Load Rs :${amountAns.amount}`);
            console.log(`Yor current Balance is(${myBalance})`) ;
            (`! please Enter Amount under the (Current Balance)`);
            console.log(`please try again Thanks!`);
        }
}
// ..
if(copmName.netorks ==="Telenor"){
    let  amountAns = await inquirer.prompt(
        {
          message:"Please enter your Amount !",
          name:"amount",
          type:"number"
        }
    );
    if(amountAns.amount<= myBalance){
        myBalance -= amountAns.amount;
        console.log(`Your Remaining (current) Balance is ${myBalance}`);
            }

// 4-savings section 

if(userInput.option ==="Savings"){
let passWord = await inquirer.prompt(
    {
        message:"Please Enter your 4 Digits pin Code",
        name:"pin",
        type:"number"
    }
);
if(passWord.pin === myPin){
console.log(`Your savings ammount is :${myBalance}`);
console.log("Thank for Trust on Easy paisa services !!");}
else{
    console.log("your pin number is incorrect please try again !");}}}