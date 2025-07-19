import React from 'react';
import { useDrop } from 'react-dnd';
import './CeremonyPage.css'; // We can reuse the same CSS

const ItemTypes = {
  THALI: 'thali',
};

function OrbitCheckpoint({ position, onHover }) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.THALI,
    hover: () => onHover(position), // Call the hover handler passed from the parent
  }));

  // The outer div is the drop target, the inner div is the visible indicator
  return (
    <div ref={drop} className={`orbit-checkpoint ${position}`}>
      <div className="checkpoint-indicator"></div>
    </div>
  );
}

export default OrbitCheckpoint;