import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90%;
  height:200px;
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
  background: url(${props => props.image}) center/contain no-repeat;
  border-radius: 8px;
  margin-bottom: 16px;
`;


const Announcement = () => {
  return (
    <Card>
      <Image image="https://m.media-amazon.com/images/G/31/img20/AmazonLaunchpad/2022/Jupiter/phase2/gateway/phase4/Fashion--accessories_mob.jpg" />
    </Card>
  )
}

export default Announcement;
