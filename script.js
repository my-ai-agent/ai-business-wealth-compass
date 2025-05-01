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
