import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Home (){
    return(
     <>
    <Carousel
        infinteloop
        usekayboardarrows
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        >
        <div src ="https://lojavivara.vtexassets.com/assets/vtex.file-manager-graphql/images/2cfc4a3d-d275-4611-8af8-15ea26ea3294___59bdaf2ba16c90457385957422dba34b.png">
        </div>
        <div src ="https://lojavivara.vtexassets.com/assets/vtex.file-manager-graphql/images/2cfc4a3d-d275-4611-8af8-15ea26ea3294___59bdaf2ba16c90457385957422dba34b.png">
            </div>
        
    </Carousel>
     </>
    )
}