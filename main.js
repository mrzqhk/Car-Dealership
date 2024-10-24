let search=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active')
    menu.classList.remove('active')
}


//hide menu and search box on scroll
window.onscroll = () => {
    menu.classList.remove('active')
    search.classList.remove('active')
}


//header
let header = document.querySelector('header')
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});


// Get modal elements
const signupModal = document.getElementById("signup-modal");
const loginModal = document.getElementById("login-modal");

// Get buttons
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");

// Get close buttons
const closeSignup = document.getElementById("close-btn");
const closeLogin = document.getElementById("close-btn");

// Open signup modal
signupBtn.onclick = function() {
    signupModal.style.display = "block";
    document.body.classList.add("signup-modal");
}

// Function to close the signup modal
function closeSignupModal() {
    document.getElementById('signup-modal').style.display = 'none';
}

// Open login modal
loginBtn.onclick = function() {
    loginModal.style.display = "block";
    document.body.classList.add("login-modal");
}

// Function to close the login modal
function closeLoginModal() {
    document.getElementById('login-modal').style.display = 'none';
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    const signupModal = document.getElementById('signup-modal');
    const loginModal = document.getElementById('login-modal');
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    } else if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
}

// Show the login modal when the page loads
window.onload = function() {
    loginModal.style.display = 'block';


// Handle login form submission
document.getElementById('login-modal').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('loginEmail').value; 
    const password = document.getElementById('loginPassword').value; 

    // Simple validation 
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password'); 

    if (email === storedEmail && password === storedPassword) {
        alert('Successfully logged in!');
        closeLoginModal();
    } else {
        alert('Invalid username or password');
    }
});


// Handle signup form submission
document.getElementById('signup-modal').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const signupEmail = document.getElementById('signupEmail').value; // Updated for the signup email
    const signupPassword = document.getElementById('signupPassword').value; // Updated for the signup password

    // Store email and password in local storage for later use
    localStorage.setItem('email', signupEmail);
    localStorage.setItem('password', signupPassword);

    alert('Signup successful! You can now log in.');
    closeSignupModal();
});


    // Simple validation 
    if (email === 'email' && password === 'password') {
        alert('Successfully logged in!');
        closeLoginModal();
    } 
    
    else {
        alert('Invalid username or password');
    }
};
