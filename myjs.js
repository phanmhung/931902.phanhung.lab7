function display(n){
  var qty=document.getElementById("inputt").value;
  body=document.body;

  if(n==2){
    for(var i=1; i<=qty; i++){
      var div = document.createElement('div');
      div.className= "triangle";
      var r = Math.random();
      div.style.border = r * 400 + "px solid transparent";
      div.style.borderBottom = r * 400 + "px solid blue";
      div.style.top= 50 + r * 50 +"px";
      div.style.left= r *800 +"px";

      body.before(div);

      div.onclick = function(){
        if(div.style.borderBottomColor =="yellow") this.remove();
        else div.style.borderBottomColor ="yellow";
      };
    }
  }
  else {
    for(var i=1; i<=qty; i++){
      var div = document.createElement('div');
      if(n==1) div.className= "square";
      else div.className= "circle";

      var r = Math.random();
      div.style.width = r * 300 + "px";
			div.style.height = r * 300 + "px";
      div.style.top= 100 + r * 50 +"px";
      div.style.left= r *1000 +"px";

      body.before(div);

      div.onclick = function(){
        if(div.style.borderBottomColor =="yellow") this.remove();
        else div.style.borderBottomColor ="yellow";
      };
    }
  }
}
