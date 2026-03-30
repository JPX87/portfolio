'use client'

import { useState } from 'react'
import { JourneyItem, journeyItems } from '@/data/journeys'
import ImageLoader from '@/components/ImageLoader'

const YearSection = ({ year, items, expandedId, onToggle, itemOffset }: { year: string, items: JourneyItem[], expandedId: string | null, onToggle: (id: string) => void, itemOffset: number }) => {
    return (
        <section className="relative z-10 pt-4 first:pt-0">
            <div className="flex justify-start sm:justify-center mb-12 sm:ml-0 relative">
                <span className="bg-(--color) text-white mx-auto px-6 py-2 rounded-full text-2xl font-bold shadow-[0_0_15px_var(--color)] border-4 border-white relative z-10">
                    {year}
                </span>
            </div>

            <div className="space-y-6 sm:space-y-2">
                {items.map((item, itemIndex) => (
                    <JourneyCard
                        key={item.id}
                        item={item}
                        isEven={(itemOffset + itemIndex) % 2 === 0}
                        isExpanded={expandedId === item.id}
                        onClick={() => onToggle(item.id)}
                    />
                ))}
            </div>
        </section>
    )
}

const JourneyCard = ({ item, isEven, isExpanded, onClick }: { item: JourneyItem, isEven: boolean, isExpanded: boolean, onClick: () => void }) => {
    return (
        <article className={`flex flex-col sm:flex-row items-center justify-between w-full relative ${isEven ? 'sm:flex-row-reverse' : ''}`}>
            <div className="hidden sm:block w-5/12"></div>

            <div className="absolute -left-7.25 sm:left-1/2 w-6 h-6 bg-(--color) rounded-full border-4 border-white -translate-x-1/2 shadow-[0_0_10px_var(--color)] hidden sm:block"></div>

            <div
                className={`w-full sm:w-5/12 relative overflow-hidden rounded-[25px] transition-all duration-500 cursor-pointer shadow-[0_0_15px_var(--back4-color)] hover:shadow-[0_0_20px_var(--color)] group
                    ${isExpanded ? 'ring-2 ring-(--color) bg-gray-50 dark:bg-[#2a2a2a]' : 'bg-white dark:bg-black-500 hover:bg-gray-50 dark:hover:bg-[#252525]'}
                `}
                onClick={onClick}
                style={{
                    background: item.background,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <JourneyCardHeader item={item} isExpanded={isExpanded} />
                <JourneyCardContent item={item} isExpanded={isExpanded} />
            </div>
        </article>
    )
}

const JourneyCardHeader = ({ item, isExpanded }: { item: JourneyItem, isExpanded: boolean }) => {
    return (
        <header className="p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left">
            <figure className={`shrink-0 w-24 h-24 rounded-[50px] overflow-hidden bg-gray-100 dark:bg-white/5 p-2 shadow-inner flex items-center justify-center ${item.logoClassName || ''}`}>
                <ImageLoader width={100} height={100} src={item.logo[0]} priority={item.priority} alt={`${item.title} logo`} className="max-w-full max-h-full object-contain select-none" />
            </figure>
            <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h2>
                <p className="bg-white w-max rounded-lg mx-auto sm:mx-0 px-2 text-(--color) font-medium text-lg"> {item.type} • {item.location}</p>
            </div>
            <div className="text-(--color) bg-white/50 p-1 rounded-3xl transition-transform duration-300 ml-auto hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </header>
    )
}

const JourneyCardContent = ({ item, isExpanded }: { item: JourneyItem, isExpanded: boolean }) => {
    return (
        <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                <div className="p-6 md:p-8 border-t border-gray-200 dark:border-white/10 space-y-8 bg-black/20">
                    <div className="space-y-8">
                        {item.content.map((section, idx) => (
                            <section key={idx} className="bg-white/70 dark:bg-black/70 p-5 rounded-2xl shadow-sm dark:shadow-none">
                                <h3 className="text-xl font-bold text-(--color) mb-4 border-b border-(--color)/30 pb-2 inline-block">{section.title}</h3>
                                <div
                                    className="leading-relaxed text-lg space-y-2 text-black dark:text-white [&_span]:text-black [&_span]:dark:text-white [&_span]:font-bold [&_span]:text-[17px] [&_em]:not-italic [&_em]:text-(--color) [&_em]:font-bold"
                                    dangerouslySetInnerHTML={{ __html: section.description }}
                                />
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function JourneyContent() {
    const [expandedId, setExpandedId] = useState<string | null>(null)

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

    const sortedYears = Object.entries(groupedJourneys)
        .sort((a, b) => {
            const getYears = (str: string) => {
                const parts = str.split(' - ');
                const end = parseInt(parts[parts.length - 1], 10) || 0;
                const start = parseInt(parts[0], 10) || 0;
                return { start, end };
            };
            const yearsA = getYears(a[0]);
            const yearsB = getYears(b[0]);

            if (yearsB.end !== yearsA.end) return yearsB.end - yearsA.end;
            return yearsB.start - yearsA.start;
        })

    return (
        <main className="min-h-[calc(100vh-232px)] py-10 text-white font-['Poppins',sans-serif]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative space-y-16 pb-20">
                    <div className="absolute left-9.75 sm:left-1/2 top-4 bottom-0 w-1 bg-linear-to-b from-(--color) via-(--color) to-transparent -translate-x-1/2 rounded-full hidden sm:block shadow-[0_0_15px_var(--color)]"></div>

                    {(() => {
                        let itemCounter = 0;
                        return sortedYears.map(([year, items]) => {
                            const section = (
                                <YearSection
                                    key={year}
                                    year={year}
                                    items={items}
                                    expandedId={expandedId}
                                    onToggle={(id) => setExpandedId(expandedId === id ? null : id)}
                                    itemOffset={itemCounter}
                                />
                            );
                            itemCounter += items.length;
                            return section;
                        })
                    })()}
                </div>
            </div>
        </main>
    )
}
