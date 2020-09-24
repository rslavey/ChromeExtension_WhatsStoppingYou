function save_options() {
    var type = document.querySelector('input[name="type"]:checked').value
    chrome.storage.sync.set({
        type: type
    }, function () {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        type: "random"
    }, function (items) {
        document.getElementById(items.type).checked = true;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);