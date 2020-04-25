function tickets() {
  let fullName = prompt("What is your Full Name?");
  let age = prompt("Please instert your age");
  let quantity = prompt("How many tickets you want to purchase?");
  let email = prompt("What is your email address?");

  if (age >= 18) {
    alert(
      `Hi ${fullName}! Thank you for purchasing ${quantity} daily pass for the Fairy Music Festival. You will receive your ticket details shortly to ${email} 
         \nSpread love ❤️ & Good Music🎶!!!!`
    );
  } else {
    alert(
      `Sorry ${fullName}, unfortunately Fairy Music Festival is for +18 adults only. Come back next year, we will have space for all ages! 
             \nSpread love ❤️ & Good Music🎶!!!!`
    );
  }
}
let getTickets = document.querySelector(".getTickets");
getTickets.addEventListener("click", tickets);
