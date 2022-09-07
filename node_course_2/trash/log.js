const EventEmitter = require("events");

class Logger extends EventEmitter {
  log = (data) => {
    console.log(data);
    this.emit("some", { id: 1, name: "ds" });
  };
}

module.exports = Logger;
