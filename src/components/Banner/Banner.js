import React from 'react';

export function Banner({ mood, children }) {
    return (
      <div className={`${mood} banner`}>
        {children}
      </div>
    );
}
