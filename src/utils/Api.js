
// const URL_PREFIX= "https://solit-backend.herokuapp.com"
const URL_PREFIX ="http://localhost:3001"

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
    // add profilePicURL (optional)
  signup: (email, password, firstName, lastName, username, profilePicURL)=>{
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
  // get method for getting a review
    getReviews:(ol_key)=>{
      return fetch(`${URL_PREFIX}/api/review/${ol_key}`,{
        method:"GET"
      })
      },
    //insert new method
    // post method for adding a new review
    addReview:(review_title, review_author, review_text, plot_rating, character_rating,accessibility_rating, pacing_rating, ol_key, token)=>{
      return fetch(`${URL_PREFIX}/api/review/${ol_key}`,{
        method:"POST",
        body:JSON.stringify({
          review_title,
          review_author,
          review_text,
          plot_rating,
          character_rating,
          accessibility_rating,
          pacing_rating
        }),
        headers:{
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
        }
      })
      },
     // post method for adding a new diary entry
     addDiary:(diary_title, diary_book, diary_text, userId)=>{
      return(fetch)`${URL_PREFIX}/diary`,{
        method:"POST",
        body:JSON.stringify({
          diary_title, 
          diary_book, 
          diary_text, 
          userId
        }),
        headers:{
          "Content-Type": "application/json"
        }
      }
      }, 
    // post method for adding a new shelf
     addShelf:(shelf_name, shelf_desc, have_read, shelf_id, user_id)=>{
      return fetch(`${URL_PREFIX}/shelf`,{
        method:"POST",
        body:JSON.stringify({
          shelf_name, 
          shelf_desc, 
          have_read, 
          shelf_id,
          user_id
        }),
        headers:{
          "Content-Type": "application/json"
        }
      })
  },
    // get method for getting diary entries
    getDiary:()=>{
      return(fetch)`${URL_PREFIX}/review-from-token`,{
        method:"GET"
        }
      },
  // get method for retriving shelves
  getShelf:()=>{
    return(fetch)`${URL_PREFIX}/shelf`,{
      method:"GET"

    }
}}

export default Api;