import React, { useState } from 'react';
import './App.css';
import './assets/css/primitive.css';

function App() {
	const [url, setUrl] = useState('');
	const [result, setResult] = useState(null);
	const [error, setError] = useState(null);

	const checkThemeJson = async () => {
		// try {
		// 	const response = await axios.post('/api/check-theme-json', { url });
		// 	setResult(response.data);
		// 	setError(null);
		// } catch (err) {
		// 	setError('Error fetching theme.json or URL is not a WordPress site with a theme.json file.');
		// 	setResult(null);
		// }
	};

	return (
	<div className="small-container">
		<h1>Theme JSON Checker</h1>
		<div
		style={{
			display: "flex",
			alignItems: "flex-end",
			gap: "1em"
		}}
		>
			<div
			style={{
				flexGrow: 1
			}}>
				<label>
					Enter website URL
				</label>
				<input
					type="text"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					placeholder="https://www.greyd.io"
				/>
			</div>
			<div>
				<button onClick={checkThemeJson}>Check Theme</button>
			</div>
		</div>
		{error && <p className="error">{error}</p>}
		{result && (
			<div className="result">
			<h2>Features:</h2>
			<ul>
				{Object.keys(result).map((feature) => (
				<li key={feature}>
					{feature}: {result[feature] ? 'Yes' : 'No'}
					<p>{result[feature].description}</p>
				</li>
				))}
			</ul>
			</div>
		)}
	</div>
	);
}

export default App;
