import React from 'react';
import { ServerComponentExample, ClientComponentExample } from '@all-in-one/shared-ui';

/**
 * Universal Components Demo Page
 * This page demonstrates how Server and Client components can coexist
 * using the same shared UI library components
 */
export default function UniversalComponentsDemo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Universal Shared UI Components Demo
      </h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          <span role="img" aria-label="server">🖥️</span> Server Component Section
        </h2>
        <p className="text-gray-600 mb-4">
          This section renders on the server and is sent as static HTML. 
          Components here cannot handle user interactions but look identical to interactive ones.
        </p>
        <ServerComponentExample />
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          <span role="img" aria-label="client">📱</span> Client Component Section
        </h2>
        <p className="text-gray-600 mb-4">
          This section runs in the browser and can handle user interactions, 
          state management, and all browser APIs.
        </p>
        <ClientComponentExample />
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-900">
          <span role="img" aria-label="key points">🔑</span> Key Points
        </h3>
        <ul className="list-disc list-inside space-y-2 text-blue-800">
          <li><strong>Same Component Library:</strong> Both sections use the same shared UI components</li>
          <li><strong>Automatic Detection:</strong> Components automatically adapt to their environment</li>
          <li><strong>Type Safety:</strong> Full TypeScript support for both server and client usage</li>
          <li><strong>Performance:</strong> Server components reduce bundle size and improve initial load</li>
          <li><strong>Flexibility:</strong> You can choose the right approach for each use case</li>
        </ul>
      </div>
    </div>
  );
}
