import React, { useState } from 'react'

const Form = () => {
    const [Ivalue,setIvalue] = useState({name:'',email:'',phone:'',message:''});
    const {name,email,phone,message} = Ivalue;

    const Handlevalue =(e)=>{
        const fnames = e.target.name;        
        const fvalues = e.target.value;        

        setIvalue({...Ivalue,[fnames]:fvalues})
    }
    const Submit = (e) =>{
        e.preventDefault();
        console.log(Ivalue)
    }
    return (
        <>
            <form onSubmit={Submit}>
                <label htmlFor="name"> Full Name </label>    
                <input id="name" name="name" onChange={Handlevalue} value={name} type="text" placeholder="Type your Full Name" />

                <label htmlFor="email"> Email Address </label>    
                <input id="email" name="email"  onChange={Handlevalue} value={email} type="email" placeholder="Type your Email" />

                <label htmlFor="phone"> Phone </label>    
                <input id="phone" name="phone"  onChange={Handlevalue} value={phone} type="Number" placeholder="Type your Phone Number" />

                <label htmlFor="message"> Message </label> 
                <textarea name="message"  onChange={Handlevalue} value={message} id="message" placeholder="Message..."></textarea>
                
                 <button className=" mt-2 btn btn-info"> submit </button>  

                
            </form>
        </>
    )
}
export default  Form;
