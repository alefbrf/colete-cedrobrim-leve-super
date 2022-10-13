//PARTES
  //base
  const btnbase = document.getElementById('base');
  btnbase.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "visible";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
//base branca
const bntcorbasebranco = document.getElementById('whitebase');
bntcorbasebranco.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fff");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#fff");
  document.getElementById('CB').style.backgroundColor = "#fff";
});

//base preta
const btncorbasepreto = document.getElementById('blackbase');
btncorbasepreto.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#010203");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#010203");
  document.getElementById('CB').style.backgroundColor = "#010203";
});
//base azul
const btncorbaseazul = document.getElementById('bluebase');
btncorbaseazul.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#943529");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#943529");
  document.getElementById('CB').style.backgroundColor = "#943529";
});    
//base vermelha
const btncorbasevermelha = document.getElementById('redbase');
btncorbasevermelha.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#1d2643");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#1d2643");
  document.getElementById('CB').style.backgroundColor = "#1d2643";
});  
//base amarela
const btncorbaseamarela = document.getElementById('yellowbase');
btncorbaseamarela.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ed6840");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#ed6840");
  document.getElementById('CB').style.backgroundColor = "#ed6840";
});  
//base verde
const btncorbaseverde = document.getElementById('greenbase');
btncorbaseverde.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#f8ab14");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#f8ab14");
  document.getElementById('CB').style.backgroundColor = "#f8ab14";
});  


document.getElementById('cor7').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#008865");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#008865");
  document.getElementById('CB').style.backgroundColor = "#008865";
});  

document.getElementById('cor8').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#649388");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#649388");
  document.getElementById('CB').style.backgroundColor = "#649388";
});  

document.getElementById('cor9').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#314f41");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#314f41");
  document.getElementById('CB').style.backgroundColor = "#314f41";
});  

document.getElementById('cor10').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#47b6ab");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#47b6ab");
  document.getElementById('CB').style.backgroundColor = "#47b6ab";
});  

document.getElementById('cor11').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#223b7b");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#223b7b");
  document.getElementById('CB').style.backgroundColor = "#223b7b";
});  

document.getElementById('cor12').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#587dbc");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#587dbc");
  document.getElementById('CB').style.backgroundColor = "#587dbc";
});  

document.getElementById('cor13').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#2a3c74");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#2a3c74");
  document.getElementById('CB').style.backgroundColor = "#2a3c74";
});  

document.getElementById('cor14').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#2c313c");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#2c313c");
  document.getElementById('CB').style.backgroundColor = "#2c313c";
});  

document.getElementById('cor15').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#5b463b");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#5b463b");
  document.getElementById('CB').style.backgroundColor = "#5b463b";
});  

document.getElementById('cor16').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#8f7d6f");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#8f7d6f");
  document.getElementById('CB').style.backgroundColor = "#8f7d6f";
});  

document.getElementById('cor17').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#957152");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#957152");
  document.getElementById('CB').style.backgroundColor = "#957152";
});  

document.getElementById('cor18').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#888485");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#888485");
  document.getElementById('CB').style.backgroundColor = "#888485";
});  

document.getElementById('cor19').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#8b807a");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#8b807a");
  document.getElementById('CB').style.backgroundColor = "#8b807a";
});  

document.getElementById('cor20').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#455158");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#455158");
  document.getElementById('CB').style.backgroundColor = "#455158";
});  

document.getElementById('cor21').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#bca68e");
  document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#bca68e");
  document.getElementById('CB').style.backgroundColor = "#bca68e";
});  

  //friso
  const btnbolsoB = document.getElementById('bolso1');
  btnbolsoB.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "visible";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "visible";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "visible";}
  });
 //friso branco
  const bntcorbolsoBbranco = document.getElementById('whitebase8');
  bntcorbolsoBbranco.addEventListener('click', function(e){
    document.getElementById('BB').style.backgroundColor = "#fff";
    document.querySelector(".frente8").style.display = "none";
    document.querySelector(".frente9").style.display = "none";
    document.querySelector(".frente10").style.display = "none";
    document.querySelector(".frente11").style.display = "none";
    document.querySelector(".costas3").style.display = "none";
    document.querySelector(".costas2").style.display = "none";
    document.querySelector(".costas4").style.display = "none";
    document.querySelector(".costas5").style.display = "none";
  });

 //friso preta
  const btncorbolsoBpreto = document.getElementById('blackbase8');
  btncorbolsoBpreto.addEventListener('click', function(e){
    document.getElementById('BB').style.backgroundColor = "#D7D5D2";
    document.querySelector(".frente8").style.display = "block";
    document.querySelector(".frente9").style.display = "none";
    document.querySelector(".frente10").style.display = "none";
    document.querySelector(".frente11").style.display = "none";
    document.querySelector(".costas3").style.display = "block";
    document.querySelector(".costas2").style.display = "none";
    document.querySelector(".costas4").style.display = "none";
    document.querySelector(".costas5").style.display = "none";
  });
 //friso azul
  const btncorbolsoBazul = document.getElementById('bluebase8');
  btncorbolsoBazul.addEventListener('click', function(e){
    document.getElementById('BB').style.backgroundColor = "#9FD235";
    document.querySelector(".frente8").style.display = "none";
    document.querySelector(".frente9").style.display = "none";
    document.querySelector(".frente10").style.display = "none";
    document.querySelector(".frente11").style.display = "block";
    document.querySelector(".costas3").style.display = "none";
    document.querySelector(".costas2").style.display = "none";
    document.querySelector(".costas4").style.display = "none";
    document.querySelector(".costas5").style.display = "block";
  });    
 //friso vermelha
  const btncorbolsoBvermelha = document.getElementById('redbase8');
  btncorbolsoBvermelha.addEventListener('click', function(e){
    document.getElementById('BB').style.backgroundColor = "#EA4C1E";
    document.querySelector(".frente8").style.display = "none";
    document.querySelector(".frente9").style.display = "none";
    document.querySelector(".frente10").style.display = "block";
    document.querySelector(".frente11").style.display = "none";
    document.querySelector(".costas3").style.display = "none";
    document.querySelector(".costas2").style.display = "none";
    document.querySelector(".costas4").style.display = "block";
    document.querySelector(".costas5").style.display = "none";
  });  
 //friso amarela
  const btncorbolsoBamarela = document.getElementById('yellowbase8');
  btncorbolsoBamarela.addEventListener('click', function(e){
    document.getElementById('BB').style.backgroundColor = "#D7D5D2";
    document.querySelector(".frente8").style.display = "none";
    document.querySelector(".frente9").style.display = "block";
    document.querySelector(".frente10").style.display = "none";
    document.querySelector(".frente11").style.display = "none";
    document.querySelector(".costas3").style.display = "none";
    document.querySelector(".costas2").style.display = "block";
    document.querySelector(".costas4").style.display = "none";
    document.querySelector(".costas5").style.display = "none";
  });  
 //friso verde
  const btncorbolsoBverde = document.getElementById('greenbase8');
  btncorbolsoBverde.addEventListener('click', function(e){
    document.getElementById('BB').style.backgroundColor = "#D7D5D2";
  });


  //bolsos opçoes
  document.getElementById("botoes").addEventListener('click', function(e){
    document.querySelector(".frente2").style.display = "block";
    document.querySelector(".frente3").style.display = "none";
    document.querySelector(".frente4").style.display = "none";
    document.querySelector(".frente5").style.display = "none";
    document.querySelector(".frente6").style.display = "none";
    document.querySelector(".frente7").style.display = "none";
  });

  document.getElementById("gola1").addEventListener('click', function(e){
    document.querySelector(".frente2").style.display = "none";
    document.querySelector(".frente3").style.display = "block";
    document.querySelector(".frente4").style.display = "none";
    document.querySelector(".frente5").style.display = "none";
    document.querySelector(".frente6").style.display = "none";
    document.querySelector(".frente7").style.display = "none";
  });
  document.getElementById("gola2").addEventListener('click', function(e){
    document.querySelector(".frente2").style.display = "none";
    document.querySelector(".frente3").style.display = "none";
    document.querySelector(".frente4").style.display = "block";
    document.querySelector(".frente5").style.display = "none";
    document.querySelector(".frente6").style.display = "none";
    document.querySelector(".frente7").style.display = "none";
  });
  document.getElementById("punho").addEventListener('click', function(e){
    document.querySelector(".frente2").style.display = "none";
    document.querySelector(".frente3").style.display = "none";
    document.querySelector(".frente4").style.display = "none";
    document.querySelector(".frente5").style.display = "block";
    document.querySelector(".frente6").style.display = "none";
    document.querySelector(".frente7").style.display = "none";
  });
  document.getElementById("vista").addEventListener('click', function(e){
    document.querySelector(".frente2").style.display = "none";
    document.querySelector(".frente3").style.display = "none";
    document.querySelector(".frente4").style.display = "none";
    document.querySelector(".frente5").style.display = "none";
    document.querySelector(".frente6").style.display = "block";
    document.querySelector(".frente7").style.display = "none";
  });
  document.getElementById("vista1").addEventListener('click', function(e){
    document.querySelector(".frente2").style.display = "none";
    document.querySelector(".frente3").style.display = "none";
    document.querySelector(".frente4").style.display = "none";
    document.querySelector(".frente5").style.display = "none";
    document.querySelector(".frente6").style.display = "none";
    document.querySelector(".frente7").style.display = "block";
  });
  document.getElementById("bolsobtn").addEventListener('click', function(e){
    document.querySelector(".frente2").style.display = "none";
    document.querySelector(".frente3").style.display = "none";
    document.querySelector(".frente4").style.display = "none";
    document.querySelector(".frente5").style.display = "none";
    document.querySelector(".frente6").style.display = "none";
    document.querySelector(".frente7").style.display = "none";
  });

  //bolso on/off
  /*const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('bolsofrente').style.visibility = "visible";
      document.getElementById('friso').style.visibility = "visible";
      document.getElementById('peitilho2').style.visibility = "visible";
    }else {
      document.getElementById('bolsofrente').style.visibility = "hidden";
      document.getElementById('friso').style.visibility = "hidden";
      document.getElementById('peitilho2').style.visibility = "hidden";
    }
  });*/


  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "Colete.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.visibility = "hidden";
      document.getElementById('costas').style.visibility = "visible";
    }else {
      document.getElementById('frente').style.visibility = "visible";
      document.getElementById('costas').style.visibility = "hidden" ;
    }
  });


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
        document.getElementById('coresBB').style.visibility = "hidden";

    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "block";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "block";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "block";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpunho').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorpeitilho1').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpeitilho2').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorfriso').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

