<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class How extends CI_Controller {

	public function index(){
		$this->wrapper->load_view('how');
	}

}