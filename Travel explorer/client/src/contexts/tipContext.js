import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';

import { tipServiceFactory } from '../services/tipService';

export const TipContext = createContext();

export const TipProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [tips, setTips] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const tipService = tipServiceFactory();

    useEffect(() => {
        tipService.getAll()
            .then(result => setTips(result));
    }, []);

    const onTipAddSubmit = async (values) => {
        const tip = await tipService.create(values);

        setTips(state => [...state, tip]);

        navigate(`/tips/${tip._id}`);
    };

    const onDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const onTipDeleteClose = () => {
        setShowDeleteModal(false);
    };

    const onTipDeleteSumit = async (e, tipId) => {
        e.preventDefault();

        const tip = await tipService.remove(tipId);
        setTips(state => state.filter(x => x._id !== tipId));

        setShowDeleteModal(false);
        navigate('/tips');
    };

    const onTipUpdateSubmit = async (values) => {
        const updatedTip = await tipService.update(values._id, values);
        setTips(state => state.map(x => x._id === values._id ? updatedTip : x));

        navigate(`/tips/${values._id}`);
    };

    const getTip = (tipId) => {
        return tips.find(x => x._id === tipId);
    }

    const contextValue = {
        tips,
        showDeleteModal,
        getTip,
        onDeleteClick,
        onTipAddSubmit,
        onTipDeleteClose,
        onTipDeleteSumit,
        onTipUpdateSubmit,
    };

    return(
        <TipContext.Provider value={contextValue}>
            {children}
        </TipContext.Provider>
    )
};

export const useTipContext = () => {
    const context = useContext(TipContext);

    return context;
}