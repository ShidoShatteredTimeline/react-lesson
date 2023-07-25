import "./App.css";
import Friend from "./components/Friends";
function App() {
  const friends = [];
  return (
    <div>
      <div className="Container">
        {friends.map((friend) => {
          return <Friend data={friend} />;
        })}
      </div>
    </div>
  );
}
export default App;
