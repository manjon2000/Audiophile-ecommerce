import Image from 'next/image';
import ImageDemo from "../../assets/earphones.png"
import { LiaAngleRightSolid } from "react-icons/lia";

interface CardCategoryInterface {
    image:     any | object,
    title:     string,
    titleLink: string,
    urlLink:   string
}

export default function CardCategory({image = ImageDemo , title = "Headphones" , titleLink = "shop", urlLink = "#"}: CardCategoryInterface): JSX.Element {

    console.log(image)
    return(
        <>
            <div className='card-category'>
                <picture className='card-category__image'>
                    <Image
                        src={image}
                        alt='Image demo'
                     />   
                </picture>
                <div className="card-category__wrapper">
                    <h3 className="card-category__title">{ title }</h3>
                    <a href={urlLink} className="card-category__link" tabIndex="0" title='card category link'>
                            shop
                            <em className="card-category__link__icon"><LiaAngleRightSolid /></em>
                    </a>
                </div>
            </div>     
        </>
    )
}