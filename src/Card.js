import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  height:350px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-right:20px;
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  background: url(${props => props.image}) center/cover no-repeat;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
`;

const Price = styled.div`
  font-size: 18px;
  color: #27ae60;
  font-weight: 500;
`;

const Button = styled.button`
  cursor: pointer;
  padding:20px;
  border-radius: 8px;
  transition: background 0.3s ease;
  margin-top:10px;
  border:none;
  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const ProductCard = ({ image, title, price }) => {
  return (
    <Card>
      <Image image={image} />
      <Title>{title}</Title>
      <Price>{price}</Price>
      <div style={{ display: "flex", justifyContent: "space-between", width:"300px", height: "10px" }}>
        <div>
          <Button>Buy Now</Button>
        </div>
        <div style={{marginTop:"25px"}}>
          <img src='https://cdn-icons-png.flaticon.com/128/5337/5337564.png' style={{height:"20px"}}></img>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard;
