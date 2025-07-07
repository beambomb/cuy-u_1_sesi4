function saklar(status) {
  const semuaLampu = document.querySelectorAll(".lampu img");
  semuaLampu.forEach((lampu) => {
    lampu.src = status === "on" ? "assets/on.gif" : "assets/off.gif";
  });
}

function saklar(status, tombol) {
  const divLampu = tombol.closest(".lampu");
  const gambarLampu = divLampu.querySelector("img");

  gambarLampu.src = status === "on" ? "assets/on.gif" : "assets/off.gif";
}

