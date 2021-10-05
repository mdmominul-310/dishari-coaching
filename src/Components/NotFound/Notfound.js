import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
const Notfound = () => {
    return (
        <div>
            <h2>404 Not found</h2>
        
            <Row className="mx-0">
  <Button as={Col} variant="primary">Button #1</Button>
  <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
  <Button as={Col} variant="success">Button #3</Button>
</Row>

        </div>
    );
};

export default Notfound;