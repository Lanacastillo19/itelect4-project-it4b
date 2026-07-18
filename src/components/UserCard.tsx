import type { User } from "../types/index";

interface UserCardProps {
  user: User;
  onSelect: (user: User) => void;
}

function UserCard({ user, onSelect }: UserCardProps) {
  const handleClick = (): void => {
    onSelect(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("Search filter typing:", e.target.value);
  };

  return (
    <div className="user-card" style={{ border: "1px solid #ccc", padding: "15px", margin: "10px", borderRadius: "8px" }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <button onClick={handleClick}>Select Profile</button>
      <input onChange={handleChange} placeholder="Search records..." style={{ marginLeft: "10px" }} />
    </div>
  );
}

export default UserCard;