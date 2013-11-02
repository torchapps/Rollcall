<?

// $count = 0;
// foreach($dates as $date => $data){
// 	foreach($data['attendees'] as $member){
// 		if($member->id) $count++;
// 		if($member->full_name) $count++;
// 	}
// 	foreach($data['absentees'] as $member){
// 		if($member->id) $count++;
// 		if($member->full_name) $count++;
// 	}
// 	$count += $data['total'];
// }
// echo $count;
?>
<script type="text/javascript" src="//use.typekit.net/dgs7vbr.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<script src="http://d3js.org/d3.v2.js"></script>

<link rel="stylesheet" type="text/css" href="../../resources/style.css">
<!-- <script type="text/javascript" src="../../resources/d3.v2.min.js"></script> -->
<div class="list-viewport">
	<div class="clearfix list-header">
		<div class="rank">Rank</div>
		<div class="name">Name</div>
		<div class="percentage">Presence</div>
	</div>
	<ol id="attendance-list-1">
		<? foreach($members as $member): ?>
			<li id="r<?= $member['id'] ?>" class="rep clearfix">
				<div class="name"><?= $member['name'] ?>
				</div>
				<div class="percentage"><?= $member['score'] ?></div>
			</li>
		<? endforeach; ?>
	</ol>
</div>

<div class="data-vis-viewport">
	<h1>Congress roll call attendance</h1>
	<div class="info-container">
		<div class="date">hello</div>
		<div class="date">hello</div>
	</div>
	<div id="canvas-1">
	</div>
</div>


<script type="text/javascript">
	var teal = "#5fbdcf";
	var subduedRed = "#ca524c";
	var hillGreen = "#889930";

	var dateData = [<? foreach($dates as $date => $data): ?><? $count = 0; ?>
		{
		'date': new Date('<?= $date ?>'),
		'attendees':
			[<? foreach($data['attendees'] as $member): ?><? $count++; ?>
				{'id': <?=$member->id?>,
					'full-name': "<?=$member->full_name?>"},
			<? endforeach; ?>],
		'absentees':
			[<? foreach($data['absentees'] as $member): ?>
				{'id': <?=$member->id?>,
					'full-name': "<?=$member->full_name?>"},
			<? endforeach; ?>],
		'count': <?=$count?>,
		}, 
	<? endforeach; ?>];
	var memberData = 
		{
			<? foreach($members as $member): ?>
				"r<?= $member['id'] ?>": [
					"<?= $member['name'] ?>"
					, <?= $member['score'] ?>
					, [
						<? foreach ($member['days'] as $days): ?>
							new Date('<?=$days?>'),
						<? endforeach; ?>
						]],
			<? endforeach; ?>
		}


	var totalRep = 286;
	var canvasHeight = document.height*0.6; 
	var canvasWidth = document.width*0.6;
	var padding = 40;
	//var barWidth = 4;
	//var latestDate = dateData[dateData.length-1].date;
	
	var canvas = d3.select("#canvas-1")
		.append("svg:svg")
			.attr("width", canvasWidth)
			.attr("height", canvasHeight)
    		//.attr("pointer-events", "all")
    	.append("g")
			.attr("class", "drawGroupContainer")//for containing zoom event
			.attr("transform", "translate(0,0) scale(1)")
		.append("g")
			.attr("class", "drawGroup")
			.attr("transform", "translate(0,0) scale(1)");
			//shift down so that svg is aligned to drawGroup

	
	//setting up scale information
	var x = d3.scale.ordinal()
		.domain(dateData.map(function(d) { return d.date; }))
		.rangeBands([padding,canvasWidth-padding],0);
		//can't use [padding, canvasWidth-padding] to allow insertion of axis, because it is also magnified by zoom.
	var y = d3.scale.linear()
		.domain([0,100])
		.rangeRound([canvasHeight,0]);

	//setting up zoom / drag. Zoom handles both zooming and dragging, so chill the fuck out.

	var maxZoom = 5;
	var zoom = d3.behavior.zoom()
		.on("zoom", zoomChange).scaleExtent([1,maxZoom]);

	function zoomChange(){
		d3.selectAll(".data-bar").attr("width",function(){return x.rangeBand() * d3.event.scale + 1});

		d3.selectAll(".data-bar").attr("x", function(d,i){
			return x(i) * d3.event.scale
		});

		//applying to data-bar-full
		d3.selectAll(".data-bar-full").attr("width",function(){
			return x.rangeBand() * d3.event.scale + 1});
		d3.selectAll(".data-bar-full").attr("x", function(d,i){
			return x(i) * d3.event.scale
		});

		d3.select(".drawGroup").attr("transform", 
			function(){
				if (d3.event.translate[0] > 0){
					d3.event.translate[0] = 0;
				} else if (d3.event.translate[0] < -canvasWidth * (d3.event.scale - 1)){
					d3.event.translate[0] = -canvasWidth * (d3.event.scale - 1);
				}
				// using d3.event.translate[0] directly in the above if statement to keep it from continually counting up even if at edge. (when i was using a separate variable, if i overscrolled, i had to overscroll the other way too, to compensate.)
				return "translate(" + d3.event.translate[0] + ", 0)"
			});
	}

	// Printing to console the attendee ids for the specific date
	var highlightReps = function(d){
		var attendees = d.attendees.map(function(d){
			return d.id+""; //converting to string by adding an empty string
		});
		var absentees = d.absentees.map(function(d){
			return d.id+""
		});

		for (var i = 0; i < attendees.length; i++) {
		 	d3.select("#r"+attendees[i]).style("background-color", hillGreen);
		};
		for (var i = 0; i < absentees.length; i++) {
		 	d3.select("#r"+absentees[i]).style("background-color", subduedRed);
		};
	}
	var deHighlightReps = function(){
		d3.selectAll(".rep").style("background-color", "");
	}

	//redraw
	var redrawDataInfo = function(d){
		var infoContainer = d3.select(".info-container")
			.data(function(){
				if (d != undefined) {
					return [d];
				}
				else {return []};
			});

		var rollcallPercent = d.count * 100 / totalRep;

		infoContainer
			.html(function(d){
				return "<div class='specific-date'>"
					+ d.date
					+ "</div><div class='percent'>"
					+ rollcallPercent.toFixed(2)
					+ "%</div>"
			});
	}
	var redrawGraph = function(){

		//rendering
		var redrawnBars = canvas.selectAll("g")
				.data(dateData);
				//try replacing contextualizedData with dateData

		redrawnBars.enter()
				.append("g")
					.attr("class", "data-bar-wrapper")
				.append("rect")
					.attr("class", "data-bar")
					.attr("id", function(d){return "d"+d.date.valueOf();})
					.attr("fill", "black")
					.attr("y", function(d){return canvasHeight - (canvasHeight * d.count / totalRep)})
					.attr("x", function(d, i){return x(i);})
					.attr("width", x.rangeBand()+2)
					.attr("height", function(d){return canvasHeight * d.count / totalRep});
		//select was used to enable inheritance from the <g> elements down to the .data-bar elements. Since select selects from each <g>, every .data-bar is also selected.

		redrawnBars.select(".data-bar")
				.transition(2000)
					.attr("x", function(d, i){return x(i);})
					.attr("width", x.rangeBand()+1)
					.attr("height", function(d){return canvasHeight * d.count / totalRep})
					.attr("y", function(d){return canvasHeight - (canvasHeight * d.count / totalRep)});

		redrawnBars.exit()
				.transition(1000)
					.style("opacity", 0)
					.remove();

		//remove all the data-bar-full so that it can be rebound to the new set of data-bar-wrapper
		d3.selectAll(".data-bar-full")
			.remove();
		d3.selectAll(".data-bar-wrapper")
				.insert("rect",":first-child")
					.attr("class", "data-bar-full")
					.attr("x", function(d, i){return x(i);})
					.attr("y", 0)
					.attr("width", x.rangeBand())
					.attr("height", canvasHeight)
					.attr("fill", "white");

		//handles hover highlighting
		d3.selectAll(".data-bar-wrapper")
			.on("mousemove", function(d){
				d3.select(this).select(".data-bar").style("fill", "steelblue");
				d3.select(this).select(".data-bar-full").style("fill", "pink");

				redrawDataInfo(d, d3.mouse(this));
				deHighlightReps();
				highlightReps(d);
			})
			.on("mouseout", function(d){
				d3.select(this).select(".data-bar").style("fill", "black");
				d3.select(this).select(".data-bar-full").style("fill", "white");
				deHighlightReps();
			});

		d3.selectAll(".data-bar-wrapper")
			.on("mouseclick", function(d){
				d3.select(this).select(".data-bar").style("fill", hillGreen);
				redrawDataInfo(d, d3.mouse(this));
			})
	}

	// d3.selectAll(".rep")
	// 	.on("mousemove", function(){
	// 		var thisId = d3.select(this).property("id");
	// 		var daysArray = memberData[thisId][2];

	// 		//color everything red first, so that when you color presence green, absence is colored red.
	// 		d3.selectAll(".data-bar").style("fill", subduedRed);

	// 		for (var i = daysArray.length - 1; i >= 0; i--) {
	// 			var dateId = "d"+daysArray[i].valueOf();
	// 			d3.select("#"+dateId).style("fill", hillGreen);
	// 		}
	// 	})
	// 	.on("mouseout", function(){
	// 		d3.selectAll(".data-bar").style("fill", "black");
	// 	});

	d3.selectAll(".rep")
		.on("mousemove", function(){
			var thisId = d3.select(this).property("id");
			var daysArray = memberData[thisId][2];

			//color everything red first, so that when you color presence green, absence is colored red.
			d3.selectAll(".data-bar")
				.style("opacity", "0.2");

			for (var i = daysArray.length - 1; i >= 0; i--) {
				var dateId = "d"+daysArray[i].valueOf();
				d3.select("#"+dateId).style("opacity", "1");
			}
		})
		.on("mouseout", function(){
			d3.selectAll(".data-bar").style("opacity", "1");
		});

	var yAxis = d3.svg.axis().scale(y).orient("left").ticks(6);

	d3.select("svg")
		.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + padding + ",0)")
		.call(yAxis);

	d3.select(".drawGroupContainer").call(zoom);
	redrawGraph();

</script>