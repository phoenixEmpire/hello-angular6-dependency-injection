// Class used as a "narrowing" interface that exposes a minimal logger
// Other members of the actual implementation are invisible

export abstract class MinimalLogger {
    logs: string[];
    logInfo: (msg: string) => void;
}

/*
// Transpiles to:
  var MinimalLogger = (function () {
    function MinimalLogger() {}
    return MinimalLogger;
  }());
  exports("MinimalLogger", MinimalLogger);
*/
