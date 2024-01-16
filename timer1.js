



const timer1 = function() {
  // takes command line args
  const timesArr = process.argv.slice(2);
  // beeps
  let beep = '\x07';
  /// loops through array
  for (let elem in timesArr) {
    // executes if input is greater than 0 and a number
    if (elem > 0 && elem !== NaN) {
      // turns 1 into 1000 converts s to ms
      let time = Number(timesArr[elem]) * 1000;
      //timer
      setTimeout(() => {
        process.stdout.write(`\r${beep}`);
      }, time);
    }

  };

};
// calls it:
timer1();