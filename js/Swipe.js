const swipeZone = document.getElementById('swipeZone');

Headers = ["Test1", "Test2", "Test3", "Test4", "Test5"];
Paragraphs = ["Pargraph1", "Paragraph2", "Paragraph3", "Paragraph4", "Paragraph5"];

index = 0;

let startX, startY, endX, endY;

swipeZone.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
});

swipeZone.addEventListener('touchend', (e) => {
    const touch = e.changedTouches[0];
    endX = touch.clientX;
    endY = touch.clientY;

    handleSwipe();
});

function handleSwipe() {
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX < -30) {
            const h1Element = swipeZone.querySelector('h1');
            const p1Element = swipeZone.querySelector('p');
            const imgElement = swipeZone.querySelector('p');
            if (h1Element && p1Element) {
                h1Element.textContent = Headers[index];
                p1Element.textContent = Paragraphs[index];
            }
            index = index + 1;
            if (index >= Headers.length) {
                index = 0;
            }
        } else if (deltaX < 30) {
            console.log('Swipe Left');
        }
    } else {
        // Vertical swipe
        if (deltaY > 30) {
            console.log('Swipe Down');
        } else if (deltaY < -30) {
            console.log('Swipe Up');
        }
    }
}