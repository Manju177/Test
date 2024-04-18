import React from 'react'
import { useState } from 'react'

function MultiStepForm() {
    const [step, setStep] = useState()
    const [formData, setFormData] = useState({
        firstName: "",
        email: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange=(e)=>{
        const {name, email}=e.target;
        setFormData({...formData,[name]:value})
        if(name==='email'){
            const isValid=value.includes('@')
            setErrors({...errors,[name]:isValid?'':'error'})
        }else {
            setErrors({...errors,[name]:isValid?'':'required'})
        }

    }

    

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formerrors=Object.keys(formData).reduce((a,k)=>{
            if(!formData[k]){
                a[k]='required field'
            }else if(k==='email' && !formData[k].includes('@')){
            a[k]='invalid email'
            }
            return a
        }
    ,{});
    if(Object.keys(formerrors).length>0){
        setErrors(formerrors)
        return;
    }

    }

    const steptoRender = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                         <input type="text" name="lastName" value={formData.email} onChange={handleChange} />
                        <button onClick={()=>setStep(step+1)}> Next</button>
                        {errors.firstName|| errors.email?<><span> {errors.email}</span><span> {errors.firstName}</span></>: <button onClick={()=>setStep(step-1)}> Next</button> }
                    </div>
                )
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {steptoRender()}

        </form>
    )
}

export default MultiStepForm