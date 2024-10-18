export interface User {
    id: number | null,
    username: string | null,
    email: string | null,
    password: string | null,
    isAdmin : boolean| null,
}

export interface AuthUser {
   
    pseudo: string | null,
    username: string | null,
    password: string | null,
   
}