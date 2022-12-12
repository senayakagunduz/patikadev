import React from 'react'
import {Button, CardBody,CardSubtitle} from 'reactstrap';
import { CardTitle,CardText,Card} from 'reactstrap';

function Book({title,img,author}) {
    //attribute,eventHandler
    //const {img,title,author}="props" ya böyle yazabiliriz ve en alta props.title yerine sadece {title} yazarız
    //ya da Book(props) ===>yerine Book({title,author,img}) yazarım sonra sında da  {img},{author} şeklinde noktasız yazarım
    const clickHandler=(e)=>{
        console.log(e.target)
        console.log(e);
        alert("hello world")
    }
    const complexExample=(author)=>{
        console.log(author);
    }
    return (
        <div>
            <Card style={{ width: '18rem'}} onMouseOver={()=>{
                console.log(title);
            }}>
                <CardBody>
                    <CardTitle tag="h5">
                        {title}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6" onClick={()=>console.log(title)}>
                        {title}
                    </CardSubtitle>
                </CardBody>
                <img alt="book img" src={img} width="100%"/>
                <CardBody>
{/* Eğer sadece tıklandığında çalışsın istersek metodumuzu, {()=>fonksiyon(parametresi)} şeklinde yazıyoruz. */}
                    <CardText onClick={()=>complexExample(author)}>
                       {author}
                    </CardText> 
{/*Referance example uygulama çalıştığında çalışmaya başlar*/}
                    <Button onClick={clickHandler}>referance example</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Book