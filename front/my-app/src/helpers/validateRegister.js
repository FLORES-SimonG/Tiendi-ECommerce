export const validateRegister =(input)=>{
    const errors={};
    const expresionRegularDireccion = /^[a-zA-Z0-9]{3,30}$/;
    const expresionRegularPassword = /^[a-zA-Z0-9]{8,20}$/;
    const expresionRegularCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;
    const expresionRegularPhone = /^[0-9]{3,20}$/;
  


    if (!expresionRegularNombre.test(input.name)) {
         errors.name = 'El nombre es incorrecto';
    }
    if (!expresionRegularCorreo.test(input.email)) {
         errors.email = 'El email es incorrecto';
    }

    if (input.phone !== undefined && !expresionRegularPhone.test(input.phone.toString())) {
         errors.phone = 'El DNI es incorrecto';
    }
    if (!expresionRegularDireccion.test(input.username)) {
         errors.address = 'El usuario es incorrecto';
    }
    if (!expresionRegularPassword.test(input.password)) {
         errors.password = 'La contraseña es incorrecta';
    }
    
    return errors;
}