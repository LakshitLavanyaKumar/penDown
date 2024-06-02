///this folder is actually my main(remember) route,...routing is done from here
const express = require('express');
const mongoose  =require('mongoose');

const router = express.Router();
const Blog = require('../models/Blog');


const adminLayout = '../views/layouts/main';
router.get('', async (req,res) => {
    //res.send('Hello World'); 
     const locals = {
         title: " penDown ",
         description: "Simple Blog created with Nodejs, Express & MongoDb."
     }
    
     try{
    //const data = await Post.find();
    res.render('index',{ locals });//we r rendering home page here
     }
     catch (error) {
     console.log(error);
     }
    //res.render('index',{locals});//we r rendering home page here
    });


    router.get('/about', async (req,res) => {
        //res.send('Hello World'); 
         const locals = {
             title: "penDown ",
             description: "Simple Blog created with Nodejs, Express & MongoDb."
         }
        
         try{
        //const data = await Post.find();
        res.render('about',{ locals });//we r rendering about page here
         }
         catch (error) {
         console.log(error);
         }
        //res.render('index',{locals});//we r rendering home page here
        });
    


        // router.get('/create', async (req,res) => {
        //     //res.send('Hello World'); 
        //      const locals = {
        //          title: "BlogSphere ",
        //          description: "Simple Blog created with Nodejs, Express & MongoDb."
        //      }
            
        //      try{
        //     //const data = await Post.find();
        //     res.render('create',{ locals });//we r rendering about page here
        //      }
        //      catch (error) {
        //      console.log(error);
        //      }
        //     //res.render('index',{locals});//we r rendering home page here
        //     });
        
            router.get('/create',  async (req, res) => {
                try {
              
                  const locals = {
                    title: " penDown",
                    description: "Free NodeJs User Management System",
                  };
              
                  res.render('create',{locals});
              
                } catch (error) {
                  console.log(error);
                }
              
              });
            

              router.get('/view',  async (req, res) => {
                try {
              
                  const locals = {
                    title: " penDown",
                    description: "Free NodeJs User Management System",
                  };
                const items= await Blog.find({});
                  res.render('view',{items,locals});
              
                } catch (error) {
                  console.log(error);
                }
              
              });
            
            /**
             * POST /
             * Admin - Create New Post
            */
            router.post('/view',  async (req, res) => {
              const locals = {
                title: " penDown ",
                description: "Simple Blog created with Nodejs, Express & MongoDb."
            }
                try {
                   
                 const data = new Blog(req.body);//Blog verifies whether the data coming is in the form of model Blog format or not
               await  data.save() ;
               const items= await Blog.find({});
               res.render('view',{items,locals});
                } catch (error) {
                  console.log(error);
                }
              });



              //route parameters are the variable parts of an url or routes
router.get('/view/:id'/*id is the name of the route parameter, ':' tells that the next part is route parameter and is variable*/,async (req,res)=>{
  let slug=req.params.id;//extracting the route parameter which is named id by us
   const data = await Blog.findById({_id:slug});
   

      try{
          res.render('details',{title:'Blog Details', data})
      }
      catch(error){
          console.log(error);
      }
});

router.post('/view/:id',async (req,res)=>{
  
      try{
        await Blog.deleteOne( { _id: req.params.id } );
          res.redirect('/view');
      }
      catch(error)
      {console.log(error);}
});


//404 page not found
router.use((req,res)=>{//use is a middleware function & runs for every request, BUT only runs if the request reaches this point in the code, else if one of the above get functions execute then it stops
  //res.status(404).sendFile('./404errorpage.html',{root:__dirname});
  res.status(404);
  res.render('404',{title:'Error 404'});
});//we have to explicitly assign statusCode=404 as express doesnt know we are doing this for error page 

    module.exports = router;