

function to_page(page){
    console.log("to " + page);
    window.location.href = "./" + page + ".html";
}

function to_externalPage(page){
    console.log("to " + page);
    window.open(page, "_blank");
}