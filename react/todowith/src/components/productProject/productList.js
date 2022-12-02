import React from 'react'
import { ListGroup, ListGroupItem } from "reactstrap";

function ProductList(props) {
    return (
        <div>
            <h1>ProductList</h1>
            <h3>{props.info.title}</h3>
            <h5>{props.info.baskabisey}</h5>

            <div>
                <ListGroup numbered>
                    <ListGroupItem>
                        Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem>
                        Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem>
                        Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem>
                        Vestibulum at eros
                    </ListGroupItem>
                </ListGroup>
            </div>
        </div>
    )
}

export default ProductList