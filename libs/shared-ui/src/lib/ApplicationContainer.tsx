import React from 'react';

interface ApplicationContainerProps {
    scroll?: 'auto' | 'scroll' | 'hidden' | 'visible';
    children?: React.ReactNode;
}

export const ApplicationContainer: React.FC<ApplicationContainerProps> = ({
    scroll = 'auto',
    children,
}) => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                overflow: scroll,
                backgroundImage: 'url(https://res.cloudinary.com/dw58hubkc/image/upload/v1754763578/background_syhlbs.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {children}
        </div>
    );
};