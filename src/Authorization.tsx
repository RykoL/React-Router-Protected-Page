import * as React from 'react'

export type Role = 'USER' | 'ADMIN'

type AuthorizationContextValue = {
    role: Role
}

const AuthorizationContext = React.createContext<AuthorizationContextValue>({role: 'USER'})

interface Props {
    children?: React.ReactNode
    userAuthorizationContext: AuthorizationContextValue
}

export const useAuthorization = () => {
    const authorizationContext = React.useContext(AuthorizationContext)
    return authorizationContext
}

export const AuthorizationProvider: React.FC<Props> = ({children, userAuthorizationContext}) => {
    return (
        <AuthorizationContext.Provider value={userAuthorizationContext}>
            {children}
        </AuthorizationContext.Provider>
    )
}
