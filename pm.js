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
        $("#container").html("<p>WebMidi could not be enabled.</p>")
    } else {
        init();
    }
});
	
	function init() {
        displayInputNames();
		createListeners();
	}

	function updateSettingsDisplay(){
		$("#settings").text(JSON.stringify(settings, null, 1));
	}

	const sleep = (milliseconds) => {
		return new Promise(resolve => setTimeout(resolve, milliseconds))
	  }
    
    function sendPCtoOutput(output, channel, programchange, bankselectcoarse, bankselectfine){
        if (programchange != undefined) {
            console.log(`Sending ${bankselectcoarse} ${bankselectfine} ${programchange} to ${channel} on ${output.name}`);
            output.sendControlChange(0, bankselectcoarse, channel);
            output.sendControlChange(32, bankselectfine, channel);
            output.sendProgramChange(programchange, channel);
        }

    }

	function sendSettingsToAllOuts(){
		WebMidi.outputs.forEach(output => {
			for (var key in settings) {
                var bankselectcourse = 0;
                var bankselectfine = 0;
                var programchange = undefined;
                var channel = settings[key]["channel"];

				if (settings[key]["bankselectcourse"] != null){
                    bankselectcourse = settings[key]["bankselectcourse"];
				};
				
				if (settings[key]["bankselectfine"] != null){
                    bankselectfine = settings[key]["bankselectfine"];
				};
	
				if (settings[key]["programchange"] != null){
                    programchange = settings[key]["programchange"];
                };
                sendPCtoOutput(output, channel, programchange, bankselectcourse, bankselectfine);
			}
		});
	}

	
    function displayInputNames() {

        htmlStr = "MIDI Inputs found:<ul>";
        WebMidi.inputs.forEach(input => {
            htmlStr = htmlStr + `<li>${input.name}</li>`;
        });
        htmlStr = htmlStr + "</ul>";
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
    
$( document ).ready(function() {
    $('#settingsButton').click(function(){
        if ( $('#settings').css('visibility') == 'hidden' )
          $('#settings').css('visibility','visible');
        else
          $('#settings').css('visibility','hidden');
      });
});