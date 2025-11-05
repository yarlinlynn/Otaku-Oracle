

export function PopupContainer() {
    // Create the pop-up container element
    const popupContainer = document.createElement('div');
    popupContainer.id = 'myPopup';

    popupContainer.innerHTML = `
        <div class="backdrop"></div>
        <div class="popup-content">
            <button class="close-popup">
                <i class="ri-close-line"></i>
            </button>
            <div class="popup-text">
                <h4> Welcome to Otaku Oracle! </h4>

                <p>
                    Your ultimate guide to discovering your next favorite manga, manhwa, or anime! 

                    You can search directly for something you already have in mind — or take our fun, interactive quiz to get personalized recommendations based on your tastes and mood. 

                    Whether you’re craving a heart-fluttering romance, an action-packed adventure, or a slice-of-life story to unwind with, Otaku Oracle is here to guide you through every panel and episode.

                    Choose your path and let the magic begin! 
                </p>
            </div>
        </div>
    `;

    const closeButton = popupContainer.querySelector(".close-popup");
    closeButton.onclick = function() {
        popupContainer.remove(); // Remove the pop-up when clicked
    };

    // Append the pop-up container to the document body
    document.body.appendChild(popupContainer);
}