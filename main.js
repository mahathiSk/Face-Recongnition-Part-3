Webcam.set({
    width:320,
    height:250,
    image_format:'jpeg',
jpeg_quality:90
});

camera=document.getElementById("webcam");

Webcam.attach('#webcam');

function Capture_Image(){
    Webcam.snap(function(data_uri){
    document.getElementById("snapshot").innerHTML="<img id='Image'src='"+data_uri+"'>";
});
}

console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0z3DPaZmA/model.json",modelLoaded);

function modelLoaded(){
console.log("model is loaded");
}

function Identify_Image(){
    Image_1 =document.getElementById("Image");
    classifier.classify(Image_1,gotResult);
    }
    
    function gotResult(error,results){
        if (error){
            console.error(error);
        }
        else {
            console.log(results);
            document.getElementById("Object_name").innerHTML=results[0].label;
            document.getElementById("Object_Accuracy").innerHTML=results[0].confidence.toFixed(2);
        }
    }