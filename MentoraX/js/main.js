fetch("../components/navbar.html")
.then(res => res.text())
.then(data => {
  document.getElementById("navbar").innerHTML = data;
})
.catch(err => console.error("Error loading navbar:", err));

fetch("../components/footer.html")
.then(res => res.text())
.then(data => {
  document.getElementById("footer").innerHTML = data;
})
.catch(err => console.error("Error loading footer:", err));


