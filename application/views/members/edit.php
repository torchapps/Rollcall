<?

echo form_open();

echo form_label('Full name ' . form_input('full_name', $full_name) . br());
echo form_label('Surname ' . form_input('surname', $surname) . br());
echo form_label('Given name ' . form_input('given_name', $given_name) . br());
echo form_label('Middle name ' . form_input('middle_name', $middle_name) . br());
echo form_label('Appendix ' . form_input('appendix', $appendix) . br());
echo form_label('Status ' . form_input('status', $status) . br());

echo form_submit(null, 'save');

echo form_close();

?>