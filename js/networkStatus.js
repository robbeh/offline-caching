/**
 * Created by robbeh.
 * Date: 18/11/12
 * Time: 12:06
 */

$(document).ready(function () {//debugger;
	//$(document.body).bind("online", checkNetworkStatus);
	//$(document.body).bind("offline", checkNetworkStatus);
	checkNetworkStatus();

});

function checkNetworkStatus() {
	if (navigator.onLine) {
		// Just because the browser says we're online doesn't mean we're online. The browser lies.
		// Check to see if we are really online by making a call for a static JSON resource on
		// the originating Web site. If we can get to it, we're online. If not, assume we're
		// offline.
		$.ajaxSetup({
			async: true,
			cache: false,
			context: $("#status"),
			dataType: "json",
			error: function (req, status, ex) {
				showNetworkStatus(false);
			},
			success: function (data, status, req) {
				showNetworkStatus(true);
			},
			timeout: 5000,
			type: "GET",
			url: "js/ping.js"
		});
		$.ajax();
	}
	else {
		showNetworkStatus(false);
	}
}

function showNetworkStatus(online) {
	if (online) {
		$("#online_status").html("Online");
		setTimeout(function() {checkNetworkStatus();}, 60000);
		clearJobList();
		clearJobs();
		getJobs();
	}
	else {
		$("#online_status").html("Offline");
		setTimeout(function() {checkNetworkStatus();}, 10000);
	}
}