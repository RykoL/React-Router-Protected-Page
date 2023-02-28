import { Navigate, redirect, Route, RouteProps } from "react-router-dom"
import { Role, useAuthorization } from "./Authorization"

type Props = {
    requiredRole: Role,
    children?: React.ReactNode
}

const ProtectedRoute: React.FC<Props> = ({requiredRole, children}) => {
    const authorizationContext = useAuthorization()

    if (authorizationContext.role !== requiredRole) {
        return <Navigate to={'/forbidden'} />
    }

    return children
}

export default ProtectedRoute
