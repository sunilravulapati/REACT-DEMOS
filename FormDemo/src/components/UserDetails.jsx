function UserDetails({ userDetails }) {
  return (
    <div className=' border py-10 mt-10 bg-lime-200'>
      <h1 className="text-2xl mb-3">User Details</h1>

      <table className='w-full border-2 border-collapse'>
        <thead>
          <tr>
            <th className='border'>First Name</th>
            <th className='border'>Last Name</th>
            <th className='border'>Email</th>
            <th className='border'>Date of Birth</th>
          </tr>
        </thead>

        <tbody>
          {userDetails.map((userObj, index) => (
            <tr key={index}>
              <td className='border'>{userObj.firstName}</td>
              <td className='border'>{userObj.lastName}</td>
              <td className='border'>{userObj.email}</td>
              <td className='border'>{userObj.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserDetails;