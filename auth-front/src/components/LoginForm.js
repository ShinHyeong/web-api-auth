
import React, {useRef} from "react";
import classes from "./LoginForm.module.css";

function LoginForm(){
  const userIdRef= useRef();
  const passwordRef = useRef();

  function onSubmitHandler(event){
    event.preventDefault();
    console.log(userIdRef.current.value);
    console.log(passwordRef.current.value);
  
    const data = {
      userId: userIdRef.current.value,
      password: passwordRef.current.value
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

      <div className={classes.actions}>
        <button>Add</button>
      </div>
    </form>
</div>;
}

export default LoginForm;



