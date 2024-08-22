let video = document.getElementById("videoInput"); // video is the id of video tag
let canvas = document.getElementById("canvasOutput");
let context = canvas.getContext("2d");

function processVideo() {
    // Access webcam stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        });

    video.addEventListener('play', function() {
        function draw() {
            context.drawImage(video, 0, 0, 640, 480);
            // Here you can add OpenCV.js code to process the frame
            requestAnimationFrame(draw);
        }
        draw();
    }, false);
}

Module.onRuntimeInitialized = () => {
    processVideo();
};

