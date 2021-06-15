const moment= require('moment-timezone');

moment.tz.setDefault('India/Kolkata');

let targetTimezone= 'Europe/Paris';

if(process.argv.length <3){
    console.log("Enter a timezone !");
    process.exit(1);
} else {
    targetTimezone= process.argv[2];
}

// console.log(moment().format('dddd'));

console.log(`Time of timezone ${targetTimezone} is ${moment().tz(targetTimezone).format()}`);