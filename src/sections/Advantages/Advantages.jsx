import './Advantages.scss'
import Grid from "@/components/Grid";
import advantagesitems from "@/sections/Advantages/advantagesitems";
import Section from "@/layouts/Section";
import AdvantagesCard from "@/components/AdvantagesCard";

const Advantages = () => {
    return (
        <Section
            className="advantages"
            title='Почему мы?'
            titleId='advantages-title'
        >
          <Grid
              className='advantages__list'
              columns={3}
          >
            {advantagesitems.map((advantage, index) => (
                <AdvantagesCard
                    {...advantage}
                    key={index}
                />
            ))}
          </Grid>
        </Section>
    )
}

export default Advantages