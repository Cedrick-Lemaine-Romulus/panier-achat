import './Entete.scss';
import ShoppingCartIcons from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';

export default function Entete(props) {
    // const etatCacherSommairePanier = useState(true);

    // // Array/Object DESTRUCTURING (décomposition des tablaeux et objets)

    // const valeurEtatCacher = etatCacherSommairePanier[0];

        // Avec la décomposition de tableau, c'est plus facile :
    const [cacheSommaire, setCacheSommaire] = useState(true);
    
    const basculerSommairePanier = () => setCacheSommaire(cacheSommaire ? false : true);

    // Accéder à l'état du panier qui est reçu dans les props
    const [panier, setPanier] = props.etatPanier; // Décomposition de tableaux (et d'objets)
    
    // Calculer le nombre d'articles total du panier
    // Méthode 1 : programmation impérative (moins expressive)
    //const articlesTab = Object.values(panier);
    // let nbArticles = 0;
    // for (let i = 0; i < articlesTab.length; i++) {
    //     nbArticles += articlesTab[i].qte;
    // }

    // Calculer le nombre d'articles total du panier
    // Méthode 2 : programmation déclarative (plus expressive)
    // [ {prix: 19, qte: 3}, {prix: 26.95, qte: 13}, {prix: 254.75, qte: 5} ]
    // const nbArticles = Object.values(panier).reduce( (accumulateur, eltCourant) =>accumulateur + eltCourant.qte, 0);
    // console.log("Le TABLEAU des articles dans le panier : " + articlesTab);

    /*
        let h = document.createElement("header");
        h.setAttibute("class", "Entete");
        h.appendChild();
    */

    return (
        <header className="Entete">
            <div>Logo</div>
            <ul className="navPrincipale">
                <li>Produits</li>
                <li>À propos de nous</li>
                <li>Contactez-nous</li>
            </ul>
            <ul className="navUtil">
                <li>
                    <Badge onClick={basculerSommairePanier}  badgeContent={Object.values(panier).reduce( (accumulateur, eltCourant) =>accumulateur + eltCourant.qte, 0)} color="primary">
                        <ShoppingCartIcons />
                    </Badge>
                    <SommairePanier cacher={cacheSommaire} etatPanier={props.etatPanier} />
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    );
}