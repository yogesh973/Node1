let users=[]

module.exports=class User{
    constructor(name,company,state){
        
        this.name=name;
        this.company=company;
        this.state=state;
     }

    create(){
           this.id=users.length+1
           users.push(this);
           console.log(users,'array')
          
    }

    static read(){
        console.log(users,'this.users')
        return users;
    }

}
