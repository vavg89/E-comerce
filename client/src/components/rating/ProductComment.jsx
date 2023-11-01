import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRatings } from '../../redux/actions';
import Card from 'react-bootstrap/Card';

const ProductComment = ({ sku }) => {
  const dispatch = useDispatch();
  const ratings = useSelector((state) => state.ratings);
  
  useEffect(() => {
    dispatch(getRatings());
  }, [dispatch]);

  const filteredProducts = ratings.filter((product) => product.sku === sku);

  const allComments = filteredProducts.reduce((allComment, product) => {
    return allComment.concat(
      product.Ratings.map((rating) => ({
        review: rating.review,
        rate: rating.rate 
      }))
    );
  }, []);


  const renderStars = (rate) => {
    const stars = [];
    const starCount = Math.ceil(rate); // Redondear hacia arriba para mostrar la cantidad de estrellas

    if (starCount > 0) {
      for (let i = 1; i <= starCount; i++) {
        const starClass = 'star-colored';
        stars.push(<span key={i} className={`bi bi-star ${starClass}`}></span>);
      }
    }

    return stars;
  };
  
 

  if (allComments.length === 0) {
    return null;
  }


  return (
    <div>
      <Card className="mx-auto mt-3 float-right" style={{ maxWidth: '400px' }}>
        <Card.Body className="text-left">
          <Card.Title className="text-center">Comentarios:</Card.Title>
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            <ul className="list-group">
              {allComments.map((comment, index) => (
                <li key={index} className="list-group-item list-group-item-action">
                  
                   <span className="ml-2"> 
                  {renderStars(comment.rate)} : 
                  </span>
                  ! {comment.review} ! 
                 
                </li>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};


export default ProductComment;
