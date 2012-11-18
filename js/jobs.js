function getJobs() {
	$.getJSON('jobs.php', function(data) {
		$.each(data, function(i, property) {
			console.log(i);
			console.log(property.property);
			buildJobList(i, property.property);
			buildHiddenPages(i, property.property, property.contract);
		});
	});
}

function buildJobList(key, value) {
		$("#jobList").append(
			'<div id='+key+'><a href="#" onclick="toggleJob(\''+key+'\');">'+value+'</a></div>'
		);
}

function buildHiddenPages(key, value, value2) {
	if (!$('#hidden_'+key).length) {
		$("#jobs").append(
			'<div id=hidden_'+key+' style="display: none;">Job: '+value+'<br/><div class="'+value2+'">Contract: '+value2+'</div></div>');
	}
}

function toggleJob(divId) {
	hideAllJobs();
	toggleJobList();
	toggleBackButton();
	$("#hidden_"+divId).toggle();
	$("#hidden_"+divId).children('div').toggle();
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