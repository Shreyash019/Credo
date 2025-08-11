import React from 'react';
import Image from 'next/image';
import { GridLayout } from '@all-in-one/shared-ui';
import AuthContainer from '../../modules/auth/AuthContainer';

export default function LoginPage() {
    return (
        <div className='w-11/12 lg:w-8/12 h-auto mx-auto bg-white shadow-md rounded-lg p-6'>
            <GridLayout cardWidth='400px' gap='1px'>
                <div className="h-0 lg:max-h-[500px] lg:pr-6">
                    <Image 
                        src="https://res.cloudinary.com/dw58hubkc/image/upload/v1754764490/pexels-rdne-8293711_gatkwj.jpg"
                        alt="Description of image"
                        width={400}
                        height={300}
                        className="w-full h-full rounded-xl contain"
                    />
                </div>
                <AuthContainer/>
            </GridLayout>
        </div>
    );
}