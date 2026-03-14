'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { journeyItems } from '@/data/journeys'
import ImageLoader from '@/components/ImageLoader'
import './sass.scss'

interface WindowSize {
    width: number | undefined
    height: number | undefined
}

export default function JourneyPage() {
    const pathname = usePathname()
    const router = useRouter()
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isLunch, setIsLunch] = useState(false)
    const [size, setSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    })

    const namePage = pathname?.split('/')[2]

    // Hook pour obtenir la taille de la fenêtre
    useEffect(() => {
        function handleResize() {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('transitionend', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('transitionend', handleResize)
        }
    }, [])

    useEffect(() => {
        if (pathname === '/journey' || pathname === '/journey/') {
            journeyItems.forEach(item => {
                unZoomAndCenterElement(item.id)
            })
        }
    }, [pathname])

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function zoomAndCenterElement(id: string) {
        if (isFullscreen || isLunch) return

        setIsLunch(true)

        const element = document.getElementById(id)
        if (!element) return

        element.style.zIndex = '20'

        if (window.innerWidth > 900) {
            element.style.width = '100%'
            element.style.border = 'none'
            await sleep(300)
        }

        const rect = element.getBoundingClientRect()
        const aspectRatio = rect.width / rect.height

        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        let zoomWidth = viewportWidth
        let zoomHeight = zoomWidth / aspectRatio

        if (zoomHeight > viewportHeight) {
            zoomHeight = viewportHeight
            zoomWidth = zoomHeight * aspectRatio
        }

        const x = (viewportWidth - zoomWidth) / 2
        // Centrer verticalement en tenant compte de la position actuelle
        const y = (viewportHeight - zoomHeight) / 2 - rect.top - 80

        element.style.borderRadius = '0px'
        element.style.transform = `translate(${x}px, ${y}px) scale(${zoomWidth / rect.width})`
        element.style.width = '100%'

        if (window.innerWidth < 900) {
            await sleep(300)
        }

        element.style.height = window.innerHeight - 58 + 'px'
        await sleep(300)

        scrollToXp(element)

        if (window.innerWidth < 900) {
            await sleep(100)
        }

        element.style.zIndex = '20'
        element.classList.add('active')

        setIsFullscreen(true)
        setIsLunch(false)
    }

    async function unZoomAndCenterElement(id: string) {
        if (!isFullscreen || isLunch) return

        setIsLunch(true)

        const element = document.getElementById(id)
        if (!element) return

        element.style.borderRadius = ''
        element.style.border = ''
        element.style.transform = 'translate(0px, 0px) scale(1)'

        element.classList.remove('active')

        setIsFullscreen(false)

        await sleep(300)

        element.style.width = ''
        element.style.height = ''

        await sleep(300)

        element.style.zIndex = '1'

        setIsLunch(false)
    }

    async function scrollToXp(element: HTMLElement) {
        const bodyRect = document.body.getBoundingClientRect()
        const elemRect = element.getBoundingClientRect()
        const offset = elemRect.top - bodyRect.top

        window.scrollTo({
            top: offset + 3,
            behavior: 'smooth',
        } as ScrollToOptions)
    }

    const CSS = `body {
    overflow: hidden !important;
  }`

    // Grouper les éléments par année
    const groupedJourneys = journeyItems.reduce(
        (acc, item) => {
            const yearRange = item.year
            if (!acc[yearRange]) {
                acc[yearRange] = []
            }
            acc[yearRange].push(item)
            return acc
        },
        {} as Record<string, typeof journeyItems>
    )

    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    Jérémy PATAPY - Mon parcours
                    {isFullscreen && namePage ? ` | ${namePage.charAt(0).toUpperCase() + namePage.slice(1)}` : ''}
                </title>
            </Helmet>
            <style>{isFullscreen ? CSS : ''}</style>
            <div className="Journey">
                <div className="formations">
                    {Object.entries(groupedJourneys)
                        .sort((a, b) => {
                            const yearA = parseInt(a[0].split(' - ')[1])
                            const yearB = parseInt(b[0].split(' - ')[1])
                            return yearB - yearA
                        })
                        .map(([year, items]) => (
                            <div className="uneFormation" key={year}>
                                <h1 className="year">{year}</h1>
                                <div className="flex">
                                    {items.map(item => (
                                        <Link
                                            key={item.id}
                                            href={`/journey/${item.id}`}
                                            className={`xp ${item.id}`}
                                            id={item.id}
                                            onClick={e => {
                                                e.preventDefault()
                                                zoomAndCenterElement(item.id)
                                            }}
                                        >
                                            <button
                                                className="back"
                                                onClick={async e => {
                                                    e.preventDefault()
                                                    await unZoomAndCenterElement(item.id)
                                                    router.push('/journey')
                                                }}
                                            >
                                                <img src="/Journey/arrow-right.svg" alt="" />
                                                Retour
                                            </button>

                                            <h1 className="nom">{item.title}</h1>

                                            {item.logo.map((logo, idx) => (
                                                <ImageLoader
                                                    key={idx}
                                                    src={logo}
                                                    alt={`${item.title} logo`}
                                                    width={300}
                                                    height={300}
                                                    quality={99}
                                                    className={item.id}
                                                />
                                            ))}

                                            <div className="localisation">
                                                <h2>Localisation :</h2>
                                                <span>
                                                    <ImageLoader
                                                        src={item.mapImage}
                                                        alt={`${item.location} map`}
                                                        width={300}
                                                        height={300}
                                                    />
                                                    <span>{item.location}</span>
                                                    {item.mapLink && (
                                                        <span
                                                            className="carte"
                                                            onClick={() => {
                                                                window.open(item.mapLink)
                                                            }}
                                                        >
                                                            Voir sur la carte
                                                            <img src="/Journey/arrow-right.svg" alt="" />
                                                        </span>
                                                    )}
                                                </span>
                                            </div>

                                            <div className="info">
                                                {item.content.map((section, idx) => (
                                                    <div key={idx}>
                                                        <h2>{section.title}</h2>
                                                        <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: section.description,
                                                            }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </HelmetProvider>
    )
}
