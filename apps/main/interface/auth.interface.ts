export interface User {
    _id: string;
    display_name: string;
    avatar_url: string;
    username: string;
    password: string;
    email: string;
    email_verified: boolean;
    verified: boolean;
    phone_number: string;
    phone_number_verified: boolean;
    suspended: boolean;
    last_seen: string;
    provider: "facebook" | "google" | "local";
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
