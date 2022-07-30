import "./App.css";

import ProfilePhoto from "./components/Profile/ProfilePhoto";
import Adress from "./components/Profile/Adress";
import { FullName } from "./components/Profile/FullName";

function App() {
  return (
    <div className="compon">
      <ProfilePhoto className="PPhoto" />
      <Adress />
      <FullName />
    </div>
  );
}

export default App;
