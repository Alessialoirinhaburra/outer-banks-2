var motivos = [
    "Pobres",
    "Praieiros",
    "Sao encrenqueiros",
    "Eles sao lindos",
    "Gostam de aventuras"
  ];
  
  var imagens = [ "https://media1.popsugar-assets.com/files/thumbor/pkLwj_xj77o0VR_rV6gAkKqL0lw=/377x0:3077x2700/fit-in/792x594/top/filters:format_auto():upscale()/2021/07/21/727/n/1922398/38a8d06460f84ae43df840.12104379_.jpg",
    "https://blogs.correiobraziliense.com.br/proximocapitulo/wp-content/uploads/sites/27/2021/09/image.jpg",
    "https://static.diario24horas.com.br/images/articles/2022/2/28/452-netflix-confirma-3-temporada-de-outer-banks.jpg",
    "https://i.pinimg.com/originals/d9/49/9f/d9499f1ff04fffd22796a67f75782483.jpg",        
    "https://cinema10.com.br/upload/noticias/noticias-outerbancks342.png"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }