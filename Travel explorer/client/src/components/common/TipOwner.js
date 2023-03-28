//demo only

import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useTipContext } from '../../contexts/TipContext';

export const TipOwner = ({
    children
}) => {
    const { tipId } = useParams();
    const { getTip } = useTipContext();
    const { userId } = useAuthContext();

    const currentTip = getTip(tipId);

    if (currentTip._ownerId !== userId) {
        return <Navigate to={`/tips/:${tipId}`} />
    }

    return children ? children : <Outlet />
}