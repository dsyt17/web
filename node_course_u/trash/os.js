const os = require("os");
const cluster = require("cluster");

if (cluster.isMaster) {
  for (let index = 0; index < os.cpus().length - 2; index++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`Worker with pid=${worker.process.pid} DIED`);
    cluster.fork();
  });
} else {
  console.log(`Worker with pid=${process.pid} started`);

  setInterval(() => {
    console.log(`pid=${process.pid} is still working`);
  }, 5000);
}

// console.log(os.platform(), os.arch(), os.cpus().length);
