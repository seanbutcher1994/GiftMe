const login = document.getElementById('login');
const signup = document.getElementById('signup');
const feed = document.getElementById('feed');
const friendslist = document.getElementById('friendslist');
const mywishlist = document.getElementById('mywishlist');
const thierwishlist = document.getElementById('thierwishlist');
const newitem = document.getElementById('newitem');

const loginbtn = document.getElementById('btnlogin');
const signupbtn = document.getElementById('btnsignup');
const logoutbtn = document.getElementById('btnlogout');
const profilebtn = document.getElementById('profilebtn');
const newitembtn = document.getElementById('btn-newitem');
const savenewitembtn = document.getElementById('savenewitembtn');
const friend = document.getElementById('friend');
const home = document.getElementById('home');



function loggedin() {

    feed.classList.remove('x');
    friendslist.classList.remove('x');

    login.classList.add('x');
}

loginbtn.addEventListener('click', function (event) {
    loggedin();
});




function showmyprofile() {

    feed.classList.add('x');
    mywishlist.classList.remove('x');
}

profilebtn.addEventListener('click', function (event) {
    showmyprofile();
});



function shownewitem() {

    friendslist.classList.add('x');
    newitem.classList.remove('x');
}

newitembtn.addEventListener('click', function (event) {
    shownewitem();
});


function savenewitem() {

    friendslist.classList.remove('x');
    newitem.classList.add('x');

}

savenewitembtn.addEventListener('click', function (event) {
    savenewitem();
});

//shows friends wish list
function showtheirwishlist() {

    theirwishlist.classList.remove('x');
    mywishlist.classList.add('x');
    feed.classList.add('x');

}

friend.addEventListener('click', function (event) {
    showtheirwishlist();
});


//return home btn
function returnhome() {

    theirwishlist.classList.add('x');
    mywishlist.classList.add('x');
    newitem.classList.add('x');


    friendslist.classList.remove('x');
    feed.classList.remove('x');

}

home.addEventListener('click', function (event) {
    returnhome();
});