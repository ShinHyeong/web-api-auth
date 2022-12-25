
import React, {useRef} from "react";
import classes from "./SignupForm.module.css";

function SignupForm(){
  const userIdRef= useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const bdateRef = useRef();
  const cityRef = useRef();

  function onSubmitHandler(event){
    event.preventDefault();

    const data = {
      userId: userIdRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
      bdate: bdateRef.current.value,
      city: cityRef.current.value
    }

    fetch("/account/create", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=> {
      response.json();
    }).then((response)=> {
      console.log(response); //왜 콘솔창에 안뜨는걸까요?
    }).catch(err=>{
      console.log(err)
    })
  }

  return <div>
  <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='userId'>UserId</label>
        <input type="text" required id="userId" ref={userIdRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='password'>Password</label>
        <input type="password" required id="password" ref={passwordRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input type="text" required id="name" ref={nameRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='bdate'>Date of Birth</label>
        <input type="date" required id="bdate" ref={bdateRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type="text" required id="city" ref={cityRef}></input>
      </div>

      <div className={classes.actions}>
        <button>Register</button>
      </div>
    </form>
</div>;
}

export default SignupForm;



