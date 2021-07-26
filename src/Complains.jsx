import React, {useState} from 'react';


const Compalains = () => {
    const [data, setData] = useState({
        fullname: '',
        phone:'',
        email: '',
        message:'',

    });

    const InputEvent = (e) => {
        const{name, value} = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e)  => {
        e.preventDefault();
        alert(`
        ${data.fullname}
        ${data.phone}
        ${data.email}
        ${data.message}
        
        `)
    };






    return (
       <>
       <div className="my-5">
           <h1 className="text-center">Complaint Us</h1>

       </div>
       <div className="container contact_div mb-5">
           <div className="row">
               <div className="col-md-6 col-10 mx-auto pb-4">
                   <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">FullName</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent}   placeholder="Enter you name" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Phone</label>
                  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent}  placeholder="Enter you phone number" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Your Complaint</label>
                  <textarea class="form-control" name="message" value={data.message} onChange={InputEvent}  id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-12">
                 <button class="btn btn-outline-primary" type="submit">Submit form</button>
               </div>


                   </form>

               </div>
           </div>

       </div>
       </>
    )
};

export default  Compalains;


