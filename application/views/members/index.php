<?

$this->table->set_heading('Name', 'Surname', 'Given name', 'Middle name', 'Appendix', 'Status');
foreach($members as $member){
  $this->table->add_row(
    anchor('members/edit/'.$member->id, $member->full_name),
    $member->surname,
    $member->given_name,
    $member->middle_name,
    $member->appendix,
    $member->status
  );
}

echo $this->table->generate();

?>