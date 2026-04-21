export type Screen = 
  | 'login' 
  | 'dashboard' 
  | 'orders' 
  | 'inventory' 
  | 'status' 
  | 'create_note' 
  | 'reports';

export interface Order {
  id: string;
  ref: string;
  title: string;
  status: 'In Process' | 'Pending' | 'On Hold';
  time: string;
  priority: 'High' | 'Medium' | 'Low';
}
