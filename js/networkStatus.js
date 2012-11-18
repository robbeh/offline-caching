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
		// May not be true all of the time so we can do a fool proof get request
		// to double check we are online.
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
		getJobs();
	}
	else {
		$("#online_status").html("Offline");
		setTimeout(function() {checkNetworkStatus();}, 10000);
	}
}