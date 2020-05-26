
  console.log("hello from client side")
  
  const form = document.querySelector( "form" );
  const test = document.querySelector("input")

  // ...to take over the submit event
  form.addEventListener( 'submit', function ( event ) {
    event.preventDefault();
    console.log(test.value)
  } );