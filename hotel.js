function datetime() {
    document.getElementById('placeholder2').innerHTML = new Date()
}
// function remove() { // remove function was not closed properly in the original code
//     document.getElementById("removeItem").innerHTML = ""
// }
function lock() {
    // Get the button element by its ID
    var button = document.getElementById('list')
    // Set the disabled property to true
    button.disabled = true; 
    document.getElementById("placeholder3").innerHTML= "Room is locked."
    document.getElementById('placeholder4').innerHTML = ""
    
}
function unlock() {
    var button = document.getElementById('list');
    button.disabled = false
    document.getElementById("placeholder3").innerHTML = "Room is unlocked."
    document.getElementById("placeholder4").innerHTML = ""
}
    if(items.length >= 5) {
        button.disabled = true
        document.getElementById('placeholder3').innerHTML = ""
        document.getElementById('placeholder4').innerHTML = "Room cannot be unlocked due to being full."
    
}
function clearall() {
    document.getElementById("placeholder").innerHTML = ""
    document.getElementById("list").value = ""
    items = []; // Also clear the items array in JS
    unlock(); // Ensure room can be unlocked after clearing
    document.getElementById("placeholder3").innerHTML = ""
    document.getElementById("placeholder4").innerHTML = ""
}
function remove() {
   let ritem = document.getElementById('rem').value
   if(ritem in list) {
    let reitem = document.getElementsByTagName("ritem")[list]
    document.getElementById(reitem).value = ""
    document.getElementById("placeholder").innerHTML = ""
    document.getElementById("rem").innerHTML = ""
   }
   else {
    document.getElementById('placeholder6').innerHTML = "Guest not found in Guest list. Please enter a valid guest to remove."
    document.getElementById('rem').value = ""
   }
}
