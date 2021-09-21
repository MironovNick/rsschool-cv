
function hidden_menuUp(){
	
	let elem = document.getElementById("hidden_menu");
	
	elem.className = "hidden_menu";
	
}

function hidden_menuDn(){
	
	let elem = document.getElementById("hidden_menu");
	
	elem.className = "hidden_menu_active";
	
}

	let marginY = 0;
	let destination = 0;
	let speed = 20;
	let scroller = null;

function initScroll(elementId){
  hidden_menuDn();
  destination = document.getElementById(elementId).offsetTop;
  marginY = Math.max(window.pageYOffset, marginY);
  
  scroller = setTimeout(function(){
    initScroll(elementId);
  },1);
        
  if (marginY < destination - 60){
    marginY = marginY + speed;
    if(marginY >= destination - 60){
      clearTimeout(scroller);
      
    } 
  }
  else {
    marginY = marginY - speed;
    if(marginY <= destination -60){
      clearTimeout(scroller);
      
    }    
  }

  window.scroll(0, marginY);

}