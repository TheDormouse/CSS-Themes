document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const form = document.getElementById('css-controls');
    const applyButton = document.getElementById('apply-changes');
    const resetButton = document.getElementById('reset-defaults');

    // Store default values
    const defaultValues = {};
    for (const input of form.elements) {
        if (input.name) {
            defaultValues[input.name] = input.value;
        }
    }

    applyButton.addEventListener('click', () => {
        for (const input of form.elements) {
            if (input.name) {
                let value = input.value;
                if (input.type === 'number') {
                    value += input.name.includes('spacing') || input.name === 'line-height' ? 'rem' : 'px';
                }
                root.style.setProperty(`--${input.name}`, value);
            }
        }
    });

    resetButton.addEventListener('click', () => {
        for (const [name, value] of Object.entries(defaultValues)) {
            const input = form.elements[name];
            input.value = value;
            root.style.setProperty(`--${name}`, value);
        }
    });
});
