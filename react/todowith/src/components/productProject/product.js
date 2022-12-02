import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import CategoryList from './categoryList';
import ProductList from './productList';


function Product() {
    let productInfo = { title: 'productListesi', baskabisey: ' baskabisey' }
    let categoryInfo = { title: 'categoryListesi' }
    const [newCategory, setNewCategory] = useState("Clothes")
    const changeNewCategoryName = () => {
        setNewCategory("Furniture");
    }
    return (
        <div>
            <Container>
                  <Row>
                    <Col>
                        <ProductList info={productInfo} />
                    </Col>
                    <Col>
                        <CategoryList info={categoryInfo} newCategory={newCategory} changeNewName={changeNewCategoryName} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product