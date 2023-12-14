export interface FixData {
    fix_id: number;
    user_id: number;
    timestamp: any;
    state_id: number;
    area: string;
    description: string;
    sub_phone: string;
    room_id: number;
}


export interface FixHistory {
    fix_id: number;
    user_id: number;
    timestamp: any;
    state_id: number;
    area: string;
    description: string;
    sub_phone: string;
    username: string;
    room_id: number;
    state_name: string;
    room_num: string;
    building: number;
    phone_num: string;
}