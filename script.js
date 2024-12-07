const toggleSwitch = document.querySelector('#theme-toggle'); // Add an ID for your toggle switch
toggleSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
