function validateCode()
{

   var code = document.forms["mc-embedded-subscribe-form"]["code"].value;
   if (code === "" || code !== "oxny")
   {
       alert("Please enter correct email ID")
       return false;
   }
   return( true );
}
