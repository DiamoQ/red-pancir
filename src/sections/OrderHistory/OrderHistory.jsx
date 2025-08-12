import './OrderHistory.scss'
import classNames from 'classnames'
import orderHistoryItems from "./orderHistoryItems";
import OrderHistoryCard from "@/components/OrderHistoryCard";


const OrderHistory = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'order-history')}
        >
            {orderHistoryItems.map((item, index) => {
                return (
                    <OrderHistoryCard key={index} item={item} />
                )
            })}
        </div>
    )
}

export default OrderHistory