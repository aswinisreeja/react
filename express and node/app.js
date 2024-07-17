const express=require('express')
const app=express()

const name= 'Aswini'
const password='12345'
app.get('/',(req,res)=>{
   res.send("Its Login page")
})
app.use(login)
app.get('/profile',(req,res)=>{
    res.send("My profile")
})

app.get('/user',(req,res)=>{
  res.send("user page")
})
    app.listen(8000,()=>{
      console.log("Port is running on 8000")
})
function login(req,res,next)
{
  if(name=='Aswini'&&password=='1234')
    {
      next()
    }
  else{
    res.send("Please check your name  and password")

  }

}