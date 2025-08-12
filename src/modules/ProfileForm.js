class ProfileForm {
    selectors = {
        form: '#profile-form',
        fields: '#profile-fields',
        saveBtn: '#save-btn',
        editBtn: '#edit-btn'
    }

    stateClasses = {
        hidden: 'hidden'
    }

    constructor() {
        this.form = document.querySelector(this.selectors.form)
        if (!this.form) return

        this.form = document.querySelector(this.selectors.form)
        this.fields = document.querySelector(this.selectors.fields)
        this.saveBtn = document.querySelector(this.selectors.saveBtn)
        this.editBtn = document.querySelector(this.selectors.editBtn)
        this.dateInputs = this.form.querySelectorAll('input[type="date"]');

        this.bindEvents()
        this.initDatePlaceholders();
    }

    enableEdit = () => {
        this.fields.disabled = false
        this.editBtn.classList.add(this.stateClasses.hidden)
        this.saveBtn.classList.remove(this.stateClasses.hidden)
    }

    saveForm = (e) => {
        e.preventDefault()
        // TODO: отправить данные через fetch / AJAX
        this.fields.disabled = true
        this.saveBtn.classList.add(this.stateClasses.hidden)
        this.editBtn.classList.remove(this.stateClasses.hidden)
    }

    bindEvents() {
        this.editBtn.addEventListener('click', this.enableEdit)
        this.form.addEventListener('submit', this.saveForm)
    }

    initDatePlaceholders() {
        this.dateInputs = this.form.querySelectorAll('input[type="date"]');
        this.dateInputs.forEach(input => {
            this.togglePlaceholder(input);

            // Привязать к изменению значения
            input.addEventListener('input', () => this.togglePlaceholder(input));
            input.addEventListener('change', () => this.togglePlaceholder(input)); // важно для date
        });
    }

    togglePlaceholder(input) {
        const wrapper = input.closest('.field__body');
        if (!wrapper) return;

        const placeholder = wrapper.querySelector('.field__placeholder');
        if (!placeholder) return;

        const hasValue = input.value.trim() !== '';
        placeholder.style.display = hasValue ? 'none' : 'block';

        if (hasValue) {
            input.classList.add('field__control--has-value');
        } else {
            input.classList.remove('field__control--has-value');
        }
    }
}

export default ProfileForm
