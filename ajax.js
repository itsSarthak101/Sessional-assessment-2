// Get Sample Images

window.location.reload = () => {}
function getPhotos() {
    console.log("It is Working");
    $.get('https://jsonplaceholder.typicode.com/photos',function(data){
        for(let i=0;i<100;i++){
            var photo = data[i].url;
            console.log(data[i])
            console.log("sarthak");
            $("#image_container").append(`<img src="${photo}"/>`);
        }
    }).fail(function(xhr,textStatus,errorThrown){
        console.log("Error: " + errorThrown)
    })
};

$("#search_btn").click(getPhotos);

// Blog Append
$("#post_blogt").click(function() {
    var user = $("#username").val();
    var inpBlog = $("#inputblog").val();
    $("#blog-col").append(`<div id="bodyBlog"></div><div id="blogUser">${user}</div><div id="blogContent">${inpBlog}</div></div>`)
});



