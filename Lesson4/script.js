function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var delet = document.getElementById('delete')

    function keydown(evt) {
        var val = input.value;
        if (evt.key == "Enter" && val != "") {
            socket.emit("send message", val);
        }
        else if (evt.key == "Backspace") {
            socket.emit("delete message");
        }
    }

    window.onkeydown = keydown;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    function deleteMessage() {
        var allPs = document.getElementsByTagName('p');
        for (var i in allPs) {
            if (allPs.length > 0){
                chatDiv.removeChild(chatDiv.lastChild);
                console.log(chatDiv.lastChild);
            }
        }
    }



    socket.on('display message', handleMessage);
    socket.on('display message1', deleteMessage);
} // main closing bracket

window.onload = main;


function draw() {
    var value = 0
    fill(value);
    rect(25, 25, 50, 50);
}
function mouseDragged() {
    ellipse(mouseX, mouseY, 5, 5);
    return false;
}
function setup() {
    createCanvas(500, 500)
    background('#acacac')
}


















































// function main() {
//     var socket = io.connect('http://localhost:3000');
//     var chatDiv = document.getElementById('chat');
//     var input = document.getElementById('message');
//     var button = document.getElementById('submit');
//     var del = document.getElementById('del')

//     var value = 0;


//     function keydown(evt) {
//         var val = input.value;
//         if (evt.key == "Enter" && val != "") {
//             socket.emit("send message", val);
//         }
//     }


//     window.onkeydown = keydown;




//     function deletemessages() {
//         socket.emit("delete message");
//     }



//     del.onclick = deletemessages;

//     function handleMessage(msg) {
//         var p = document.createElement('p');
//         p.innerText = msg;
//         chatDiv.appendChild(p);
//         input.value = "";
//     }

//     socket.on('display message', handleMessage);



//     socket.on('now delete your messages', function () {
//         var ps = document.getElementsByTagName('p');
//         for (var i in ps) {
//             ps[i].parentElement.removeChild(ps[i]);
//         }
//     });
// } // main closing bracket

// window.onload = main;


// function mouseDragged() {
//     ellipse(mouseX, mouseY, 5, 5);
//     // prevent default
//     return false;
// }
// function setup() {
//     createCanvas(500, 500)
//     background('#acacac')
// }