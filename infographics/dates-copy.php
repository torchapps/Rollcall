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
<script src="http://d3js.org/d3.v2.js"></script>
<h1>Oh look, Infographic!</h1>
<div class="data-options">
	<ul>
		<li>
			<a href="#" id="m-6">Last 6 Months</a>
		</li>
		<li>
			<a href="#" id="m-12">Last 12 Months</a>
		</li>
		<li>
			<a href="#" id="m-18">Last 18 Months</a>
		</li>
		<li>
			<a href="#" id="m-all">All</a>
		</li>
	</ul>
</div>
<div class="info-container">
	<span class="date">hello</span>
</div>
<div id="canvas-1">
</div>


<script type="text/javascript">

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



	var totalRep = 286;
	var canvasHeight = totalRep; //change later
	var barWidth = 4;
	var latestDate = dateData[dateData.length-1].date;
	
	var flattenOutCount = function(element, index, array){
		return element.count;
	}

	var canvas = d3.select("#canvas-1")
		.append("svg:svg")
			.attr("width", 600)
			.attr("height", totalRep);

	var redrawDataInfo = function(specificDateData){
		var infoContainer = d3.select(".info-container")
			.data(function(){
				if (specificDateData != undefined) {
					return [specificDateData];
				}
				else {return []};
			});

		var rollcallPercent = specificDateData.count*100/286

		infoContainer
			.html(function(specificDateData){
				return "<div class='specific-date'>"
					+ specificDateData.date
					+ "</div><div class='percent'>"
					+ rollcallPercent.toFixed(2)
					+ "%</div>"
			});
	}

	var redrawGraph = function(timeFrame){

		var monthFilter = function(dateValue, month){
			var newDate = new Date(dateValue);
			var filterDate = new Date(newDate.setMonth(dateValue.getMonth()-month));
			return filterDate;
		}

		var isWithinTimeFrame = function(element, index, array){
			return (element.date >= monthFilter(latestDate,timeFrame));
		}

		//allows user not to specify a timeFrame
		var contextualizeData = function(){
			var result;
			if (timeFrame != undefined) {
				result = dateData.filter(isWithinTimeFrame);
			} else {
				result = dateData;
			}
			return result;
		}
		var contextualizedData = contextualizeData();

		//setting up scale information
		var x = d3.scale.linear()
			.domain([0,contextualizedData.length])
			.rangeRound([0,600]);

		var y = d3.scale.linear()
			.domain([0,totalRep])
			.rangeRound([0,canvasHeight]);

		//rendering
		var redrawnBars = canvas.selectAll("g")
				.data(contextualizedData);
				//try replacing contextualizedData with dateData

		redrawnBars.enter()
				.append("g")
					.attr("class", "data-bar-wrapper")
				.append("rect")
					.attr("class", "data-bar")
					.attr("fill", "black")
					.attr("x", function(d, i){return x(i);})
					.attr("width", function(){
						return Math.ceil(600/(contextualizedData.length-1))})
					.attr("height", function(d){return d.count})
					.attr("y", function(d){return totalRep-d.count});

		//select was used to enable inheritance from the <g> elements down to the .data-bar elements. Since select selects from each <g>, every .data-bar is also selected.

		redrawnBars.select(".data-bar")
				.transition(2000)
					.attr("x", function(d, i){return x(i);})
					.attr("width", function(){
						return Math.ceil(600/(contextualizedData.length-1))})
					.attr("height", function(d){return d.count})
					.attr("y", function(d){return totalRep-d.count});

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
					.attr("width", function(){
							return Math.ceil(600/(contextualizedData.length-1))})
					.attr("height", totalRep)
					.attr("fill", "white")
					.attr("y", 0);

		//handles hover highlighting
		d3.selectAll(".data-bar-wrapper")
			.on("mousemove", function(d){
				d3.select(this).select(".data-bar").style("fill", "steelblue");
				d3.select(this).select(".data-bar-full").style("fill", "pink");
				redrawDataInfo(d, d3.mouse(this));
			})
			.on("mouseout", function(d){
				d3.select(this).select(".data-bar").style("fill", "black");
				d3.select(this).select(".data-bar-full").style("fill", "white");
			});
	}

	redrawGraph();
	d3.select("#m-6")
		.on("click", function(){
			redrawGraph(6);
		});
	d3.select("#m-12")
		.on("click", function(){
			redrawGraph(12);
		});
	d3.select("#m-18")
		.on("click", function(){
			redrawGraph(18);
		});
	d3.select("#m-all")
		.on("click", function(){
			redrawGraph();
		});

</script>