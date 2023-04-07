import React from 'react';
import MemojiWork from '../../Assets/memoji_work.png'
import { EmailRounded, Instagram, LinkedIn, GitHub, Twitter } from '@mui/icons-material'

const MainSection = () => {
    return (
        <>
            <div className='grow shrink-0 flex flex-col place-content-end gap-[2em] h-full px-4 sm:px-12 md:px-16 lg:px-22 xl:px-24 2xl:px-[24rem] lg:flex-row lg:place-content-center lg:gap-2'>
                <div className='order-1 place-self-center basis-48 grow-0 min-h-[10em] lg:grow-[2] lg:m-auto'>
                    <span className='text-center font-black tracking-tight divide-y-4 text-on-primary divide-secondary-dark'>
                        <p className="text-8xl sm:text-9xl lg:text-left after:content-['!'] after:text-secondary-light">Ciao</p>
                        <p className='text-xl sm:text-xl lg:text-right italic font-serif'>This is <span className='text-secondary-light'>Antonio!</span></p>
                    </span>
                </div>
                <div className='grow-0 lg:grow-[1] order-2 lg:place-self-end'>
                    <img src={MemojiWork} className='h-auto max-w-[15em] mx-auto sm:max-w-xs lg:mr-10 xlg:max-w-md drop-shadow-[0px_0px_6px_rgb(40,55,60,1)]' />
                </div>
            </div>
            {<Social />}
        </>

    )
}

const Social = () => {
    const fabStyle = "w-full h-full hover:fill-secondary"
    const fabs = [
        <EmailRounded className={fabStyle} />,
        <GitHub className={fabStyle} />,
        <LinkedIn className={fabStyle} />,
        <Instagram className={fabStyle} />,
    ]
    return (
        <div className="absolute bottom-6 lg:bottom-1 px-4 sm:px-12 md:px-18">
            <div className='flex flex-col place-content-start gap-1  md:flex-row md:gap-3'>
                {fabs.map(fab => {
                    return <div className='w-[2em] h-[2em] p-2 text-on-secondary hover:shadow-secondary-light lg:w-[4em] lg:h-[4em]'>{fab}</div>
                })}
            </div>
        </div>
    )
}

export default MainSection;