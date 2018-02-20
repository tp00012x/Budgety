const button = document.createElement('button');
button.innerText = 'Click me';

button.onclick = () => {
    import('test2').then(module => {
        module.default();
    });
};

document.body.appendChild(button);