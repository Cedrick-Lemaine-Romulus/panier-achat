import './Produit.scss'
import BtnAjoutPanier from './BtnAjoutPanier'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


export default function Produit({etatPanier, id, nom, prix}) {
    // console.log("Panier dans Produit : ", props.etatPanier)
    const [panier, setPanier] = etatPanier;
    /**
     * Ajouter l'article au panier
     */
    function ajouterArticle() {
        if (panier[id]) {
            // setPanier();
            panier[id].qte++;
        }
        else {
            // setPanier();
            panier[id] = { prix: prix, qte: 1 }
        }
        // Maintenant il faut changer l'état du panier avec setPanier
        // Il faut passer à setPanier un NOUVEL objet (obtenu par clonage)

        setPanier(JSON.parse(JSON.stringify(panier)));
        // setPanier({...panier}) // {...panier} //Spread operator
        // let nouveauPanier = Object.assign({}, panier);
        // setPanier(nouveauPanier);
        // console.log("Clone obtenu avec assign() : " + nouveauPanier);
    };

    // État du bouton
    let btnTexte = "Ajouter au panier";
    let btnQte = 0;
    let btnCouleurCls = "";
    if (panier[id]) {
        btnTexte = <AddCircleOutlineIcon />;    //JSX : Javascript Synctax eXtention<
        btnQte = panier[id].qte;
        btnCouleurCls = "bleu";
    }

    return (
        <li className="Produit">
            <div className="image">
                <img src={'images-produits/' + id + '.webp'} alt={nom} />
            </div>
            <div className="info">
                <h3>{nom}</h3>
                <p className="prix">{prix} $CA</p>
                <BtnAjoutPanier 
                    onClick={ajouterArticle} 
                    texte={btnTexte} 
                    qte={btnQte} 
                    couleur={btnCouleurCls} />
            </div>
        </li>
    );
}