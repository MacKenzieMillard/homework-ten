function initListeners(){
    $(".homeNav .links a").click(function(e){
        let btnID = e.currentTarget.id;
        // console.log("click" + btnID);
        MODEL.changePageContent(btnID)
        
    })
}

$(document).ready(function(){
    initListeners();
    MODEL.changePageContent("home");
})