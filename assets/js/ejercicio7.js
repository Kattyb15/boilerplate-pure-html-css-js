console.log("Entro ejercicio7.js");

//Swal.fire(
  //  'Good job!',
    //'You clicked the button!',
    //'success'
  //)

//  Swal.fire({
  //  icon: 'error',
    //title: 'Oops...',
   // text: 'Something went wrong!',
   // footer: 'creado por Kathy'
  //})


  swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    }).then((result) => {
    if (result.isConfirmed) {
      swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
})