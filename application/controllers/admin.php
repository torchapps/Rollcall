<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin extends CI_Controller {

  public function index(){
    show_404();
    echo 'herro';
  }

  public function upload(){
    show_404();
    if(empty($_FILES)){
      $this->load->view('admin/upload');
    } else {
      
      $file = $_FILES['file'];
      $filename = $file['name'];
      $path = $file['tmp_name'];

      list($_file, $ext) = explode('.', $filename);
      list($m, $d, $y) = explode('-', $_file);
      $date = strtotime("$m/$d/$y");

      $fileHandle = fopen($path, 'r');
      $reference = fgets($fileHandle);
      if(trim(fgets($fileHandle)) != '') die("Ohnoes! $file is borken! :O");

      $journal = array('name' => $reference);
      if($row = $this->journal_model->find($journal)){
        $journal_id = $row->id;
      } else {
        $this->journal_model->insert($journal);
        $journal_id = $this->db->insert_id();
      }

      $this->date_model->insert($date, $journal_id);

      while($name = utf8_decode(trim(fgets($fileHandle)))){
        $member_id = $this->member_model->smart_get_id($name);
        $that->member_model->add_roll_call($member_id, $date);
      }

    }
  }

}