import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {
    // console.log("Panier dans ListeProduits : " + props.etatPanier);
    return (
        <div className="ListeProduits">
            <h2>Produits disponibles</h2>
            <ul>
                {
                    tabProduits.map((prd) => 
                        <Produit 
                            key={prd.id}
                            etatPanier={props.etatPanier}
                            id={prd.id}
                            nom={prd.nom}
                            prix={prd.prix} 
                        />
                    )
                }
                {/* <Produit nom="T-Shirt à col rond" prix="13.99" id="prd0001"/> */}
            </ul>
        </div>
    );
}