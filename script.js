//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', function() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedOptionIndex = colorSelect.selectedIndex;
    
    if (selectedOptionIndex >= 0) {
        colorSelect.remove(selectedOptionIndex);
    }
});
