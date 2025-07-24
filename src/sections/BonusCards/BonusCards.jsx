import './BonusCards.scss'
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import bonusItems from "@/sections/BonusCards/bonusItems";
import BonusCard from "@/components/BonusCard";

const BonusCards = (props) => {
  const {
    title = 'Акции',
    mainSectionInPage,
  } = props

  return (
      <Section
          title={title}
          titleId='bonus-title'
          mainSectionInPage
          className='bonus'
      >
        <Grid
            columns={4}
            className='bonus__list'
        >
          {
            bonusItems.map(({title, imageDesctop, imageMobile, href}, index) => (
                <BonusCard
                    title={title}
                    imageDesctop={imageDesctop}
                    imageMobile={imageMobile}
                    href={href}
                    key={index}
                />
            ))
          }
        </Grid>
      </Section>
  )
}

export default BonusCards

