var settings = {};
	for (i = 1; i <= 16; i++) {
		settings["channel"+i]= {
			"bankselectcourse": null,
			"bankselectfine": null,
			"programchange": null,
			"channel": i
		};
	}

	WebMidi.enable(function(err) {
		if (err) {
		console.log("WebMidi could not be enabled.", err);
		} else {
			init();
		}
		
		
	});
	
	function init() {
        displayInputNames();
		createListeners();
		updateSettingsDisplay();
	}

	function updateSettingsDisplay(){
		$("#settings").text(JSON.stringify(settings, null, 1));
	}

	const sleep = (milliseconds) => {
		return new Promise(resolve => setTimeout(resolve, milliseconds))
	  }
	
	function sendSettings(output){
		//WebMidi.outputs.forEach(output => {
			for (var key in settings) {
				if (settings[key]["bankselectcourse"] != null){
						console.log(`Sending MSB for ch: ${settings[key]["channel"]} to ${settings[key]["bankselectcourse"]} to ${output.name}`);
						output.sendControlChange(0, settings[key]["bankselectcoarse"], settings[key]["channel"]);					
				};
				
				if (settings[key]["bankselectfine"] != null){
						console.log(`Sending LSB for ch: ${settings[key]["channel"]} to ${settings[key]["bankselectfine"]} to ${output.name}`);
						output.sendControlChange("bankselectfine", settings[key]["bankselectfine"], settings[key]["channel"], {time: "+2"});					
				};
	
				if (settings[key]["programchange"] != null){
						console.log(`Sending PC for ch: ${settings[key]["channel"]} to ${settings[key]["programchange"]} to ${output.name}`);
						output.sendProgramChange(settings[key]["programchange"], settings[key]["channel"],  {time: "+4"});
				};
			}
		//});
	}

	
    function displayInputNames() {

        htmlStr = "MIDI Inputs found:<ul>";
        
        WebMidi.inputs.forEach(input => {
            htmlStr = htmlStr + `<li>${input.name}</li>`;
        });
        htmlStr = htmlStr + "</ul>";
        console.log(htmlStr);
        $("#inputs_found").html(htmlStr);
    }
    
		

	function createListeners() {
		WebMidi.inputs.forEach(input => {
	
			// Listen to control change message on all channels
			input.addListener("controlchange", "all", function(e) {
				switch (e.controller.name) {
				case "bankselectcoarse":
					
					console.log(`Updating MSB for ch: ${e.channel} to ${e.value}`);
					$(`#bankselectcoarse_${e.channel}`).text(e.value);
					settings["channel"+e.channel]["bankselectcourse"] = e.value;
					updateSettingsDisplay();
					break;
				case "bankselectfine":
					
					console.log(`Updating LSB for ch: ${e.channel} to ${e.value}`);
					$(`#bankselectfine_${e.channel}`).text(e.value);
					settings["channel"+e.channel]["bankselectfine"] = e.value;
					updateSettingsDisplay();
					break;
				default:
					console.log("Received 'controlchange' message.", e);
				}
			});
	
			input.addListener("programchange", "all", function(e) {
				$(`#pc_${e.channel}`).text(e.value);
				settings["channel"+e.channel]["programchange"] = e.value;
				updateSettingsDisplay();
				console.log(`Updating PC for ch: ${e.channel} to ${e.value}`);
			});
		});
    }
    
    $('#settingsButton').click(function(){
        if ( $('#settings').css('visibility') == 'hidden' )
          $('#settings').css('visibility','visible');
        else
          $('#settings').css('visibility','hidden');
      });