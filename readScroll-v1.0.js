$(document).ready(function(){
	var creditArray = {
		name: "Tarun Krishnan",
		url: "http://tarunkrishnan.com",
		script_name: 'tk1z_birdhousebranding_carve_readscroll',
		created: "August 4, 2016"
	};
	var blkstr = [];
	$.each(creditArray, function(idx2,val2) {                    
	  var str = idx2 + ":" + val2;
	  blkstr.push(str);
	});
	console.log(blkstr.join(", "));

	var contentBlocks = $('.entry-content').find('.sqs-block-html');
	var $window = $(window);
	var distance;
	var mainContentBlock;
	var counter = 0;
	var contentHeight;
	contentBlocks.each(function(){
	  counter++;
	  if(counter == 2) {
	  	contentHeight = $(this).height();
	  	mainContentBlock = $(this);
	  	distance = mainContentBlock.offset().top;
	  	console.log('block height:'+contentHeight);	
	  		  	 
	  	$window.scroll(function(){
	  		if ($window.scrollTop() >= distance ) {
		 		var currentStep = $window.scrollTop() - distance;
		 		if(currentStep >= 0) {
		 			console.log(distance + contentHeight);
		 			if($window.scrollTop() <= (distance + contentHeight)) {
		 				
		 				$('.progress').css('width', ((currentStep/contentHeight)*100)+'%');
		 				$('.progress-wrapper').css({
		 					height: '6px',
		 					width: '100%'	
		 				});
		 			}
		 		}

		     } else {
		     	$('.progress').css('width', '0%');
		     	$('.progress-wrapper').css({
		 					height: '0px',
		 					width: '100%'	
		 				});
		     }

		 });
	  	setInterval(function(){
	  		if ($window.scrollTop() >= distance ) {
		 		var currentStep = $window.scrollTop() - distance;
		 		if(currentStep >= 0) {
		 			if($window.scrollTop() <= (distance + contentHeight)) {
		 				//console.log(currentStep);
		 				$('.progress').css('width', ((currentStep/contentHeight)*100)+'%');
		 				$('.progress-wrapper').css({
		 					height: '6px',
		 					width: '100%'	
		 				});
		 			}
		 		}

		     } else {
		     	$('.progress').css('width', '0%');
		     	$('.progress-wrapper').css({
		 					height: '0px',
		 					width: '100%'	
		 				});
		     }
	  	}, 500);
	  }
	});
});

$(document).ready(function(){
    
   
});

