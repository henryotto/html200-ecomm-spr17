 function handle() {

   if (document.customeremail.email.value) {
     event.preventDefault();
   }

   console.log("Added this email [" + document.customeremail.email.value + "] to our mailing list.");
   var handling = document.customeremail.email.value;
   alert("Thank you for signing up to our mailing list, " + handling + " !");

 }
