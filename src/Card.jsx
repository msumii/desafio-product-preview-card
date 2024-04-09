import styles from './Card.module.css'

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.imagemProduto}>
                <img src="/images/image-product-desktop.jpg" alt="Imagem do Card"/>
            </div>
            <div className={styles.informacoes}>
                <h2 className={styles.subtitulo}>PERFUME</h2>
                <h1 className={styles.titulo}>Gabrielle Essence Eau De Parfum</h1>
                <p className={styles.descricao}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div className={styles.precos}>
                    <p className={styles.precoDesconto}>$149.99</p>
                    <p className={styles.precoOriginal}><del>$169.99</del></p>
                </div>
                <div className={styles.adicionarCarrinho}>
                    <a href="/">
                        <img src="/images/icon-cart.svg" alt="Icone de Compra" />
                        <p>Add to Cart</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;