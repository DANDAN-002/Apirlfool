document.querySelector("button").addEventListener("click", clicked);

function clicked (event){
    window.close();
}
function closeWindow() {
  
    // Open the new window 
    // replace the current page
    // using _self
    
    let my_window =
        open(location, '_self');

    // Close this window
    my_window.close();

    return false;
}
