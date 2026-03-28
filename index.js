//LOGN FEATURE CODE USING NESTED AND ARROW FUNCTIONS 


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

//USER DATA(OBJECT)

const userData =
  {
    username: "John Doe",
    password: "whoami254"
}
  
//NESTED LOGIN FUNCTION
function createLoginTracker(userInfo) {
  console.log("Welcome to the JavaScript Functions Lab app");

    const userName = prompt("Input your user name");
    const userPass = prompt("Input your password");
  
  let attemptCount = 0;
  const arrowFunc = (passwordAttempt) => {
     
  }
}
