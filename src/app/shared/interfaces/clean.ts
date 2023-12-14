export interface CleanData {
    clean_id: number;
    user_id: number;
    timestamp: any;
    state_id: number;
    description: string;
    sub_phone: string;
    room_id: number;
}

export interface CleanHistory {
    clean_id: number;
    user_id: number;
    timestamp: any;
    state_id: number;
    description: string;
    sub_phone: string;
    username: string;
    room_id: number;
    state_name: string;
    room_num: string;
    building: number;
    phone_num: string;
}