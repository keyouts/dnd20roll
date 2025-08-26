function rollDice() {
      const dice = document.getElementById('dice');
      dice.classList.add('rolling');
      setTimeout(() => {
        const result = Math.floor(Math.random() * 20) + 1;
        dice.textContent = result;
        dice.classList.remove('rolling');
      }, 600);
    }