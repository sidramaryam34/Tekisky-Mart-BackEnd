import jwt from 'jsonwebtoken'

export let verifyToken = async(token,email) =>{
    try {
        let payload = await jwt.verify(token,process.env.PRIVATEKEY)
        console.log(`payload is ${payload.email}`);
        if(payload.email==email){
            return true
        }else{
            return false
        }
    } catch (error) {
        
    }
}

export let getToken=(payload)=>{
    let token=jwt.sign(payload,process.env.PRIVATEKEY)
    console.log(token);
    return token
}