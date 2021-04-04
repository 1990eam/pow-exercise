const launchModal = () => {

    const button = document.getElementById("modalbutton");

    button.addEventListener('click', event => {

    $(document).ready(function(){
        $("#tweetModal").modal('show');
    })});

};

export { launchModal };
