import  {categories} from '../../constants';
import { CategoryItem } from './CategoryItem/CategoryItem';
export const Categories = () => {
    console.log(categories)

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">
                        Categories
                    </h6>
                    <h1 className="mb-5">
                        Explore Our{" "}
                        <span className="text-primary text-uppercase">Categories</span>
                    </h1>
                </div>
                <div className="row g-4">
                    {categories.map(x => <CategoryItem key={x.id} {...x }/>)}
                </div>
            </div>
        </div>
    );
};