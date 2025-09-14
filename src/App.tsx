import { useEffect, useState } from "react";
import "./App.css";
import type { User } from "./types/user";
import { fetchUser } from "./services/userService";
// import Form from './components/Form'
// import Greeting from './components/Greeting'
// import ToggleButton from './components/ToggleButton'
// import Task from './useRef/Task'

function App() {
  // const name = 'anamol hasan'
  // const age = 27

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const response = await fetchUser();
        if (response.status === 200) {
          setUsers(response.data);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An Error occureed.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return (
      <div>
        <p>loading.....</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error {error}</p>
      </div>
    );
  }

  return (
      <div className="h-screen bg-white dark:bg-black dark:text-white p-6">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-gray-500 dark:text-gray-300">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
