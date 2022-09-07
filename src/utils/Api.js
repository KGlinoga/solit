const URL_PREFIX= "http://localhost:3001"
// const URL_PREFIX= "https://solit-backend.herokuapp.com"

const Api = {
  checkToken:token=>{
    return fetch(`${URL_PREFIX}/check-token`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
     })
},
    login: (email,password)=>{
        return fetch(`${URL_PREFIX}/login`,{
        method:"POST",
        body:JSON.stringify({
          email,
          password
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
    },
    signup: (email,password,firstName, lastName, username)=>{
        return fetch(`${URL_PREFIX}/signup`,{
        method:"POST",
        body:JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          username
        }),
        headers:{
            "Content-Type":"application/json"
        },
    })
    },
    getUserById:userId=>{
      return fetch(`${URL_PREFIX}/users/${userId}`)
    },

    updateAccount:(email, firstName, lastName, username, token)=>{
      console.log(lastName);
      return fetch(`${URL_PREFIX}/api/user/update`,{
        method:"PUT",
        body:JSON.stringify({
          email,
          firstName,
          lastName,
          username,
        
        }),
        headers:{
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
        }
      })
    },
    //insert new method
}
export default Api;