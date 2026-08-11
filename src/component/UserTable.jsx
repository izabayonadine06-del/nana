function UserTable({ users = [] }) {

  return (
    <div className="overflow-x-auto rounded-2xl shadow-md">

      <table className="w-full text-sm text-left">

        <thead className="bg-primary-200 text-secondary-50">

          <tr>
            <th className="p-4 py-3">Full Name</th>
            <th className="p-4 py-3">Email</th>
            <th className="p-4 py-3">Phone Number</th>
            <th className="p-4 py-3">Role</th>
          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="bg-secondary-50 border-b border-primary-50 hover:bg-primary-100"
            >

              {/* Hano nahahinduye fullName -> fullname */}
              <td className="px-4 py-3 text-secondary-300">
                {user.fullname}
              </td>

              <td className="px-4 py-3 text-secondary-300">
                {user.email}
              </td>

              <td className="px-4 py-3 text-secondary-300">
                {user.phoneNumber}
              </td>

              <td className="px-4 py-3 text-secondary-300">
                {user.role}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default UserTable;