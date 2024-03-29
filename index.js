let startingPoint =[];
let endingPoint = [];
let image, scaledImgSizeX, scaledImgSizeY;

function cropImage(img) {
    
    const parent = document.querySelector("main");
    let imgUrl = URL.createObjectURL(img.target.files[0]);
    image = new Image();
    image.src = imgUrl;
    image.setAttribute("class", "imageToCrop")
    let container = document.createElement("div");
    container.setAttribute("class", "cropImageDiv");
    alert("kliknij na obrazek raz w miejscu gdzie chcesz zacząć obrys, jeżdżąc myszą góra-dół zmieniasz rozmiar obrysu, drugie kliknięcie zatwierdza, w razie niepowodzenia odśwież stronę, (tak wiem że działa wolno, to jest głupia strona, nie da się szybko)");
    container.append(image);
    parent.append(container);

    image.addEventListener("click", function(e) {

        let imgRect = this.getBoundingClientRect();
        let imgX = Math.floor(imgRect.left);
        let imgY = Math.floor(imgRect.top);
        let mouseX = Math.floor(e.clientX);
        let mouseY = Math.floor(e.clientY);
        let div = document.createElement("div");
        let frameW = 168;
        let frameH = 202;
        scaledImgSizeX = imgRect.width;
        scaledImgSizeY = imgRect.height;
        

        function createFrame(event) {

            let frameRect = div.getBoundingClientRect();
            div.style.width = `${Math.abs(startingPoint[1]-event.clientY+imgY)*(frameW/frameH)}px`;
            div.style.height = `${Math.abs(startingPoint[1]-event.clientY+imgY)}px`;
            

            endingPoint[0] = Math.floor(event.clientX+imgX);
            endingPoint[1] = Math.floor(event.clientY+imgY);

            parent.addEventListener("click", function() {


                container.removeEventListener("pointermove", createFrame);
                endingPoint[0] = Math.floor(frameRect.width);
                endingPoint[1] = Math.floor(frameRect.height);
                container.remove();
                
            });
           
        }

        if (startingPoint.length == 0) {

            startingPoint[0] = mouseX-imgX;
            startingPoint[1] = mouseY-imgY;

            endingPoint = [startingPoint];
            

            
            div.setAttribute("class", "frame");
            div.style.left = `${mouseX}px`;
            div.style.top = `${mouseY}px`;
            div.style.width = `${frameW}px`
            div.style.height = `${frameH}px`
            container.append(div)

            container.addEventListener("pointermove", createFrame)
        }
    });
}

function insertToCanvas(context, arr) {

    context.lineWidth = 4;
    context.font = "38px Arial"
    context.fillText(arr[1].value.trim(), 781, 141, 394);
    context.fillText(arr[2].value.trim(), 877, 175, 298);
    context.fillText(arr[3].value.trim(), 863, 210, 312);

    // PLATFORMA

    if(arr[5].checked) {
        context.beginPath();
        context.moveTo(667, 285);
        context.lineTo(701, 319);
        context.stroke();
        context.beginPath();
        context.moveTo(701, 285);
        context.lineTo(667, 319);
        context.stroke();
    }
    if(arr[6].checked) {
        context.beginPath();
        context.moveTo(765, 285);
        context.lineTo(799, 319);
        context.stroke();
        context.beginPath();
        context.moveTo(799, 285);
        context.lineTo(765, 319);
        context.stroke();        
    }
    if(arr[7].value.trim() != "") {
        context.beginPath();
        context.moveTo(859, 285);
        context.lineTo(893, 319);
        context.stroke();
        context.beginPath();
        context.moveTo(893, 285);
        context.lineTo(859, 319);
        context.stroke();

        context.font = "24px Arial";
        context.fillText(arr[7].value.trim().toUpperCase(), 849, 345, 59);
    }
    
    // JĘZYK
    
    if(arr[8].checked) {
        context.beginPath();
        context.moveTo(667, 374);
        context.lineTo(701, 408);
        context.stroke();
        context.beginPath();
        context.moveTo(701, 374);
        context.lineTo(667, 408);
        context.stroke(); 
    }
    if(arr[9].checked) {
        context.beginPath();
        context.moveTo(765, 374);
        context.lineTo(799, 408);
        context.stroke();
        context.beginPath();
        context.moveTo(799, 374);
        context.lineTo(765, 408);
        context.stroke(); 
    }
    if(arr[10].value.trim() != "") {
        context.beginPath();
        context.moveTo(859, 374);
        context.lineTo(893, 408);
        context.stroke();
        context.beginPath();
        context.moveTo(893, 374);
        context.lineTo(859, 408);
        context.stroke();

        context.font = "24px Arial";
        context.fillText(arr[10].value.trim().toUpperCase(), 849, 435, 59);
    }

    // CONTENT

    if(arr[11].checked) {
        context.beginPath();
        context.moveTo(1121, 285);
        context.lineTo(1155, 319);
        context.stroke();
        context.beginPath();
        context.moveTo(1155, 285);
        context.lineTo(1121, 319);
        context.stroke();
    }
    if(arr[12].checked) {
        context.beginPath();
        context.moveTo(1219, 285);
        context.lineTo(1253, 319);
        context.stroke();
        context.beginPath();
        context.moveTo(1253, 285);
        context.lineTo(1219, 319);
        context.stroke();
    }
    if(arr[13].value.trim() != "") {
        context.beginPath();
        context.moveTo(1312, 285);
        context.lineTo(1346, 319);
        context.stroke();
        context.beginPath();
        context.moveTo(1346, 285);
        context.lineTo(1312, 319);
        context.stroke();

        context.font = "24px Arial";
        context.fillText(arr[13].value.trim().toUpperCase(), 1302, 345, 59);
    }

    // TYP STREAMERA

    switch (arr[14].value) {
        case "Vtuber":
            context.beginPath();
            context.moveTo(1215, 129);
            context.lineTo(1249, 163);
            context.stroke();
            context.beginPath();
            context.moveTo(1215, 163);
            context.lineTo(1249, 129);
            context.stroke();
            break;
    
        case "Hybryda":
            context.beginPath();
            context.moveTo(1320, 129);
            context.lineTo(1354, 163);
            context.stroke();
            context.beginPath();
            context.moveTo(1354, 129);
            context.lineTo(1320, 163);
            context.stroke();
    }

    // OBRAZ

    startingPoint[0] = (startingPoint[0] * image.width) / scaledImgSizeX;
    startingPoint[1] = (startingPoint[1] * image.height) / scaledImgSizeY;
    endingPoint[0] = (endingPoint[0] * image.width) / scaledImgSizeX;
    endingPoint[1] = (endingPoint[1] * image.height) / scaledImgSizeY;
    context.drawImage(image, startingPoint[0], startingPoint[1], endingPoint[0], endingPoint[1], 507, 29, 168, 202);
    
    // KOLOROWY PASEK

    context.fillStyle = arr[4].value;
    context.fillRect(478, 245, 915, 23);
    context.fillStyle = "black";
}

document.addEventListener("DOMContentLoaded", function() {

    let formData;
    const form = document.querySelector("#vtuberForm");
    const inputPhoto = document.querySelector("#inputPhoto");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const bgImg = new Image(1500, 500);
    bgImg.src = "bg.png";
    bgImg.onload = function() {
        ctx.drawImage(bgImg, 0, 0);
    }
    
    form.addEventListener("submit", function(event) {
        
        event.preventDefault();

        let formValues = Array.from(document.querySelectorAll("input"));
        formValues.splice(14, 1)
        formValues.push(document.querySelector("select"));

        insertToCanvas(ctx, formValues);
    });

    inputPhoto.addEventListener("change", cropImage)

    let footerDate = new Date;
    let footer = document.querySelector("footer");
    footerDate = footerDate.getFullYear();
    footer.innerText += ` ${footerDate}`;

});

