import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import appStyles from "./App.module.scss"

function App() {
  return (
		<div className={appStyles["app-container-div}"]}>
			<Routes>
				<Route>
					<Route path="/" element={<LandingPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
