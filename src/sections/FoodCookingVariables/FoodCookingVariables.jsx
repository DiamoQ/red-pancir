import './FoodCookingVariables.scss'
import Grid from "@/components/Grid";
import cookingvariablesitems from "./cookingvariablesitems";
import FoodCookingVariablesCard from "@/components/FoodCookingVariablesCard";
import Section from "@/layouts/Section";

const FoodCookingVariables = (props) => {
  return (
      <Section
          title='Выбирайте способы обработки продукта'
          titleId='food-cooking-variables-title'
      >
        <Grid
            columns={3}
        >
          {cookingvariablesitems.map((card, index) => (
              <FoodCookingVariablesCard
                  {...card}
                  key={index}
              />
          ))}
        </Grid>
      </Section>
  )
}

export default FoodCookingVariables