function markFeeding() {
    const now = new Date().toLocaleTimeString();
    document.getElementById('feeding-time').innerText = now;
  }
  
  function saveMood() {
    const mood = document.getElementById('mood-select').value;
    document.getElementById('mood').innerText = mood;
  }
  