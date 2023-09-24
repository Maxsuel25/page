import { ProductCard } from "./ProductCard";
import { products } from "../../../data/products";

// import Product1 from "../../../assets/product1.jpg";
// import Product2 from "../../../assets/product2.jpg";
// import Product3 from "../../../assets/product3.jpg";
// import Product4 from "../../../assets/product4.jpg";

import styles from "./style.module.css"
export const ProductsSection = () => {
    
  return (
    <div className="container">
      <section className={styles.productsSection}>
        <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
        <ul className={styles.productList}>
            {
                products.map((product) => {
                    const {id, name, price, img} = product;
                    
                    return (
                    <li key={id}>
                        <ProductCard title={name} image={img} price={price} />
                    </li>
                    )
                } )
            }
            
          <>
            {/* <li>
            <ProductCard
            title="Blazer Branco Elegante"
            price={490}
            image={Product1}
            />
            </li>
            <li>
            <ProductCard
            title="Sapatos Amarelos"
            price={490}
            image={Product2}
            />
            </li>
            <li>
            <ProductCard title="Blazer Laranja" price={320} image={Product3} />
            </li>
            <li>
            <ProductCard title="Calça Preta" price={140} image={Product4} />
        </li> */}
          </>
        </ul>
      </section>
    </div>
  );
};
