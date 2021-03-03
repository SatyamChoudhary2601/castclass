import React, { Fragment } from 'react';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import SettingsProfile from '../Settings/SettingsProfile';
import experiences from '../../data/experience/experiences';
import educations from '../../data/education/educations';
import { isIterableArray } from '../../helpers/utils';
import { Card, CardBody, UncontrolledCollapse } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import ExperienceSummary from '../experience/ExperienceSummary';
import classNames from 'classnames';
import Loader from '../common/Loader';
import ExperienceForm from '../../components/experience/ExperienceForm';
import Flex from '../common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFakeFetch from '../../hooks/useFakeFetch';

// const EditableTabs =({ experiences: rawExperiences, isEditable, ...rest }) => {
//   // Data
//   const { loading: loadingExperiences, data: experiences, setData: setExperiences } = useFakeFetch(rawExperiences);

//   return (
//     <Card {...rest}>
//       {/* <FalconCardHeader title="Experience" light={!isEditable} /> */}
//       {/* <CardBody className={classNames('fs--1', { 'bg-light': isEditable })}>
//         {isEditable && ( */}
//           <Fragment>
//             <Flex align="center" className="mb-4 text-primary cursor-pointer fs-0" id="togglerAddExperience">
//               <span className="circle-dashed">
//                 <FontAwesomeIcon icon="plus" />
//               </span>
//               <span className="ml-3">Add new experience</span>
//             </Flex>
//             <UncontrolledCollapse toggler="#togglerAddExperience">
//               <ExperienceForm experiences={experiences} setExperiences={setExperiences} />
//               <hr className="border-dashed border-bottom-0 my-4" />
//             </UncontrolledCollapse>
//           </Fragment>
//         {/* )}
//         {loadingExperiences ? (
//           <Loader />
//         ) : (
//           isIterableArray(experiences) &&
//           experiences.map((experience, index) => (
//             <ExperienceSummary {...experience} isEditable={isEditable} key={index} />
//           ))
//         )}
//       </CardBody> */}
//     </Card>
//   );
// };



const EditableContent = ({ profileinfo }) => (
  <Fragment>
    <SettingsProfile profileinfo={profileinfo}/>
    {/* <EditableTabs  experiences={experiences} isEditable className="mb-3"></EditableTabs> */}
    <Experience experiences={experiences} isEditable className="mb-3" />
    <Education educations={educations} isEditable className="mb-3 mb-lg-0" />
  </Fragment>
);

export default EditableContent;
