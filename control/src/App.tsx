import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Clock } from './components/clock';
import { Controls } from './components/controls';
import { Timeline } from './components/timeline';

const queryClient = new QueryClient();

export function App() {
  return (
    <div className="App">
      <QueryClientProvider client={ queryClient }>
        <Clock />
        <Controls />
        <Timeline />
      </QueryClientProvider>
    </div>
  );
}

