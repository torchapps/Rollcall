<?php

/*

	$dirPath = 'journals/congress/txt';

	if($dir = opendir($dirPath)){
		$count = 0;
		while($file = readdir($dir)){

			if(in_array($file, array('.', '..'))) continue;

			$stuff = explode("\n", utf8_decode(file_get_contents("$dirPath/$file")));
			if(sizeof($stuff) == 1){
				$stuff = explode("\r", utf8_decode(file_get_contents("$dirPath/$file")));
			}

			$newstuff = array();
			foreach($stuff as $line){
				if(stripos($line, 'day,') != false){
					echo "$file: $line<br/>";
					$count++;
				} else {
					$newstuff[] = $line;
				}
			}

			file_put_contents("$dirPath/$file", implode("\n", $newstuff));

		}

		echo "$count instances found.";

		closedir($dir);
	}

*/

?>