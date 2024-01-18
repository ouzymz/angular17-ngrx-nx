export interface User{
    email:string| null | undefined
    password:string| null | undefined
}

export interface AuthState {
    isAuthenticated: boolean
    user: User | null
    jwtToken: string | null

}