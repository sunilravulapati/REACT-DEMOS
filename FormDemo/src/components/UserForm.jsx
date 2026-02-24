import { useForm } from 'react-hook-form'
import UserDetails from './UserDetails'
import { useState } from 'react'
function UserForm() {
    const { register, handleSubmit, formState: { errors },setError } = useForm();
    const [userDetails, setUserDetails] = useState([])
    const submitForm = (o) => {
        console.log(o)
        setUserDetails([...userDetails, o])
    }
    // setError("dob",{
    //     type:"custom",
    //     message:"dob should be after 2020"
    // })
    // {errors.dob?.type === "custom" && <p>{errors.dob.message}</p>}
    
    // date is not after 2020-01-01
    
    return (
        <div className='bg-pink-500 m-auto w-1/2 flex-col'>
            <h1 className='text-2xl'> User Registration Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="mb-3">
                    <input type="text" {...register("firstName", { required: true,minLength : 4, maxLength: 6 })} placeholder="enter first name" id="fn" className="border" />
                    {
                        errors.firstName?.type === "required" && <p className="text-blue-800">firstName is required</p>
                    }
                    {
                        errors.firstName?.type === "minLength" && <p className="text-blue-800">firstName must be at least 4 characters</p>
                    }
                    {
                        errors.firstName?.type === "maxLength" && <p className="text-blue-800">firstName must be at most 6 characters</p>
                    }
                </div>
                <div className="mb-3">
                    <input type="text" {...register("lastName", { required: true, minLength : 4, maxLength: 6})} placeholder="enter last name" id="ln" className="border" />
                    {
                        errors.lastName?.type === "required" && <p className="text-blue-800">lastName is required</p>
                    }
                    {
                        errors.lastName?.type === "minLength" && <p className="text-blue-800">lastName must be at least 4 characters</p>
                    }
                    {
                        errors.lastName?.type === "maxLength" && <p className="text-blue-800">lastName must be at most 6 characters</p>
                    }
                </div>
                <div className="mb-3">
                    <input type="text" {...register("email")} placeholder="email" id="email" className="border" />
                    {
                        errors.email?.type === 'required' && <p className="text-blue-800">email is required</p>
                    }
                </div>
                <div className='mb-3'>
                    <input type="date" {...register("dob", { required: true })} id="dob" className='border' />
                    {
                        errors.dob?.type === 'required' && <p className="text-blue-800">dob is required</p>
                    }
                </div>
                <button type="submit" className="p-2 bg-blue-200 rounded">Add New User</button>
            </form>
            <UserDetails userDetails={userDetails}/>
        </div>
        )
    }

export default UserForm;