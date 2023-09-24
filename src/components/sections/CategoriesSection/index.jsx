import { CategoryCard } from "./CategoryCard";
import { categories } from "../../../data/categories";

import styles from "./style.module.css"
export const CategoriesSection = () => {
  //categoryCard("Sapatos", "http://...")
  // console.log(categories)
  return (
    <div className="container">
      <section className={styles.categoriesSection} >
        <h2 className="title2">CATEGORIAS</h2>
        <ul className={styles.categoriesList}>
            {categories.map((category) => {
                return (
                    <li key={category.id}>
                        <CategoryCard title={category.name} image={category.img}/>
                    </li>
                )
            })}
        </ul>
      </section>
    </div>
  );
};
