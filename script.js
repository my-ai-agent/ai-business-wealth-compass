// Main JavaScript for AI Business Wealth Roadmap Tool

document.addEventListener('DOMContentLoaded', function() {
    // Variables to store user selections
    let selectedWhy = '';
    let customWhy = '';
    let currentSituation = '';
    let twelveMonthGoal = '';
    let situationAnswers = {};

    // Step 1: Select "Why" functionality
    const whyOptions = document.querySelectorAll('.option');
    const otherInput = document.getElementById('other-input');
    const customWhyInput = document.getElementById('custom-why');
    const nextStep1Button = document.getElementById('next-step1');
    
    // Option selection
    whyOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            whyOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            this.classList.add('selected');
            
            selectedWhy = this.getAttribute('data-value');
            
            // Show custom input if "other" is selected
            if (selectedWhy === 'other') {
                otherInput.classList.remove('hidden');
            } else {
                otherInput.classList.add('hidden');
            }
        });
    });
    
    // Next button for Step 1
    nextStep1Button.addEventListener('click', function() {
        if (!selectedWhy) {
            alert('Please select a "Why" to continue.');
            return;
        }
        
        if (selectedWhy === 'other' && !customWhyInput.value.trim()) {
            alert('Please describe your custom "Why".');
            return;
        }
        
        if (selectedWhy === 'other') {
            customWhy = customWhyInput.value.trim();
        }
        
        // Generate situation questions based on selected "Why"
        generateSituationQuestions();
        
        // Navigate to Step 2
        document.getElementById('step1').classList.remove('active');
        document.getElementById('step2').classList.add('active');
    });
    
    // Step 2: Current Situation Assessment
    const situationQuestionsContainer = document.getElementById('current-situation-questions');
    const nextStep2Button = document.getElementById('next-step2');
    const prevStep2Button = document.getElementById('prev-step2');
    
    function generateSituationQuestions() {
        situationQuestionsContainer.innerHTML = '';
        
        const questions = roadmapData[selectedWhy].situationQuestions;
        
        questions.forEach(question => {
            const questionEl = document.createElement('div');
            questionEl.className = 'question-item';
            
            let inputHTML = '';
            
            if (question.type === 'select') {
                inputHTML = `
                    <label for="${question.id}">${question.question}</label>
                    <select id="${question.id}" class="situation-input">
                        <option value="">Please select...</option>
                        ${question.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                    </select>
                `;
            } else if (question.type === 'checkbox') {
                inputHTML = `
                    <p>${question.question}</p>
                    <div class="checkbox-group">
                        ${question.options.map(opt => `
                            <div class="checkbox-item">
                                <input type="checkbox" id="${question.id}-${opt.replace(/\s+/g, '-').toLowerCase()}" name="${question.id}" value="${opt}" class="situation-checkbox">
                                <label for="${question.id}-${opt.replace(/\s+/g, '-').toLowerCase()}">${opt}</label>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else if (question.type === 'text') {
                inputHTML = `
                    <label for="${question.id}">${question.question}</label>
                    <textarea id="${question.id}" class="situation-text" rows="3"></textarea>
                `;
            }
            
            questionEl.innerHTML = inputHTML;
            situationQuestionsContainer.appendChild(questionEl);
        });
    }
    
    // Next button for Step 2
    nextStep2Button.addEventListener('click', function() {
        // Collect situation answers
        collectSituationAnswers();
        
        // Generate suggested goal
        generateSuggestedGoal();
        
        // Navigate to Step 3
        document.getElementById('step2').classList.remove('active');
        document.getElementById('step3').classList.add('active');
    });
    
    // Previous button for Step 2
    prevStep2Button.addEventListener('click', function() {
        document.getElementById('step2').classList.remove('active');
        document.getElementById('step1').classList.add('active');
    });
    
    function collectSituationAnswers() {
        situationAnswers = {};
        
        // Collect select inputs
        document.querySelectorAll('.situation-input').forEach(input => {
            if (input.value) {
                situationAnswers[input.id] = input.value;
            }
        });
        
        // Collect checkbox inputs
        const checkboxGroups = {};
        document.querySelectorAll('.situation-checkbox:checked').forEach(checkbox => {
            const name = checkbox.getAttribute('name');
            if (!checkboxGroups[name]) {
                checkboxGroups[name] = [];
            }
            checkboxGroups[name].push(checkbox.value);
        });
        
        Object.assign(situationAnswers, checkboxGroups);
        
        // Collect text inputs
        document.querySelectorAll('.situation-text').forEach(input => {
            if (input.value.trim()) {
                situationAnswers[input.id] = input.value.trim();
            }
        });
        
        // Create current situation description based on answers
        if (selectedWhy === 'other') {
            if (situationAnswers['current-state']) {
                currentSituation = situationAnswers['current-state'];
            } else {
                currentSituation = "Current situation to be defined";
            }
        } else {
            currentSituation = roadmapData[selectedWhy].defaultSituation;
        }
    }
    
    // Step 3: 12-Month Goal
    const suggestedGoalContainer = document.getElementById('suggested-goal');
    const customGoalInput = document.getElementById('custom-goal');
    const nextStep3Button = document.getElementById('next-step3');
    const prevStep3Button = document.getElementById('prev-step3');
    
    function generateSuggestedGoal() {
        if (selectedWhy === 'other') {
            if (situationAnswers['ideal-outcome']) {
                twelveMonthGoal = situationAnswers['ideal-outcome'];
            } else {
                twelveMonthGoal = "12-month goal to be defined";
            }
        } else {
            twelveMonthGoal = roadmapData[selectedWhy].defaultGoal;
        }
        
        suggestedGoalContainer.innerHTML = twelveMonthGoal;
        customGoalInput.value = twelveMonthGoal;
    }
    
    // Next button for Step 3
    nextStep3Button.addEventListener('click', function() {
        // Update goal if customized
        if (customGoalInput.value.trim() !== '') {
            twelveMonthGoal = customGoalInput.value.trim();
        }
        
        // Generate final roadmap
        generateRoadmap();
        
        // Navigate to Results
        document.getElementById('step3').classList.remove('active');
        document.getElementById('results').classList.add('active');
    });
    
    // Previous button for Step 3
    prevStep3Button.addEventListener('click', function() {
        document.getElementById('step3').classList.remove('active');
        document.getElementById('step2').classList.add('active');
    });
    
    // Results
    function generateRoadmap() {
        // Display Why
        const resultWhyEl = document.getElementById('result-why');
        resultWhyEl.textContent = selectedWhy === 'other' ? customWhy : roadmapData[selectedWhy].why;
        
        // Display 12-Month Goal
        const resultGoalEl = document.getElementById('result-goal');
        resultGoalEl.textContent = twelveMonthGoal;
        
        // Display Current Situation
        const resultSituationEl = document.getElementById('result-situation');
        resultSituationEl.textContent = currentSituation;
        
        // Display Rungs
        const rungsListEl = document.getElementById('rungs-list');
        rungsListEl.innerHTML = '';
        
        const rungs = roadmapData[selectedWhy].rungs;
        
        rungs.forEach((rung, index) => {
            const rungEl = document.createElement('div');
            rungEl.className = 'rung-item';
            
            rungEl.innerHTML = `
                <h4><span class="rung-number-small">${index + 1}</span> ${rung.title}</h4>
                <div class="tool-name">Tool: ${rung.tool}</div>
                <p>Implementation: ${rung.implementation}</p>
                <div class="success-metric">Success Metric: ${rung.metric}</div>
            `;
            
            rungsListEl.appendChild(rungEl);
        });
    }
    
    // Download PDF functionality
    const downloadPdfButton = document.getElementById('download-pdf');
    
    downloadPdfButton.addEventListener('click', function() {
        const resultContainer = document.querySelector('.roadmap-container');
        const rungsContainer = document.querySelector('.rungs-container');
        
        // Create a container for the PDF content
        const pdfContent = document.createElement('div');
        pdfContent.innerHTML = `
            <h1 style="color: #1e5631; text-align: center; margin-bottom: 20px;">AI Business Wealth Roadmap</h1>
            <p style="text-align: center; margin-bottom: 40px;">Created by Michael Gibbons - AI Business Automation Coach</p>
            ${resultContainer.outerHTML}
            ${rungsContainer.outerHTML}
            <div style="margin-top: 40px; text-align: center;">
                <p>Need personalized guidance implementing your roadmap?</p>
                <p>Book your free consultation: <a href="https://calendly.com/mike-gibbo/ai-business-wealth-roadmap-_-discovery-chat">calendly.com/mike-gibbo</a></p>
                <p style="margin-top: 20px; font-style: italic;">Kia kaha, kia māia, kia manawanui. Be strong, be brave, be steadfast.</p>
            </div>
        `;
        
        // Configure PDF options
        const options = {
            margin: 10,
            filename: 'AI-Business-Wealth-Roadmap.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Generate and download PDF
        html2pdf().set(options).from(pdfContent).save();
    });
    
    // Restart button
    const restartButton = document.getElementById('restart');
    
    restartButton.addEventListener('click', function() {
        // Reset all selections
        selectedWhy = '';
        customWhy = '';
        currentSituation = '';
        twelveMonthGoal = '';
        situationAnswers = {};
        
        // Clear selected options
        whyOptions.forEach(opt => opt.classList.remove('selected'));
        otherInput.classList.add('hidden');
        customWhyInput.value = '';
        
        // Navigate back to Step 1
        document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
        document.getElementById('step1').classList.add('active');
    });
});

// Fix for navigation buttons
// Replace the handlePreviousButton function (around line 302)
function handlePreviousButton() {
    // Find all buttons
    const allButtons = document.querySelectorAll('button');
    
    // Filter to find ones with "Previous" text
    const prevButtons = Array.from(allButtons).filter(button => 
        button.textContent.includes('Previous')
    );
    
    // Add event listeners
    // Replace the handleStartOverButton function (around line 313)
function handleStartOverButton() {
    // Find all buttons
    const allButtons = document.querySelectorAll('button');
    
    // Filter to find ones with "Start Over" text
    const startOverButtons = Array.from(allButtons).filter(button => 
        button.textContent.includes('Start Over')
    );
    
    // Add event listeners
    startOverButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'index.html#top';
        });
    });
}

// Fix for Start Over button
function handleStartOverButton() {
  const startOverButtons = document.querySelectorAll('button:contains("Start Over")');
  startOverButtons.forEach(button => {
    button.addEventListener('click', function() {
      window.location.href = 'index.html#top';
    });
  });
}

// Question type setup
function setupQuestionTypes() {
  // Define questions that should be single-select
  const singleSelectContainers = document.querySelectorAll('.single-select');
  singleSelectContainers.forEach(container => {
    // Add instruction
    const instruction = document.createElement('p');
    instruction.className = 'instruction-text';
    instruction.textContent = 'Please select ONE option:';
    container.insertBefore(instruction, container.firstChild);
    
    // Convert checkboxes to radio buttons
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const groupName = container.id || 'question-group-' + Math.random().toString(36).substr(2, 9);
    checkboxes.forEach(checkbox => {
      checkbox.type = 'radio';
      checkbox.name = groupName;
    });
  });
  
  // Define questions that should be multi-select
  const multiSelectContainers = document.querySelectorAll('.multi-select');
  multiSelectContainers.forEach(container => {
    // Add instruction
    const instruction = document.createElement('p');
    instruction.className = 'instruction-text';
    instruction.textContent = 'Select ALL that apply:';
    container.insertBefore(instruction, container.firstChild);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add anchor to top of body if it doesn't exist
  if (!document.getElementById('top')) {
    const topAnchor = document.createElement('a');
    topAnchor.id = 'top';
    document.body.insertBefore(topAnchor, document.body.firstChild);
  }
  
  // Setup question types
  setupQuestionTypes();
  
  // Setup navigation buttons
  handlePreviousButton();
  handleStartOverButton();
});
// Add question type functionality (single vs multi select)
function setupQuestionTypes() {
  // Define patterns that indicate single-select questions
  const singleSelectPatterns = [
    "how many hours", 
    "biggest barrier",
    "primary concern",
    "what is your main"
  ];
  
  // Wait for questions to be dynamically added
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Process each question container
        const questionContainers = document.querySelectorAll('#current-situation-questions > div');
        
        questionContainers.forEach(container => {
          // Get the question text
          const questionElement = container.querySelector('h3, p, label');
          if (!questionElement) return;
          
          const questionText = questionElement.textContent.toLowerCase();
          
          // Determine if this should be single-select
          const isSingleSelect = singleSelectPatterns.some(pattern => 
            questionText.includes(pattern)
          );
          
          if (isSingleSelect) {
            // Add a marker class
            container.classList.add('single-select');
            
            // Add instruction text
            const instruction = document.createElement('p');
            instruction.className = 'instruction-text';
            instruction.textContent = 'Please select ONE option:';
            container.insertBefore(instruction, questionElement.nextSibling);
            
            // Convert checkboxes to radio buttons
            const checkboxes = container.querySelectorAll('input[type="checkbox"]');
            const groupName = 'question-group-' + Math.random().toString(36).substring(2, 9);
            checkboxes.forEach(checkbox => {
              checkbox.type = 'radio';
              checkbox.name = groupName;
            });
          } else {
            // Add a marker class
            container.classList.add('multi-select');
            
            // Add instruction text
            const instruction = document.createElement('p');
            instruction.className = 'instruction-text';
            instruction.textContent = 'Select ALL that apply:';
            container.insertBefore(instruction, questionElement.nextSibling);
          }
        });
      }
    });
  });
  
  // Start observing the questions container
  const questionsContainer = document.getElementById('current-situation-questions');
  if (questionsContainer) {
    observer.observe(questionsContainer, { childList: true, subtree: true });
  }
}
// Fix the Previous button behavior
function fixPreviousButtons() {
  const prevButtons = document.querySelectorAll('#prev-step2, #prev-step3');
  prevButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Give time for the navigation to happen
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    });
  });
}

// Fix the Start Over button
function fixStartOverButton() {
  const restartButton = document.getElementById('restart');
  if (restartButton) {
    restartButton.addEventListener('click', function() {
      window.location.href = 'index.html#top';
    });
  }
}
// Initialize all features when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Add a top anchor if not present
  if (!document.getElementById('top')) {
    const topAnchor = document.createElement('a');
    topAnchor.id = 'top';
    document.body.insertBefore(topAnchor, document.body.firstChild);
  }
  
  // Setup all enhancements
  setupQuestionTypes();
  fixPreviousButtons();
  fixStartOverButton();
});
