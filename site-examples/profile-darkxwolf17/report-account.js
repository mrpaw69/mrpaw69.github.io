let alertCounter = 0
let alertPresented = false
let ip = "127.0.0.1"
let pause = (time) => new Promise(resolve => setTimeout(resolve, time))


function getIP(json) {
    ip = json.ip;
}





async function reportAccount() {
    if (alertPresented) {
        return;
    }
    alertPresented = true
    await pause(2000)
    alertCounter += 1
    if (alertCounter == 1) {
        alert("Uzi (@darkxwolf17) sent you a message:\n\n\"it doesn't work, moron\"");
    } else if (alertCounter == 2) {
        alert("Uzi (@darkxwolf17) sent you a message:\n\n\"i said it doesn't work!\"");
    } else if (alertCounter == 3) {
        alert("Uzi (@darkxwolf17) sent you a message:\n\n\"bite me, why you keep clicking!?\"");
    } else if (alertCounter == 4) {
        alert("Uzi (@darkxwolf17) sent you a message:\n\n\"keep clicking that button, karma will get ya...\"");
    } else if (alertCounter == 5) {
        alert(`Uzi (@darkxwolf17) sent you a message:\n\n\"ight, you want it bad way, let it be bad way, by the way your ip is ${ip}, now i can easily get the location where you live >:3\"`);
    } else {
        alert("Uzi (@darkxwolf17) is on her way to your house. Note from the user: \"lock your doors, im coming. i know your address, you can't hide. heh why am i even mentioning that? doors aren't gonna stop me heheh >:)\"");
    }
    alertPresented = false
}