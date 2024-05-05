function submitFeedback() {
    var unameEl = document.getElementById("uname");
    var emailEl = document.getElementById("email");
    var msgEl = document.getElementById("msg")
    var uname = unameEl.value;
    var email = emailEl.value;
    var msg = msgEl.value;
    if (unameEl.checkValidity() && emailEl.checkValidity() && msgEl.checkValidity()) {
        var message = `Feedback sent as ${uname} (${email}): \"${msg}\"`;
        message += `\n\n\nUzi (@darkxwolf17) sent you a message:\n\n\"oh hey, ${uname}, heheh. thanks for your data. ur email is '${email}', isn't it? i'm smart, so if i were you i'd sit my ass at home and don't show up anywhere. i already know ur freaking ip and where u live >:)\"`;
        alert(message);
    } else {
        alert("Bite me, that data is not valid!");
    }
}