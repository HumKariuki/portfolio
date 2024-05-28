// JavaScript function to open the image in full screen
function openImageInFullScreen(imageSrc) {
    // Create a new image element
    var img = new Image();
    img.src = imageSrc;
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.margin = 'auto';
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.bottom = '0';
    img.style.right = '0';

    // Create a new div element to act as the full screen viewer
    var viewer = document.createElement('div');
    viewer.style.position = 'fixed';
    viewer.style.top = '0';
    viewer.style.left = '0';
    viewer.style.width = '100%';
    viewer.style.height = '100%';
    viewer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    viewer.style.display = 'flex';
    viewer.style.justifyContent = 'center';
    viewer.style.alignItems = 'center';
    viewer.style.zIndex = '1000';
    viewer.appendChild(img);

    // Append the viewer to the body
    document.body.appendChild(viewer);

    // Add an event listener to close the viewer when the image is clicked
    viewer.addEventListener('click', function() {
        document.body.removeChild(viewer);
    });
}

// Hide description when clicking outside the certificate
document.addEventListener("click", function(event) {
    var certificates = document.querySelectorAll(".certificate");
    certificates.forEach(function(cert) {
        var description = cert.querySelector(".certificate-description");
        if (event.target !== cert && event.target !== description && !cert.contains(event.target)) {
            description.style.display = "none";
        }
    });
});

// Make the marquee disappear after running once
document.addEventListener('DOMContentLoaded', function() {
    var marquee = document.getElementById('marquee');
    marquee.addEventListener('animationend', function() {
        marquee.style.display = 'none';
    });
});
