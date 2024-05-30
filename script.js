// document.addEventListener('DOMContentLoaded', () => {
//     fetchFacebookData();
//     fetchInstagramData();
//     fetchTwitterData();
//     fetchGithubData();
// });

// function fetchFacebookData() {
//     // Add your Facebook API fetching code here
//     // Display data in #facebook-data
// }

// function fetchInstagramData() {
//     // Add your Instagram API fetching code here
//     // Display data in #instagram-data
// }

// function fetchTwitterData() {
//     // Add your Twitter API fetching code here
//     // Display data in #twitter-data
// }

// function fetchGithubData() {
//     fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME')
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('github-data').innerHTML = `
//                 <h3>GitHub</h3>
//                 <p>Username: ${data.login}</p>
//                 <p>Public Repos: ${data.public_repos}</p>
//                 <p>Followers: ${data.followers}</p>
//             `;
//         })
//         .catch(error => console.error('Error fetching GitHub data:', error));
// }
document.addEventListener('DOMContentLoaded', () => {
    fetchFacebookData();
    fetchInstagramData();
    fetchTwitterData();
    fetchGithubData();
});


const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', toggleTheme);


function fetchFacebookData() {
    fetch('http://localhost:3000/facebook')
        .then(response => response.json())
        .then(data => {
            document.getElementById('facebook-data').innerHTML = `
                <h3>Facebook</h3>
                <p>ID: ${data.id}</p>
                <p>Name: ${data.name}</p>
                <p>Likes: ${data.likes}</p>
            `;
        })
        .catch(error => console.error('Error fetching Facebook data:', error));
}

function fetchInstagramData() {
    fetch('http://localhost:3000/instagram')
        .then(response => response.json())
        .then(data => {
            document.getElementById('instagram-data').innerHTML = `
                <h3>Instagram</h3>
                <p>ID: ${data.id}</p>
                <p>Username: ${data.username}</p>
                <p>Media Count: ${data.media_count}</p>
            `;
        })
        .catch(error => console.error('Error fetching Instagram data:', error));
}

function fetchTwitterData() {
    fetch('http://localhost:3000/twitter')
        .then(response => response.json())
        .then(data => {
            document.getElementById('twitter-data').innerHTML = `
                <h3>Twitter</h3>
                <p>Username: ${data.username}</p>
                <p>Tweets: ${data.tweets}</p>
                <p>Followers: ${data.followers}</p>
            `;
        })
        .catch(error => console.error('Error fetching Twitter data:', error));
}

function fetchGithubData() {
    fetch('http://localhost:3000/github')
        .then(response => response.json())
        .then(data => {
            document.getElementById('github-data').innerHTML = `
                <h3>GitHub</h3>
                <p>Username: ${data.username}</p>
                <p>Public Repos: ${data.public_repos}</p>
                <p>Followers: ${data.followers}</p>
            `;
        })
        .catch(error => console.error('Error fetching GitHub data:', error));
}


function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
}