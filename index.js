function insertToCanvas(context, color, img) {

    //obrazek
    let imgOb = new Image(168, 202);
    imgOb.width = 168;
    imgOb.height = 202;
    imgOb.src = URL.createObjectURL(img);
    imgOb.onload = function() {
        
        let imgX = imgOb.width;
        let imgY = imgOb.height;
        /*context.drawImage(imgOb,
            Math.max(0, (imgX-168)/2),
            Math.max(0, (imgY-202)/2),
            168,
            202,
            507, 29, 168, 202);*/
        context.drawImage(imgOb, 507, 29);
    }
    
    //kolorowy pasek
    context.fillStyle = color;
    context.rect(478, 245, 915, 23);
    context.fill();

    

}

document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("#vtuberForm");
    let formData;
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const bgImg = new Image(1500, 500);
    bgImg.src = "bg.png";
    ctx.drawImage(bgImg, 0, 0);
    
    form.addEventListener("submit", function(event) {
        
        formData = new FormData(form);
        event.preventDefault();
        let formValues = []
        for(let value of formData.values()){
            formValues.push(value);
        }

        insertToCanvas(ctx, "violet", formValues[0]);
    });
});

