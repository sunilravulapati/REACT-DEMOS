import { useForm } from "react-hook-form";
function FormDemo() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const submitForm = (o) => {
        console.log(o)
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="mb-3">
                    <input type = "text" {...register("username",{required:true})} placeholder="username" id="un" className="border"/>
                    {
                        errors.username?.type === "required" && <p className="text-red-500">Username is required</p>
                    }
                </div>
                <div className="mb-3">
                    <input type = "text" {...register("email")} placeholder="email" id="email" className="border"/>
                </div>
                <button type="submit" className="p-2 bg-blue-200 rounded">submit</button>
            </form>
        </div>
    )
}

export default FormDemo;