import './Category.scss'
import Grid from "@/components/Grid";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import ProductControls from "@/components/ProductControls";

import moreproductyitems from "@/sections/Category/moreproducty";

const Category = (props) => {
    const {
      title = 'Морепродукты',
    } = props

    return (
        <section
            className='section product-section'
            aria-labelledby='category-title'
        >
            <div className='container page-title-container'>
                <h1 className='page-title' id='category-title'>
                    {title}
                </h1>
            </div>
            <ProductControls className='container'/>
            <Grid
                className='container products-container'
                columns={4}
            >
                {
                    moreproductyitems.map((
                        product,
                        index
                    ) => (
                        <ProductCard
                            key={index}
                            {...product}
                        />
                    ))
                }
            </Grid>
            <div className='container'>
                <Button
                    className='product-more-button'
                    label='Eщe'
                />
            </div>
        </section>
    )
}

export default Category