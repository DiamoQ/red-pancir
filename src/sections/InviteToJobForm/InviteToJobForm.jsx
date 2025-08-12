import './InviteToJobForm.scss'
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import FileField from "@/components/FileField";

const InviteToJobForm = (props) => {

    return (
        <section
            className='invite-to-job-form'
            aria-labelledby='invite-to-job-form-title'
        >
            <div className='invite-to-job-form__inner container'>
                <div className='invite-to-job-form__block'>
                    <div className='invite-to-job-form__info'>
                        <h2 className='section__title'>Стань частью <span className='text-red'>команды</span></h2>
                        <div className='invite-to-job-form__description'>
                            <p>Ищешь работу с душой? Присоединяйся к нам!</p>
                            <p>Мы ценим честность, вкус к делу и хорошее настроение. В «Красном панцире» тебя ждёт сильная команда, открытая кухня и настоящая еда.</p>
                            <p>Пришли нам своё резюме и мы обязательно свяжемся с тобой!</p>
                        </div>
                    </div>
                    <form className="form" action=''>
                        <Field
                            className="form__cell"
                            label='Фамилия Имя'
                            placeholder='Фамилия Имя'
                            isRequired
                        />
                        <Field
                            className="form__cell"
                            label='Телефон'
                            id='InviteToJobPhone'
                            placeholder='Телефон'
                            inputMode='tel'
                            mask='+7 (000) 000-00-00'
                            isRequired
                        />
                        <Field
                            className="form__cell"
                            label='E-mail'
                            placeholder='E-mail'
                            inputMode='email'
                            isRequired
                        />
                        <FileField
                            className="form__cell"
                            label='Прикрепить резюме'
                            isRequired
                        />
                        <div className="form__cell form__cell--wide form__cell--actions">
                            <Checkbox
                                className="form__agreement"
                                id="inviteToJobCheckboxId"
                                isRequired
                            />
                            <Button
                                className="form__submit-button"
                                label='Откликнуться'
                                type='submit'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default InviteToJobForm