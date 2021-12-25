const express=require('express');
const router=express.Router();
const path=require('path');
const User=require('../modules/users.js')


router.get('/add-user',(req,res,next)=>{
    res.render('../views/add-user')
})


router.post('/users',(req,res,next)=>{
    let uname=req.body.userName;
    let ucompany=req.body.userCompany;
    let ustate=req.body.userState;
    let Users=new User(uname,ucompany,ustate)
   
    Users.create()
  
        console.log(Users)
    
   
    res.redirect('/')
})

router.post('/userdelete/:id',(req,res,next)=>{
    const users=User.read()
  
    const id = +req.params.id;
    const i=users.findIndex(x=>x.id===id)
     users.splice(i,1)
  
    res.redirect('/')
})


router.get('/update',(req,res,next)=>{
    const users=User.read()
    res.render('../views/edit-user',{
        usr:users
    })
})

// router.post('/updateUser/:id',(req,res,next)=>{
//     const users=User.read();
//     console.log(req.params)
//     const id=+req.params.id;
//     console.log(id,'id')
//     const  user=users.find(x=>x.id===id);
//     const {name,company,state}=req.body;
//     if(name){
//         name=user.name;
//     }
//     if(company){
//         company=user.company;
//     }
//     if(state){
//         state=user.state;
//     }
//     res.redirect('/')
// })

router.get('/',(req,res,next)=>{
    const users=User.read()
    console.log(users,'check')
  
    res.render('../views/users',{
        usrs:users,
    })
    
})

module.exports=router