class Elem{
    constructor(szuloELEM, index){
        this.index = index;
        this.szuloELEM = szuloELEM;
        szuloELEM.append(`
        <div class="Elem">      
        <p></p>  
        </div>`);
        this.divELEM = $("article div:last-child");
        this.pELEM = $("article div:last-child p");

        this.divELEM.on("click", () => {
            //this.pELEM.text("X");
            this.esemenyTrigger();
        })
    }
    
    setElem(ertek){
        this.pELEM.text(ertek);
    }

    esemenyTrigger(){
        const esemeny = new CustomEvent("elemKatt", {detail: this});
        window.dispatchEvent(esemeny);
    }



}

export default Elem;