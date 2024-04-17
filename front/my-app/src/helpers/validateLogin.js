export const validateLogin =(input)=>{
    const errors={};
    // const expresionRegularUsuario = /^[a-zA-Z0-9]{3,20}$/;
    const expresionRegularPassword = /^[a-zA-Z0-9]{5,20}$/;
    
    const expresionRegularCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!expresionRegularCorreo.test(input.email)) {
        errors.email = true;
    }
    
    if (!expresionRegularPassword.test(input.password)) {
        errors.password = true;
    }
    
    return errors;
}