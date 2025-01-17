// Security Modal Implementation
function createSecurityModal() {
    if (getCookie('nova_verified')) return;

    const modal = document.createElement('div');
    modal.className = 'security-modal';
    modal.innerHTML = `
        <div class="security-content">
            <div class="security-title">
                <div class="title-line"></div>
                <h1>SECURITY VERIFICATION</h1>
                <div class="title-line"></div>
            </div>

            <div class="verification-step">
                <div class="step-circle">01</div>
                <h3>Initializing Neural Verification...</h3>
                <div class="status">Status: <span class="scanning">Scanning...</span></div>
            </div>

            <div class="verification-step">
                <div class="step-circle">02</div>
                <h3>The Nova platform is powered by:</h3>
                <div class="protocol-features">
                    <div class="feature-item">• Autonomous AI Agents: Self-learning algorithms that optimize trading routes and protect assets</div>
                    <div class="feature-item">• MEV Protection: Advanced shield against front-running and sandwich attacks</div>
                    <div class="feature-item">• Cross-Chain Operations: Seamless execution across multiple blockchains</div>
                    <div class="feature-item">• Real-Time Optimization: Sub-2ms response time for maximum efficiency</div>
                </div>
            </div>

            <div class="verification-step">
                <div class="step-circle">03</div>
                <h3>Platform Launch...</h3>
                <p>To celebrate the launch of the Nova platform, we're excited to distribute 2% of the initial $NOVA token supply, the native token that powers the entire Nova ecosystem.</p>
            </div>

            <div class="verification-footer">
                <div class="domain-verify">
                    <span class="warning">⚠️</span>
                    Verify you are on: <span class="domain">nova.net</span>
                </div>
                <button onclick="completeVerification()" class="verify-button">
                    Verify & Continue <span class="arrow">→</span>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const style = document.createElement('style');
    style.textContent = `
        .security-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 12, 16, 0.98);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(10px);
        }

        .security-content {
            background: rgba(26, 26, 47, 0.3);
            border: 1px solid rgba(0, 243, 255, 0.2);
            border-radius: 12px;
            padding: 1.5rem;
            width: 90%;
            max-width: 580px;
            max-height: 90vh;
            position: relative;
            overflow: hidden;
        }

        .security-title {
            text-align: center;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            animation: titleAppear 0.8s ease forwards;
            opacity: 0;
            transform: translateY(-10px);
        }

        .security-title h1 {
            font-size: 1.2rem;
            font-weight: 800;
            margin: 0;
            color: var(--neon-blue);
            text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
            letter-spacing: 2px;
            white-space: nowrap;
            position: relative;
            padding: 0 0.5rem;
        }

        .title-line {
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--neon-blue), transparent);
            flex: 1;
            opacity: 0.5;
        }

        .verification-step {
            position: relative;
            padding: 1rem;
            margin-bottom: 1rem;
            background: rgba(0, 243, 255, 0.03);
            border-radius: 8px;
            border: 1px solid rgba(0, 243, 255, 0.1);
        }

        .step-circle {
            position: absolute;
            left: -10px;
            top: -10px;
            width: 30px;
            height: 30px;
            background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: bold;
            font-size: 0.8rem;
            box-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
        }

        .verification-step h3 {
            color: var(--neon-blue);
            margin: 0 0 0.5rem 1rem;
            font-size: 1.1rem;
            text-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
        }

        .verification-step p {
            color: rgba(255, 255, 255, 0.8);
            margin: 0.5rem 0;
            line-height: 1.4;
            font-size: 0.9rem;
        }

        .status {
            color: rgba(255, 255, 255, 0.7);
            margin-left: 1rem;
            font-size: 0.9rem;
        }

        .scanning {
            color: var(--neon-blue);
            animation: pulse 1.5s infinite;
        }

        .protocol-features {
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .feature-item {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.85rem;
            line-height: 1.4;
        }

        .verification-footer {
            margin-top: 1.5rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .domain-verify {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            background: rgba(255, 186, 0, 0.1);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            border: 1px solid rgba(255, 186, 0, 0.2);
        }

        .domain {
            color: var(--neon-blue);
            font-weight: bold;
        }

        .verify-button {
            background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
            color: #fff;
            border: none;
            padding: 0.7rem 2rem;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: 1px solid rgba(0, 243, 255, 0.3);
        }

        .verify-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 30px rgba(0, 243, 255, 0.3);
        }

        .arrow {
            transition: transform 0.3s ease;
        }

        .verify-button:hover .arrow {
            transform: translateX(5px);
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        @keyframes titleAppear {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes scanline {
            0% {
                transform: translateY(0);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateY(24px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function completeVerification() {
    setCookie('nova_verified', 'true', 30); // Set cookie for 30 days
    document.querySelector('.security-modal').remove();
}

// Initialize modal on page load
document.addEventListener('DOMContentLoaded', createSecurityModal);