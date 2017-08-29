const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'Log Generator'});

const logDataToStdout = () => {
    console.log("Inside Log Data");
    log.info("This is a debug string");
    log.info({message: 'This is a json data'});
};

setInterval(logDataToStdout, 5000);