



const timer1 = function() {
  const timesArr = process.argv.slice(2);
  let beep = '\x07';

  for (let elem in timesArr) {
    if (elem > 0 && elem !== NaN) {
      let time = Number(timesArr[elem]) * 1000;
      setTimeout(() => {
        process.stdout.write(`\r${beep}`);
      }, time);
    }

  };

};

timer1();