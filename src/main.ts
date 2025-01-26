import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const instruction = document.getElementById('instruction')!;
  const root = document.documentElement;

    root.style.setProperty('--b', 'running');

    instruction.innerText = 'Let\'s get started';
    for (let i = 0; i <= 60 / 8 * 60; i++) { // calculate the number of iterations we need to run
      setTimeout(() => {
        if (i % 2 === 0) {
          instruction.innerText = 'Breathe in';
        } else {
          instruction.innerText = 'Breathe out';
        }
      }, i * 1000 * 8 / 2); // iteration * 0.5s 
    }
  });
