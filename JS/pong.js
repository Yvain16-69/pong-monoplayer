/**
 * Le terrain
 * @type {Terrain}
 */
let terrain=new Terrain($(".terrain"));
/**
 * La balle
 * @type {Balle}
 */
let balle=new Balle($(".balle"));
/**
 * Le joueur à gauche
 * @type {Joueur}
 */
let joueur=new Joueur($(".joueur"),$(".score"),$("#monte1"),$("#descend1"));

/**
 * Le joueur à droite
 * Ici, pour que ce soit plus lisible, on saute des lignes mais c'est pareil que pour joueur 1
 * @type {Joueur}
 */
let miroir=new Joueur(
    $(".miroir"),
    $(".vie"),
    $("#monte2"),
    $("#descend2")
);

let controles=new Controles();
