const Menu = require('../../models/menu')

function homeController(){
    return{
        index(req,res){
     Menu.find().then(function(foods){
 console.log(foods);
 return res.render('home',{menu:foods})
     })
 
      
}
        }
    }

module.exports = homeController;