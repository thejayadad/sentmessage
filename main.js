
let send = document.getElementById("btn");
let message = document.getElementById("message")

send.addEventListener("click", () => {
    send.innerText = "Sending...";

    setTimeout(() => {
        send.style.display = "none";
        message.innerText = "Message Sent;"
    }, 5000)
})
