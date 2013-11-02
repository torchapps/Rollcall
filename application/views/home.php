<section class="clearfix">

	<div id="data-vis-viewport" class="left-percent">
		<div id="data-vis-metadata" class="clearfix hidden-phone">
			<h1>Congress Roll Call Attendance</h1>
			<div class="visible-desktop">
				<p><strong>Our data is accurate as of November 14, 2012</strong></p>
				<p>Each bar represents one session. Note that we treat <strong>roll call attendance</strong> differently from <strong>attendance</strong>. The former is required for quorum, and is akin to a teacher calling out students' names in class, while the latter is written, and can be signed at any time. </p>
			</div>
			
			<ul class="legend clearfix">
				<!-- <h4>Legend: </h4> -->
				<li class="legend-item">
					<div class="circle" id="c2010"></div>
					<span>2010</span>
				</li>
				<li class="legend-item">
					<div class="circle" id="c2011"></div>
					<span>2011</span>
				</li>
				<li class="legend-item">
					<div class="circle" id="c2012"></div>
					<span>2012</span>
				</li>
				<li class="legend-item">
					<div class="circle" id="no-quorum"></div>
					<span>no quorum</span>
				</li>
			</ul>
		</div>
		
		<div id="canvas-1" class="hidden-phone">
			<img id="dates-loader" class="loader" src="<?=site_url('../resources/images/loader.gif')?>">
		</div>

		<div class="clearfix" id="info-container">
			<div id="info-arrow" class="go-away"></div>
			<div id="placeholder">Hover over <span class="hidden-phone">the graph or </span>the list to begin.</div>
		</div>
	</div>

	<div id="list-viewport">
		<div class="clearfix" id="list-header">
			<div class="name">Representative</div>
			<div class="percentage">Presence</div>
		</div>
		<img id="member-loader" class="loader" src="<?=site_url('../resources/images/loader.gif')?>">
		<ol id="attendance-list">
		</ol>
	</div>
</section>




<script type="text/javascript">

	var x;
	var y;
	var yNew;

	var teal = "#5fbdcf";
	var subduedRed = "#ca524c";
	var hillGreen = "#889930";
	var subduedPink = "#d85b74";
	var linkBlue = "rgb(36, 150, 218)";
	var purple = "#5f3a82";
	var warning = subduedRed
	var hasGraphBeenRendered = false;
	var dateDataLoaded = false;

	var totalRep = 286;
	var graphMetadataHeight = function(){
		var metadataHeight = + d3.select("#data-vis-metadata").style("height").replace("px","")
		+
		+ d3.select("#info-container").style("height").replace("px","")
		// +
		// + d3.select("#rollcall-navbar").style("height").replace("px", "")
		;
		if (metadataHeight >= 0){
			return metadataHeight;
		} else return 0;
	}

	var canvasHeight = function(){

		var height = +d3.select("#data-vis-viewport").style("height").replace("px", "")-graphMetadataHeight()-40;
		
		if (height >= 82){
			return height;
		} else return 82;
	}
	//var canvasHeight = function(){return 400;}
	var canvasWidth = function(){return d3.select("#data-vis-viewport").style("width").replace("px", "")-40};
	var paddingY = 20;
	var paddingX = 30;

	var dateData;
	var memberData;

	var runGraph = function(){
		if (d3.select("#canvas-1").style("display")!= "none") {
			redrawGraph();
			spawnAxis();
			if (!hasGraphBeenRendered){
				indicateRepPresenceInDates();
				hasGraphBeenRendered = true;
			}
		}
	}

	////////////////
	// ajax
	////////////////

	d3.json("<?=site_url('data/ajax')?>", function(json){
		dateData = json.dates;
		memberData = json.members;


		//process data
		for (var i = 0; i < dateData.length; i++) {
			dateData[i]["date"] = new Date(dateData[i]["date"]);
			dateData[i]["percentage"] = 100 * dateData[i].attendees.length / totalRep;
		};


		var memberDataAssoc = {};

		//look through all members
		for (var i = 0; i < memberData.length; i++) {
		var presentDateArray = [];
		var count = 0;

			//look through all dates
			for (var j = 0; j < dateData.length; j++) {

				//look through all absentees
				for (var k = 0; k < dateData[j].attendees.length; k++) {
					if (memberData[i].id == dateData[j].attendees[k]){
						presentDateArray[count] = dateData[j].date;
						count += 1;
					}
				};
			};

			memberData[i]["days"] = presentDateArray;
			memberDataAssoc[memberData[i].id] = memberData[i]
		}

		
		//remove loaders, prepare for data display
		d3.select("#member-loader").style("display", "none");
		d3.select("#dates-loader").style("display", "none");
		d3.select("#list-viewport").style("height", "auto");

		//fire ze missiles
		redrawRepList();
		indicateRepPresence(memberDataAssoc);
		runGraph();
	});

	
	var canvas = d3.select("#canvas-1")
		.append("svg:svg")
			.attr("width", canvasWidth())
			.attr("height", canvasHeight())
    	.append("g")
			.attr("class", "drawGroupContainer")//for containing zoom event
			.attr("transform", "translate(0,0) scale(1)")
		.append("g")
			.attr("class", "drawGroup")
			.attr("transform", "translate(0,0) scale(1)");
			//shift down so that svg is aligned to drawGroup

	var spawnAxis = function(){
		var yAxis = d3.svg.axis().scale(y).orient("left").ticks(3);
		d3.select(".axis").remove();
		d3.select("svg")
			.append("g")
			.attr("class", "axis")
			.attr("id", "axis-1")
			.attr("transform", "translate(" + 30 + ",0)")
			.call(yAxis);
	}

	var highlightReps = function(d){
		//map function seems to be problematic during resize. fixed when refreshing
		
		var absentees = memberData.map(function(e){
			return e.id;
		}).filter(function(e){
			return (d.attendees.indexOf(e) == -1);
		});

		for (var i = 0; i < absentees.length; i++) {
		 	d3.select("#r"+absentees[i]).classed("absent", true);
		};
	}
	var deHighlightReps = function(){
		d3.selectAll(".rep").classed("absent", false);
	}

	var indicateRepPresence = function(memberDataAssoc){
		d3.selectAll(".rep")
			.on("mousemove", function(d){
				var thisId = +d3.select(this).property("id").replace("r","");
				var dateArray = memberDataAssoc[thisId]['days'];

				//color everything grey first, so that when you color presence black, absence is colored grey.
				d3.selectAll(".data-bar").classed("opacity02", true);

				for (var i = 0; i < dateArray.length; i++) {
					var dateId = "#d" + dateArray[i].valueOf();
					d3.select(dateId).classed("opacity02", false);
				};

				d3.select("#placeholder").classed("go-away", true);
				d3.select("#info-arrow").classed("go-away", true);

				redrawMemberDataInfo(d);
			})
			.on("mouseout", function(){
				d3.selectAll(".data-bar").classed("opacity02", false);
				d3.select("#placeholder").classed("go-away", false);
				d3.selectAll(".info-nugget").remove();
			});
	}

	var indicateRepPresenceInDates = function(){
	d3.selectAll(".data-bar-wrapper")
			.on("mousemove", function(d){
				d3.select(this).select(".data-bar").classed("selected-bar", true);
				d3.select(this).select(".data-bar-full").attr("fill-opacity", 1).classed("selected-bar-fill", true);

				var position = 
					10 
					+ 
					+ d3.select(this).select(".data-bar").attr("x")
					- 
					+ d3.select(this).select(".data-bar").attr("width")/2;

				d3.select("#placeholder").classed("go-away", true);
				redrawDateDataInfo(d);

				deHighlightReps();
				highlightReps(d);

				positionInfoArrow(position);
			})
			.on("mouseout", function(d){
				d3.select(this).select(".data-bar").classed("selected-bar", false);
				d3.select(this).select(".data-bar-full").attr("fill-opacity", 0).classed("selected-bar-fill", false);

				d3.select("#placeholder").classed("go-away", false);
				d3.selectAll(".info-nugget").remove();
				d3.select("#info-arrow").classed("go-away", true);
				deHighlightReps();
			});
	}
	//redraw
	var redrawDateDataInfo = function(d){

		var rollcallPercent = d.percentage.toFixed(2);
		var thisDateRaw = d.date.toDateString();
		var thisDate = thisDateRaw.substring(thisDateRaw.indexOf(" ")+1)

		var infoArray = [
			{"data": thisDate, "label": "Session Date"}, 
			{"data": rollcallPercent+"%", "label": "% of Reps. Present in the Roll Call"},
			{"data": d.attendees.length, "label": "Reps. Present in the Roll Call"}
			];

		redrawDataInfoNugget(infoArray);
	}

	var redrawMemberDataInfo = function(d){
		var records = d["records"];
		var term = d["total"];

		var infoArray = [
			{"data": records + " sessions", "label": "Present in the Roll Call"}, 
			{"data": term + " days", "label": "Approx. Term Length"}
			];

		redrawDataInfoNugget(infoArray);
	}

	var redrawDataInfoNugget = function(infoArray){
		var infoNugget = d3.select("#info-container").selectAll(".info-nugget")
				.data(infoArray);

		infoNugget
			.enter()
				.append("div")
					.attr("class", "info-nugget");

		infoNugget.selectAll(".info-nugget-data").remove();
		infoNugget
				.append("div")
					.attr("class", "info-nugget-data")
					.html(function(d){return d.data});

		infoNugget.selectAll(".info-nugget-label").remove();
		infoNugget
				.append("div")
					.attr("class", "info-nugget-label")
					.html(function(d){return d.label});


		d3.selectAll(".info-nugget").style("width", function(){return (100/infoArray.length)+"%"});
	}

	var redrawRepList = function(){

		var redrawnListItems = d3.select("#attendance-list").selectAll("li")
			.data(memberData);

		redrawnListItems.enter()
			.append("li")
				.attr("class", "rep clearfix")
				.append("div")
					.attr("class", "name")
					.html(function(d){
						return d.name;
					});

		d3.selectAll(".rep")
			.attr("id", function(d){
				return "r"+d.id;
			})
			.append("div")
				.attr("class", "percentage")
				.html(function(d){
					return d.score+"%";
				});
	}

	var redrawGraph = function(){
		x = d3.scale.ordinal()
			.domain(dateData.map(function(d) { return d.date; }))
			.rangeBands([paddingX,canvasWidth()-paddingX],0);

		y = d3.scale.linear()
			.domain([0,100])
			.rangeRound([canvasHeight()-paddingY,paddingY]);
		//to scale figures. use y(variable) where variable is the data to be scaled.

		//Enter
		var redrawnBars = canvas.selectAll(".data-bar-wrapper")
				.data(dateData);

		var redrawnBarsEnter = redrawnBars.enter().append("g")
					.attr("class", "data-bar-wrapper")

		redrawnBarsEnter
				.append("rect")
					.attr("class", "data-bar-full");

		redrawnBarsEnter
				.append("rect")
					.attr("class", "data-bar")
					.attr("id", function(d){return "d"+d.date.valueOf();});

		//select was used to enable inheritance from the <g> elements down to the .data-bar elements. Since select selects from each <g>, every .data-bar is also selected.
				
		redrawnBars.select(".data-bar")
				//.transition(2000)
					.attr("x", function(d, i){return x(i);})
					.attr("y", function(d){
						return y(d.percentage) 
						//this scales d.percentage to the range.
					})
					.attr("width", x.rangeBand())
					.attr("height", function(d){
						return canvasHeight()-y(d.percentage)-paddingY;
					})
					.attr("fill", function(d){
						if (d.percentage <= 50) {
							return warning;
						} else {
							switch(d.date.getFullYear()){
								case 2010:
									return purple;
									break;
								case 2011:
									return linkBlue;
									break;
								case 2012:
									return hillGreen;
									break;
								default:
									return "black";
						}
					}});

		//make sure data-bar-full updates with changes in properties. No need to call redrawnBars because we don't need data binding.
		d3.selectAll(".data-bar-full")
					.attr("x", function(d, i){return x(i);})
					.attr("y", paddingY)
					.attr("width", x.rangeBand())
					.attr("height", canvasHeight() - 2 * paddingY)
					.attr("fill-opacity", 0);

		//exit
		redrawnBars.exit()
				//.transition(1000)
					.style("opacity", 0)
					.remove();
	}

	var positionInfoArrow = function(position){
		var infoArrow = d3.select("#info-arrow")
		var correctedPos = position;

		infoArrow.classed("go-away", false);
		infoArrow.style("left", correctedPos+"px");
	}

	var scrollpos = function() {
		return {
			'x': window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft, 
			'y': window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
		}};

	window.onscroll = function(){
		//var scrollLimit = 200;
		var navHeight = +d3.select("#rollcall-navbar").style("height").replace("px", "");
		var dataVisViewportHeight = +d3.select("#data-vis-viewport").style("height").replace("px", "");

		if ($(window).width() <= 980) {
			if (scrollpos().y > navHeight){
				$("#data-vis-viewport").addClass("make-fixed");
				$("#list-viewport").css("padding-top", dataVisViewportHeight+"px");
			} else {
				$("#data-vis-viewport").removeClass("make-fixed");
				$("#list-viewport").css("padding-top", "0px");
			}	
		}
		else {
			$("#data-vis-viewport").removeClass("make-fixed");
			$("#list-viewport").css("padding-top", "0px");	
		}
	}

	window.onresize = function(){
		d3.select("svg").attr("width", canvasWidth());
		d3.select("svg").attr("height", canvasHeight());

		runGraph();
	}

</script>