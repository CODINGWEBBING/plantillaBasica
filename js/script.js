/* VARIABLES */
var _wrapper = document.getElementById("wrapper");
var _close = document.getElementById("close");
var _IdLegal = document.getElementById("IdLegal");
    
    
/* LLAMADA API SIZMEK */ 
function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd(){
    setEvents();
}

/* EVENTOS */
function setEvents(){
  
    addEvent(_wrapper, "click", function () {
        EB.clickthrough("ALL CLICK");
    });
    
    addEvent(_close, "click", function () {
        EB.userActionCounter('BTN CERRAR CONDICIONES');
        classie.remove(legal, 'fadeInLegal');
        classie.add(legal, 'fadeOutLegal');
    });
    
    addEvent(_IdLegal, "click", function () {
        EB.userActionCounter('BTN CONDICIONES');
        classie.remove(legal, 'fadeOutLegal');
        classie.add(legal, 'fadeInLegal');
    });
}

window.onload = initEB;