import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [delayedPosition, setDelayedPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = () => {
            setIsHovering(true);
        };
        const onMouseLeave = () => {
            setIsHovering(false);
        };

        document.addEventListener('mousemove', onMouseMove);
        
        document.querySelectorAll('a, button, [role="button"], input, textarea').forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        let animationFrameId: number;
        function animate() {
            setDelayedPosition(prev => ({
                x: prev.x + (position.x - prev.x) * 0.08,
                y: prev.y + (position.y - prev.y) * 0.08,
            }));
            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.querySelectorAll('a, button, [role="button"], input, textarea').forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
            cancelAnimationFrame(animationFrameId);
        };
    }, [position]);

    return (
        <>
            <div
                className="pointer-events-none fixed z-[9999] rounded-full mix-blend-difference transition-transform duration-300"
                style={{
                    left: `${delayedPosition.x}px`,
                    top: `${delayedPosition.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(20, 184, 166, 0.5)', // Teal with transparency
                    border: '1px solid rgb(20, 184, 166)',
                }}
            />
            <div
                className="pointer-events-none fixed z-[9999] rounded-full bg-teal-400"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '8px',
                    height: '8px',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default CustomCursor;