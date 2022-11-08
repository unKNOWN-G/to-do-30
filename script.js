items = [];
function additems(){
    items.push(document.getElementById("work").value);
    var htmlString = "";
    for(var i=0;i<items.length;i++){
        htmlString+= `<tr><td>${items[i]}</td></tr>`
    }
    document.getElementById("displayItems").innerHTML = htmlString ;
    console.log(items);
}