import React, {useState } from "react";
import { Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import {Table} from 'reactstrap'

const NavItemWithViewText = ({ item }) => {
  const [isModalOpen, setModalOpen] = useState(false)

     const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }
  console.log(isModalOpen,"clicked")


    console.log(item,"this is item props");

    return (
        <>
{item.name === "Certification" &&
       (<> <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          {item?.data?.map(certification => (
            <>
                <Table bordered>
                <thead>
                <tr>
                    <td>Certification</td>
                    <td>Start Month</td>
                    <td>Start Year</td>
                    <td>End Month</td>
                    <td>End Year</td>
                    <td>Certificate License</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{certification.user_certification}</td>
                    <td>{certification.user_cert_start_month}</td>
                    <td>{certification.user_cert_start_year}</td>
                    <td>{certification.user_cert_end_month}</td>
                    <td>{certification.user_cert_end_year}</td>
                    <td>{certification.user_cert_license}</td>
                </tr>
            </tbody>
            <tfoot/>
          </Table>     
            </>
            ))}
          
          
        </div>
    </Modal>
           
                <span aria-current="page" class="nav-link active">
                    <div class="d-flex align-items-left">
                        <span style={{ color: item.color }} class="nav-link-text certlf left-nav-item pg-lt15">{item.name + "(" + item.count + ")"}</span></div>
                </span>
                    <span className="round-corner-view" onClick={openModal} style={{ color: item.color, border: "1px solid " + item.border}}>view</span>
        </>) }


        {item.name === "Recomendations" &&
       (<> <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          No Data for Recomendations
        
          
          
        </div>
    </Modal>
           
                <span aria-current="page" class="nav-link active">
                    <div class="d-flex align-items-left">
                        <span style={{ color: item.color }} class="nav-link-text certlf left-nav-item pg-lt15">{item.name + "(" + item.count + ")"}</span></div>
                </span>
                    <span className="round-corner-view" onClick={openModal} style={{ color: item.color, border: "1px solid " + item.border}}>view</span>
        </>) }


        {item.name === "Regrets" &&
       (<> <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          No Data for Regret
        
          
          
        </div>
    </Modal>
           
                <span aria-current="page" class="nav-link active">
                    <div class="d-flex align-items-left">
                        <span style={{ color: item.color }} class="nav-link-text certlf left-nav-item pg-lt15">{item.name + "(" + item.count + ")"}</span></div>
                </span>
                    <span className="round-corner-view" onClick={openModal} style={{ color: item.color, border: "1px solid " + item.border}}>view</span>
        </>) }       
        </>
    )

};
export default NavItemWithViewText;