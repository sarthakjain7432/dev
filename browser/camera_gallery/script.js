let video = document.querySelector("video");
let recordBtnCont = document.querySelector(".record-btn-cont");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let recordBtn = document.querySelector(".record-btn");
let captureBtn = document.querySelector(".capture-btn");
let recordFlag = false;
let transparentColor = "transparent";

let recorder;
let chunks = []; // media data in chunks

let constraints = {
    video : true,
    audio : true
}
//navigator - global, browser info
navigator.mediaDevices.getUserMedia(constraints)
.then((stream) => {
    video.srcObject = stream;

    recorder = new MediaRecorder(stream); //i refer this from google
    recorder.addEventListener("start", (e) =>{
        chunks = []; // jab start ho to chunks ko empty karna hai
    })
    recorder.addEventListener("dataavailable", (e) => {
        chunks.push(e.data);
    })
    recorder.addEventListener("stop", (e) => {
        //Conversion of media chunks data to video
        let blob = new Blob(chunks, {type: "video/mp4"});
        // let videoURL = window.URL.createObjectURL(blob);

        if(db){
            let videoID = shortid();
            let dbTransaction = db.transaction("video", "readwrite");
            let videoStore = dbTransaction.objectStore("video");
            let videoEntry = {
                id : `vid-${videoID}`,
                blobData : blob
            }
            videoStore.add(videoEntry);
        }

        // let a = document.createElement("a");
        // a.href = videoURL;
        // a.download = "stream.mp4";
        // a.click();
    })
})

recordBtn.addEventListener("click", (e) => {
    if(!recorder) return;

    recordFlag = !recordFlag;

    if(recordFlag){ //start
        recorder.start();
        recordBtn.classList.add("scale-record");
        startTimer();
    }
    else{ //stop
        recorder.stop();
        recordBtn.classList.remove("scale-record");
        stopTimer();
    }
})

captureBtnCont.addEventListener("click", (e) => {
    captureBtn.classList.add("scale-capture");
    let canvas = document.createElement("canvas");
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;

    let tool  =canvas.getContext("2d");
    tool.drawImage(video, 0, 0, canvas.width, canvas.height);

    //Filtering
    tool.fillStyle = transparentColor;
    tool.fillRect(0, 0, canvas.width, canvas.height);

    let imageURL = canvas.toDataURL();
    if (db) {
      let imageID = shortid();
      let dbTransaction = db.transaction("image", "readwrite");
      let imageStore = dbTransaction.objectStore("image");
      let imageEntry = {
        id: `img-${imageID}`,
        url: imageURL
      };
      imageStore.add(imageEntry);
    }   
    // let a = document.createElement("a");
    // a.href = imageURL;
    // a.download = "image.jpg";
    // a.click();
    setTimeout(() => {
        captureBtn.classList.remove("scale-capture");
    }, 500)
})

let timerID;
let counter = 0; //represent total seconds
let timer = document.querySelector(".timer");
function startTimer() {
    timer.style.display = "block";
    function displayTimer() {
      let totalSeconds = counter;

      //pic related to this is in my phone
      let hours = Number.parseInt(counter / 3600); //10900 = 10900 / 3600 = 3
      totalSeconds = totalSeconds % 3600; //remaining value   //10900 = 10900 % 3600 = 7300

      let minutes = Number.parseInt(totalSeconds / 60); //7300 / 60 = 121
      totalSeconds = totalSeconds % 60; //remaining value //7300 = 7300 % 60 = 7240

      let seconds = totalSeconds;

      hours = (hours < 10) ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;


      timer.innerText = `${hours}:${minutes}:${seconds}`; 
      counter++;
    }

    timerID = setInterval(displayTimer, 1000);
}
function stopTimer() {
    clearInterval(timerID);
    timer.innerText = "00:00:00";
    timer.style.display = "none";
}

//filtering logic
let allFilters = document.querySelectorAll(".filter");
let filterLayer = document.querySelector(".filter-layer");
allFilters.forEach((filterElem) => {
    filterElem.addEventListener("click", (e) => {
        transparentColor = getComputedStyle(filterElem).getPropertyValue("background-color");
        filterLayer.style.backgroundColor = transparentColor;
    })
})