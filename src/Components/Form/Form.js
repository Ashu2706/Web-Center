import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Input from './Input'

const ModalExample = ({formModal, toggle}) => {

  

  const [fname, setFname] = useState('')

  const changeFname = (event) => {
    console.log("First-Name: ", event.target.value)
    setFname(event.target.value)
  }

  const [lname, setLname] = useState('')

  const changeLname = (event) => {
    console.log("First-Name: ", event.target.value)
    setLname(event.target.value)
  }

  const [uname, setUname] = useState('')

  const changeUname = (event) => {
    console.log("First-Name: ", event.target.value)
    setUname(event.target.value)
  }

  const [email, setEmail] = useState('')

  const changeEmail = (event) => {
    console.log("First-Name: ", event.target.value)
    setEmail(event.target.value)
  }

  const [pwd, setPwd] = useState('')

  const changePwd = (event) => {
    console.log("First-Name: ", event.target.value)
    setPwd(event.target.value)
  }

  const [repwd, setRePwd] = useState('')

  const changeRePwd = (event) => {
    console.log("First-Name: ", event.target.value)
    setRePwd(event.target.value)
  }

  const [phn, setPhn] = useState('')

  const changePhn = (event) => {
    console.log("First-Name: ", event.target.value)
    setPhn(event.target.value)
  }
  const closeBtn = <button className="btn-close" onClick={toggle} />

  return (
    <div>
      {/* <Button color="danger btn-lg" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={formModal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>Enroll Form</ModalHeader>
        <ModalBody>
          <p className="lead">Enter your details below</p>
          <div className="mb-3">
            <label htmlFor="first-name" className="col-form-label">First Name: </label>
            {/* <input type="text" className="form-control" id="first-name"/> */}
            <Input
              inputType="text"
              inputId="first-name"
              inputValue={fname}
              inputChangeEvent={changeFname}
            />
            <div>{fname}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="col-form-label">Last Name: </label>
            {/* <input type="text" className="form-control" id="last-name" /> */}
            <Input
              inputType="text"
              inputId="last-name"
              inputValue={lname}
              inputChangeEvent={changeLname}
            />
            <div>{lname}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="user-Name" className="col-form-label">User Name: </label>
            {/* <input type="text" className="form-control" id="user-name" /> */}
            <Input
              inputType="text"
              inputId="user-name"
              inputValue={uname}
              inputChangeEvent={changeUname}
            />
            <div>{uname}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email-id" className="col-form-label">Email: </label>
            {/* <input type="email" className="form-control" id="email-id" /> */}
            <Input
              inputType="email"
              inputId="email-id"
              inputValue={email}
              inputChangeEvent={changeEmail}
            />
            <div>{email}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="set-pwd" className="col-form-label">Password: </label>
            {/* <input type="password" className="form-control" id="set-pwd" /> */}
            <Input
              inputType="password"
              inputId="set-pwd"
              inputValue={pwd}
              inputChangeEvent={changePwd}
            />
            <div>{pwd}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="re-pwd" className="col-form-label">Re-password: </label>
            {/* <input type="password" className="form-control" id="re-pwd" /> */}
            <Input
              inputType="password"
              inputId="re-pwd"
              inputValue={repwd}
              inputChangeEvent={changeRePwd}
            />
            <div>{repwd}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone-number" className="col-form-label">Phone Number: </label>
            {/* <input type="text" className="form-control" id="phone-number" /> */}
            <Input
              inputType="number"
              inputId="phone-number"
              inputValue={phn}
              inputChangeEvent={changePhn}
            />
            <div>{phn}</div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Submit</Button>
          <Button color="dark" onClick={toggle}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;