Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
 
  camera=document.getElementById("camera");
 Webcam.attach('#camera');
 function snap()
{
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById("result").innerHTML = 
         '<img id="imageprev" src="'+data_uri+'"/>';
        } );
}
console.log('ml5 version', ml5.version);
drisha= ml5.imageClassifier()