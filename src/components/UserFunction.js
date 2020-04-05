import axios from 'axios';

export const register = newUser =>{
    //function(newUser)
    return axios
        .post('/register', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res=>{
            console.log("Res: "+ res);
            console.log("Registered");
        })
};

export const login = user =>{
    return axios
        .post('/login', {
            email: user.email,
            password: user.password
        })
        .then(res=>{
            localStorage.setItem('usertoken', res.data);
        })
        .catch(err=>{
            console.log(err);
        })
}