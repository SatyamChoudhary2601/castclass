import React, {useState } from "react";
import { Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import {Table} from 'reactstrap'

const NavItemWithRoundTextCount = ({ item }) => {
    const [isModalOpen, setModalOpen] = useState(false)

     const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

    console.log(item,"this new item");

    return (
        <>

        {item.name === "Following" &&
        (
            <>
            <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          <p>No Data Available</p>
          
          
          
        </div>
    </Modal>
          
                    <span aria-current="page" class="nav-link active pd-lt0" name="Applied Jobs">
                        <div class="d-flex align-items-left"><span class="nav-link-text left-nav-item" >{item.name}</span></div>
                    </span>
                    <span className="round-count"  onClick={openModal}>{item.count}</span>
      </>      
      )}

        {item.name === "Followers" &&
        (
            <>
            <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          <p>No Data Available</p>
          
          
          
        </div>
    </Modal>
          
                    <span aria-current="page" class="nav-link active pd-lt0" name="Applied Jobs">
                        <div class="d-flex align-items-left"><span class="nav-link-text left-nav-item" >{item.name}</span></div>
                    </span>
                    <span className="round-count"  onClick={openModal}>{item.count}</span>
      </>      
      )}


        {item.name === "Connections" &&
        (
            <>
            <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          <Table bordered>
          <thead>
            <tr>
                <th>User</th>
                <th>Status</th>
            </tr>
           </thead>
            {item?.data?.map(user => (
                <>
                    <tbody>
                        <tr>
                            <td><img src={user.user_profile_pic ? user.user_profile_pic : "image"} atl="Profile Pic"/></td>
                            <td>{user.request_status}</td>
                        </tr>
                    </tbody>
                </>
            ))}
            <tfoot/>
            </Table>
          
          
        </div>
    </Modal>
          
                    <span aria-current="page" class="nav-link active pd-lt0" name="Applied Jobs">
                        <div class="d-flex align-items-left"><span class="nav-link-text left-nav-item" >{item.name}</span></div>
                    </span>
                    <span className="round-count"  onClick={openModal}>{item.count}</span>
      </>      
      )} 


        {item.name === "Z-Connections" &&
        (
            <>
            <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          <p>No Data Available</p>
         
          
          
        </div>
    </Modal>
          
                    <span aria-current="page" class="nav-link active pd-lt0" name="Applied Jobs">
                        <div class="d-flex align-items-left"><span class="nav-link-text left-nav-item" >{item.name}</span></div>
                    </span>
                    <span className="round-count"  onClick={openModal}>{item.count}</span>
      </>      
      )}


{item.name === "Groups" &&
        (
            <>
            <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          <p>No Data Available</p>
          
        </div>
    </Modal>
          
                    <span aria-current="page" class="nav-link active pd-lt0" name="Applied Jobs">
                        <div class="d-flex align-items-left"><span class="nav-link-text left-nav-item" >{item.name}</span></div>
                    </span>
                    <span className="round-count"  onClick={openModal}>{item.count}</span>
      </>      
      )}


{item.name === "Message" &&
        (
            <>
            <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          <p>No Data Available</p>
          
        </div>
    </Modal>
          
                    <span aria-current="page" class="nav-link active pd-lt0" name="Applied Jobs">
                        <div class="d-flex align-items-left"><span class="nav-link-text left-nav-item" >{item.name}</span></div>
                    </span>
                    <span className="round-count"  onClick={openModal}>{item.count}</span>
      </>      
      )}


      {item.name === "Connection" &&
        (
            <>
            <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          <Table bordered>
          <thead>
            <tr>
                <th>User</th>
                <th>Status</th>
            </tr>
           </thead>
            {item?.data?.map(user => (
                <>
                    <tbody>
                        <tr>
                            <td><img src={user.user_profile_pic ? user.user_profile_pic : "image"} atl="Profile Pic"/></td>
                            <td>{user.request_status}</td>
                        </tr>
                    </tbody>
                </>
            ))}
            <tfoot/>
            </Table>
          
        </div>
    </Modal>
          
                    <span aria-current="page" class="nav-link active pd-lt0" name="Applied Jobs">
                        <div class="d-flex align-items-left"><span class="nav-link-text left-nav-item" >{item.name}</span></div>
                    </span>
                    <span className="round-count"  onClick={openModal}>{item.count}</span>
      </>      
      )}

      {item.name === "Z-connections" &&
        (
            <>
            <Modal visible={isModalOpen} width="70%" height="50%" effect="fadeInUp" onClickAway={() => closeModal()}>
        <div style={{padding:'20px'}}>
          <h3 style={{}}>{item.name}</h3>
          <p>No Data Available</p>
          
        </div>
    </Modal>
          
                    <span aria-current="page" class="nav-link active pd-lt0" name="Applied Jobs">
                        <div class="d-flex align-items-left"><span class="nav-link-text left-nav-item" >{item.name}</span></div>
                    </span>
                    <span className="round-count"  onClick={openModal}>{item.count}</span>
      </>      
      )}




        </>
    )

};


export default NavItemWithRoundTextCount;