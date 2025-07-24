import './CookingVariables.scss'
import Grid from "@/components/Grid";
import CookingVariableCard from "@/components/CookingVariableCard";
import Section from "@/layouts/Section";
import TabsNavigation from "@/components/Tabs/components/TabsNavigation";
import Tabs from "@/components/Tabs";
import cookingVariablesGroups from './cookingVariablesGroups'

const CookingVariables = () => {
    const tabsTitle = 'cooking-variables-tabs'
    const tabsNavigationId = 'cooking-variables-navigation'

    return (
        <Section
            title='Мы готовим'
            titleId='cooking-variables-title'
            mainSectionInPage
            description={(
                <>
                  <p>
                    К продуктам нашего ассортимента, вы можете выбрать один из способов  приготовления: <span className='text-red'>пожарить или сварить</span>.
                  </p>
                  <p>
                    Хотите ароматный гриль? Мы подготовим продукт с <span className='text-red'>фирменным маринадом</span> — вам  останется только обжарить! Маринад используется для дальнейшего гриль  приготовления тунца или креветок
                  </p>
                </>
            )}
            className='cooking-variables'
        >
          <TabsNavigation
              id={tabsNavigationId}
              title={tabsTitle}
              items={cookingVariablesGroups}
          />
          <Tabs
              title={tabsTitle}
              navigationTargetElementId={tabsNavigationId}
              items={cookingVariablesGroups.map((cookingVariablesGroup) => ({
                title: cookingVariablesGroup.title,
                isActive: cookingVariablesGroup.isActive,
                children: (
                    <Grid columns={4}>
                      {cookingVariablesGroup.items.map((cookingVariablesItem, index) => (
                          <CookingVariableCard
                              {...cookingVariablesItem}
                              key={index}
                          />
                      ))}
                    </Grid>
                )
              }))}
          />
        </Section>
    )
}

export default CookingVariables