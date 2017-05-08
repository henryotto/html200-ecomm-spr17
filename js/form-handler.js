// console.log("Testing out form handling");

 function handle() {
   event.preventDefault();
  var handling = document.customeremail.email.value;

   console.log("Thank you for signing up to our mailing list, " + handling);
 }
