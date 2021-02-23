import './Page.scss';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import ListeProduits from './ListeProduits';
import useLocalStorageState from './hooks/useLocalStorageState';
import { Switch, Route} from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';

export default function Page() {

  // On utilise notre hook personnalisé pour créer un état qui sera sauvegardé dans localStorage
  // Cet état aura comme valeur inintiale : {} et l'étiquette localStorage sera :
  const etatPanier = useLocalStorageState({}, "panier")
  // const etatConnexion = useLocalStorageState(false, "utilisateur-connexion")
  // const choixLangue = useLocalStorageState("fr", "choix-langue")

  // // Remarquez l'initialisation "paresseuse" (lazy initialisation) de l'état
  // const etatPanier = useState(() => {
  //   const panierLS = window.localStorage.getItem('panier');
  //   return (panierLS !== null) ? JSON.parse(panierLS) : {};
  // });
  // const [panier, setPanier] = etatPanier;

  // // Sauvegarder le panier dans localStorage (c'est un side-effect)
  // // Comme ce code est un effet secondaire de votre composant
  // // (qui doit être exécuter à chauque mutation du panier) la bonne façon de
  // // le code en respectant la manière React est d'utiliser un hook spécialisé "useEffect"
  // useEffect(() => {
  //   window.localStorage.setItem('panier', JSON.stringify(panier))
  // }, [panier]); // tableau des deps (dépendances)
  

  return (
    <div className="Page">
    <Entete etatPanier={etatPanier} />
    <section className="contenuPrincipal">
    <Switch>
        <Route path="/nos-produits" exact>
          <ListeProduits etatPanier={etatPanier} />
        </Route>
        <Route path="/a-propos-de-magasin" exact>
            <Apropos />
        </Route>
        <Route path="/contact" exact>
            <Contact />
        </Route>
        <Route path="/" component={Accueil} exact />
    </Switch>

      
    </section>
    <Pied2Page avecNom="TIM"/>
    </div>
  );
}