function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var delet = document.getElementById('delete')
 
    function keydown(evt) {
        var val = input.value;
        if(evt.key == "Enter" && val != ""){
            socket.emit("send message", val);
        }
    }

    window.onkeydown = keydown;

    function Delete(evt) {
        console.log(Delete)
        var val = input.value;
        if(evt.key == "Delete" && messages != ""){
            socket.emit("delete message", val);
        }
    }

    button.onclick = Delete;


    
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}

function deleteMessage(del) {
    var allPs = document.getElementsByTagName('p');
    for(var i in allPs) {
        allPs[i].parentElement.removeChild(allPs[i]);
    }
}


    
socket.on('display message', handleMessage);
socket.on('display message1',deleteMessage);
} // main closing bracket

window.onload = main;


