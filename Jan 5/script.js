function onSubmit(e) {
    Name = document.getElementById('name');
    Comment = document.getElementById('comment');
    Gender = document.querySelector('input[name="gender"]:checked') ;
    if (Name && Name.value) {
        if (Comment && Comment.value) {
            if (Gender && Gender.value) {
                alert("DONE")
                return true;
            }
            else{
                alert("All feilds are compulsory");
            }
        }
        else {
            alert("All feilds are compulsory");
            Comment.focus();
        }
    }
    else {
        alert("All feilds are compulsory");
        Name.focus();
    }

    return false;


}