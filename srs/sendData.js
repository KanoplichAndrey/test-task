import { form } from './nameValid'
export function sendData() {
    const XHR = new XMLHttpRequest();
    const FD = new FormData( form );
    
    XHR.addEventListener( "load", function(event) {
    alert('вашы данные успешно отправлены'),     
         form.innerHTML = '<h2>спасибо за заявку!</h2>'
         form.style.color="red";
    
    } );
    
    XHR.addEventListener( "error", function( event ) {
    alert( 'Oops! Something went wrong.' );
    } );
    
    XHR.open( "POST", "https://httpbin.org/post" );
    XHR.send( FD );
    }