export interface Slip {
    slip_id: number;
    date: any;
    slip_time: any;
    img_url: string;
    bills_id: number;
    user_id: number;
    room_id: number;
    building: number;
    room_num: string;
    month_year: any;
    electric_lastmonth: number;
    electric_current: number;
    electric_used: number;
    water_lastmonth: number;
    water_current: number;
    water_used: number;
    index: number;
    rent: number;
    bills_state_name :string;
    bills_state_id: number;
    phone_num: string;
    clean_count: number;
}
