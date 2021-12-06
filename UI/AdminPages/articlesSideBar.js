let contentSideBar = ">";
document.querySelector('.sidebar-with-links-button').addEventListener('click',() => {
    document.querySelector('.sidebar-with-links').classList.toggle('showSideBar');
    if(contentSideBar==">") {
        document.querySelector('.sidebar-with-links-button').innerHTML = "<";
        contentSideBar = "<";
    }else if(contentSideBar=="<") {
        document.querySelector('.sidebar-with-links-button').innerHTML = ">";
        contentSideBar = ">";
    }
});