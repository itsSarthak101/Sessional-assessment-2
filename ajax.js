// Get Sample Images
function getPhotos() {
    console.log("It is Working");
    $.get('https://jsonplaceholder.typicode.com/photos',function(data){
        for(let i=0;i<100;i++){
            var photo = data[i].url;
            $("#image_container").append(`<img src="${photo}"/>`);
        }
    }).fail(function(xhr,textStatus,errorThrown){
        console.log("Error: " + errorThrown)
    })
}