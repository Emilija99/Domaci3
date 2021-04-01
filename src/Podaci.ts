import { Subject } from 'rxjs';
import { Vest } from './Vest';

//fja koja generise vesti
export async function GenerisiPodatke(subjekatVesti:Subject<Vest>)
{
    while(true)
    {
    await new Promise(resolve => setTimeout(resolve, 3000));
    subjekatVesti.next(new Vest("Vremenska prognoza za sutra",new Date(),"Tokom sutrašnjeg dana temperatura će se kretati u rasponu od 7 do 21 stepen, a duvaće slab, pretežno jugozapadni vetar, brzinom do 4 metra u sekundi. Jutarnje časove obeležiće sunčano vreme, dok će tokom dana biti oblačno i suvo."));
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    subjekatVesti.next(new Vest("Filmovi koji nas ocekuju u bioskopima",new Date(),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat nam at lectus. Vestibulum morbi blandit cursus risus. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Pulvinar mattis nunc sed blandit. Nec feugiat in fermentum posuere urna nec tincidunt. Vitae tempus quam pellentesque nec nam aliquam sem et. Id semper risus in hendrerit gravida rutrum quisque."));
    await new Promise(resolve => setTimeout(resolve, 3000));
    

    subjekatVesti.next(new Vest("Pregled sportskih desavanja",new Date(),"Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Urna nec tincidunt praesent semper. Euismod elementum nisi quis eleifend quam. Consequat semper viverra nam libero justo. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Etiam non quam lacus suspendisse faucibus interdum.Odio morbi quis commodo odio aenean sed. Sodales ut etiam sit amet nisl purus. Convallis aenean et tortor at risus viverra. Tincidunt augue interdum velit euismod in pellentesque massa placerat."));
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    subjekatVesti.next(new Vest("Dugorocna vremenska prognoza za april",new Date(),"Felis donec et odio pellentesque diam volutpat commodo sed egestas. Aliquet bibendum enim facilisis gravida neque. Enim facilisis gravida neque convallis a cras semper auctor neque. Quis enim lobortis scelerisque fermentum dui faucibus in.Urna et pharetra pharetra massa massa ultricies. Dolor morbi non arcu risus quis varius quam. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Porta nibh venenatis cras sed felis. Vitae justo eget magna fermentum iaculis eu."));
    await new Promise(resolve => setTimeout(resolve, 3000));
    

    subjekatVesti.next(new Vest("10 saveta za zdravlje",new Date(),"Convallis a cras semper auctor neque vitae tempus quam. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Neque convallis a cras semper auctor.At auctor urna nunc id cursus metus aliquam eleifend mi. Porta nibh venenatis cras sed felis. Convallis posuere morbi leo urna. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Amet luctus venenatis lectus magna. Dolor sed viverra ipsum nunc aliquet bibendum. "));
    }
   


}