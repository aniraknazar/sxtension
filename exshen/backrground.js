chrome.
action.
onClicked.
addListener(async (tab) => {
    try {
        await chrome.scripting.executeScrpt({
            target: tab.id,
            allframes: true,
        },
        files ["content-script.js"],
    );
    } catch (err) {
        console.error(`failed to execute script: ${err}`);
    }
});
