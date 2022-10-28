if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-3-02-JS/sw.js", {
    scope: "/Unit-3-02-JS/",
  })
}

;("use strict")

function calculateVolumeClicked() {
  const length = parseFloat(document.getElementById("lengthpyramid").value)
  const width = parseFloat(document.getElementById("widthpyramid").value)
  const height = parseFloat(document.getElementById("heightpyramid").value)

  const volume = (length * width * height) / 3

  document.getElementById("volume").innerHTML =
    "Volume is: " + volume.toFixed(2) + " mm³."
}
