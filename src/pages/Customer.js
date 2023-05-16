import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'

const Customer = () => {

  const [AllCustomer, setAllCustomer] = useState([])
  const [showModel, setshowModel] = useState(false)
  const [setIdx, setselIdx] = useState(-1)

  const [custoId, setcustoId] = useState("")

  const [CustomerFullName, setCustomerFullName] = useState("")
  const [CustomerMobileNo, setCustomerMobileNo] = useState("")
  const [CustomerAddress, setCustomerAddress] = useState("")
  const [City, setCity] = useState("")
  const [State, setState] = useState("")
  const [Pincode, setPincode] = useState("")
  const [Profile, setProfile] = useState("")
  // const[,]=useState("")

  function onShowModel() {
    setshowModel(true)
  }

  function onHideModel() {
    setshowModel(false)
  }

  useEffect(() => {
    axios.get("http://localhost:5000/AllCustomer")
      .then((result) => {
        setAllCustomer(result.data)
      }).catch((err) => {
        console.log(err)
      });
  },
    [])

  function DeleteCusto(custoId) {
    axios.delete("http://localhost:5000/DeleteCusto", { data: { id: custoId } })
      .then((result) => {
        alert("custo deleted")
        window.location.reload(false)
      }).catch((err) => {
        console.log(err)
      });
  }

  function UpdateCusto() {
    const custoupdate = {
      id: custoId,
      custofullname: CustomerFullName,
      custombno: CustomerMobileNo,
      custoaddress: CustomerAddress,
      city: City,
      state: State,
      pincode: Pincode,
      profile: Profile,
    }

    axios.post("http//localhost:5000/foodUpdate", custoupdate)
      .then((result) => {
        onHideModel()
        alert("Food Updated")
      }).catch((err) => {
        console.log(err)
      });
  }

  return (
    <>
    <div>
      <h3 className='section'>customer</h3>

      <Container>
        <Row className='foodimg'>
          {
            AllCustomer.map((custo, idx) => {
              return (
                <Col lg={4} md={3} sm={12}>
                  <Card>
                    <Card.Header>
                      <img className='img' src={`http://localhost:5000${custo.CustoImage}`} />
                    </Card.Header>

                    <Card.Body>
                      <h3>{custo.CustomerName}</h3>
                      <h3>{custo.CustomerType}</h3>
                      {/* <h3>{food.FoodCategory}</h3> */}
                      <h3>{custo.CustomerPrice}</h3>
                      {/* <h3>{food.FoodImage}</h3> */}

                      {/* <h3>{food.IsAvailable ? "ev": "non ev"}</h3> */}
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => {
                        onShowModel()
                        setselIdx(idx)
                        setcustoId(AllCustomer[idx]._id)
                        setCustomerFullName(AllCustomer[idx].CustomerFullName)
                        setCustomerMobileNo(AllCustomer[idx].CustomerMobileNo)
                        setCustomerAddress(AllCustomer[idx].CustomerAddress)
                        setCity(AllCustomer[idx].City)
                        setState(AllCustomer[idx].State)
                        setPincode(AllCustomer[idx].Pincode)
                        setProfile(AllCustomer[idx].Profile)
                      }}>Update</Button>

                      <Button variant='danger' onClick={() => DeleteCusto(custo._id)}>Delete</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>


        <Modal show={showModel} onHide={() => onHideModel()}>
          <Modal.Header closeButton>Update Food</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Customer FullName:</Form.Label>
              <Form.Control type='Text' value={CustomerFullName} onChange={(e) => setCustomerFullName(e.target.value)} />

              <Form.Label>Customer MobileNo:</Form.Label>
              <Form.Control type='Number' value={CustomerMobileNo} onChange={(e) => setCustomerMobileNo(e.target.value)} />

              <Form.Label> Customer Address:</Form.Label>
              <Form.Control type='Text' value={CustomerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />

              <Form.Label>City:</Form.Label>
              <Form.Control type='Number' value={City} onChange={(e) => setCity(e.target.value)} />

              <Form.Label>State:</Form.Label>
              <Form.Control type='Text' value={State} onChange={(e) => setState(e.target.value)} />

              <Form.Label>Pincode:</Form.Label>
              <Form.Control type='Number' value={Pincode} onChange={(e) => setPincode(e.target.value)} />
              
              <Form.Label>Profile:</Form.Label>
              <Form.Control type='String' value={Profile} onChange={(e) => setProfile(e.target.value)} />

            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => UpdateCusto()} className='me-2' >Update</Button>
            <Button variant='danger' onClick={() => onHideModel()}>cancel</Button>
          </Modal.Footer>
        </Modal>

      </Container>


    </div>
    </>
  )
}

export default Customer