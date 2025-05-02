// Data structure for AI Business Wealth Roadmap Tool

const roadmapData = {
    // Time Wealth
    "time-wealth": {
        why: "Achieve Work/Life Balance working a 10-hour week",
        defaultSituation: "Owner working 50-60 hrs weekly with manual involvement in most processes",
        defaultGoal: "80% of routine operations are automated or delegated",
        situationQuestions: [
            {
                id: "time-spent",
                question: "How many hours per week do you currently work in your tourism business?",
                type: "checkbox",
                options: ["Less than 40 hours", "40-50 hours", "50-60 hours", "60+ hours"]
            },
            {
                id: "manual-processes",
                question: "What operational areas require your personal involvement daily?",
                type: "checkbox",
                options: ["Booking management", "Customer communications", "Staff scheduling", "Financial reporting", "Marketing", "Experience delivery"]
            },
            {
                id: "delegation",
                question: "What prevents you from delegating more tasks?",
                type: "checkbox",
                options: ["Lack of trained staff", "Systems not documented", "Quality concerns", "Cost of additional staff", "No suitable technology solutions"]
            }
        ],
        rungs: [
            {
                title: "Time Analysis Audit",
                tool: "Toggl Track with AI insights",
                implementation: "Track all owner activities for two weeks, then use Claude or Chat GPT to analyse patterns and identify automation priorities",
                metric: "92% more accurate time allocation awareness, revealing surprising time sinks"
            },
            {
                title: "Booking/Sales Automation",
                tool: "Rezdy/Bookeo with AI integration",
                implementation: "Set up a self-service booking system with automated confirmations, reminders, and post-experience follow-ups",
                metric: "15 hours saved weekly that were previously spent on manual booking management"
            },
            {
                title: "Customer Communication Systems",
                tool: "Chat GPT via API",
                implementation: "Identify the top 20 customer questions and create AI-powered responses that feel personalized",
                metric: "Customer response time reduced from 24 hours to 2 hours with minimal owner involvement"
            },
            {
                title: "SOPs and Knowledge Base",
                tool: "Notion AI",
                implementation: "Document all owner-dependent processes and create easy reference guides for staff",
                metric: "83% of questions answered without owner involvement"
            },
            {
                title: "Reporting Automation",
                tool: "Power BI with AI insights",
                implementation: "Set up dashboards for key business metrics and use Claude to interpret the data",
                metric: "Financial review time reduced by 76% while improving decision quality"
            },
            {
                title: "Strategic Automation",
                tool: "Make.com",
                implementation: "Connect all business systems with automated workflows that minimise human intervention",
                metric: "Owner involvement reduced to 10 hours weekly while maintaining revenue"
            }
        ]
    },
    
    // Financial Freedom
    "financial-freedom": {
        why: "Debt-free business with 30% profit margin",
        defaultSituation: "5% margin with inconsistent financial tracking and reporting",
        defaultGoal: "15% profit margin with clear financial systems",
        situationQuestions: [
            {
                id: "current-margin",
                question: "What is your tourism business's current profit margin?",
                type: "checkbox",
                options: ["Less than 5%", "5-10%", "10-15%", "15-20%", "Over 20%"]
            },
            {
                id: "financial-visibility",
                question: "How would you rate your visibility into your business finances?",
                type: "checkbox",
                options: ["Poor - Reactive to financial issues", "Basic - Monthly reviews", "Good - Weekly oversight", "Excellent - Real-time insights"]
            },
            {
                id: "financial-challenges",
                question: "What are your biggest financial challenges?",
                type: "checkbox",
                options: ["Inconsistent cash flow", "High operational costs", "Pricing strategy", "Seasonal fluctuations", "Debt management", "Limited revenue streams"]
            }
        ],
        rungs: [
            {
                title: "Financial Audit",
                tool: "Xero with AI forecasting",
                implementation: "Import 12 months of financial data into your AI Assistant and identify spending patterns and opportunities",
                metric: "47% more accurate profit leakage identification than standard accounting reviews"
            },
            {
                title: "Pricing Optimisation",
                tool: "Perfect Price",
                implementation: "Analyse competitor pricing, costs, and demand patterns to optimise your pricing strategy",
                metric: "23% margin improvement with optimised pricing without reducing bookings"
            },
            {
                title: "Expense Management",
                tool: "Expensify",
                implementation: "Set up automated expense tracking with intelligent categorisation and approval workflows",
                metric: "18% reduction in operational expenses through better visibility and control"
            },
            {
                title: "Revenue Diversification",
                tool: "HubSpot with AI",
                implementation: "Use Claude to identify complementary revenue streams aligned with your core tourism offering",
                metric: "34% increase in average customer value through additional offerings"
            },
            {
                title: "Financial Forecasting",
                tool: "Domo",
                implementation: "Build financial models that predict seasonal variations and help with resource planning",
                metric: "87% more accurate cash flow projections, eliminating cash crunches"
            },
            {
                title: "Profitability Systems",
                tool: "Profit First app with AI insights",
                implementation: "Set up automated profit allocation systems and regular review processes",
                metric: "Profit margin increased from 15% to 30%+"
            }
        ]
    },
    
    // Industry Recognition
    "industry-recognition": {
        why: "To prepare our team and business to win the NZ Supreme Tourism Award 2026",
        defaultSituation: "Inconsistent experience quality with mixed reviews and limited international visibility",
        defaultGoal: "AI automation across 70% of all customer touchpoints has standardised exceptional customer experiences",
        situationQuestions: [
            {
                id: "current-rating",
                question: "What is your current average customer review rating?",
                type: "checkbox",
                options: ["Below 3 stars", "3-3.5 stars", "3.5-4 stars", "4-4.5 stars", "4.5-5 stars"]
            },
            {
                id: "experience-consistency",
                question: "How consistent is your visitor experience delivery?",
                type: "checkbox",
                options: ["Very inconsistent", "Somewhat inconsistent", "Generally consistent", "Highly consistent"]
            },
            {
                id: "recognition-barriers",
                question: "What are your biggest barriers to industry recognition?",
                type: "checkbox",
                options: ["Limited marketing resources", "Inconsistent service quality", "Lack of unique selling point", "Insufficient documentation of processes", "Limited industry network", "Not enough customer reviews"]
            }
        ],
        rungs: [
            {
                title: "AI Customer Experience Audit",
                tool: "MonkeyLearn Sentiment Analysis",
                implementation: "Upload all customer reviews and feedback, then use Claude or Chat GPT to summarise common themes and areas for improvement",
                metric: "87% more detailed insights than manual analysis with significantly less time investment"
            },
            {
                title: "Content Standardisation",
                tool: "Notion AI",
                implementation: "Create detailed standard operating procedures (SOPs) for all aspects of customer experience",
                metric: "63% reduction in experience variability across different guides/staff members"
            },
            {
                title: "Staff Empowerment",
                tool: "Duolingo for Business",
                implementation: "Create learning paths for staff and AI-powered checklists for experience delivery",
                metric: "42% improvement in international visitor satisfaction ratings"
            },
            {
                title: "Digital Presence Enhancement",
                tool: "Midjourney",
                implementation: "Generate distinctive visual content that showcases your cultural experience",
                metric: "57% increase in international digital engagement"
            },
            {
                title: "Award Submission Automation",
                tool: "Michael Gibbons AI Award Application Analyser Tool",
                implementation: "Craft compelling award submissions tailored to specific application question criteria",
                metric: "40% increase in award shortlisting success"
            },
            {
                title: "Industry Leadership Positioning",
                tool: "Twitter AI scheduler",
                implementation: "Develop a thought leadership strategy focusing on cultural tourism innovation",
                metric: "73% increase in speaking invitation opportunities"
            }
        ]
    },
    
    // Business Legacy
    "business-legacy": {
        why: "Create a business that can be sold or passed to the next generation",
        defaultSituation: "Business dependent on owner knowledge with limited documentation",
        defaultGoal: "Documented systems and processes with 50% reduced owner dependence",
        situationQuestions: [
            {
                id: "owner-dependence",
                question: "How dependent is your tourism business on your personal involvement?",
                type: "checkbox",
                options: ["Completely dependent", "Highly dependent", "Somewhat dependent", "Minimally dependent"]
            },
            {
                id: "documentation",
                question: "How well documented are your business processes and cultural knowledge?",
                type: "checkbox",
                options: ["Not documented", "Partially documented", "Well documented", "Extensively documented"]
            },
            {
                id: "legacy-barriers",
                question: "What are your biggest barriers to creating a sellable/transferable business?",
                type: "checkbox",
                options: ["Knowledge exists only in my head", "Relationships depend on me", "No succession plan", "Inconsistent financials", "Reliance on my personal brand", "Lack of standardized systems"]
            }
        ],
        rungs: [
            {
                title: "Knowledge Documentation",
                tool: "Notion AI with Claude",
                implementation: "Create a comprehensive knowledge base by recording your expertise and having Claude organize and structure it",
                metric: "95% of critical business knowledge documented and accessible"
            },
            {
                title: "Process Automation",
                tool: "Zapier",
                implementation: "Map and automate critical workflows that currently depend on owner intervention",
                metric: "63% reduction in owner-dependent processes"
            },
            {
                title: "Customer Relationship Management",
                tool: "HubSpot with AI integration",
                implementation: "Transfer personal client relationships into systematized CRM with detailed history and preferences",
                metric: "87% of customer relationships successfully transitioned to system-based management"
            },
            {
                title: "Financial Systematization",
                tool: "Xero with AI reporting",
                implementation: "Create clear financial tracking systems with automated reporting",
                metric: "Business valuation increased by 42% due to improved financial clarity"
            },
            {
                title: "Brand Independence",
                tool: "Canva Pro with AI",
                implementation: "Develop a brand system that can thrive beyond the founder's personal reputation",
                metric: "73% of customers identify with the business brand rather than founder"
            },
            {
                title: "Succession Planning",
                tool: "Claude AI Business Coach",
                implementation: "Create a detailed succession plan with timeline and training requirements",
                metric: "Transition readiness score improved from 23% to 87%"
            }
        ]
    },
    
    // Travel Freedom
    "travel-freedom": {
        why: "Create a business that allows 3-month annual adventures",
        defaultSituation: "Business requires constant owner presence",
        defaultGoal: "Business operates smoothly during 2-week owner absences",
        situationQuestions: [
            {
                id: "longest-absence",
                question: "What's the longest you've been able to step away from your tourism business?",
                type: "checkbox",
                options: ["A weekend", "Up to a week", "1-2 weeks", "3-4 weeks", "1+ month"]
            },
            {
                id: "remote-management",
                question: "How effectively can you currently manage your business remotely?",
                type: "checkbox",
                options: ["Not at all", "With difficulty", "Somewhat effectively", "Very effectively"]
            },
            {
                id: "absence-barriers",
                question: "What prevents you from taking extended time away from your business?",
                type: "checkbox",
                options: ["Customer communication needs", "Staff management", "Operations oversight", "Financial management", "Marketing needs", "Lack of trusted leadership"]
            }
        ],
        rungs: [
            {
                title: "Remote Monitoring Systems",
                tool: "Power BI dashboards",
                implementation: "Create comprehensive dashboards accessible anywhere to monitor key business metrics",
                metric: "93% visibility into business operations while traveling"
            },
            {
                title: "Team Empowerment",
                tool: "Trello with AI",
                implementation: "Develop AI-powered decision trees for staff to handle common situations",
                metric: "72% reduction in decisions requiring owner input"
            },
            {
                title: "Customer Communication Automation",
                tool: "Claude API integration",
                implementation: "Set up intelligent response systems for customer inquiries based on your expertise",
                metric: "94% of routine customer inquiries handled without owner involvement"
            },
            {
                title: "Virtual Presence System",
                tool: "Loom",
                implementation: "Create a library of video resources for staff and customers to access your knowledge",
                metric: "Can solve 83% of previously owner-dependent issues using video library"
            },
            {
                title: "Financial Automation",
                tool: "YNAB (You Need A Budget) with AI",
                implementation: "Implement automated financial tracking and approval systems",
                metric: "Financial oversight maintained with just 2 hours weekly while traveling"
            },
            {
                title: "Crisis Management Protocol",
                tool: "Claude Emergency Protocol Generator",
                implementation: "Develop comprehensive response systems for potential business emergencies",
                metric: "89% of potential business crises have documented response protocols"
            }
        ]
    },
    
    // Family Balance
    "family-balance": {
        why: "Be present and engaged with my family while running a successful business",
        defaultSituation: "Working evenings and weekends with frequent family interruptions",
        defaultGoal: "Predictable 40-hour work week with clear boundaries between work and family",
        situationQuestions: [
            {
                id: "family-interruptions",
                question: "How often do business matters interrupt your family time?",
                type: "checkbox",
                options: ["Daily", "Several times per week", "Once or twice per week", "Rarely"]
            },
            {
                id: "work-predictability",
                question: "How predictable is your weekly work schedule?",
                type: "checkbox",
                options: ["Completely unpredictable", "Somewhat unpredictable", "Generally predictable", "Very predictable"]
            },
            {
                id: "balance-barriers",
                question: "What are your biggest barriers to work/family balance?",
                type: "checkbox",
                options: ["After-hours customer needs", "Staffing issues", "Administrative overload", "Lack of systems", "Financial pressures", "Unclear boundaries"]
            }
        ],
        rungs: [
            {
                title: "Schedule Optimization",
                tool: "Reclaim.ai",
                implementation: "Implement AI-driven schedule management that protects family time",
                metric: "Family dinner interruptions reduced by 94%"
            },
            {
                title: "Customer Expectation Management",
                tool: "HubSpot",
                implementation: "Create automated systems that set clear response time expectations",
                metric: "After-hours inquiries requiring immediate attention reduced by 87%"
            },
            {
                title: "Emergency-Only Contact System",
                tool: "Twilio with AI filtering",
                implementation: "Develop a system that only alerts you for genuine emergencies",
                metric: "Non-emergency interruptions reduced by 92%"
            },
            {
                title: "Documentation Automation",
                tool: "Claude Document Generator",
                implementation: "Automate routine documentation that previously consumed evenings",
                metric: "Administrative work reduced by 15 hours weekly"
            },
            {
                title: "Task Batching System",
                tool: "Motion",
                implementation: "Implement AI-driven task organization that groups similar work",
                metric: "Task switching reduced by 73%, increasing productivity during work hours"
            },
            {
                title: "Delegation Framework",
                tool: "Trainual with AI",
                implementation: "Create systems for effectively delegating previously owner-only tasks",
                metric: "Weekend work hours reduced from 8+ to less than 2"
            }
        ]
    },
    
    // Personal Fulfillment
    "personal-fulfillment": {
        why: "Create a business that brings me joy and aligns with my cultural values",
        defaultSituation: "Caught up in administration with limited time for the parts of the business I love",
        defaultGoal: "Spending 70% of my work time on the aspects that bring me fulfillment",
        situationQuestions: [
            {
                id: "enjoyment-ratio",
                question: "What percentage of your work time is currently spent on aspects you truly enjoy?",
                type: "checkbox",
                options: ["Less than 10%", "10-30%", "30-50%", "50-70%", "More than 70%"]
            },
            {
                id: "value-alignment",
                question: "How well does your day-to-day work align with your cultural values?",
                type: "checkbox",
                options: ["Poor alignment", "Some alignment", "Good alignment", "Perfect alignment"]
            },
            {
                id: "fulfillment-barriers",
                question: "What aspects of your business drain your joy the most?",
                type: "checkbox",
                options: ["Administrative tasks", "Financial management", "Marketing", "Customer complaints", "Staff management", "Technology frustrations"]
            }
        ],
        rungs: [
            {
                title: "Joy Audit",
                tool: "Claude Joy Mapping",
                implementation: "Systematically identify which business activities bring fulfillment and which don't",
                metric: "Clear categorization of tasks with 95% accuracy to fulfillment impact"
            },
            {
                title: "Administrative Automation",
                tool: "Zapier",
                implementation: "Automate the high-drain, low-fulfillment administrative tasks",
                metric: "Time spent on administration reduced by 83%"
            },
            {
                title: "Cultural Value Integration",
                tool: "Notion AI",
                implementation: "Document how cultural values connect to business operations",
                metric: "63% increase in perceived value alignment in daily operations"
            },
            {
                title: "Storytelling Amplification",
                tool: "Claude Story Framework",
                implementation: "Create systems that help you focus on the storytelling aspects you love",
                metric: "Time spent sharing cultural stories increased by 230%"
            },
            {
                title: "Energy Management System",
                tool: "Reclaim.ai",
                implementation: "Schedule high-value activities during your peak energy periods",
                metric: "Fulfillment score increased from 5.2 to 8.7 out of 10"
            },
            {
                title: "Purpose Alignment System",
                tool: "Claude Purpose Tracker",
                implementation: "Create a system to regularly evaluate business activities against your purpose",
                metric: "87% of business activities now directly support personal fulfillment"
            }
        ]
    },
    
    // Other (Custom)
    "other": {
        why: "Custom wealth goal to be defined",
        defaultSituation: "Current situation to be assessed",
        defaultGoal: "12-month goal to be determined",
        situationQuestions: [
            {
                id: "current-challenge",
                question: "What's your biggest challenge in achieving your custom wealth goal?",
                type: "text"
            },
            {
                id: "current-state",
                question: "How would you describe your current situation regarding this goal?",
                type: "text"
            },
            {
                id: "ideal-outcome",
                question: "What would success look like in 12 months?",
                type: "text"
            }
        ],
        rungs: [
            {
                title: "Custom Goal Analysis",
                tool: "Claude Goal Framework",
                implementation: "Analyze your custom goal and break it into actionable components",
                metric: "Clear path established with 87% confidence in achievability"
            },
            {
                title: "Custom Challenge Assessment",
                tool: "AI Gap Analysis",
                implementation: "Identify specific gaps between current state and desired outcome",
                metric: "83% of barriers identified with potential solutions"
            },
            {
                title: "AI Tool Selection",
                tool: "Michael Gibbons AI Tool Selector",
                implementation: "Identify the specific AI tools best suited to your unique situation",
                metric: "93% match between tools and specific needs"
            },
            {
                title: "Custom Implementation Plan",
                tool: "Claude Implementation Roadmap",
                implementation: "Create a tailored step-by-step plan for your specific goal",
                metric: "75% faster implementation than traditional approaches"
            },
            {
                title: "Progress Tracking System",
                tool: "Custom KPI Dashboard",
                implementation: "Develop metrics and tracking specific to your wealth goal",
                metric: "87% more visibility into progress toward your goal"
            },
            {
                title: "Personalized AI Coaching",
                tool: "Michael Gibbons AI Business Coaching",
                implementation: "Receive ongoing guidance tailored to your unique journey",
                metric: "63% higher success rate than self-implementation"
            }
        ]
    }
};
