import './PersonalDateForm.scss'
import Field from "@/components/Field";
import Button from "@/components/Button";

const PersonalDateForm = () => {

    return (
        <form id="profile-form" className="form profile-form">
            <div className="profile-form__body">
                <h2>Контактные данные</h2>
                <fieldset id="profile-fields" className="profile-form__fields" disabled>
                    <Field
                        className="form__cell"
                        label='Фамилия'
                        placeholder='Фамилия'
                        id='profileSurname'
                        isRequired
                    />
                    <Field
                        className="form__cell"
                        label='Имя'
                        placeholder='Имя'
                        id='profileName'
                        isRequired
                    />
                    <Field
                        className="form__cell"
                        label='Отчество'
                        placeholder='Отчество'
                        id='profileFathername'
                        isRequired
                    />
                    <Field
                        className="form__cell"
                        label='Дата рождения'
                        placeholder='Дата рождения'
                        id='birthdayDate'
                        type='date'
                        inputMode='date'
                        isRequired
                    />
                    <Field
                        className="form__cell"
                        label='Телефон'
                        id='profilePhone'
                        placeholder='+7 ( )'
                        inputMode='tel'
                        mask='+7 (000) 000-00-00'
                        isRequired
                    />
                    <Field
                        className="form__cell"
                        label='E-mail'
                        placeholder='E-mail'
                        id='authorizationEmail'
                        type='email'
                        isRequired
                    />
                </fieldset>
            </div>

            <div className="form-actions">
                <Button
                    className="form__submit-button hidden"
                    id="save-btn"
                    label="Сохранить"
                    type='submit'
                />
                <Button
                    className="form__submit-button"
                    id="edit-btn"
                    label="Изменить"
                />
            </div>
        </form>
    )
}

export default PersonalDateForm