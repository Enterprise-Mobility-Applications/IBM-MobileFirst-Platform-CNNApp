
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required.
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *
	 */

	WL.Client.connect({
		onSuccess: function() {
			console.log('Connected to MFP Server');
		},
		onFailure: function() {
			console.log('Failed to connect to MFP Server');
		}
	});
	// Common initialization code goes here

}

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the MobileFirst runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}