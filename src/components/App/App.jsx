import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import friends from "../../friends.json";
import transactionHistory from "../../transactionHistory.json";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import "./App.css";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactionHistory} />
    </>
  );
}
