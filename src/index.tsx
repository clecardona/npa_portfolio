import 'assets/translations/i18n';
import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'state/ThemeProvider';

import App from './App';

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
let root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
)
