<?

class Journal_model extends CI_Model {

    function __construct(){
        parent::__construct();
    }
    
    function insert($journal){
        $this->db->insert('journals', $journal);
    }

    function update($journal){
        $this->db->update('journals', $journal, array('id' => $journal->id));
    }

    function find($params){
        return $this->db->get_where('journals', $params)->row();
    }

    function add_date($entry){
        $this->db->insert('dates', $entry);
    }

    function between($from, $to){
        if($from == null || $to == null) return array();
        $this->db->select('journal.name, date.date');
        $this->db->from('journals journal, dates date');
        $this->db->where('date.journal_id = journal.id');
        $this->db->where("date.date >= '$from'");
        $this->db->where("date.date <= '$to'");
        return $this->db->get()->result();
    }

    function between_count($from, $to){
        return sizeof($this->between($from, $to));
    }

    function all_with_dates(){
        $this->db->from('journals journal, dates date');
        $this->db->where('journal.id = date.journal_id');
        $this->db->order_by('date', 'desc');
        return $this->db->get()->result();
    }

}

?>