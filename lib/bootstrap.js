(function(win, undefined) {
	var setProperty = function(name, value) {
		var descriptor;
		if(Object.getOwnPropertyDescriptor && (descriptor = Object.getOwnPropertyDescriptor(win, name))) {
			descriptor.value = value || undefined;
			Object.defineProperty(win, name, descriptor);
		} else {
			window[name] = value;
		}
	};

  // Removes and stores module loader global variables.
  // This is needed for SocketIO to load without problems.
  win._restoreUMD = (function() {
    var oldExports = win.exports;
    var oldModule = win.module;
    var oldRequire = win.require;
    var oldDefine = win.define;

    return function() {
      setProperty('exports', oldExports);
      setProperty('module', oldModule);
      setProperty('require', oldRequire);
      setProperty('define', oldDefine);
    };
  })();

	setProperty('define');
	setProperty('require');
	setProperty('exports');
	setProperty('module');
})(this);
