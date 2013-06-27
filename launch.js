document.getElementById('relaunch').onclick = function() {
  setTimeout(function() {
    navigator.mozApps.getSelf().onsuccess = function _onAppReady(evt) {
      var app = evt.target.result;
      app.launch();
    }
  }, 10000);
}
