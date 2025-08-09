import React from 'react';
import { DisplayButton, Card } from './shared-ui';

/**
 * Server Component Example
 * This component runs on the server and can use DisplayButton safely
 */
export function ServerComponentExample() {
  return (
    <Card title="Server Component Example" className="mb-6">
      <p className="text-gray-600 mb-4">
        This card is rendered on the server. The buttons below are non-interactive 
        but look exactly the same as interactive buttons.
      </p>
      <div className="space-y-2">
        <DisplayButton variant="primary">Server-Safe Primary Button</DisplayButton>
        <DisplayButton variant="secondary">Server-Safe Secondary Button</DisplayButton>
        <DisplayButton variant="danger" disabled>Disabled Button</DisplayButton>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        <span role="img" aria-label="lightbulb">💡</span> These buttons render on the server and are sent as static HTML
      </p>
    </Card>
  );
}

export default ServerComponentExample;
