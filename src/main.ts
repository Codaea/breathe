import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const instruction = document.getElementById('instruction')!;
  const root = document.documentElement;

  document.getElementById('start')!.addEventListener('click', () => {

    const duration = Number((document.getElementById('duration') as HTMLInputElement).value);
    const sessionDuration = Number((document.getElementById('sessionDuration') as HTMLInputElement).value);

    // set animation duration
    root.style.setProperty('--a', `${duration}s`);
    root.style.setProperty('--b', 'running');

    instruction.innerText = 'Let\'s get started';
    for (let i = 0; i <= sessionDuration / duration * 60; i++) { // calculate the number of iterations we need to run
      setTimeout(() => {
        if (i % 2 === 0) {
          instruction.innerText = 'Breathe in';
        } else {
          instruction.innerText = 'Breathe out';
        }
      }, i * 1000 * duration / 2); // iteration * 0.5s 
    }
    // finished text
    setTimeout(() => {
      instruction.innerText = 'Well done!';
      root.style.setProperty('--b', 'paused');
    }, sessionDuration * 60000); // 60 * 1000 minimized 
  });
});
