import AlertComponent from "../ui/AlertComponent"

export const NoAccountsToVerify = () => {
    return (
        <AlertComponent 
        title="!No hay cuentas por verificar!"
        text = {<p>Regístrese para empezar.</p>}
        image = "https://firebasestorage.googleapis.com/v0/b/wortika-file-uploads.appspot.com/o/components%2Fregister.svg?alt=media&token=c9abecb4-c808-45ad-80a1-7b4471552e02"
        button1Text = "Ir al inicio"
        linkBtn1 = "/" 
        button2Text = "Registrarse"
        linkBtn2 = "/register" 
        />
    )
}

export const ConfirmEmail = () => {
    return (
        <AlertComponent 
        title="!Todo listo!"
        text = {<p>Hemos enviado un mensaje de <br /> confirmación a tu correo.</p>}
        image = "https://firebasestorage.googleapis.com/v0/b/wortika-file-uploads.appspot.com/o/components%2Fconfirm-email.svg?alt=media&token=8025206d-4ba1-43a8-be88-50f24d62fe54 "
        button1Text = "Ir al inicio"
        linkBtn1 = "/" 
        button2Text = "Ver el correo"
        linkBtn2 = "https://mail.google.com/mail/u/0/#inbox" 
        target = "_blank"
        />
    )
}

export const ConfirmEmailSuccessfully = () => {
    return (
        <AlertComponent 
        title="!Confirmación Exitosa!"
        text = {<p>Tu confirmación de correo electronico fue <br/> Exitosa</p>}
        image = "https://firebasestorage.googleapis.com/v0/b/wortika-file-uploads.appspot.com/o/components%2Fsuccess.svg?alt=media&token=153aef9f-9e4c-4564-ae56-78d6f796d1d8"
        button1Text = "Ir al inicio"
        linkBtn1 = "/" 
        button2Text = "Ir al Perfil"
        linkBtn2 = "/profile" 
        />
    )
}

export const ConfirmationExpired = () =>{ 
    return (
        <AlertComponent 
        title="!Email Expirado!"
        text = {<p>La fecha de confirmacíón a expirado registrese de nuevo.</p>}
        image = "https://firebasestorage.googleapis.com/v0/b/wortika-file-uploads.appspot.com/o/components%2Femail-expired.svg?alt=media&token=79b8c171-5bbe-49be-b990-b56cfe6c74d4"
        button1Text = "Ir al inicio"
        linkBtn1 = "/" 
        button2Text = "registrarse"
        linkBtn2 = "/register" 
        />
    )
}