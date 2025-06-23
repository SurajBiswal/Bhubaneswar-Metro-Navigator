// Station Data and Graph Implementation
class MetroNavigator {
    constructor() {
        this.stations = [
            {"id": "AIRPORT", "name": "Biju Patnaik International Airport", "code": "BPIA", "line": "Blue", "coordinates": [20.2537, 85.8179]},
            {"id": "KIIT_SQUARE", "name": "KIIT Square", "code": "KIIT", "line": "Blue", "coordinates": [20.2448, 85.8106]},
            {"id": "PATIA", "name": "Patia", "code": "PATA", "line": "Blue", "coordinates": [20.2388, 85.8021]},
            {"id": "JAYDEV_VIHAR", "name": "Jaydev Vihar", "code": "JDVH", "line": "Blue", "coordinates": [20.2726, 85.7804]},
            {"id": "VANI_VIHAR", "name": "Vani Vihar", "code": "VNIH", "line": "Blue", "coordinates": [20.2943, 85.8246]},
            {"id": "SAILASHREE_VIHAR", "name": "Sailashree Vihar", "code": "SLVH", "line": "Red", "coordinates": [20.3122, 85.8450]},
            {"id": "HEERA_PANNA", "name": "Heera Panna", "code": "HRPN", "line": "Red", "coordinates": [20.3202, 85.8556]},
            {"id": "CHANDRASEKHARPUR", "name": "Chandrasekharpur", "code": "CDRP", "line": "Green", "coordinates": [20.3404, 85.8067]},
            {"id": "INFOCITY", "name": "Infocity", "code": "INFO", "line": "Green", "coordinates": [20.3589, 85.8139]},
            {"id": "PATRAPADA", "name": "Patrapada", "code": "PTRP", "line": "Orange", "coordinates": [20.2889, 85.7456]},
            {"id": "KALINGA_HOSPITAL", "name": "Kalinga Hospital", "code": "KLGH", "line": "Orange", "coordinates": [20.2724, 85.7767]},
            {"id": "CRPF_SQUARE", "name": "CRPF Square", "code": "CRPF", "line": "Purple", "coordinates": [20.2891, 85.8493]},
            {"id": "MANCHESWAR", "name": "Mancheswar", "code": "MNCH", "line": "Purple", "coordinates": [20.3012, 85.8634]},
            {"id": "KHANDAGIRI", "name": "Khandagiri", "code": "KHND", "line": "Yellow", "coordinates": [20.2534, 85.7767]},
            {"id": "LINGARAJ_TEMPLE", "name": "Lingaraj Temple Road", "code": "LGTR", "line": "Yellow", "coordinates": [20.2387, 85.8389]},
            {"id": "RAM_MANDIR", "name": "Ram Mandir", "code": "RMND", "line": "Yellow", "coordinates": [20.2498, 85.8512]},
            {"id": "MASTER_CANTEEN", "name": "Master Canteen", "code": "MCAN", "line": "Brown", "coordinates": [20.2567, 85.8445]},
            {"id": "BARAMUNDA", "name": "Baramunda", "code": "BRMD", "line": "Brown", "coordinates": [20.2678, 85.8378]},
            {"id": "RAILWAY_STATION", "name": "Bhubaneswar Railway Station", "code": "BHRS", "line": "Pink", "coordinates": [20.2734, 85.8567]},
            {"id": "MARKET_BUILDING", "name": "Market Building", "code": "MKTB", "line": "Pink", "coordinates": [20.2823, 85.8412]}
        ];

        this.connections = [
            {"from": "AIRPORT", "to": "KIIT_SQUARE", "distance": 2.1, "time": 3},
            {"from": "KIIT_SQUARE", "to": "PATIA", "distance": 1.8, "time": 2.5},
            {"from": "PATIA", "to": "JAYDEV_VIHAR", "distance": 3.2, "time": 4},
            {"from": "JAYDEV_VIHAR", "to": "VANI_VIHAR", "distance": 2.5, "time": 3.2},
            {"from": "VANI_VIHAR", "to": "SAILASHREE_VIHAR", "distance": 2.8, "time": 3.5},
            {"from": "SAILASHREE_VIHAR", "to": "HEERA_PANNA", "distance": 1.9, "time": 2.8},
            {"from": "HEERA_PANNA", "to": "CHANDRASEKHARPUR", "distance": 2.4, "time": 3.1},
            {"from": "CHANDRASEKHARPUR", "to": "INFOCITY", "distance": 2.1, "time": 2.9},
            {"from": "PATRAPADA", "to": "KALINGA_HOSPITAL", "distance": 2.7, "time": 3.4},
            {"from": "KALINGA_HOSPITAL", "to": "JAYDEV_VIHAR", "distance": 1.6, "time": 2.2},
            {"from": "CRPF_SQUARE", "to": "MANCHESWAR", "distance": 1.5, "time": 2.1},
            {"from": "MANCHESWAR", "to": "VANI_VIHAR", "distance": 2.3, "time": 3},
            {"from": "KHANDAGIRI", "to": "LINGARAJ_TEMPLE", "distance": 2.2, "time": 2.8},
            {"from": "LINGARAJ_TEMPLE", "to": "RAM_MANDIR", "distance": 1.4, "time": 2},
            {"from": "RAM_MANDIR", "to": "MASTER_CANTEEN", "distance": 1.1, "time": 1.5},
            {"from": "MASTER_CANTEEN", "to": "BARAMUNDA", "distance": 1.3, "time": 1.8},
            {"from": "BARAMUNDA", "to": "RAILWAY_STATION", "distance": 1.8, "time": 2.4},
            {"from": "RAILWAY_STATION", "to": "MARKET_BUILDING", "distance": 1.2, "time": 1.6},
            {"from": "VANI_VIHAR", "to": "CRPF_SQUARE", "distance": 2.1, "time": 2.7},
            {"from": "JAYDEV_VIHAR", "to": "KHANDAGIRI", "distance": 3.1, "time": 3.8}
        ];

        this.lineColors = {
            "Blue": "#3B82F6",
            "Red": "#EF4444", 
            "Green": "#22C55E",
            "Orange": "#F97316",
            "Purple": "#A855F7",
            "Yellow": "#FFD600",
            "Brown": "#A3623B",
            "Pink": "#EC4899"
        };

        this.graph = this.buildGraph();
        this.initializeUI();
        this.createParticles();
        this.renderStationGrid();
    }

    buildGraph() {
        const graph = {};
        
        // Initialize graph with all stations
        this.stations.forEach(station => {
            graph[station.id] = [];
        });

        // Add bidirectional connections
        this.connections.forEach(connection => {
            graph[connection.from].push({
                station: connection.to,
                distance: connection.distance,
                time: connection.time
            });
            graph[connection.to].push({
                station: connection.from,
                distance: connection.distance,
                time: connection.time
            });
        });

        return graph;
    }

    // Dijkstra's Algorithm Implementation
    dijkstra(startId, endId) {
        const distances = {};
        const previous = {};
        const unvisited = new Set();
        
        // Initialize distances
        this.stations.forEach(station => {
            distances[station.id] = station.id === startId ? 0 : Infinity;
            previous[station.id] = null;
            unvisited.add(station.id);
        });

        while (unvisited.size > 0) {
            // Find unvisited station with minimum distance
            let current = null;
            let minDistance = Infinity;
            
            for (const station of unvisited) {
                if (distances[station] < minDistance) {
                    minDistance = distances[station];
                    current = station;
                }
            }

            if (current === null || distances[current] === Infinity) {
                break; // No path exists
            }

            unvisited.delete(current);

            if (current === endId) {
                break; // Found shortest path to destination
            }

            // Update distances to neighbors
            const neighbors = this.graph[current] || [];
            neighbors.forEach(neighbor => {
                if (unvisited.has(neighbor.station)) {
                    const newDistance = distances[current] + neighbor.distance;
                    if (newDistance < distances[neighbor.station]) {
                        distances[neighbor.station] = newDistance;
                        previous[neighbor.station] = current;
                    }
                }
            });
        }

        // Reconstruct path
        const path = [];
        let current = endId;
        
        while (current !== null) {
            path.unshift(current);
            current = previous[current];
        }

        return path.length > 1 ? path : null;
    }

    calculateRoute(sourceId, destinationId) {
        const path = this.dijkstra(sourceId, destinationId);
        
        if (!path) {
            return null;
        }

        let totalDistance = 0;
        let totalTime = 0;
        const routeDetails = [];
        const linesUsed = new Set();

        for (let i = 0; i < path.length; i++) {
            const stationId = path[i];
            const station = this.stations.find(s => s.id === stationId);
            linesUsed.add(station.line);

            const routeStep = {
                station: station,
                isInterchange: false,
                distance: 0,
                time: 0
            };

            if (i < path.length - 1) {
                const nextStationId = path[i + 1];
                const connection = this.connections.find(c => 
                    (c.from === stationId && c.to === nextStationId) ||
                    (c.to === stationId && c.from === nextStationId)
                );

                if (connection) {
                    routeStep.distance = connection.distance;
                    routeStep.time = connection.time;
                    totalDistance += connection.distance;
                    totalTime += connection.time;
                }

                // Check if next station is on a different line (interchange)
                const nextStation = this.stations.find(s => s.id === nextStationId);
                if (nextStation && station.line !== nextStation.line) {
                    routeStep.isInterchange = true;
                }
            }

            routeDetails.push(routeStep);
        }

        const interchanges = routeDetails.filter(step => step.isInterchange).length;

        return {
            path: routeDetails,
            totalDistance: Math.round(totalDistance * 10) / 10,
            totalTime: Math.round(totalTime * 10) / 10,
            interchanges: interchanges,
            linesUsed: Array.from(linesUsed)
        };
    }

    initializeUI() {
        this.sourceInput = document.getElementById('sourceStation');
        this.destinationInput = document.getElementById('destinationStation');
        this.sourceDropdown = document.getElementById('sourceDropdown');
        this.destinationDropdown = document.getElementById('destinationDropdown');
        this.swapButton = document.getElementById('swapStations');
        this.calculateButton = document.getElementById('calculateRoute');
        this.resultsPanel = document.getElementById('resultsPanel');
        this.loadingWheel = document.getElementById('loadingWheel');

        this.setupEventListeners();
    }

    setupEventListeners() {
        // Autocomplete for source station
        this.sourceInput.addEventListener('input', (e) => {
            this.handleAutocomplete(e.target.value, this.sourceDropdown);
        });

        this.sourceInput.addEventListener('focus', () => {
            this.handleAutocomplete(this.sourceInput.value, this.sourceDropdown);
        });

        // Autocomplete for destination station  
        this.destinationInput.addEventListener('input', (e) => {
            this.handleAutocomplete(e.target.value, this.destinationDropdown);
        });

        this.destinationInput.addEventListener('focus', () => {
            this.handleAutocomplete(this.destinationInput.value, this.destinationDropdown);
        });

        // Hide dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.input-container')) {
                this.sourceDropdown.classList.remove('active');
                this.destinationDropdown.classList.remove('active');
            }
        });

        // Swap stations
        this.swapButton.addEventListener('click', () => {
            this.swapStations();
        });

        // Calculate route
        this.calculateButton.addEventListener('click', () => {
            this.performRouteCalculation();
        });

        // Enter key handling
        this.sourceInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.destinationInput.focus();
            }
        });

        this.destinationInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.performRouteCalculation();
            }
        });
    }

    handleAutocomplete(query, dropdown) {
        if (!query.trim()) {
            dropdown.classList.remove('active');
            return;
        }

        const matches = this.stations.filter(station => 
            station.name.toLowerCase().includes(query.toLowerCase()) ||
            station.code.toLowerCase().includes(query.toLowerCase())
        );

        if (matches.length === 0) {
            dropdown.classList.remove('active');
            return;
        }

        dropdown.innerHTML = '';
        matches.forEach(station => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.innerHTML = `
                <div>
                    <strong>${station.name}</strong>
                    <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">
                        ${station.code} • ${station.line} Line
                    </div>
                </div>
            `;
            
            item.addEventListener('click', () => {
                const input = dropdown === this.sourceDropdown ? this.sourceInput : this.destinationInput;
                input.value = station.name;
                dropdown.classList.remove('active');
                
                // Add selection animation
                item.style.background = 'rgba(0, 255, 255, 0.3)';
                setTimeout(() => {
                    item.style.background = '';
                }, 200);
            });

            dropdown.appendChild(item);
        });

        dropdown.classList.add('active');
    }

    swapStations() {
        const sourceValue = this.sourceInput.value;
        const destinationValue = this.destinationInput.value;
        
        // Add swap animation
        this.swapButton.style.transform = 'rotate(180deg) scale(1.1)';
        
        setTimeout(() => {
            this.sourceInput.value = destinationValue;
            this.destinationInput.value = sourceValue;
            this.swapButton.style.transform = '';
        }, 200);
    }

    async performRouteCalculation() {
        const sourceName = this.sourceInput.value.trim();
        const destinationName = this.destinationInput.value.trim();

        if (!sourceName || !destinationName) {
            this.showError('Please select both source and destination stations');
            return;
        }

        if (sourceName === destinationName) {
            this.showError('Source and destination cannot be the same');
            return;
        }

        const sourceStation = this.stations.find(s => s.name === sourceName);
        const destinationStation = this.stations.find(s => s.name === destinationName);

        if (!sourceStation || !destinationStation) {
            this.showError('Please select valid stations from the dropdown');
            return;
        }

        // Show loading animation
        this.showLoading();

        // Simulate calculation delay for better UX
        await new Promise(resolve => setTimeout(resolve, 1500));

        const route = this.calculateRoute(sourceStation.id, destinationStation.id);

        if (!route) {
            this.hideLoading();
            this.showError('No route found between the selected stations');
            return;
        }

        this.hideLoading();
        this.displayRoute(route);
    }

    showLoading() {
        this.loadingWheel.classList.add('active');
        this.calculateButton.disabled = true;
        this.calculateButton.innerHTML = '<span class="btn-text">Calculating...</span>';
    }

    hideLoading() {
        this.loadingWheel.classList.remove('active');
        this.calculateButton.disabled = false;
        this.calculateButton.innerHTML = '<span class="btn-text">Calculate Route</span><div class="btn-effect"></div>';
    }

    displayRoute(route) {
        this.resultsPanel.classList.add('active');
        
        // Update route status
        const routeStatus = document.getElementById('routeStatus');
        routeStatus.className = 'route-status success';
        routeStatus.textContent = 'Route Found';

        // Update summary cards with animation
        this.animateCounter('totalDistance', route.totalDistance + ' km');
        this.animateCounter('totalTime', Math.round(route.totalTime) + ' min');
        this.animateCounter('totalInterchanges', route.interchanges.toString());

        // Display route path
        this.displayRoutePath(route.path);

        // Scroll to results
        this.resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    animateCounter(elementId, finalValue) {
        const element = document.getElementById(elementId);
        element.style.transform = 'scale(1.2)';
        element.style.color = 'var(--neon-green)';
        
        setTimeout(() => {
            element.textContent = finalValue;
            element.style.transform = 'scale(1)';
            element.style.color = 'var(--neon-cyan)';
        }, 300);
    }

    displayRoutePath(path) {
        const pathContainer = document.getElementById('pathStations');
        pathContainer.innerHTML = '';

        path.forEach((step, index) => {
            const stationElement = document.createElement('div');
            stationElement.className = 'path-station';
            stationElement.style.animationDelay = `${index * 0.1}s`;

            const lineColor = this.lineColors[step.station.line] || '#00FFFF';
            
            stationElement.innerHTML = `
                <div class="path-station-number">${index + 1}</div>
                <div class="path-station-info">
                    <div class="path-station-name">${step.station.name}</div>
                    <div class="path-station-line" style="color: ${lineColor}">
                        ${step.station.line} Line • ${step.station.code}
                        ${step.isInterchange ? ' • Interchange' : ''}
                    </div>
                </div>
                <div class="path-station-distance">
                    ${step.distance > 0 ? `${step.distance} km` : ''}
                </div>
            `;

            // Add special styling for interchanges
            if (step.isInterchange) {
                stationElement.style.borderLeft = '3px solid var(--neon-purple)';
                stationElement.style.background = 'rgba(168, 85, 255, 0.1)';
            }

            pathContainer.appendChild(stationElement);
        });
    }

    showError(message) {
        const routeStatus = document.getElementById('routeStatus');
        routeStatus.className = 'route-status error';
        routeStatus.textContent = message;
        
        this.resultsPanel.classList.add('active');
        
        // Hide error after 3 seconds
        setTimeout(() => {
            routeStatus.textContent = '';
        }, 3000);
    }

    createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random horizontal position
            particle.style.left = Math.random() * 100 + '%';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 6 + 's';
            
            // Random size variation
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random color variation
            const colors = ['var(--neon-cyan)', 'var(--neon-blue)', 'var(--neon-green)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particlesContainer.appendChild(particle);
        }
    }

    renderStationGrid() {
        const stationsGrid = document.getElementById('stationsGrid');
        
        this.stations.forEach(station => {
            const stationCard = document.createElement('div');
            stationCard.className = 'station-card';
            
            const lineColor = this.lineColors[station.line] || '#00FFFF';
            
            stationCard.innerHTML = `
                <div class="station-name">${station.name}</div>
                <div class="station-code">${station.code}</div>
                <div class="station-line" style="background: ${lineColor}20; color: ${lineColor}; border: 1px solid ${lineColor}40;">
                    ${station.line}
                </div>
            `;

            stationCard.addEventListener('click', () => {
                // Quick select functionality
                if (!this.sourceInput.value) {
                    this.sourceInput.value = station.name;
                    this.sourceInput.focus();
                } else if (!this.destinationInput.value) {
                    this.destinationInput.value = station.name;
                    this.destinationInput.focus();
                }
                
                // Add click animation
                stationCard.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    stationCard.style.transform = '';
                }, 150);
            });

            stationsGrid.appendChild(stationCard);
        });
    }
}

// Enhanced UI Interactions
class UIEnhancer {
    constructor() {
        this.initEnhancements();
    }

    initEnhancements() {
        this.addRippleEffect();
        this.addHoverGlow();
        this.addTypingAnimation();
        this.addScrollAnimations();
    }

    addRippleEffect() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.4);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(4);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                    style.remove();
                }, 600);
            });
        });
    }

    addHoverGlow() {
        document.querySelectorAll('.glass-panel').forEach(panel => {
            panel.addEventListener('mouseenter', () => {
                panel.style.boxShadow = '0 8px 32px rgba(0, 255, 255, 0.2), 0 0 0 1px rgba(0, 255, 255, 0.1)';
            });
            
            panel.addEventListener('mouseleave', () => {
                panel.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            });
        });
    }

    addTypingAnimation() {
        const inputs = document.querySelectorAll('.station-input');
        inputs.forEach(input => {
            let typingTimer;
            
            input.addEventListener('input', () => {
                input.style.borderColor = 'var(--neon-green)';
                input.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.3)';
                
                clearTimeout(typingTimer);
                typingTimer = setTimeout(() => {
                    input.style.borderColor = 'var(--cyber-border)';
                    input.style.boxShadow = 'none';
                }, 1000);
            });
        });
    }

    addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.glass-panel').forEach(panel => {
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(30px)';
            panel.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(panel);
        });
    }
}

// Voice Search Integration (Placeholder for future enhancement)
class VoiceController {
    constructor(navigator) {
        this.navigator = navigator;
        this.isListening = false;
        this.recognition = null;
        
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            this.initSpeechRecognition();
        }
    }

    initSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            this.processVoiceCommand(transcript);
        };

        this.recognition.onerror = (event) => {
            console.log('Speech recognition error:', event.error);
            this.isListening = false;
        };

        this.recognition.onend = () => {
            this.isListening = false;
        };
    }

    processVoiceCommand(transcript) {
        // Simple voice command processing
        const words = transcript.split(' ');
        const possibleStations = this.navigator.stations.filter(station => 
            words.some(word => station.name.toLowerCase().includes(word))
        );

        if (possibleStations.length > 0) {
            if (!this.navigator.sourceInput.value) {
                this.navigator.sourceInput.value = possibleStations[0].name;
            } else if (!this.navigator.destinationInput.value) {
                this.navigator.destinationInput.value = possibleStations[0].name;
            }
        }
    }

    startListening() {
        if (this.recognition && !this.isListening) {
            this.isListening = true;
            this.recognition.start();
        }
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    const navigator = new MetroNavigator();
    const uiEnhancer = new UIEnhancer();
    const voiceController = new VoiceController(navigator);
    
    // Add global error handling
    window.addEventListener('error', (e) => {
        console.error('Application error:', e.error);
    });
    
    // Add performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log(`App loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
            }, 100);
        });
    }
    
    console.log('🚇 Bhubaneswar Metro Navigator initialized successfully!');
    console.log('🧠 Dijkstra\'s algorithm ready for pathfinding');
    console.log('🎨 Futuristic UI animations activated');
});