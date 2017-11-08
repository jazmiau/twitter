function add(){
  /*obteniendo comentario y guardandolo*/
  var comments = document.getElementById('comment').value;
  /*al escribir comentio se borra el "qué estás pensando"*/
  document.getElementById('comment').value = "";
  /*crear div para guardar comentarios*/
  var newComments = document.createElement('div');
  var cont = document.getElementById('cont');
  /*crear párrafo del comentario*/
  var paragraph = document.createElement('p');
  paragraph.classList.add('color');
  /*crear un nodo de texto*/
  var textNode = document.createTextNode(comments);
  /*juntando el nodo con el comentario*/
  paragraph.appendChild(textNode);
  /*integrando los comentarios*/
  newComments.appendChild(paragraph);
  /*ingrenado los nuevos comentarios a mi div contenedor*/
  cont.appendChild(newComments);

}

//function character(){
//  var val = document.getElementById('num').value;
//  var max = 140;
//  var text = document.getElementById('cont').value;
//  var long = text.length;

//  text.innerHTML = max-long;
