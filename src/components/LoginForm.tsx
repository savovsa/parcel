import { useState } from "react";

export function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Without hooks
        //const target = event.target as HTMLFormElement;
        //const formData = new FormData(target);
        //console.log(formData.get("user"));

        //With hooks
        console.log(user, password);
      }}
    >
      <label>User:</label>
      <input
        onChange={(e) => {
          const temp = e.target.value;
          if (!temp.includes(".")) setUser(temp);
        }}
        value={user}
        name="user"
      />
      <label> Password:</label>
      <input onChange={(e) => setPassword(e.target.value)} name="password" />
      <button>Submit</button>
    </form>
  );
}
