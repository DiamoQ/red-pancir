import './PersonalDate.scss'
import Icon from "@/components/Icon";

const PersonalDate = (props) => {
    const {
        title,
        children,
    } = props

    const basePath = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PUBLIC_PATH
        : ''

    return (
        <section
            className='personal-date'
            aria-labelledby='personal-date-title'
        >
            <div className='personal-date__inner container'>
                <nav className="personal-date__navigation">
                    <ul className="personal-date__navigation-list">
                        <li className="personal-date__navigation-item active">
                            <a
                                href={`${basePath}/personal-date`}
                                className="personal-date__navigation-link"
                            >
                                <Icon
                                    className="personal-date__navigation-icon"
                                    name="login"
                                    hasFill={true}
                                />
                                Личные данные
                            </a>
                        </li>
                        <li className="personal-date__navigation-item">
                            <a
                                href={`${basePath}/history`}
                                className="personal-date__navigation-link"
                            >
                                <Icon
                                    className="personal-date__navigation-icon"
                                    name="busket"
                                    hasFill={true}
                                />
                                История заказов
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="personal-date__body">
                    <h1 className="page-title" id="personal-date-title">{title}</h1>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default PersonalDate