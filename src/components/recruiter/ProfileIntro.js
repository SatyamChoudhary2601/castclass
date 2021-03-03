import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, Collapse } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileIntro = ({ title, data }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Card className="mb-3">
      <FalconCardHeader title={title} />

      <CardBody className="text-justify">
        {data}
      </CardBody>

      <CardFooter className="bg-light p-0 border-top">
        <Button color="link" block to="/pages/events" onClick={() => setCollapsed(!collapsed)}>
          Show {collapsed ? 'more' : 'less'}
          <FontAwesomeIcon icon="chevron-up" className="ml-1 fs--2" transform={collapsed ? 'rotate-180' : ''} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileIntro;
