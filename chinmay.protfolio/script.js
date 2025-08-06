var audio = new Audio('assets/sentmessage.mp3');

var contactString = `
<div class='social'> 
  <a target='_blank' href='tel:+918767038580'> 
    <div class='socialItem' id='call'>
      <img class='socialItemI' src='images/phone.svg'/>
      <label class='number'>8767038580</label>
    </div> 
  </a> 
  <a href='mailto:chinmaykabdi238@gmail.com'> 
    <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> 
  </a> 
  <a target='_blank' href='https://github.com/chinmay-kabadi'> 
    <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> 
  </a> 
  <a target='_blank' href='https://wa.me/918767038580'> 
    <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> 
  </a> 
  <a target='_blank' href='https://t.me/chinmaykabadi'> 
    <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> 
  </a> 
  <a target='_blank' href='https://instagram.com/c_h_i_n_m_a_y7'> 
    <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> 
  </a> 
  <a href='https://www.linkedin.com/in/chinmay-kabadi-497959354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank' rel='noopener noreferrer'> 
    <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> 
  </a> 
</div>`;

var resumeString = `
<img src='images/resumeThumbnail.png' class='resumeThumbnail'>
<div class='downloadSpace'>
  <div class='pdfname'>
    <img src='images/pdf.png'>
    <label>Chinmay_Kabadi_Resume.pdf</label>
  </div>
  <a href='assets/Chinmay_Kabadi_Resume.pdf' download='Chinmay_Kabadi_Resume.pdf'>
    <img class='download' src='images/downloadIcon.svg'>
  </a>
</div>`;

var addressString = `
<div class='mapview'>
  <iframe src='https://www.google.com/maps/embed?...' class='map'></iframe>
</div>
<label class='add'>
  <address>JUNNAR<br> City:PUNE<br>MAHARASHTRA, INDIA - 410502</address>
</label>`;

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = x.style.display === 'flex' ? 'none' : 'flex';
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = x.style.display === 'flex' ? 'none' : 'flex';
}

function isEnter(event) {
    if (event.keyCode == 13) sendMsg();
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (ti.trim() === "") return;

    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = ti;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);

    document.getElementById("chatting").scrollTop = document.getElementById("chatting").scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    document.getElementById("lastseen").innerText = "typing...";

    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Chinmay Kabadi</a>.</span><br><br>I am a Computer Science student passionate about technology, problem solving, and web development.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;

        case "help":
            sendTextMessage("<span class='sk'>Send a keyword to learn more:<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to view/download my resume<br><span class='bold'>'education'</span> - to see my academic background<br><span class='bold'>'address'</span> - to get my location<br><span class='bold'>'contact'</span> - to connect with me<br><span class='bold'>'projects'</span> - to check out my work<br><span class='bold'>'clear'</span> - to clear chat<br><span class='bold'>'about'</span> - about this website</span>");
            break;

        case "resume":
            sendTextMessage(resumeString);
            break;

        case "skills":
            sendTextMessage("<span class='sk'>I’m skilled in:<br><span class='bold'>HTML, CSS, JavaScript, Python, C, C++</span><br>Frameworks/Libraries: <span class='bold'>React.js, Bootstrap</span><br>Tools: <span class='bold'>Git, GitHub, VS Code</span><br>Platforms: <span class='bold'>Windows, Linux (Ubuntu)</span></span>");
            break;

        case "education":
            sendTextMessage("🎓 I have completed my Bsc it degree.<br>Institute: shakarrao butte patil Bsc IT college<br>Passing Year: 2025<br><br>Higher Secondary:shankarrao butte patil Jr. College (2021)<br>Score: 58%<br><br>SSC: kmv High School (2019)<br>Score: 80%");
            break;

        case "address":
            sendTextMessage(addressString);
            break;

        case "clear":
            clearChat();
            break;

        case "about":
            sendTextMessage("🛠️ This interactive portfolio is made with HTML, CSS, and JavaScript<br>💡 Designed and developed by <span class='bold'>Chinmay Kabadi</span> with ❤️.");
            break;

        case "contact":
            sendTextMessage(contactString);
            break;

        case "projects":
            sendTextMessage("Check out my projects here:<br><br><div class='social'><a target='_blank' href='https://github.com/chinmaykabadi'><div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div></a></div>");
            break;

        default:
            setTimeout(() => {
                sendTextMessage("Sorry, I didn't understand that. 😢<br>Send 'help' for available commands.");
            }, 2000);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce("intro");
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    document.getElementById("chatting").scrollTop = document.getElementById("chatting").scrollHeight;
    playSound();
}

function sendResponse() {
    // You can define a custom fallback response here
}

function playSound() {
    audio.play();
}
