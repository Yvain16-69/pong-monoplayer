class Controles {
    /**
     * Gère les entrées interactives (clavier, souris, touch tactile etc...)
     */
    constructor() {
        //c'est parti !
        this._ecouteBoutons();
        this._ecouteClavier();
    }

    /**
     * Méthode pour commencer à écouter le clavier
     * @private
     */
    _ecouteClavier() {
        //quand on appuie sur une touche du clavier
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
            }
            if (event.key === "h") {
                joueur.monte();
                miroir.descend();
            }
            if (event.key === "b") {
                miroir.monte();
                joueur.descend();
            }
            event.preventDefault(); // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
        }, true);

        window.addEventListener("keyup", function (event) {
            if (event.defaultPrevented) {
                return; // je n'explique pas à quoi ça sert ça vous embrouillerait pour rien
            }
            switch (event.key) {
                case "h":
                case "b":
                    joueur.bougePas()
                    break;
                case "h":
                case "b":
                    miroir.bougePas()
                    break;
            }
            event.preventDefault(); // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
        }, true);
    }
}

