import './SommairePanier.scss';

export default function SommairePanier(props) {
    // console.log("État du panier dans SommairePanier", props,etatPanier);
    const [panier, setPanier] = props.etatPanier;
    const infoPanier = retournerInfoPanier(panier);
    return (
        <div className={'SommairePanier' + (props.cacher?' cacher':'')}>
            <span className="nbArticles">Articles différents : {infoPanier.nbArticles}</span>
            <span className="qteArticles">Articles total : {infoPanier.qteArticles}</span>
            <span className="sousTotal">Sous-total : {infoPanier.st}</span>
            <span className="tps">TPS : {infoPanier.tps}</span>
            <span className="tvq">TVQ : {infoPanier.tvq}</span>
            <span className="total">Total : {infoPanier.total}</span>
    </div>
    );
}

function retournerInfoPanier(pan) {
    let info = {}; //{nbArticles :2, qteArticles: 18, sousTotal: 1234.56,}

    // Sortir les articles et les mettre dans un tableau
    let articles = Object.values(pan);

    // Nombre d'articles différents
    info.nbArticles = articles.length;

    // Quantité d'articles totale
    // Première façon :
    // let qteTotale = 0;
    // for(let i=0; i<articles.length; i++) {
    //     qteTotale += articles[i].qte;
    // }
    // info.qteArticles = qteTotale;

    // Meilleur façon
    info.qteArticles = articles.reduce(function(valInit, valCourante) {
        return valCourante.qte + valInit;
    }, 0);

    // Sous-total
    let sousTotal = articles.reduce((accumulateur, articleCourant) => articleCourant.prix*articleCourant.qte + accumulateur, 0);
    info.st = sousTotal.toFixed(2);
    // console.log(info.qteArticles);
    // console.log(sousTotal); 

    // TPS, TVQ, Total
    let tps = sousTotal * 0.05;
    info.tps = tps.toFixed(2);

    let tvq = sousTotal * 0.09975
    info.tvq = tvq.toFixed(2);

    info.total = (sousTotal + tps + tvq).toFixed(2);

    return info;
    
}