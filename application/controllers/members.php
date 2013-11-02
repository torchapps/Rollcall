<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Members extends CI_Controller {

  public function index(){
    $this->wrapper->load_view('members/index', array('members' => $this->member_model->all()));
  }

  public function edit($member_id){
    if(!empty($_POST)){
      $_POST['id'] = $member_id;
      $this->member_model->update($_POST);
    }
    $this->wrapper->load_view('members/edit', $this->member_model->find(array('id' => $member_id)));
  }

}