
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.quotes');
    let currentIndex = 0;

    // Clone the first slide and append it to the end for smooth looping
    const firstSlideClone = slides[0].cloneNode(true);
    slider.appendChild(firstSlideClone);

    // Function to move to the next slide
    function moveToNextSlide() {
        currentIndex++;
        slider.scrollTo({
            left: slider.offsetWidth * currentIndex,
            behavior: 'smooth'
        });

        // When reaching the clone, instantly jump back to the original first slide
        if (currentIndex === slides.length) {
            setTimeout(() => {
                slider.scrollTo({
                    left: 0,
                    behavior: 'auto' // Instant jump, no smooth scroll
                });
                currentIndex = 0;
            }); // Delay to allow the smooth scroll to finish before the jump
        }
    }

    // Automatically slide every 3 seconds
    setInterval(moveToNextSlide, 15000);
