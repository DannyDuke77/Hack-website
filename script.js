
	function startHacking() {
        let phone = document.getElementById("phone").value;
        let action = document.getElementById("action").value;
        let output = document.getElementById("output");

        if (!phone.startsWith("2547") || phone.length !== 12) {
            output.innerHTML = "<p style='color: red;'>Invalid Kenyan phone number!</p>";
            return;
    }
		
	function generateRandomIP() {
		return Array(4)
			.fill(0)
			.map(() => Math.floor(Math.random() * 256))
			.join('.');
	}

		let ipAddress = generateRandomIP();

        output.innerHTML = ""; // Clear previous output


        let messages = [
            "Initializing hacking sequence... 10%",
            `Connecting to device ${phone}... 20%`,
            `Device contacted successfully! IP address: ${ipAddress}... 30%`,
            "Bypassing security firewall... 40%",
            "Establishing remote connection... 50%",
            "Remote connection successful!... 60%",
            `Executing ${action} exploit... 70%`,
            "Downloading data... 80%",
			`Finalizing ${action} data download for the device... 90%`,
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
        }, 200);
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

