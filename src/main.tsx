import { createRoot } from 'react-dom/client';
import { AppProviders } from 'src/providers/AppProviders';
import App from 'src/App';

import 'src/config/i18n';

const container = document.getElementById('root');

if (!container) throw new Error('Application not found');

const root = createRoot(container);

root.render(
	<AppProviders>
		<App />
	</AppProviders>,
);
