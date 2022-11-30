    // export const form = document.getElementById( "info" )
    import { form, nameValid } from './nameValid'
    import { sendData } from './sendData'

    export const submit = form.addEventListener( "submit", function ( event ) {
    event.preventDefault();
        let b = true;
        b = nameValid(b) && b;
    
        if(b) {
            sendData();
        }
    
    } );