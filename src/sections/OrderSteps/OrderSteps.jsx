import './OrderSteps.scss'
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import stepsitems from "./stepsitems";
import OrderStepsCard from "@/components/OrderStepsCard";


const OrderSteps = (props) => {

  return (
      <Section
          className="order-steps"
          title='Как сделать заказ'
          titleId='order-steps-title'
      >
        <Grid
            columns={4}
        >
          {stepsitems.map((card, index) => (
              <OrderStepsCard
                  {...card}
                  key={index}
                  number={index + 1}
              />
          ))}
        </Grid>
      </Section>
  )
}

export default OrderSteps