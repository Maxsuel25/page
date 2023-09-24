import styles from "./style.module.css"

export const ProductCard = ({title, image, price}) => {
    // const priceFormated = price.toFixed(2).replace(".", ",");
    // const priceFormated = price.toLocaleString("pt", {style:"currency", currency:"EUR"});
    const priceFormated = price.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
    
    return (
        <div className={styles.productCard}>
            <img src={image} alt={`Produto ${title}`} />
            <h3 className="title3">{title}</h3>
            <p className="price">{priceFormated}</p>  
            {/* <p className="price">R${priceFormated}</p>   */}
            {/*<p>R${price.toFixed(2).replace(".", ",")}</p>*/}  
            
        </div>
    )
}