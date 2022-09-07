const Logger = require("./log");

const logger = new Logger();

logger.on("some", (data) => {
  const { id, name } = data;
  console.log(name);
});

logger.log("sss");
