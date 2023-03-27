export interface User {
    _id: string;
    first_name: string;
    last_name: string;
    avatar_url: string;
    username: string;
    password: string;
    email: string;
    confirmed: boolean;
    verified: boolean;
    phone_number: string;
    phone_number_verified: boolean;
    suspended: boolean;
    last_seen: string;
    createdAt: string;
    updatedAt: string;
}

export interface AuthUserInfo {
    _id: string;
    user: string;
    country: string;
    location: string;
    bid_country: string;
    long: string;
    lat: string;
    ip_address: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserInfo {
    _id: string;
}
