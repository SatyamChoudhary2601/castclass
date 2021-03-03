import React,{ Fragment } from 'react';

import { Card} from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';


//import FalconEditor from '../common/FalconEditor';

import gallery2 from '../../assets/img/gallery/1.jpg';
import Background from '../common/Background';


const Associations = () => (
  <Card className="mb-3">
     <FalconCardHeader title="Company Profile"></FalconCardHeader>

      <p className="cbewleft">
        <div className="position-relative py-6 py-lg-8">
          <Background image={gallery2} overlay="1" className="rounded-soft" />
          <div className="position-relative text-center">
          </div>
        </div> <p></p>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum </span>
    </p>
    
  </Card>
);

const Services = () => (
  <Card className="mb-3">
    <FalconCardHeader title="Services"></FalconCardHeader>
    
      <p className="cbewleft">
       <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages. </span></p>
    
  </Card>
);



const FeedContent = () => {
  // const { feeds } = useContext(FeedContext);

  return (
    <Fragment>
      <Associations />
      <Services/>
    </Fragment>
  );
};

export default FeedContent;
