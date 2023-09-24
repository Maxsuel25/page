import styles from "./style.module.css"
export const CategoryCard = ({title, image}) => {
    
    return (
        <div className={styles.categoryCard}>
            <img src={image} alt={`Categoria ${title}`} />
            <h3 className="title3 center">{title}</h3>
        </div>
    )
}

//PROPS -> É SEMELHANTE A PARÂMETROS, MAS NÃO É UM PARÂMETRO

//function categoryCard(title, image) {
//    return { title, image };
//}

