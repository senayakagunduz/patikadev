import React from 'react'
import {CardBody,CardSubtitle} from 'reactstrap';
import { CardTitle,CardText,CardLink,Card} from 'reactstrap';

function Book({title,img,author}) {
    //const {img,title,author}="props" ya böyle yazabiliriz ve en alta props.title yerine sadece {title} yazarız
    //ya da Book(props) ===>yerine Book({title,author,img}) yazarım sonra sında da  {img},{author} şeklinde noktasız yazarım
    return (
        <div>
            <Card style={{ width: '18rem'}}>
                <CardBody>
                    <CardTitle tag="h5">
                        {title}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {title}
                    </CardSubtitle>
                </CardBody>
                <img alt="book img" src={img} width="100%"/>
                <CardBody>
                    <CardText>
                       {author}
                    </CardText> 
                </CardBody>
            </Card>
        </div>
    )
}

export default Book