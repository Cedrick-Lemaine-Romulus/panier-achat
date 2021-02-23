import './BtnAjoutPanier.scss';
import Badge from '@material-ui/core/Badge';
import { useState } from 'react';

export default function BtnAjoutPanier({qte, onClick, texte, couleur}) {
    // État du badge du bouton
    // const [btnQte, setBtnQte] = useState(0);
    // const [btnTexte, setBtnTexte] = useState('Ajouter au panier');
    return (
        <Badge badgeContent={qte} color="secondary">
            <button onClick={onClick}
                className={'BtnAjoutPanier ' + (couleur)}
            >
                {texte}
            </button>
        </Badge>
    )
}