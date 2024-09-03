export type GoogleUser = {
    access_token?: string;
}

export type GoogleProfile = {
    picture?: string;
    name?: string;
    email?: string;
} | null;