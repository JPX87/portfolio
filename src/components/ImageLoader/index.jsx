import React, { useState } from 'react';
import { Ring } from '@uiball/loaders'
//import { useEffect } from 'react';

//import { useLocation } from 'react-router-dom';

function ImageLoader({ src, alt, id, className, absolute, relative }) {
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);


    const handleLoad = () => {
        setLoading(false);
        //console.log(src + " loaded")
    };

    const handleError = () => {
        setLoading(false);
        setHasError(true);
    };

    return (
        <>
            {!hasError && <img src={src} alt={alt} id={id} className={className} onLoad={handleLoad} onError={handleError} loading='lazy'
                style={{
                    opacity: loading ? 0 : 1,
                    transition: 'all .3s'
                }} />}
            {
                absolute ?
                    (loading && <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            margin: 'auto',
                            height: 'max-content'
                        }}>
                        <Ring
                            size={40}
                            lineWeight={5}
                            speed={2}
                            color="var(--text1-color)"
                        />
                    </div>)
                    : ''
            }
            {
                relative ? (loading && <div
                    style={{
                        position: 'relative',
                        top: 0,
                        bottom: 0,
                        margin: 'auto',
                        height: 'max-content',
                        padding: 0,
                        transform: 'none'
                    }}>
                    <Ring
                        size={40}
                        lineWeight={5}
                        speed={2}
                        color="var(--text1-color)"
                    />
                </div>)
                    : ''
            }
            {!absolute && !relative ? (
                loading && <Ring
                    size={40}
                    lineWeight={5}
                    speed={2}
                    color="var(--text1-color)"
                />) : ''
            }
        </>
    );
}

export default ImageLoader;
