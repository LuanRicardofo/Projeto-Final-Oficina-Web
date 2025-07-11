function myFunction(imgs) {
  // Pega a imagem expandida
  var expandImg = document.getElementById("expandedImg");
  // Pega o texto da imagem
  var imgText = document.getElementById("imgtext");
  // Usa o mesmo src da imagem expandida como a imagem sendo clicada na grade
  expandImg.src = imgs.src;
  // Pega o crédito da imagem (se existir)
  var credit = imgs.getAttribute("data-credit") || "";
  // Usa o atributo alt da imagem clicável + crédito como o texto exibido na tela
  imgText.innerHTML = imgs.alt + "<br>" + credit;
  // Mostra o elemento de container (oculto com CSS)
  expandImg.parentElement.style.display = "block";
}