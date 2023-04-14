const GenerateBtn = document.querySelector('.frame button'),
 QRCode = document.querySelector('.frame img'),
 UserInput = document.querySelector('.frame input'),
 BaseAnimate = document.querySelector('.frame');

GenerateBtn.addEventListener('click', ()=>
{
    if(UserInput.value == "")
    {
        alert("Enter some values Please");
    }
    else
    {
        //API link for generating the QR Code of the provided Text or url.
        QRCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${UserInput.value}`;
        // QRCode.src = "QR Code.png";
        UserInput.value = "";
        alert("It's done my Friend ! ");
        
    }
});