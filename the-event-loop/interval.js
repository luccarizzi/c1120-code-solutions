
let count = 3;

const launch = () => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(timer);
  };
}

const timer = setInterval(launch, 1000);
