import { Korisnik } from "./Korisnik";
import { Vest } from "./Vest";
import {GenerisiPodatke} from "./Podaci";
import { Subject } from 'rxjs';


const subjekatVesti=new Subject<Vest>();
const k1=new Korisnik(subjekatVesti);
k1.crtaj(document.body);

await GenerisiPodatke(subjekatVesti);