import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Col, CardImg} from "reactstrap";

function CharacterCard({character}) {
  return (  
    <Col>
      <Card className="card-border" >  
          <CardBody className="card-body">
          <CardTitle>{character.name}</CardTitle> 
            <CardSubtitle>Status: {character.status}</CardSubtitle>
            <CardSubtitle>Gender: {character.gender}</CardSubtitle>
            <CardImg top width="100%" src={character.image} alt="Card image cap" />
          </CardBody>
      </Card>
    </Col>    
  );
  
}

export default CharacterCard;