import './OrderHistoryCard.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const OrderHistoryCard = (props) => {
    const {
        item,
    } = props;

    const {
        orderNumber,
        orderDate,
        orderPrice,
        orderStatus,
        orderBody,
    } = item;

    const orderStatusMessage = (orderStatus) => {
        let message;
        switch (orderStatus) {
            case 'ended':
                message = 'Завершен';
                break;
            case 'doing':
                message = 'В процессе';
                break;
            case 'cancelled':
                message = 'Отклонен';
                break;
            default:
                message = 'Уточняется';
                break;
        }

        return message
    }

    return (
        <div
            className='order-history__card accordeon'
        >
            <details
                className="order-history__details accordeon__details"
                name={orderNumber}
                open={false}
            >
                <summary className="order-history__summary accordeon__summary">
                    <h2 className="visually-hidden">Детали заказа {orderNumber}</h2>
                    <span className="order-history__summary-info">
                        <span className="order-history__summary-title">Номер заказа:</span>
                        <span className="order-history__summary-value">{orderNumber}</span>
                    </span>
                    <span className="order-history__summary-info">
                        <span className="order-history__summary-title">Дата:</span>
                        <span className="order-history__summary-value">{orderDate}</span>
                    </span>
                    <span className="order-history__summary-info">
                        <span className="order-history__summary-title">Сумма заказа:</span>
                        <span className="order-history__summary-value">{orderPrice}₽</span>
                    </span>
                    <span className="order-history__summary-info">
                        <span className="order-history__summary-title">Статус:</span>
                        <span className={classNames('order-history__summary-value order-history__summary-value--status', {
                            [`order-history__summary-value--status-${orderStatus}`]: orderStatus
                        })}>
                            {orderStatusMessage(orderStatus)}
                        </span>
                    </span>
                    <Icon
                        className="order-history__summary-arrow accordeon__summary-arrow button"
                        name="arrow-down"
                        hasFill={false}
                    />
                </summary>
            </details>
            <div
                className="order-history__content accordeon__content"
            >
                <div className="order-history__content-inner accordeon__content-inner" role="list"  aria-label={`Список товаров заказа ${orderNumber}`}>
                    <div className="order-history__content-header">
                        <div>Наименование</div>
                        <div>Кол-во</div>
                        <div>Сумма</div>
                    </div>
                    {orderBody.map(({itemName, itemValue, itemPrice}, index) => {
                        return (
                            <div className="order-history__content-row" role="listitem" key={index}>
                                <div data-label="Наименование">{itemName}</div>
                                <div data-label="Кол-во">{itemValue}</div>
                                <div data-label="Сумма">{itemPrice}₽</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OrderHistoryCard