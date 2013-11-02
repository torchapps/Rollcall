<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Data extends CI_Controller {

  public function index(){
    $this->wrapper->load_view('data/index');
  }

  private function compareScores($a, $b){
    return $this->util->compareScores($a, $b);
  }

  public function ajax(){

    $members = array();
    foreach($this->member_model->all_active() as $member){
      $from = $this->member_model->first_entry($member->id);
      $to = $this->member_model->last_entry($member->id);
      $records = $this->member_model->roll_call_entries($member->id);
      $total = $this->journal_model->between_count($from, $to);
      $members[] = array(
        'id' => (int)$member->id,
        'name' => $member->full_name,
        'first' => strtotime($from),
        'last' => strtotime($to),
        'records' => (int)$records,
        'total' => (int)$total,
        'score' => number_format($total == 0 ? 0 : (100*$records/$total), 2)
      );
    }
    usort($members, array($this, 'compareScores'));

    $dates = array();
    foreach($this->date_model->all() as $date){
      $dates[] = array(
        'date' => $date->date,
        'attendees' => $this->date_model->present_members($date->date)
      );
    }

    echo json_encode(array(
      'members' => $members,
      'dates' => $dates
    ));

  }

}