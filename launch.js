document.getElementById('relaunch').onclick = function() {
  setInterval(function() {
    navigator.mozApps.getSelf().onsuccess = function _onAppReady(evt) {
      var app = evt.target.result;
      app.launch();
    }
  }, 4000);
}
