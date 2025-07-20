import React, { useState, useRef, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';
import OrbitCheckpoint from './OrbitCheckpoint.jsx';
import './CeremonyPage.css';

const BASE_URL = import.meta.env.BASE_URL;

const ItemTypes = {
    THALI: 'thali',
    RAKHI: 'rakhi',
};

const DraggableThali = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.THALI,
        collect: (monitor) => ({ isDragging: !!monitor.isDragging() })
    }));
    return (
        <div ref={drag} className="thali-container" style={{ opacity: isDragging ? 0 : 1 }}>
            <img src={`${BASE_URL}images/thali.png`} alt="Pooja Thali" />
        </div>
    );
};

const DraggableRakhi = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.RAKHI,
        collect: (monitor) => ({ isDragging: !!monitor.isDragging() })
    }));
    return (
        <div ref={drag} className="rakhi-container" style={{ opacity: isDragging ? 0 : 1 }}>
            <img src={`${BASE_URL}images/rakhi.png`} alt="Rakhi" />
        </div>
    );
};

function CeremonyPage() {
    const navigate = useNavigate();
    const [rotations, setRotations] = useState(0);
    const [rakhiUnlocked, setRakhiUnlocked] = useState(false);
    const [isRakhiTied, setIsRakhiTied] = useState(false);
    const orbitOrder = useRef([]);
    const expectedOrder = ['top', 'right', 'bottom', 'left'];

    // --- UPDATED ORBIT LOGIC ---
    const handleOrbit = useCallback((checkpoint) => {
        // Find what the next correct checkpoint in the sequence should be
        const nextExpectedCheckpoint = expectedOrder[orbitOrder.current.length];

        // If the user is hovering over the correct next checkpoint in the sequence...
        if (checkpoint === nextExpectedCheckpoint) {
            // ...add it to our sequence tracker. This prevents out-of-order tracking.
            orbitOrder.current.push(checkpoint);
        }

        // When the sequence tracker is full (meaning a full, correct orbit is complete)...
        if (orbitOrder.current.length === expectedOrder.length) {
            // ...increment the rotation count.
            setRotations(prev => {
                const newRotations = prev + 1;
                if (newRotations >= 3) {
                    setRakhiUnlocked(true);
                }
                return newRotations;
            });
            // ...and reset the sequence tracker for the next orbit.
            orbitOrder.current = [];
        }
    }, []); // The empty dependency array is correct here.
    // --- END OF UPDATED LOGIC ---

    const [, drop] = useDrop(() => ({
        accept: ItemTypes.RAKHI,
        drop: () => {
            if (rakhiUnlocked) {
                setIsRakhiTied(true);
                setTimeout(() => navigate('/message'), 2000);
            }
        },
    }), [rakhiUnlocked]);

    const getPromptMessage = () => {
        if (isRakhiTied) return "Rakhi tied! Happy Rakshabandhan!";
        if (rakhiUnlocked) return "The Rakhi is unlocked! Drag it to your brother's wrist.";
        if (rotations > 0 && rotations < 3) return `Rotation ${rotations} of 3 complete! Keep going!`;
        return "Perform the Aarti by orbiting the thali around your brother 3 times.";
    };

    return (
        <div className="ceremony-container">
            <h1 className="ceremony-title">The Aarti</h1>
            {!isRakhiTied && !rakhiUnlocked && (
                <h2 className="rotation-counter">Rotations: {rotations} / 3</h2>
            )}
            <p className="ceremony-prompt">{getPromptMessage()}</p>
            <div className="ceremony-area">
                <div className="avatar-zone" ref={drop}>
                    <img
                        src={isRakhiTied ? `${BASE_URL}images/avatar-final.png` : `${BASE_URL}images/love.png`}
                        alt="Brother's Avatar"
                        className="ceremony-avatar"
                    />
                    {!rakhiUnlocked && (
                        <>
                            <OrbitCheckpoint position="top" onHover={handleOrbit} />
                            <OrbitCheckpoint position="right" onHover={handleOrbit} />
                            <OrbitCheckpoint position="bottom" onHover={handleOrbit} />
                            <OrbitCheckpoint position="left" onHover={handleOrbit} />
                        </>
                    )}
                </div>
                {!rakhiUnlocked && <DraggableThali />}
                {rakhiUnlocked && !isRakhiTied && <DraggableRakhi />}
            </div>
        </div>
    );
}

export default CeremonyPage;