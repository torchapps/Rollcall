<script type="text/javascript">
var dateData = [<? foreach($dates as $date => $data): ?><? $count = 0; ?>
	{
	'date': new Date('<?= $date ?>'),
	'attendees':
		[<? foreach($data['attendees'] as $member): ?><? $count++; ?>
			{'id': <?=$member->id?>,
				'full-name': "<?=$member->full_name?>"},
		<? endforeach; ?>],
	'absentees':
		[<? foreach($data['absentees'] as $member): ?>
			{'id': <?=$member->id?>,
				'full-name': "<?=$member->full_name?>"},
		<? endforeach; ?>],
	'count': <?=$count?>,
	},
	<? endforeach; ?>];
</script>