// Toggle between light and dark mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    const modeIcon = document.getElementById('mode-icon');
    if (document.body.classList.contains('dark-mode')) {
      modeIcon.textContent = '🌙';
    } else {
      modeIcon.textContent = '☀️';
    }
  }
  
  // Function to add a new task
  function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
  
    if (taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Complete button
      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.className = 'complete-btn';
      completeBtn.onclick = function() {
        li.classList.toggle('completed');
      };
  
      // Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = function() {
        li.remove();
      };
  
      li.appendChild(completeBtn);
      li.appendChild(deleteBtn);
      document.getElementById('todo-list').appendChild(li);
      taskInput.value = ''; // Clear input field
    }
  }
  
  // Motivational Quotes
  const quotes = [
    "The secret of getting ahead is getting started. - Mark Twain",
    "Organize your life around your dreams, and watch them come true.",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "The key to success is to start before you are ready.",
    "You don’t have to be perfect to be organized."
  ];
  
  // Quote rotation every 30 seconds
  let currentQuoteIndex = 0;
  function rotateQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    document.getElementById('quote').textContent = quotes[currentQuoteIndex];
  }
  setInterval(rotateQuote, 30000); // Change quote every 30 seconds
  