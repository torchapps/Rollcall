<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Api extends CI_Controller {

	public function index(){
		echo 'under construction';
	}

	public function dump(){

		$dates = $this->journal_model->all_with_dates();
		$members = $this->member_model->all();

		echo '<table border=1 cellspacing=0 cellpadding=5>';
		echo '<tr>';
		echo '<th>Name</th>';
		foreach($dates as $date){
			echo "<th><a href=\"http://www.congress.gov.ph/download/journals_15/$date->name.pdf\">$date->date</a></th>";
		}
		echo '</tr>';
		foreach($members as $member){
			echo '<tr>';
			echo "<th>$member->full_name</th>";

			$days_present = $this->member_model->days_present($member->id);
			foreach($dates as $date){
				$present = in_array($date->date, $days_present) ?'X':'';
				echo "<td>$present</td>";
			}
			echo '</tr>';
		}
		echo '</table>';

	}

}