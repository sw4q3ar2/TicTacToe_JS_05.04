import Elem from "./TicTacToe.js";

class Jatekter{
    // vezérli a játékot
    #lepes;
    //nyerés ellenorzese
    #aktAllapotLista = [];
    constructor(){
        this.#lepes = 0;
        this.#aktAllapotLista = [" "," "," "," "," "," "," "," "," "];
        const szuloElem = $("article");
        for (let index = 0; index < 9; index++) {
            const elem = new Elem(szuloElem, index);
        };
        $(window).on("elemKatt", (event) => {
            //console.log(event.detail);
            let aktELEM = event.detail;
            if(this.#lepes % 2 == 0){
                aktELEM.setElem("X");
                this.#aktAllapotLista[aktELEM.index] = "X";
            }else{
                aktELEM.setElem("O");
                this.#aktAllapotLista[aktELEM.index] = "O";
            }
            this.#lepes++;
            console.log(this.#aktAllapotLista);
            this.ellenorzes();
        });
    }

    ellenorzes(){
        
    }
}

export default Jatekter;