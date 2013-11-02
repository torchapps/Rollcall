<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

	private function compareScores($a, $b){
		return $this->util->compareScores($a, $b);
	}

	public function index(){
		$this->wrapper->load_view('home');
	}

	public function script(){
		show_404();
		$this->load->view('script');
	}

}