import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { IoMdArrowDropdown } from "react-icons/io"

type Props = {
    id?: string,
    activeButtonId?: string,
    text: string,
    classExtend: string,
    onClick?: () => void,
    children?: React.ReactNode,
    dropDown?: boolean,
}

const OptionButton = ({ text, classExtend, onClick, children, dropDown, id, activeButtonId }: Props) => {
    const buttonRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)
    const childrenRef = useRef<HTMLDivElement>(null);
    const activeButton = id === activeButtonId

    useGSAP(() => {
        const button = buttonRef.current
        const overlay = overlayRef.current

        if (!button || !overlay) return

        gsap.set(overlay, {
            xPercent: -100,
            opacity: 0,
        })

        const handleEnter = () => {
            gsap.to(overlay, {
                xPercent: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            })
        }

        const handleLeave = () => {
            gsap.to(overlay, {
                xPercent: 100,
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(overlay, { xPercent: -100 })
                }
            })
        }

        button.addEventListener('mouseenter', handleEnter)
        button.addEventListener('mouseleave', handleLeave)

        return () => {
            button.removeEventListener('mouseenter', handleEnter)
            button.removeEventListener('mouseleave', handleLeave)
        }
    }, [])

    useGSAP(() => {
        if (!dropDown || !childrenRef.current) return;

        const el = childrenRef.current;

        if (activeButton) {
            gsap.fromTo(
                el,
                { height: 0, opacity: 0 },
                {
                    height: "auto",
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    clearProps: "height",
                }
            );
        } else {
            gsap.to(el, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [activeButton]);

    return (
        <div
            className={`${classExtend} cursor-pointer relative gap-2 min-h-0`}
            ref={buttonRef}
            onClick={onClick}
        >
            <div className="flex items-center justify-between ">
                <p className="relative z-10">{text}</p>
                {dropDown ? <IoMdArrowDropdown /> : <div></div>}
            </div>

            {dropDown && (
                <div ref={childrenRef} className="bg-primary-blue rounded-b-[3px]">
                    {activeButton && children}
                </div>
            )}

            <div
                ref={overlayRef}
                className="overlay absolute inset-0 bg-overlay rounded-[3px] z-0"
            ></div>

            {activeButton && <div
                ref={overlayRef}
                className="overlay absolute inset-0 bg-overlay rounded-[3px] z-0"
            ></div>}
        </div>
    )
}

export default OptionButton
