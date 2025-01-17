// Enhanced Interactive Terminal Implementation
class Terminal {
  constructor(container) {
    this.container = container;
    this.history = [];
    this.currentLine = "";
    this.commandIndex = -1;
    this.commands = {
      help: () => this.showHelp(),
      status: () => this.checkStatus(),
      scan: () => this.scanNetwork(),
      optimize: () => this.optimizeRoute(),
      clear: () => this.clearTerminal(),
      analyze: () => this.analyzeMarket(),
      predict: () => this.predictTrends(),
      neural: () => this.neuralStatus(),
      agents: () => this.agentStatus(),
    };
    this.init();
  }

  init() {
    this.terminal = document.createElement("div");
    this.terminal.className = "terminal-window";
    this.terminal.innerHTML = `
            <div class="terminal-header">
                <div class="neural-status">NEURAL CORE v2.1.0</div>
                <div class="system-stats">
                    <span class="stat">CPU: 32%</span>
                    <span class="stat">MEM: 47%</span>
                    <span class="stat">NET: 89Mb/s</span>
                </div>
            </div>
            <div class="terminal-output"></div>
            <div class="terminal-input-line">
                <span class="terminal-prompt">nova@neural:~$</span>
                <input type="text" class="terminal-input" spellcheck="false" autofocus>
            </div>
            <div class="neural-waves"></div>
        `;
    this.container.appendChild(this.terminal);

    this.output = this.terminal.querySelector(".terminal-output");
    this.input = this.terminal.querySelector(".terminal-input");
    this.stats = this.terminal.querySelector(".system-stats");

    this.input.addEventListener("keydown", (e) => this.handleInput(e));
    this.initializeWaves();
    this.updateSystemStats();

    this.print("Nova Neural Network Terminal v2.1.0");
    this.print("Neural Core: Active | Agents: 1000 | Network: Optimal");
    this.print('Type "help" for available commands\n');
  }

  initializeWaves() {
    const waves = this.terminal.querySelector(".neural-waves");
    for (let i = 0; i < 3; i++) {
      const wave = document.createElement("div");
      wave.className = "wave";
      waves.appendChild(wave);
    }
  }

  updateSystemStats() {
    setInterval(() => {
      const stats = this.terminal.querySelectorAll(".stat");
      stats[0].textContent = `CPU: ${30 + Math.floor(Math.random() * 10)}%`;
      stats[1].textContent = `MEM: ${45 + Math.floor(Math.random() * 5)}%`;
      stats[2].textContent = `NET: ${85 + Math.floor(Math.random() * 10)}Mb/s`;
    }, 2000);
  }

  async analyzeMarket() {
    this.print("Initializing market analysis...", "info");
    await this.delay(600);
    this.print("Neural network analyzing market patterns...", "info");
    await this.delay(800);

    const patterns = [
      { pattern: "Bullish Divergence", confidence: 87.5 },
      { pattern: "Volume Accumulation", confidence: 92.3 },
      { pattern: "Support Level Formation", confidence: 85.1 },
    ];

    for (const pattern of patterns) {
      await this.delay(400);
      this.print(`Detected: ${pattern.pattern}`, "success");
      this.print(`Confidence: ${pattern.confidence}%`, "info");
    }

    await this.delay(500);
    this.print("Analysis complete. Market sentiment: Bullish", "success");
  }

  async predictTrends() {
    this.print("Activating predictive algorithms...", "info");
    await this.delay(700);
    this.print("Processing market data through neural networks...", "info");
    await this.delay(900);

    const predictions = [
      { timeframe: "1H", direction: "↗", confidence: 89.2 },
      { timeframe: "4H", direction: "↗", confidence: 82.7 },
      { timeframe: "24H", direction: "→", confidence: 75.5 },
    ];

    this.print("\nPredicted price movements:", "success");
    for (const pred of predictions) {
      await this.delay(300);
      this.print(
        `${pred.timeframe}: ${pred.direction} (${pred.confidence}% confidence)`,
        "path"
      );
    }
  }

  async neuralStatus() {
    this.print("Neural Network Status Report", "info");
    await this.delay(400);

    const metrics = [
      { name: "Processing Cores", value: "32/32 Active" },
      { name: "Neural Pathways", value: "1.2M Connected" },
      { name: "Learning Rate", value: "0.0012" },
      { name: "Prediction Accuracy", value: "94.7%" },
      { name: "Response Time", value: "1.8ms" },
    ];

    for (const metric of metrics) {
      await this.delay(200);
      this.print(`${metric.name}: ${metric.value}`, "success");
    }
  }

  async agentStatus() {
    this.print("AI Agent Network Status", "info");
    await this.delay(500);

    const agents = [
      { type: "DEX", active: 342, tasks: "Price Analysis" },
      { type: "MEV", active: 256, tasks: "Protection" },
      { type: "ARB", active: 402, tasks: "Execution" },
    ];

    for (const agent of agents) {
      await this.delay(300);
      this.print(
        `[${agent.type}] ${agent.active} agents | ${agent.tasks}`,
        "success"
      );
    }

    await this.delay(400);
    this.print("\nTotal Network Efficiency: 98.7%", "info");
  }

  handleInput(e) {
    if (e.key === "Enter") {
      const command = this.input.value.trim().toLowerCase();
      this.history.push(command);
      this.commandIndex = this.history.length;
      this.print(`> ${command}`, "path");

      if (command in this.commands) {
        this.commands[command]();
      } else if (command === "") {
        // Do nothing for empty command
      } else {
        this.print(
          `Command not found: ${command}. Type 'help' for available commands.`,
          "warning"
        );
      }

      this.input.value = "";
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (this.commandIndex > 0) {
        this.commandIndex--;
        this.input.value = this.history[this.commandIndex];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (this.commandIndex < this.history.length - 1) {
        this.commandIndex++;
        this.input.value = this.history[this.commandIndex];
      } else {
        this.commandIndex = this.history.length;
        this.input.value = "";
      }
    }
  }

  print(text, type = "") {
    const line = document.createElement("div");
    line.className = `terminal-line ${type}`;
    line.textContent = text;
    this.output.appendChild(line);
    this.output.scrollTop = this.output.scrollHeight;
  }

  showHelp() {
    const commands = [
      "help     - Show this help message",
      "status   - Check system status",
      "scan     - Scan network for opportunities",
      "optimize - Optimize trading routes",
      "analyze  - Analyze market patterns",
      "predict  - Predict price trends",
      "neural   - Neural network status",
      "agents   - AI agent status",
      "clear    - Clear terminal",
    ];

    this.print("Available commands:", "info");
    commands.forEach((cmd) => this.print(cmd));
  }

  checkStatus() {
    this.print("System Status: Optimal", "success");
    this.print("Network: Connected", "success");
    this.print("Latency: 1.8ms", "info");
  }

  async scanNetwork() {
    this.print("Scanning network...", "info");
    await this.delay(1000);
    this.print("Network scan complete", "success");
    this.print("All systems operational", "success");
  }

  async optimizeRoute() {
    this.print("Optimizing trading routes...", "info");
    await this.delay(800);
    this.print("Calculating optimal paths...", "info");
    await this.delay(600);
    this.print("Routes optimized for maximum efficiency", "success");
  }

  clearTerminal() {
    this.output.innerHTML = "";
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// Initialize terminal
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".preview-content");
  if (container) {
    container.innerHTML = "";
    window.terminal = new Terminal(container);
  }
});
