    let name = document.getElementById('name');
    let submit = document.getElementById('submit');
    let form = document.getElementById('form');
    let login = document.getElementById('login');

    let processRunning = false; 

    login.addEventListener("click", () => {
      if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
      } else {
        form.style.display = 'none';
      }
    });

    submit.addEventListener('click', function () {
      login.innerText = `Welcome\n${name.value}`;
      login.style.color = "green";
      login.style.textShadow = '2px 3px 4px red';
      login.style.background = "white";
      login.style.display = "block";
      login.style.borderRadius = "4px";

      processRunning = true; 
      setTimeout(() => {
        processRunning = false; 
        form.style.display = 'none'; 
      }, 3000); 
    });

    document.addEventListener('click', (e) => {
      if (processRunning && e.target !== submit && e.target !== login) {
        e.stopPropagation(); 
      }
    });