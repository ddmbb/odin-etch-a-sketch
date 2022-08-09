
// create grid

function createLayout() {
    var wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    var settings = document.createElement('div');
    settings.classList.add('settings');
    wrapper.appendChild(settings);

    var container = document.createElement('div');
    container.classList.add('container');
    wrapper.appendChild(container);

    for (let i = 0; i < 16; ++i) {
        var div = document.createElement('div');
        div.setAttribute('id', i);
        div.classList.add('grid');
        container.appendChild(div);
    }
}

createLayout();