import React, { useState, useRef, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';
import OrbitCheckpoint from './OrbitCheckpoint.jsx'; // Import the new component
import './CeremonyPage.css';

const ItemTypes = {
  THALI: 'thali',
  RAKHI: 'rakhi',
};

// DraggableThali component
const DraggableThali = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.THALI,
        collect: (monitor) => ({ isDragging: !!monitor.isDragging() })
    }));
    return (
        <div ref={drag} className="thali-container" style={{ opacity: isDragging ? 0 : 1 }}>
            <img src="/images/thali.png" alt="Pooja Thali" />
        </div>
    );
};

// Find and update the DraggableRakhi component
const DraggableRakhi = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.RAKHI,
        collect: (monitor) => ({ isDragging: !!monitor.isDragging() })
    }));
    return (
        <div ref={drag} className="rakhi-container" style={{ opacity: isDragging ? 0 : 1 }}>
            <img src="/images/rakhi.png" alt="Rakhi" />
        </div>
    );
};

// Main CeremonyPage component
function CeremonyPage() {
    const navigate = useNavigate();
    const [rotations, setRotations] = useState(0);
    const [rakhiUnlocked, setRakhiUnlocked] = useState(false);
    const [isRakhiTied, setIsRakhiTied] = useState(false);
    const orbitOrder = useRef([]);
    const expectedOrder = ['top', 'right', 'bottom', 'left'];

    const handleOrbit = useCallback((checkpoint) => {
        const lastCheckpoint = orbitOrder.current[orbitOrder.current.length - 1];
        if (checkpoint !== lastCheckpoint) {
            orbitOrder.current.push(checkpoint);
        }
        if (orbitOrder.current.length === expectedOrder.length) {
            if (JSON.stringify(orbitOrder.current) === JSON.stringify(expectedOrder)) {
                setRotations(prev => {
                    const newRotations = prev + 1;
                    if (newRotations >= 3) setRakhiUnlocked(true);
                    return newRotations;
                });
            }
            orbitOrder.current = [];
        }
    }, []);

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
                        src={isRakhiTied ? "/images/avatar-final.png" : "/images/love.png"}
                        alt="Brother's Avatar"
                        className="ceremony-avatar"
                    />
                    {!rakhiUnlocked && (
                        <>
                           {/* Use the new OrbitCheckpoint component */}
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