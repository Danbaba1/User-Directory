import React, { useEffect, useState } from 'react';
import { fetchUsers } from './api';
import { User } from './types';
import { UserList } from './components/UserList';
import { UserDetails } from './components/UserDetails';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data.users);
      } catch (err) {
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">User Directory</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow">
            <UserList
              users={users}
              onSelectUser={setSelectedUser}
              selectedUserId={selectedUser?.id}
            />
          </div>
          {selectedUser && (
            <div>
              <UserDetails user={selectedUser} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;