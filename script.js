document.addEventListener("keypress", (event) => {
    const openCmdPalette = event.metaKey && event.shiftKey && event.key == 'p';
    if (!openCmdPalette) return;
    const dialog = document.getElementById('command-palette')
    dialog.showModal()
})



