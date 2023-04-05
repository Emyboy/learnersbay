export interface User {
    id: string;
    first_name: string;
    last_name: string;
    avatar_url: string;
    username: string;
    password: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
}
