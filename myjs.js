function triangle(){
  var qty=document.getElementById("inputt").value;

    for(var i=0; i<qty; i++){
      let div = document.createElement('div');
      div.className= "triangle";
      var r = Math.random();
      div.style.border = r * 400 + "px solid transparent";
      div.style.borderBottom = r * 400 + "px solid blue";
      div.style.top= 50 + r * 50 +"px";
      div.style.left= r *800 +"px";

      document.body.append(div);

      div.onclick = function(){
        if(div.style.borderBottomColor =="yellow") this.remove();
        else div.style.borderBottomColor ="yellow";
      };
    }
}
function square(){
  var qty=document.getElementById("inputt").value;
  for(var i=0; i<qty; i++){
    let div = document.createElement('div');
    div.className= "square";

    var r = Math.random();
    div.style.width = r * 300 + "px";
    div.style.height = r * 300 + "px";
    div.style.top= 100 + r * 50 +"px";
    div.style.left= r *1000 +"px";

    document.body.append(div);

    div.onclick = function(){
      if(div.style.background =="yellow") this.remove();
      else div.style.background ="yellow";
    };
  }
}

function circle(){
  var qty=document.getElementById("inputt").value;
  for(let i=0; i<qty; i++){
    let div = document.createElement('div');
    div.className= 'circle';

    let r = Math.random();
      div.style.width = r * 300 + "px";
			div.style.height = r * 300 + "px";
      div.style.top= 100 + r * 50 +"px";
      div.style.left= r *1000 +"px";

    document.body.append(div);

    div.onclick = function(){
      if(div.style.background =="yellow") this.remove();
      else div.style.background ="yellow";
    };
  }
}
