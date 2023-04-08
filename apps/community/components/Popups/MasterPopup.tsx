import Cookies from 'js-cookie';
import React, {useEffect, useState} from 'react';
import AuthenticatingPopup from './AuthenticatingPopup';

export default function MasterPopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    if (!show) {
        return null;
    } else {
        return (
            <>
                {Cookies.get('auth_token') ? (
                    <>
                        <AuthenticatingPopup />
                    </>
                ) : (
                    <></>
                )}
            </>
        );
    }
}
