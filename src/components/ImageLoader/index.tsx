"use client";
import React, { useState } from 'react';
import { ring } from 'ldrs';
import Image from 'next/image';

// Register the component
if (typeof window !== 'undefined') {
    ring.register();
}


interface ImageLoaderProps {
    src: string;
    alt: string;
    id?: string;
    className?: string;
    absolute?: boolean;
    relative?: boolean;
    width?: number;
    height?: number;
    quality?: number;
    priority?: boolean;
}

function ImageLoader({ src, alt, id, className, absolute, relative, width, height, quality, priority }: ImageLoaderProps) {
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setLoading(false);
    };

    const handleError = () => {
        setLoading(false);
        setHasError(true);
    };

    return (
        <>
            {!hasError && (
                <Image
                    src={src}
                    alt={alt}
                    id={id}
                    className={`${className ?? ''}${height !== undefined ? 'h-auto' : ''} ${width !== undefined ? 'w-auto' : ''}`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading="lazy"
                    width={width}
                    height={height}
                    quality={quality}
                    priority={priority}
                    style={{
                        opacity: loading ? 0 : 1,
                        transition: 'all .3s',
                    }}
                />
            )}
            {loading && (
                <div style={{
                    position: absolute ? 'absolute' : (relative ? 'relative' : undefined),
                    inset: absolute ? 0 : undefined,
                    margin: 'auto',
                    height: 'max-content',
                    padding: relative ? 0 : undefined,
                    transform: relative ? 'none' : undefined,
                    top: relative ? 0 : undefined,
                    bottom: relative ? 0 : undefined,
                }}>
                    <l-ring size="40" stroke="5" speed="2" color="var(--text1-color)"></l-ring>
                </div>
            )}
        </>
    );
}

export default ImageLoader;
