import { useState } from "react";

const APImusic = "/assets/api.json";

function App() {
	const [music, setMusic] = useState([]);

	return (
		<>
			<h1>
				<i class='fa-solid fa-headphones'></i> Play lista - RELAXING Music
			</h1>
			<button>
				<i class='fa-solid fa-circle-play'></i> Play
			</button>
			<button>
				<i class='fa-solid fa-circle-pause'></i> Pausa
			</button>
		</>
	);
}

export default App;
