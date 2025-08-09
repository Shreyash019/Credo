"use client";

import React, { useState } from 'react';
import { InteractiveButton, Button, Card } from './shared-ui';

/**
 * Client Component Example
 * This component runs in the browser and can use full interactivity
 */
export function ClientComponentExample() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    setMessage(`Button clicked ${count + 1} times!`);
  };

  const handleReset = () => {
    setCount(0);
    setMessage('Count reset!');
  };

  return (
    <Card title="Client Component Example" className="mb-6">
      <p className="text-gray-600 mb-4">
        This card runs in the browser and can handle user interactions.
      </p>
      
      <div className="mb-4">
        <p className="text-lg font-semibold">Count: {count}</p>
        {message && (
          <p className="text-sm text-blue-600 mt-2">{message}</p>
        )}
      </div>
      
      <div className="space-x-2 space-y-2">
        <InteractiveButton 
          variant="primary" 
          onClick={handleIncrement}
        >
          Increment Counter
        </InteractiveButton>
        
        <Button 
          variant="secondary" 
          onClick={handleReset}
          interactive={true}
        >
          Reset Counter
        </Button>
        
        <Button 
          variant="danger" 
          onClick={() => setMessage('Danger button clicked!')}
        >
          Danger Action
        </Button>
      </div>
      
      <p className="text-xs text-gray-500 mt-4">
        <span role="img" aria-label="computer">💻</span> These buttons have full interactivity and run in the browser
      </p>
    </Card>
  );
}

export default ClientComponentExample;
