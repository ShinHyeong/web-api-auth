
import React, {useRef} from "react";
import classes from "./SignupForm.module.css";

function SignupForm(){
  const userIdRef= useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();

  function onSubmitHandler(event){
    event.preventDefault();

    const data = {
      userId: userIdRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
      age: ageRef.current.value,
      city: cityRef.current.value
    }

    fetch("http://49.50.167.11:8080/account/create", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=> {
      console.log(response);
    })
  }

  return <div>
  <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='userId'>userId</label>
        <input type="text" required id="userId" ref={userIdRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='password'>password</label>
        <input type="password" required id="password" ref={passwordRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='name'>name</label>
        <input type="text" required id="name" ref={nameRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='age'>age</label>
        <input type="number" required id="age" ref={ageRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='city'>city</label>
        <input type="text" required id="city" ref={cityRef}></input>
      </div>

      <div className={classes.actions}>
        <button>Register</button>
      </div>
    </form>
</div>;
}

export default SignupForm;



