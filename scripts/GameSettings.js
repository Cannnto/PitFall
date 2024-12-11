var keys = [];

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

function keydown(event)
{   keys[event.keyCode] = true;
    // console.log(event.keyCode)
}
function keyup(event)
{   keys[event.keyCode] = false;
}