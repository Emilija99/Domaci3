import { Subject, Subscription } from 'rxjs';

import './stil.css'
import {Vest} from'./Vest';

export class Korisnik{


    private vestiSubjekat:Subject<Vest>;//tok na koji se korisnik pretplacuje da bi pratio vesti
    private notifikacijeSubject:Subject<number>;//subjekat koji generise vrednost svaki put kada se promeni broj neprocitanih vesti: kada stigne nova vest ili kada se vest oznaci kao procitana
    private kontejner:HTMLElement;
    private brojNotifikacija:number;//broj neprocitanih vesti
    private pretplata:Subscription;
    

    constructor(vestiOb:Subject<Vest>)
    {
        this.vestiSubjekat=vestiOb;
        this.brojNotifikacija=0;
        this.notifikacijeSubject=new Subject<number>();

        this.notifikacijeSubject.subscribe(x=>{
            this.brojNotifikacija+=x;
            document.querySelector(".brojNeprocitanih").innerHTML=this.brojNotifikacija.toString();
        })
        

    }


    crtaj(host:HTMLElement)
    {
        this.kontejner=document.createElement("div");
        this.kontejner.className="kontejner";
    
        host.appendChild(this.kontejner);
        this.crtajHeder();
        this.crtajTelo();

    }

    crtajHeder()
    {
        const hederKont=document.createElement("div");
        this.kontejner.appendChild(hederKont);
        hederKont.className="heder";

        const pretplataKont=document.createElement("div");
        hederKont.appendChild(pretplataKont);
        const pretplataLbl=document.createElement("label");
        pretplataKont.appendChild(pretplataLbl);
        pretplataLbl.innerHTML="Pretplatite se se da pratite najnovije vesti:";
        pretplataLbl.className="labela";

        const dugmePretplata=document.createElement("button");
        pretplataKont.appendChild(dugmePretplata);
        dugmePretplata.innerHTML="SUBSCRIBE";
        dugmePretplata.className="dugmeSab";

        const brNeprocitanihKont=document.createElement("div");
        hederKont.appendChild(brNeprocitanihKont);

        const brNeprocitanihLbl=document.createElement("label");
        brNeprocitanihLbl.className="labela";
        brNeprocitanihKont.appendChild(brNeprocitanihLbl);
        brNeprocitanihLbl.innerHTML="Trenutno imate neprocitanih vesti:";

        const brojNeprocitanih=document.createElement("label");
        brNeprocitanihKont.appendChild(brojNeprocitanih);
        brojNeprocitanih.innerHTML=this.brojNotifikacija.toString();
        brojNeprocitanih.className="brojNeprocitanih";


        dugmePretplata.onclick=(ev)=>{

           if(dugmePretplata.innerHTML==="SUBSCRIBE")
           {
               this.pretplata=this.vestiSubjekat.subscribe(x=>{
                   this.crtajVest(x);
                this.notifikacijeSubject.next(1)});
               dugmePretplata.innerHTML="UNSUBSCRIBE";
              
           }
           else{
               this.pretplata.unsubscribe();
               dugmePretplata.innerHTML="SUBSCRIBE";

           }
        }
    }
    



    crtajTelo()
    {
        const kont=document.createElement("div");
        this.kontejner.appendChild(kont);

        const vestiKont=document.createElement("fieldset");
        kont.appendChild(vestiKont);

        const oznaka=document.createElement("legend");
        vestiKont.appendChild(oznaka);
        oznaka.innerHTML="Najnovije vesti";

        kont.className="vestiDiv";
        vestiKont.className="vestiKont";

    
    }

    crtajVest(vest:Vest)
    {
        const vestKont=document.createElement("div");
        this.kontejner.querySelector(".vestiKont").prepend(vestKont);

        vestKont.classList.add("vest","neprocitana");

        const naslovDiv=document.createElement("div");
        vestKont.appendChild(naslovDiv);
        const naslov=document.createElement("h2");
        naslovDiv.appendChild(naslov);
        naslov.innerHTML=vest.naslov;


        const vremeDiv=document.createElement("div");
        vestKont.appendChild(vremeDiv);
        const vreme=document.createElement("label");
        vestKont.appendChild(vreme);
        vreme.innerHTML=vest.datumVreme.toLocaleString('en-GB', { timeZone: 'UTC' });

        const sadrzajDiv=document.createElement("div");
        vestKont.appendChild(sadrzajDiv);
        const sadrzaj=document.createElement("div");
        sadrzajDiv.appendChild(sadrzaj);
        sadrzaj.innerHTML=vest.sadrzaj;
        sadrzajDiv.className="sadrzaj";

        const labNeprocitano=document.createElement("label");
        vestKont.appendChild(labNeprocitano);
        labNeprocitano.innerHTML="Oznacite vest kao procitanu";

        labNeprocitano.className="labNeprocitano";
        labNeprocitano.onclick=(ev)=>{
            this.notifikacijeSubject.next(-1);
            vestKont.removeChild(labNeprocitano);
            vestKont.classList.add("procitana");
        }

    

    }


}