// JavaScript for filtering video categories and playing only the clicked video
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoItems = document.querySelectorAll('.video-item');
    const iframes = document.querySelectorAll('.video-item iframe'); // Get all iframe elements

    // Filter video categories
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Show/Hide videos based on category
            videoItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Stop all videos when switching categories
            iframes.forEach(iframe => {
                stopVideo(iframe); // Custom function to stop the iframe video
            });
        });
    });

    // Play only the clicked video and stop all others
    iframes.forEach(iframe => {
        iframe.addEventListener('click', () => {
            // Stop all other videos except the clicked one
            iframes.forEach(otherIframe => {
                if (otherIframe !== iframe) {
                    stopVideo(otherIframe); // Stop other iframe videos
                }
            });
        });
    });

    // Function to stop iframe videos
    function stopVideo(iframe) {
        const src = iframe.src;
        iframe.src = ''; // Temporarily set src to empty
        iframe.src = src; // Reset the src, effectively stopping the video
    }
});
// JavaScript for ensuring only the clicked video plays while others stop
document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('.video-item iframe'); // Get all iframe elements

    // Play only the clicked video and stop all others
    iframes.forEach(iframe => {
        iframe.addEventListener('click', () => {
            // Stop all other videos except the clicked one
            iframes.forEach(otherIframe => {
                if (otherIframe !== iframe) {
                    stopVideo(otherIframe); // Stop other iframe videos
                }
            });
        });
    });

    // Function to stop iframe videos
    function stopVideo(iframe) {
        const src = iframe.src;
        iframe.src = ''; // Temporarily set src to empty
        iframe.src = src; // Reset the src, effectively stopping the video
    }
});
