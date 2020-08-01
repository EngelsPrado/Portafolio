import React from 'react';
import ReactDOM from 'react-dom';

//App Principal
import './Styles/style.scss';
import App from './App';

//Firebase
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './Firebase/config';

ReactDOM.render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<App />
		</FirebaseAppProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
