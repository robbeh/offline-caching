function getJobs() {
	$.getJSON('jobs.php', function(data) {
		$.each(data, function(key, value) {

			buildJobList(key, value);
			buildHiddenPages(key, value);
		});
	});
}

function buildJobList(key, value) {
		$("#jobList").append(
			'<div id='+key+'><a href="#" onclick="toggleJob(\''+key+'\');">'+value+'</a></div>'
		);
}

function buildHiddenPages(key, value) {
	if (!$('#hidden_'+key).length) {
		$("#jobs").append(
			'<div id=hidden_'+key+' style="display: none;">Job: '+value+'</div>'
		);
	}
}

function toggleJob(divId) {
	hideAllJobs();
	toggleJobList();
	toggleBackButton();
	$("#hidden_"+divId).show();
}

function returnToJobs() {
	toggleBackButton();
	hideAllJobs();
	toggleJobList();
}

function toggleBackButton() {
	$("#back").toggle();
}

function toggleJobList() {
	$("#jobList").toggle();
}

function hideAllJobs() {
	$("div", "#jobs").each(function() {
		$(this).hide();
	});
}

function clearJobList() {
	$('#jobList').empty();
}
//
//function clearJobs() {
//	$('#jobs').empty();
//}