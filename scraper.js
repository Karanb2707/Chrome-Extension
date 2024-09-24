setTimeout(() => {
    const name = document.querySelector('.pv-top-card--list li:first-child').innerText;
    const location = document.querySelector('.pv-top-card--list-bullet li').innerText;
    const about = document.querySelector('.pv-about-section').innerText;
    const bio = document.querySelector('.text-body-medium').innerText;
    const followerCount = document.querySelector('.pv-recent-activity-section__follower-count').innerText;
    const connectionCount = document.querySelector('.pv-top-card--list-bullet li:last-child').innerText;

    // Post the data to the Node.js API
    fetch('http://localhost:3000/api/profiles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            location,
            about,
            bio,
            followerCount,
            connectionCount
        })
    }).then(response => response.json())
    .then(data => console.log('Profile data posted:', data))
    .catch(error => console.error('Error:', error));

}, 5000); // Add a timeout to ensure the page loads
