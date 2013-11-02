<?

class Member_model extends CI_Model {

    function __construct(){
        parent::__construct();
    }
    
    function insert($member){
        $this->db->insert('members', $member);
    }

    function update($member){
        $this->db->update('members', $member, array('id' => $member['id']));
    }

    function find($params){
        return $this->db->get_where('members', $params)->row();
    }

    function all(){
        return $this->db->get('members')->result();
    }

    function all_active(){
        return $this->db->get_where('members', array('status' => 'A'))->result();
    }

    function add_roll_call($member_id, $date){
        $this->db->insert('roll_call', array(
            'member_id' => $member_id,
            'date' => date('Y-m-d', $date)
        ));
    }

    function roll_call_entries($member_id){
        $this->db->select('count(*) as count');
        return $this->db->get_where('roll_call', array('member_id' => $member_id))->row()->count;
    }

    function end_entry($member_id, $first){
        $this->db->from('roll_call');
        $this->db->where('member_id', $member_id);
        $this->db->order_by('date', ($first?'asc':'desc'));
        $this->db->limit(1);
        $row = $this->db->get()->row();
        if($row) return $row->date;
    }

    function first_entry($member_id){
        return $this->end_entry($member_id, true);
    }

    function last_entry($member_id){
        return $this->end_entry($member_id, false);
    }

    function days_present($member_id){
        $result = $this->db->get_where('roll_call', array('member_id' => $member_id))->result();
        $return = array();
        foreach($result as $day) $return[] = $day->date;
        return $return;
    }

    function smart_get_id($name){
        
    }

}

?>