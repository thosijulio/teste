function atualizarContador() {
  const agora = new Date();
  const meiaNoite = new Date();
  meiaNoite.setHours(24, 0, 0, 0); // próxima meia-noite

  const diff = meiaNoite - agora;
  const horas = String(Math.floor(diff / 3600000)).padStart(2, "0");
  const minutos = String(Math.floor((diff % 3600000) / 60000)).padStart(
    2,
    "0"
  );
  const segundos = String(Math.floor((diff % 60000) / 1000)).padStart(
    2,
    "0"
  );

  document.getElementById(
    "contador"
  ).textContent = ${horas}:${minutos}:${segundos};
}

setInterval(atualizarContador, 1000);
atualizarContador();