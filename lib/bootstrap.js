(function(win) {
  // Removes and stores module loader global variables.
  // This is needed for SocketIO to load without problems.
  win._restoreUMD = (function() {
    var oldExports = win.exports;
    var oldModule = win.module;
    var oldRequire = win.require;
    var oldDefine = win.define;

    return function() {
      win.exports = oldExports;
      win.module = oldModule;
      win.require = oldRequire;
      win.define = oldDefine;
    };
  })();

  delete win.exports;
  delete win.module;
  delete win.require;
  delete win.define;
})(this);
