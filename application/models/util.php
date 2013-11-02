<?

class Util extends CI_Model {

    function __construct(){
        parent::__construct();
    }
    
    function compareScores($a, $b){
		if($a['score'] > $b['score']){
			return 1;
		} else if ($a['score'] < $b['score']){
			return -1;
		} else {
			return -strcmp($a['first'], $b['first']);
		}
	}

}

?>