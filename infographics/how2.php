<script type="text/javascript" src="//use.typekit.net/dgs7vbr.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<script src="http://d3js.org/d3.v2.js"></script>

<link rel="stylesheet" type="text/css" href="../../resources/style.css">
<!-- <script type="text/javascript" src="../../resources/d3.v2.min.js"></script> -->

<nav id="rollcall-navbar" class="navbar clearfix">
	<ul>
		<li>
			<a id="logo" href="#">Rollcall</a>
			<span id="beta-tag">beta</span>
		</li>
		<li>
			<a href="#" class="current">Home</a>
		</li>
		<li>
			<a href="#">About our data</a>
		</li>
		<li>
			<a href="#">About this site</a>
		</li>
	</ul>
	<ul class="float-right clearfix">
<!-- 		<li>
			<a href="#">share on facebook</a>
		</li>
		<li>
			<a class="btn btn-share btn-tweet" 
            href="https://twitter.com/share?url=wat do https%3A%2F%2Fdev.twitter.com%2Fpages%2Ftweet-button" 
            target="_blank" rel="nofollow">
              Share on Twitter
          </a>
		</li> -->
		<li>
			<form id="donate" action="https://www.paypal.com/cgi-bin/webscr" method="post">
			    <input type="hidden" name="cmd" value="_s-xclick">
			    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
			    ">
			    <button type="submit" class="clearfix">
			    	Donate
			      <!-- <span><strong>Thank you!</strong></span> -->
				</button>
			<img class="go-away" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
			</form>
		</li>
	</ul>
</nav>
<section class="clearfix">

	<h1>Where do we get our data?</h1>

	<p>Most of the publicly available congress journals contain <strong>roll call</strong> sections. This is where we get our data. There are also <strong>attendance</strong> sections, however, which we have yet to finish importing.</p>

	<p>Each <strong>roll call</strong> section can be pinpointed to a specific date, while <strong>attendance</strong> sections are tied to entire sessions/journals, which could span multiple days.</p>

	<h1>What does this mean?</h1>

	<p>Technically, absence in our records is <em>not</em> equivalent to absence for the entire day of the corresponding <strong>roll call</strong> record. What it means is that during the time of the <strong>roll call</strong>, the person in question was not present.</p>

	<p>It is entirely possible that the person arrived late after the <strong>roll call</strong>, but as we cannot verify this at the moment, we currently do not make the distinction.</p>

	<p><a href="<?=site_url('api/dump')?>">The raw data</a></p>
</section>