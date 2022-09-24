import './styles/index.scss';

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainPage from '@pages/MainPage';
import QueryClientProvider from '@shared/lib/QueryClient/QueryClientProvider';

const App: React.FC = () => (
	<QueryClientProvider>
		<BrowserRouter>
			<MainPage />
		</BrowserRouter>
	</QueryClientProvider>
);

export default App;
