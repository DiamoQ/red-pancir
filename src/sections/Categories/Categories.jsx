import './Categories.scss'
import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";
import Grid from "@/components/Grid";
import Button from "@/components/Button";
import categoryItems from "./categoryitems";

const Categories = (props) => {
  const {
    title = 'Каталог',
    mainSectionInPage,
    categoriePageLinkIsVisible = false,
  } = props

  return (
      <Section
          title={title}
          titleId='categories-title'
          mainSectionInPage
          className='categories'
      >
        <Grid
            columns={4}
        >
          {
            categoryItems.map(({title, image, href}, index) => (
                <CategoryCard
                    title={title}
                    image={image}
                    href={href}
                    key={index}
                />
            ))
          }
        </Grid>
        { categoriePageLinkIsVisible &&
            (
                <Button
                    href='/categoiries'
                    label='Перейти в каталог'
                />
            )
        }
      </Section>
  )
}

export default Categories