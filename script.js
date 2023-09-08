function showDialog() {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "block";
  }
  
  function onYes() {
    alert("Yes clicked!");
    hideDialog();
  }
  
  function onNo() {
    alert("No clicked!");
    hideDialog();
  }
  
  function hideDialog() {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "none";
  }