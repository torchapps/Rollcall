<?

class Wrapper extends CI_Model {

    function __construct(){
        parent::__construct();
    }
    
    function load_view($view, $data = null){
        $body = $this->load->view($view, $data, true);
        $this->load->view('wrapper', array('body' => $body));
    }

}

?>