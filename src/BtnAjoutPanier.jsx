import './BtnAjoutPanier.scss';
import Badge from '@material-ui/core/Badge';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useState } from 'react';

export default function BtnAjoutPanier(props) {
    // console.log("Propriétés du bouton : ", props)

    // État du badge du bouton
    const [btnQte, setBtnQte] = useState(0);
    const [btnTexte, setBtnTexte] = useState('Ajouter au panier');
    return (
        <Badge badgeContent={btnQte} color="secondary">
            <button onClick={(event) => { 
                props.onClick();
                setBtnQte(btnQte+1); 
                setBtnTexte(<AddCircleOutlineIcon />);
                event.target.classList.add("bleu");
                }} 
                className="BtnAjoutPanier"
            >
                {btnTexte}
            </button>
        </Badge>
    )
}