import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={AllMeetups} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
