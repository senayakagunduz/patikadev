import React, { useState } from 'react'
import { ListGroupItem, ListGroup } from 'reactstrap';

function CategoryList(props) {
  const categories = [{ categoryId: 1, categoryName: 'Beverages' },
  { categoryId: 2, categoryName: 'Condiments' }];
  const [category, setCategory] = useState(categories);
  const [currentCategory, setCurrentCategory] = useState({ categoryName: "oxford", categoryId: 1 });

  const changeName = () => {
    setCurrentCategory({ categoryName: "Cambridge" })
  }
  return (
    <div>
      <h1>CategoryList</h1>
      <h3>{props.info.title}</h3>
      <ListGroup >{
        categories.map((item) =>
        (
          <ListGroupItem className='text-danger' key={item.categoryId}>
            {item.categoryName}
          </ListGroupItem>
        )
        )
      }
        <ListGroupItem onClick={changeName}>{currentCategory.categoryName}</ListGroupItem>
      </ListGroup>
      <ListGroupItem onClick={props.changeNewName}>{props.newCategory}</ListGroupItem>
      <h1 onClick={changeName}>{currentCategory.categoryName}</h1>
    </div>
  )
}

export default CategoryList