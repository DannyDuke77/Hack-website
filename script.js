
    function getDeviceName() {
	    let userAgent = navigator.userAgent;
	
	    // Check for common Nokia identifiers
	    if (/Nokia/i.test(userAgent)) return "Nokia Device";
	
	    // Extract brand and model for Android devices
	    let androidMatch = userAgent.match(/\((?:Linux; Android [^;]+; )([^)\s]+)\)/);
	    if (androidMatch) return androidMatch[1];
	
	    // Extract "iPhone" for Apple devices
	    if (/iPhone/.test(userAgent)) return "iPhone";
	
	    // Detect Windows, Mac, and Linux PCs
	    if (/Windows NT 10/.test(userAgent)) return "Windows 10 PC";
	    if (/Windows NT 6.1/.test(userAgent)) return "Windows 7 PC";
	    if (/Windows/.test(userAgent)) return "Windows PC";
	    if (/Macintosh/.test(userAgent)) return "MacBook";
	    if (/Linux/.test(userAgent)) return "Linux PC";
	
	    return "Unknown Device";
	}


    function startHacking() {
        let phone = document.getElementById("phone").value;
        let action = document.getElementById("action").value;
        let output = document.getElementById("output");

        if (!phone.startsWith("2547") || phone.length !== 12) {
            output.innerHTML = "<p style='color: red;'>Invalid Kenyan phone number!</p>";
            return;
        }

        output.innerHTML = ""; // Clear previous output

        let deviceName = getDeviceName();

        let messages = [
            "Initializing hacking sequence... 10%",
            `Connecting to device ${phone}... 20%`,
            `Device (${deviceName}) contacted successfully!... 30%`,
            "Bypassing security firewall... 40%",
            "Establishing remote connection... 50%",
            "Connection successful!... 60%",
            `Executing ${action} exploit... 70%`,
            "Downloading data... 80%",
			`Finalizing ${action} data download for (${deviceName})... 90%`,
            "Click the button below to confirm hack:",
        ];

        let i = 0;
        let interval = setInterval(() => {
            if (i < messages.length - 1) {
                output.innerHTML += `<p><li>${messages[i]}</li></p>`;
                i++;
            } else {
                clearInterval(interval);

                // Add the confirmation button
                output.innerHTML += `
                    <button id="confirm" onclick="finalizeHack()">Confirm!</button>
					<button id="stop" onclick="stopHack()">STOP</button>
                `;
            }
        }, 1000);
    }

    function finalizeHack() {
        let output = document.getElementById("output");
		let confirmButton = document.getElementById("confirm");
		let stopButton = document.getElementById("stop");
		
		// Remove the button and display the final message
		confirmButton.style.display="none";
		stopButton.style.display="none";
        output.innerHTML += `<p><li>PROCESS COMPLETED SUCCESSFULLY! DEVICE COMPROMISED!... 100%</li></p>`;
    }
	
	function stopHack() {
		let output = document.getElementById("output");
		let confirmButton = document.getElementById("confirm");
		let stopButton = document.getElementById("stop");
		
		// Remove the button and display the final message
		confirmButton.style.display="none";
		stopButton.style.display="none";
		output.innerHTML += `<p><li>PROCESS STOPPED SUCCESSFULLY!...</li></p>`;
    }

