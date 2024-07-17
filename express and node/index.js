const express=require('express')
const app=express()

const name= 'Aswini'
const password='12345'
app.get('/',(req,res)=>{
   res.write("Its Login page")
   res.write("Its Login page")
   res.send()
})
app.use(login)
app.get('/profile',(req,res)=>{
    res.send(
      {
        firstname:'Tom',
        Lastname:'Riddle'
      }
    )
})
app.get('/user',(req,res)=>{
  res.send("user page")
})
    app.listen(8000,()=>{
      console.log("Port is running on 8000")
})
function login(req,res,next)
{
  if(name=='Aswini'&&password=='12345')
    {
      next()
    }
  else{
    res.send("Please check your name  and password")

  }

}