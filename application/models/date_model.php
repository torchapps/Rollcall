<?

class Date_model extends CI_Model {

    function __construct(){
        parent::__construct();
    }

    private function extract_ids($rows){
        $return = array();
        foreach($rows as $row) $return[] = (int)$row->id;
        return $return;
    }

    function all(){
        return $this->db->order_by('date', 'asc')->get('dates')->result();
    }
    
    function present_members($date){
        $this->db->select('member.id');
        $this->db->from('dates date, roll_call rc, members member');
        $this->db->where('date.date', $date);
        $this->db->where('date.date = rc.date');
        $this->db->where('rc.member_id = member.id');
        return $this->extract_ids($this->db->get()->result());
    }

    function absent_members($date){
        $result = $this->db->query('
            SELECT member.id
            FROM members member
            WHERE member.id NOT IN (
                SELECT member.id
                FROM dates date, roll_call rc, members member
                WHERE date.date = \''.$date.'\'
                AND date.date = rc.date
                AND rc.member_id = member.id
            )
        ')->result();
        return $this->extract_ids($result);
    }

    function insert($date, $journal_id){
        $this->db->insert('dates', array('date' => date('Y-m-d', $date), 'journal_id' => $journal_id));
    }

}

?>