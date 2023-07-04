//delgetstei ajillah controller 
var uniController = (function(){

})();

// sanhuutei ajillah controller
var financeController = (function(){})();

// programmiin holbogch controller
var appController = (function(uniController, financeController){
    var ctrlAddItem = function() {
        // 1.oruulah ugugdliig delgetsnees ol avna.
        console.log("delgetsnees ogogdloo avah heseg");
        // 2.olj avsan ugugdluuudee sanhuugiin controllert damjuulj tend hadgalna
        // 3.olj avsan ugugdluudee web deeree tohiroh hesegt ni gargana
        // 4.tosviig totsoolno
        // 5.etssiin uldegdel, tootsoog delgetsend gargana.
    };

    document.querySelector('.add__btn').addEventListener('click', function(){
        ctrlAddItem();
        });

    document.addEventListener("keypress", function(event) {
        if (event.keyCode ===  13){
            ctrlAddItem();
        }
    })
})(uniController, financeController);