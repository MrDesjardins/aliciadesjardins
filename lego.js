window.addEventListener('load', function() {
    console.log('Ready');
})

// const radios = document.getElementsByName("color")
// for (var i = 0 ; i < radios.length; i++) {
//     radios[i].addEventListener("click", onColorClick);
// }

function onColorClick(event){
    console.log("Clicked from", event.currentTarget.name, " with value", event.currentTarget.value);
}