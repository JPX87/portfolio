'use client';

import { useRef, useState } from 'react';

const SectionCardClasses = "flex-1 w-full max-w-2xl xl:max-w-none flex flex-col items-center p-2 sm:p-6 mx-auto rounded-[20px] shadow-[0px_0px_30px_var(--back4-color)] text-[var(--text1-color)]";
const SvgIconClasses = "w-full h-full bg-[var(--back1-color)] transition-colors duration-300 group-hover:bg-[var(--color)] rounded-full";
const PathFillClasses = "transition-colors duration-300 fill-[var(--color)] group-hover:fill-white";

const Title = ({ children }: { children: React.ReactNode }) => (
    <h1 className="relative inline-block pb-3 mb-10 text-3xl sm:text-4xl font-bold text-(--color) after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[80%] sm:after:w-[110%] after:h-2 after:rounded-full after:bg-(--color) text-center">
        {children}
    </h1>
);

const Label = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <span className={`block text-lg sm:text-xl font-medium text-center ${className}`}>{children}</span>
);

const ContactLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} className="flex items-center justify-center mx-auto w-fit px-3 sm:px-4 md:px-6 py-2 min-w-48 sm:min-w-56 h-10 sm:h-12 rounded-md border-2 border-(--color) text-base sm:text-lg transition-transform duration-200 hover:scale-95 focus-visible:scale-95 focus:outline-none">
        {children}
    </a>
);

const SocialLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} className="flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 p-2 sm:p-3 border-[3px] border-(--color) rounded-full overflow-hidden transition-colors duration-300 hover:bg-(--color) group">
        {children}
    </a>
);

const FormInput = ({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
        {...props}
        className={`w-full h-10 sm:h-12 px-4 rounded-md border-2 border-(--color) text-base sm:text-lg transition-transform duration-200 hover:border-(--color) focus-visible:border-(--color) focus-visible:scale-[0.98] focus:outline-none ${className}`}
    />
);

export function ContactContent() {
    const [messagecolor, setmessagecolor] = useState('#0000');
    const [messagecontent, setmessagecontent] = useState('');
    const [messageState, setMessageState] = useState<'hidden' | 'active' | 'timer'>('hidden');

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (messageState === 'active' || messageState === 'timer') return;
        setMessageState('active');

        setmessagecolor('#c7653c');
        setmessagecontent('Envoie en cours ...');

        try {
            if (!form.current) {
                throw new Error("Formulaire non disponible");
            }

            // Récupérer les données du formulaire
            const formData = new FormData(form.current);
            const data = {
                user_name: formData.get('user_name'),
                user_nickname: formData.get('user_nickname'),
                user_email: formData.get('user_email'),
                user_object: formData.get('user_object'),
                message: formData.get('message'),
            };

            // Appel à la route API sécurisée
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setMessageState('timer');
                setmessagecolor('#67C458');
                setmessagecontent('Message envoyer avec succés');
                form.current.reset();
                setTimeout(() => setMessageState('hidden'), 3000);
            } else {
                const error = await response.json();
                throw new Error(error.error || "Erreur lors de l'envoi");
            }
        } catch (error) {
            setMessageState('timer');
            setmessagecolor('#ee4848');
            setmessagecontent("Impossible d'envoyer le message");
            console.error('Erreur:', error);
            setTimeout(() => setMessageState('hidden'), 10000);
        }
    }

    return (
        <div className="min-h-[calc(100vh-110px)] w-full font-['Poppins',sans-serif] pb-10">
            <div
                id="message"
                style={{ background: messagecolor }}
                className={`fixed z-100 top-6 left-1/2 -translate-x-1/2 text-white w-max max-w-[90vw] text-center rounded-full px-8 py-2 transition-all duration-700 shadow-lg ${messageState !== 'hidden' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-24'
                    } ${messageState === 'timer' ? 'cursor-pointer pr-12 after:content-["✕"] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-5 after:text-white/70 hover:after:text-white' : ''
                    }`}
                onClick={() => setMessageState('hidden')}
            >
                <h2 className="text-sm sm:text-base md:text-lg font-medium m-0 py-1">{messagecontent}</h2>
            </div>

            <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 justify-center w-full max-w-360 mx-auto py-4 px-4 sm:px-8">
                <div className={SectionCardClasses}>
                    <Title>Information de contact</Title>

                    <div className="flex flex-col gap-6 w-full">
                        <div>
                            <Label className="mb-2">Email :</Label>
                            <ContactLink href="mailto:jeremy.patapy@gmail.com">jeremy.patapy@gmail.com</ContactLink>
                        </div>

                        <div>
                            <Label className="mb-2">Téléphone :</Label>
                            <ContactLink href="tel:+33772662616">07 72 66 26 16</ContactLink>
                        </div>

                        <div>
                            <Label>Mes liens : </Label>
                            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-2">
                                <SocialLink href="https://github.com/JPX87">
                                    <svg className={`scale-110 ${SvgIconClasses}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={PathFillClasses} d="M18.6713 2.62664C18.5628 2.36483 18.3534 2.16452 18.0959 2.07627L18.094 2.07564L18.0922 2.07501L18.0884 2.07374L18.0805 2.07114L18.0636 2.06583C18.0518 2.06223 18.039 2.05856 18.0252 2.05487C17.9976 2.04749 17.966 2.04007 17.9305 2.03319C17.8593 2.01941 17.7728 2.00787 17.6708 2.00279C17.466 1.99259 17.2037 2.00858 16.8817 2.08054C16.3447 2.20053 15.6476 2.47464 14.7724 3.03631C14.7152 3.07302 14.6572 3.11096 14.5985 3.15016C14.5397 3.13561 14.4809 3.12155 14.422 3.108C12.8261 2.74083 11.1742 2.74083 9.57825 3.108C9.51933 3.12156 9.46049 3.13561 9.40173 3.15017C9.34298 3.11096 9.28499 3.07302 9.22775 3.03631C8.35163 2.47435 7.65291 2.20029 7.11455 2.08039C6.79179 2.00852 6.52891 1.99262 6.324 2.00278C6.22186 2.00784 6.13536 2.01931 6.06428 2.03299C6.0288 2.03982 5.99732 2.04717 5.96983 2.05447C5.95609 2.05812 5.94336 2.06176 5.93163 2.06531L5.91481 2.07056L5.90698 2.07311L5.9032 2.07437L5.90135 2.07499L5.89952 2.07561C5.63979 2.16397 5.42877 2.36623 5.32049 2.63061C4.91716 3.6154 4.8101 4.70134 5.00435 5.74306C5.01379 5.79367 5.02394 5.84418 5.0348 5.89458C4.99316 5.95373 4.9527 6.01368 4.91343 6.07439C4.30771 7.01089 3.98553 8.12791 4.00063 9.27493C4.00208 11.7315 4.71965 13.4139 5.9332 14.4965C6.62014 15.1093 7.41743 15.4844 8.21873 15.7208C8.31042 15.7479 8.40217 15.7731 8.49381 15.7967C8.48043 15.8432 8.46796 15.8901 8.45641 15.9373C8.40789 16.1357 8.37572 16.3394 8.36083 16.5461C8.35948 16.5648 8.35863 16.5835 8.35829 16.6022L8.32436 18.421L8.32417 18.4407C8.32417 18.4464 8.32417 18.4521 8.32417 18.4577C8.26262 18.473 8.20005 18.4843 8.13682 18.4916C7.942 18.5141 7.74467 18.4977 7.5561 18.4434C7.36752 18.3891 7.19127 18.2979 7.03752 18.1749C6.88377 18.0519 6.75553 17.8994 6.66031 17.7261L6.6505 17.7087C6.38836 17.2535 6.02627 16.8639 5.59142 16.5695C5.15656 16.275 4.6604 16.0836 4.14047 16.0099C3.59365 15.9324 3.08753 16.3128 3.01002 16.8597C2.93251 17.4065 3.31296 17.9126 3.85978 17.9901C4.07816 18.0211 4.28688 18.1015 4.47012 18.2252L4.48083 18.2323L4.49257 18.2402L4.56193 18.2811C4.85731 18.4556 5.22233 18.6657 5.66649 18.9056C6.55403 19.3851 7.69733 19.9824 8.29085 20.201C8.35033 20.2229 8.39729 20.2922 8.39729 20.3582V21.5039C8.39729 21.611 8.48425 21.698 8.59129 21.698H15.4087C15.5158 21.698 15.6027 21.611 15.6027 21.5039V20.3582C15.6027 20.2922 15.6497 20.2229 15.7091 20.201C16.3027 19.9824 17.446 19.3851 18.3335 18.9056C18.7777 18.6657 19.1427 18.4556 19.4381 18.2811L19.5074 18.2402L19.5192 18.2323L19.5299 18.2252C19.7131 18.1015 19.9218 18.0211 20.1402 17.9901C20.687 17.9126 21.0675 17.4065 20.9899 16.8597C20.9124 16.3128 20.4063 15.9324 19.8595 16.0099C19.3395 16.0836 18.8434 16.275 18.4086 16.5695C17.9737 16.8639 17.6116 17.2535 17.3495 17.7087L17.3397 17.7261C17.2445 17.8994 17.1162 18.0519 16.9625 18.1749C16.8087 18.2979 16.6325 18.3891 16.4439 18.4434C16.2553 18.4977 16.058 18.5141 15.8632 18.4916C15.7999 18.4843 15.7374 18.473 15.6758 18.4577C15.6758 18.4521 15.6758 18.4464 15.6758 18.4407L15.6756 18.421L15.6417 16.6022C15.6413 16.5835 15.6405 16.5648 15.6392 16.5461C15.6243 16.3394 15.5921 16.1357 15.5436 15.9373C15.532 15.8901 15.5196 15.8432 15.5062 15.7967C15.5978 15.7731 15.6896 15.7479 15.7813 15.7208C16.5826 15.4844 17.3799 15.1093 18.0668 14.4965C19.2803 13.4139 19.9979 11.7315 19.9994 9.27493C20.0145 8.12791 19.6923 7.01089 19.0866 6.07439C19.0473 6.01368 19.0068 5.95373 18.9652 5.89458C18.9761 5.84418 18.9862 5.79367 18.9956 5.74306C19.1899 4.70134 19.0828 3.6154 18.6795 2.63061C18.6754 2.62049 18.6713 2.62664 18.6713 2.62664Z" />
                                    </svg>
                                </SocialLink>
                                <SocialLink href="https://www.linkedin.com/in/jeremy-patapy-28a387264/">
                                    <svg className={`scale-150 ${SvgIconClasses}`} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={PathFillClasses} fillRule="evenodd" clipRule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" />
                                        <path className={PathFillClasses} fillRule="evenodd" clipRule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" />
                                    </svg>
                                </SocialLink>
                                <SocialLink href="https://www.instagram.com/jpx877/">
                                    <svg className={`scale-115 ${SvgIconClasses}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="transition-all duration-300 stroke-(--color) fill-transparent group-hover:stroke-white" d="M16.65 7.2H16.66M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </SocialLink>
                            </div>
                        </div>
                    </div>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    id="form"
                    className={SectionCardClasses}
                >
                    <Title>Formulaire de contact</Title>
                    <div className="flex flex-col gap-5 w-full max-w-md mx-auto">
                        <FormInput type="text" name="user_name" placeholder="Nom" required className="text-center" />
                        <FormInput type="text" name="user_nickname" placeholder="Prenom" required className="text-center" />
                        <FormInput type="email" name="user_email" placeholder="Votre email" required className="text-left mt-2" />
                        <FormInput type="text" name="user_object" placeholder="Objet du mail" required className="text-left" />

                        <textarea
                            name="message"
                            rows={8}
                            placeholder="Message"
                            required
                            className="w-full h-38 rounded-md p-4 border-2 border-(--color) text-base sm:text-lg transition-transform duration-200 focus-visible:scale-[0.98] focus:outline-none resize-y mt-2"
                        ></textarea>

                        <input
                            type="submit"
                            value="ENVOYER"
                            className="w-full sm:w-3/4 h-12 sm:h-14 mx-auto mt-2 rounded-xl cursor-pointer font-medium text-lg border-[3px] border-(--color) shadow-[6px_6px_0px_var(--color)] sm:shadow-[8px_8px_0px_var(--color)] transition-all duration-200 hover:shadow-none hover:translate-x-1 sm:hover:translate-x-2 hover:translate-y-1 sm:hover:translate-y-2 focus-visible:shadow-none focus-visible:translate-x-2 focus-visible:translate-y-2 focus:outline-none"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
