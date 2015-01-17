$(document).ready(function () {
          $('#gender-modal').modal('show');
});

function validateCode()
{

   var code = document.getElementById("code").value;

   if (code === "" || code !== "2015preevent")
   {
        swal({
          title: "招待コードが違います。",
          text: "OXNYは完全招待制です。\n 正しい招待コードをご入力頂ます様、お願いします。",
          imageUrl:"https://s3-ap-northeast-1.amazonaws.com/oxny/LOGO/Flowerflasklogo_black.png"
        });
    return false;
   }
    return( true );
}

$('[id=mc-embedded-subscribe]').on('click', validateCode);
