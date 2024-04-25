import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Tech-Shop`;
        } else {
            document.title = 'Tech-Beat | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
