<a href="<?=base_url()?>">Go back to Rollcall</a>

<h1>Where do we get our data?</h1>

<p>Most of the publicly available congress journals contain <strong>roll call</strong> sections. This is where we get our data. There are also <strong>attendance</strong> sections, however, which we have yet to finish importing.</p>

<p>Each <strong>roll call</strong> section can be pinpointed to a specific date, while <strong>attendance</strong> sections are tied to entire sessions/journals, which could span multiple days.</p>

<h1>What does this mean?</h1>

<p>Technically, absence in our records is <em>not</em> equivalent to absence for the entire day of the corresponding <strong>roll call</strong> record. What it means is that during the time of the <strong>roll call</strong>, the person in question was not present.</p>

<p>It is entirely possible that the person arrived late after the <strong>roll call</strong>, but as we cannot verify this at the moment, we currently do not make the distinction.</p>

<p><a href="<?=site_url('api/dump')?>">The raw data</a></p>