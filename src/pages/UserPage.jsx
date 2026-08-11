import { useEffect, useState } from 'react';
import DashboardLayout from '../component/DashboardLayout.jsx';
import UserTable from '../component/UserTable.jsx';
import { getUsers } from '../app/api/users/index.js';

function UserPage() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        getUsers()
            .then((data) => {
                if (mounted) setUsers(Array.isArray(data) ? data : []);
            })
            .catch((err) => {
                if (mounted) setError(err.message || 'Failed to load users');
            });
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6 ">
                <h1 className="text-2xl font-semibold text-secondary-300">Users</h1>

                {error && <p className="text-red-500">{error}</p>}

                <UserTable users={users} />
            </div>
        </DashboardLayout>
    );
}

export default UserPage;