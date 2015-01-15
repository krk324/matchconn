function validateCode()
{

   var code = document.forms["mc-embedded-subscribe-form"]["code"].value;
   if (code === "" || code !== "oxny")
   {
        swal({
          title: "招待コードが違います。",
          text: "OXNYは完全招待制です。\n 正しい招待コードを入力してください。",
          imageUrl:"https://s3-ap-northeast-1.amazonaws.com/oxny/LOGO/Flowerflasklogo_black.png"
        });
    return false;
   }
    return( true );
}

$('#mc-embedded-subscribe').on('click', validateCode);
