<?

$ins = 1;
$rep = 10;
$del = 1;

function matchup($a, $b){
	$alen = strlen($a);
	$blen = strlen($b);
	for($i = 0; ($i < $alen) && ($i < $blen); $i++){
		if($a{$i} != $b{$i}) return -$i;
	}
	return -(3*min($alen, $blen)) + abs($alen-$blen);
}

function initial($string){
	return substr($string, 0, 1);
}

function extract_initials($rest){
	return implode('', array_map("initial", explode(' ', $rest)));
}

function masterlist(){
	$mastername = explode("\n", utf8_decode(file_get_contents('journals/congress/masterlist.txt')));
	$masterlist = array();
	foreach($mastername as $mn){
		list($surname, $rest) = explode(', ', strtoupper($mn));
		if(!isset($masterlist[$surname])){
			$masterlist[$surname] = $mn;
		} else {
			if(!is_array($masterlist[$surname])){
				$old = explode(', ', $masterlist[$surname]);
				$oldinit = extract_initials($old[1]);
				$masterlist[$surname] = array($oldinit => $masterlist[$surname]);
			}
			$newinit = extract_initials($rest);
			$masterlist[$surname][$newinit] = $mn;
		}
	}
	return $masterlist;	
}

function get_leaves($array){
	$result = array();
	foreach($array as $element){
		if(is_array($element)){
			$result = array_merge($result, get_leaves($element));
		} else {
			$result[] = $element;
		}
	}
	return $result;
}

$masterlist = masterlist();
$flatmaster = get_leaves($masterlist);

$scores = array();
foreach($flatmaster as $name){
	$scores[$name]['a'] = 0;
	$scores[$name]['r'] = 0;
}

$done = array();

$max = 0;

$dirPath = 'journals/congress/txt';

if($dir = opendir($dirPath)){
	while($file = readdir($dir)){
		if(in_array($file, array('.', '..'))) continue;

		$type = ((strlen($file) == 14) ? 'r' : 'a');

		$fileHandle = fopen("$dirPath/$file", 'r');
		$ref = fgets($fileHandle);
		if(trim(fgets($fileHandle)) != '') die("Ohnoes! $file is broken! :O");
		while($name = utf8_decode(strtoupper(trim(fgets($fileHandle))))){

	        if(strstr($name, '***')) continue; // Absent without notice
	        if(strstr($name, '**')) continue; // Absent with notice
	        if(strstr($name, '*')) continue; // Appeared after the roll call

	        $splitName = explode('(', $name);
	        $lastName = trim($splitName[0]);

	        if(isset($masterlist[$lastName])){

	        	if(is_array($masterlist[$lastName])){

	        		if(!isset($splitName[1])){

	        			switch($lastName){
	        				case 'GATCHALIAN':
	        					$splitName[1] = 'R'; break;
	        				case 'MERCADO':
	        					$splitName[1] = 'R'; break;
	        				case 'SINGSON':
	        					$splitName[1] = 'RL'; break;
        					case 'PANGANDAMAN':
	        					$splitName[1] = 'M'; break;
	        				default: 
		        				echo "NEED MORE INFO: $file\n";
		        				print_r($splitName);
		        				die();
	        			}

	        		}

	        		$rest = str_replace(')', '', $splitName[1]);
	        		$rest = str_replace('.', '', $rest);
	        		$rest = str_replace(' ', '', $rest);

	        		$score = 1000;
	        		$match = null;
	        		$matchKey = null;
	        		foreach($masterlist[$lastName] as $key => $full){
	        			$newScore = matchup($key, $rest);
	        			if($newScore < $score){
	        				$score = $newScore;
	        				$match = $full;
	        				$matchKey = $key;
	        			}
	        		}

	        		if(!isset($done[$name])){
	        			// echo "[$name] -> [$match]<br/>\n";
	        			// echo "\t([$matchKey] : [$rest])<br/><br/>\n\n";
	        			$done[$name] = true;
	        		}
	        		$scores[$match][$type]++;

	        	} else {

	        		if($name == 'DIMAPORO (I.)'){
	        			$lastName = 'QUIBRANZA-DIMAPORO';
	        		}

	        		$scores[$masterlist[$lastName]][$type]++;

	        	}

	        } else {

	        	$score = 1000;
	        	$match = null;
	        	$matchKey = null;
	        	foreach($flatmaster as $master){
	        		list($surname, $rest) = explode(', ', strtoupper($master));
	        		$surname = trim($surname);
	        		$rest = trim($rest);
	        		$key = "$rest $surname";
	        		$newScore = levenshtein($key, $name, $ins, $rep, $del);
	        		if($newScore < $score){
	        			$score = $newScore;
	        			$match = $master;
	        			$matchKey = $key;
	        		}	
	        	}

	        	if(!isset($done[$name])){
	        		// echo "[$name] -> [$match]<br/>\n";
	        		// echo "\t([$matchKey] : [$name])\n\n";
	        		$done[$name] = true;
	        	}
	        	$scores[$match][$type]++;

	        }

	    }
	}
	closedir($dir);
}

$total = array();
foreach($scores as $person => $score){
	$totals[$person] = $score['a'] + $score['r'];
}

arsort($totals);

foreach($totals as $name => $total){
	// break;
	echo $name;
	echo "\t";
	echo $scores[$name]['r'];
	echo "\t";
	echo $scores[$name]['a'];
	echo "\t";
	echo $total;
	echo "\n";
}

?>