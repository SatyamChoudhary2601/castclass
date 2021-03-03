import React, { useState } from "react";
import {
  Label,
  Form,
  Button,
  FormGroup,
  Input,
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import FalconCardHeader from "../common/FalconCardHeader";
import "./CompanyTabs.css";
import axios from 'axios'
import Modal from 'react-awesome-modal';

// import data from './data.json'

const CreateCompany = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isRedirected, setRedirected] = useState(false)

   const options_industry = [
  {
    label:"Accounting",
    value:"accounting"
  },
  {
    label:"Airlines/Aviation",
    value:"airline/aviation"
  },
  {
    label:"Alternative Dispute Resolution",
    value:"alternative_dispute_resolution"
  },
  {
    label:"Alternative Medicine",
    value:"alternative_medicine"
  },
  {
    label:"Animation",
    value:"animation"
  },
  {
    label:"Apparel Fashion",
    value:"apparel_fashion"
  },{
    label:"Architecture Planning",
    value:"architecture_planning"
  },{
    label:"Arts and Crafts",
    value:"arts_and_crafts"
  },{
    label:"Automotive",
    value:"automotive"
  },{
    label:"Aviation Aerospace",
    value:"aviationA_aerospace"
  },{
    label:"Banking",
    value:"banking"
  },{
    label:"Biotechnology",
    value:"biotechnology"
  },{
    label:"Broadcast Media",
    value:"broadcast_media"
  },{
    label:"Building Materials",
    value:"building_materials"
  },
  {
    label:"Business Supplies and Equipment",
    value:"business_supplies_and_equipment"
  },{
    label:"Capital Markets",
    value:"capital_markets"
  },
  {
    label:"Chemicals",
    value:"chemicals"
  },{
    label:"Civic Social Organization",
    value:"civic_social_organization"
  },{
    label:"Civil Engineering",
    value:"civil_engineering"
  },{
    label:"Commercial Real Estate",
    value:"commercial_real_estate"
  },{
    label:"Computer Network Security",
    value:"computer_network_security"
  },{
    label:"Computer Games",
    value:"computer_games"
  },{
    label:"Computer Hardware",
    value:"computer_hardware"
  },
  {
    label:"Computer Networking",
    value:"computer_networking"
  },{
    label:"Computer Software",
    value:"computer_software"
  },{
    label:"Construction",
    value:"construction"
  },{
    label:"Consumer Electronics",
    value:"consumer_electronics"
  },{
    label:"Consumer Goods",
    value:"consumer_goods"
  },{
    label:"Consumer Services",
    value:"consumer_services"
  },{
    label:"Cosmetics",
    value:"cosmetics"
  },{
    label:"Dairy",
    value:"dairy"
  },{
    label:"Defense Space",
    value:"defense_space"
  },{
    label:"Design",
    value:"design"
  },
  {
    label:"Education Management",
    value:"education_management"
  },{
    label:"E-Learning",
    value:"e_learning"
  },{
    label:"Electrical/Electronic Manufacturing",
    value:"electrical_electronic_manufacturing"
  },{
    label:"Entertainment",
    value:"entertainment"
  },{
    label:"Environmental Services",
    value:"environmental_services"
  },{
    label:"Events Services",
    value:"events_services"
  },{
    label:"Executive Office",
    value:"executive_office"
  },{
    label:"Facilities Services",
    value:"facilities_services"
  },{
    label:"Farming",
    value:"farming"
  },{
    label:"Financial Services",
    value:"financial_services"
  },
  {
    label:"Fine Art",
    value:"fine_art"
  },{
    label:"Fishery",
    value:"fishery"
  },{
    label:"Food Beverages",
    value:"food_beverages"
  },{
    label:"Food Production",
    value:"food_production"
  },{
    label:"Fund-Raising",
    value:"fund_raising"
  },{
    label:"Furniture",
    value:"furniture"
  },{
    label:"Gambling Casinos",
    value:"gambling_casinos"
  },{
    label:"Glass, Ceramics Concrete",
    value:"glass_ceramics_concrete"
  },{
    label:"Government Administration",
    value:"government_administration"
  },
  {
    label:"Government Relations",
    value:"government_relations"
  },{
    label:"Graphic Design",
    value:"graphic_design"
  },{
    label:"Health and Fitness",
    value:"health_and_Fitness"
  },{
    label:"Higher Education",
    value:"higher_education"
  },{
    label:"Hospital Health Care",
    value:"hospital_health_care"
  },{
    label:"Hospitality",
    value:"hospitality"
  },{
    label:"Human Resources",
    value:"human_resources"
  },{
    label:"Import and Export",
    value:"import_and_export"
  },{
    label:"Individual Family Services",
    value:"individual_family_services"
  },
  {
    label:"Industrial Automation",
    value:"industrial_automation"
  },{
    label:"Information Services",
    value:"information_services"
  },{
    label:"Information Technology and Services",
    value:"information_technology_and_services"
  },{
    label:"Insurance",
    value:"insurance"
  },{
    label:"International Affairs",
    value:"international_affairs"
  },{
    label:"International Trade and Development",
    value:"international_trade_and_development"
  },{
    label:"Internet",
    value:"internet"
  },{
    label:"Investment Banking",
    value:"investment_banking"
  },{
    label:"Investment Management",
    value:"investment_management"
  },
  {
    label:"Judiciary",
    value:"judiciary"
  },{
    label:"Law Enforcement",
    value:"law_enforcement"
  },{
    label:"Law Practice",
    value:"law_practice"
  },{
    label:"Legal Services",
    value:"legal_services"
  },{
    label:"Legislative Office",
    value:"legislative_office"
  },{
    label:"Leisure, Travel Tourism",
    value:"leisure_travel_tourism"
  },{
    label:"Libraries",
    value:"libraries"
  },{
    label:"Logistics and Supply Chain",
    value:"logistics_and_supply_chain"
  },{
    label:"Luxury Goods Jewelry",
    value:"luxury_goods_jewelry"
  },{
    label:"Machinery",
    value:"machinery"
  },{
    label:"Management Consulting",
    value:"management_consulting"
  },
  {
    label:"Maritime",
    value:"maritime"
  },{
    label:"Marketing and Advertising",
    value:"marketing_and_advertising"
  },{
    label:"Market Research",
    value:"market_research"
  },{
    label:"Mechanical or Industrial Engineering",
    value:"mechanical_or_industrial_engineering"
  },{
    label:"Media Production",
    value:"media_production"
  },{
    label:"Medical Devices",
    value:"medical_devices"
  },{
    label:"Medical Practice",
    value:"medical_practice"
  },{
    label:"Mental Health Care",
    value:"mental_health_care"
  },{
    label:"Military",
    value:"military"
  },{
    label:"Mining Metals",
    value:"mining_metals"
  },{
    label:"Motion Pictures and Film",
    value:"motion_pictures_and_film"
  },{
    label:"Museums and Institutions",
    value:"museums_and_institutions"
  },{
    label:"Music",
    value:"Music"
  },{
    label:"Nanotechnology",
    value:"nanotechnology"
  },{
    label:"Newspapers",
    value:"newspapers"
  },{
    label:"Nonprofit Organization Management",
    value:"nonprofit_organization_management"
  },{
    label:"Oil Energy",
    value:"oil_energy"
  },{
    label:"Online Media",
    value:"online_media"
  },
  {
    label:"Outsourcing/Offshoring",
    value:"outsourcing_offshoring"
  },{
    label:"Package/Freight Delivery",
    value:"package_freight_delivery"
  },{
    label:"Packaging and Containers",
    value:"packaging_and_containers"
  },{
    label:"Paper Forest Products",
    value:"paper_forest_products"
  },{
    label:"Performing Arts",
    value:"performing_arts"
  },{
    label:"Pharmaceuticals",
    value:"pharmaceuticals"
  },{
    label:"Philanthropy",
    value:"philanthropy"
  },{
    label:"Photography",
    value:"photography"
  },{
    label:"Plastics",
    value:"plastics"
  },{
    label:"Political Organization",
    value:"political_organization"
  },{
    label:"Primary/Secondary Education",
    value:"primary_secondary_education"
  },{
    label:"Printing",
    value:"printing"
  },{
    label:"Professional Training Coaching",
    value:"professional_training_coaching"
  },{
    label:"Program Development",
    value:"program_development"
  },{
    label:"Public Policy",
    value:"public_policy"
  },{
    label:"Public Relations and Communications",
    value:"public_relations_and_communications"
  },
  {
    label:"Public Safety",
    value:"public_safety"
  },{
    label:"Publishing",
    value:"publishing"
  },{
    label:"Railroad Manufacture",
    value:"railroad_manufacture"
  },{
    label:"Ranching",
    value:"ranching"
  },{
    label:"Real Estate",
    value:"real_estate"
  },{
    label:"Recreational Facilities and Services",
    value:"recreational_facilities_and_services"
  },{
    label:"Religious Institutions",
    value:"religious_institutions"
  },{
    label:"Renewables Environment",
    value:"renewables_environment"
  },{
    label:"Research",
    value:"research"
  },{
    label:"Restaurants",
    value:"restaurants"
  },{
    label:"Retail",
    value:"retail"
  },{
    label:"Security and Investigations",
    value:"security_and_investigations"
  },{
    label:"Semiconductors",
    value:"semiconductors"
  },{
    label:"Shipbuilding",
    value:"shipbuilding"
  },{
    label:"Sporting Goods",
    value:"sporting_goods"
  },{
    label:"Sports",
    value:"sports"
  },{
    label:"Staffing and Recruiting",
    value:"staffing_and_recruiting"
  },{
    label:"Supermarkets",
    value:"supermarkets"
  },{
    label:"Telecommunications",
    value:"telecommunications"
  },{
    label:"Textiles",
    value:"textiles"
  },{
    label:"Think Tanks",
    value:"think_tanks"
  },{
    label:"Tobacco",
    value:"tobacco"
  },{
    label:"Translation and Localization",
    value:"translation_and_localization"
  },{
    label:"Transportation/Trucking/Railroad",
    value:"transportation_trucking_railroad"
  },{
    label:"Utilities",
    value:"utilities"
  },
  {
    label:"Venture Capital Private Equity",
    value:"venture_capital_private_equity"
  },{
    label:"Veterinary",
    value:"veterinary"
  },{
    label:"Warehousing",
    value:"warehousing"
  },{
    label:"Wholesale",
    value:"wholesale"
  },{
    label:"Wine and Spirits",
    value:"wine_and_spirits"
  },{
    label:"Wireless",
    value:"wireless"
  },{
    label:"Writing and Editing",
    value:"writing_and_editing"
  }

]
  let bodyFormData = new FormData();
  const [formData, setFormData] = useState({
    companyname: "",
    company_username:"",
    established: "",
    employees: "",
    sales: "",
    market: "",
    certifications: "",
    headquarter: "",
    logo: "",
    banner: "",
    location: "",
    profilevideo: "",
    business: " ",
    services: " ",
    productcertifications: "",
    industry: "",
    skills: [],
    profile: "",
    verify: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    country: "",
    aboutus: "",
  });
  const {
    companyname,
    company_username,
    established,
    employees,
    sales,
    market,
    certifications,
    headquarter,
    logo,
    banner,
    location,
    profilevideo,
    business,
    services,
    productcertifications,
    industry,
    skills,
    profile,
    verify,
    phone,
    email,
    city,
    state,
    country,
    aboutus,
  } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "=================================");
    bodyFormData.append('default_user', localStorage.getItem('default_user'));
    bodyFormData.append('company_name', companyname);
    bodyFormData.append('company_email', email);
    bodyFormData.append('year_established', established);
    bodyFormData.append('number_of_emp', employees);
    bodyFormData.append('total_annual_sales', sales);
    bodyFormData.append('main_markets', market);
    bodyFormData.append('certifications', certifications);
    bodyFormData.append('headquarter', headquarter);
    bodyFormData.append('company_location', location);
    bodyFormData.append('company_username', company_username);
    bodyFormData.append('company_logo', logo, logo.name);
    bodyFormData.append('company_banner', banner, banner.name);
    bodyFormData.append('company_video', profilevideo);
    bodyFormData.append('company_industry', industry);
    bodyFormData.append('company_profile', profile);
    bodyFormData.append('company_aboutus', aboutus);
    bodyFormData.append('company_contactus', phone);
    bodyFormData.append('business_type', business);
    bodyFormData.append('products_services', services);
    bodyFormData.append('product_certifications', productcertifications);
    bodyFormData.append('company_city', city);
    bodyFormData.append('company_state', state);
    bodyFormData.append('company_country', country);
    // bodyFormData.append('skill', skills);
    
    axios({
    method: 'post',
    url: 'http://139.59.35.110/castclass/api/v2/companies',
    data: bodyFormData,
    headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
        //handle success
        // console.log(response);
        if(response.data.msg){
        console.log(response);

        setModalOpen(true)
  

  }
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
  };
  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeHandlerFile = e => {
    setFormData({
      ...formData,
      logo: e.target.files[0]
    })
  }

  const onChangeHandlerFileBanner = e => {
    setFormData({
      ...formData,
      banner:e.target.files[0]
    })
  }
   const closeModal = () => {
        setModalOpen(false)
        setRedirected(true)
    }
    if(isRedirected === true){
      return <Redirect to="/pages/company"/>
    }
  return (
    <>
    <Modal visible={isModalOpen} width="400" height="300" effect="fadeInUp" onClickAway={() =>closeModal()}>
        <div style={{textAlign:"center"}}>
            <img src="https://webstockreview.net/images/check-clipart-gif-animation-18.gif" width="200px" style={{marginTop:'0px', textAlign:'center'}}/>

            <h1 style={{textAlign:'center'}}>Success</h1>
            <p style={{textAlign:'center'}}>Operation processed successfully</p>
            <Button style={{marginTop:'2px'}} color="primary" size="lg" onClick={() => closeModal()}>OK</Button>
        </div>
    </Modal>
      <Card className="mb-3">
        <FalconCardHeader
          title="Create Company"
          titleTag="h5"
          className="bg-light text-left pad-cl card-header"
        />
        <CardBody className="fs--1">
      <Container>
        <Row>
          <Col md="8">
          <Form onSubmit={handleSubmit}>
            <FormGroup className="required">
              <Label >Company Name</Label>

              <Input
                type="text"
                placeholder="Company Name"
                name="companyname"
                value={companyname}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label>Company Username</Label>

              <Input
                type="text"
                placeholder="Company Username"
                name="company_username"
                value={companyname}
                disabled
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label>Company Url : {companyname}.castclass.com</Label>
            </FormGroup>

            <FormGroup className="required">
              <Label>Year Established</Label>

              <Input
                type="text"
                placeholder="Year Established"
                name="established"
                value={established}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label>Number of Employees</Label>

              <Input
                type="select"
                name="employees"
                value={employees}
                required
                onChange={(e) => onChangeHandler(e)}
              >
                <option value="1_25people">1 - 25 People</option>
                <option value="2_50people">2 - 50 People</option>
                <option value="3_100people">3 - 100 People</option>
                <option value="4_150people">4 - 150 People</option>
                <option value="5_200people">5 - 200 People</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Total Annual Sales Volume</Label>

              <Input
                type="text"
                placeholder="Total Annual Sales Volume"
                name="sales"
                value={sales}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label>Main Markets</Label>

              <Input
                type="text"
                placeholder="Main Markets"
                name="market"
                value={market}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label>Certifications</Label>

              <Input
                type="text"
                placeholder="Certifications"
                name="certifications"
                value={certifications}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label> Headquarter</Label>

              <Input
                type="text"
                placeholder="Headquarter"
                name="headquarter"
                value={headquarter}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label> Location</Label>

              <Input
                type="text"
                placeholder="Location"
                name="location"
                value={location}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup className="required">
              <Label> Phone</Label>

              <Input
                type="number"
                placeholder="Phone"
                name="phone"
                value={phone}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup className="required">
              <Label> Email</Label>

              <Input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup className="required">
              <Label>Company Logo</Label>
              <Input
                type="file"
                name="logo"
                // value={logo}
                required
                onChange={(e) => onChangeHandlerFile(e)}
              />
            </FormGroup>
            <FormGroup className="required">
              <Label>Company Banner</Label>
              <Input
                type="file"
                name="banner"
                // value={banner}
                required
                onChange={(e) => onChangeHandlerFileBanner(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label> Profile Video (Note: Enter valid youtube url)</Label>

              <Input
                type="text"
                placeholder="Note: Enter valid youtube url"
                name="profilevideo"
                value={profilevideo}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label> Business</Label>

              <Input
                type="text"
                placeholder="Business Type"
                name="business"
                value={business}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label> Products Services</Label>

              <Input
                type="text"
                placeholder="Products Services"
                name="services"
                value={services}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label> Product Certifications</Label>

              <Input
                type="text"
                placeholder="Product Certifications"
                name="productcertifications"
                value={productcertifications}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup className="required">
              <Label>Industry</Label>

              <Input
                type="select"
                name="industry"
                value={industry}
                required
                onChange={(e) => onChangeHandler(e)}
              >
              {options_industry.map((data, key) => (
                <option key={key} value={data.value}>{data.label}</option>
                ))}
             
              </Input>
              
            </FormGroup>

            <FormGroup>
              <Label> Skills/Roles hire for:</Label>

              <Input
                type="text"
                placeholder=""
                name="skills"
                value={skills}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label> Company City</Label>

              <Input
                type="text"
                placeholder="Company City"
                name="city"
                value={city}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label> Company State</Label>

              <Input
                type="text"
                placeholder="Company State"
                name="state"
                value={state}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label> Company Country</Label>

              <Input
                type="text"
                placeholder="Company Country"
                name="country"
                value={country}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label> Company Profile</Label>

              <Input
                type="textarea"
                name="profile"
                value={profile}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label> About Us</Label>

              <Input
                type="textarea"
                name="aboutus"
                value={aboutus}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label>Verify the Company</Label>

              <Input
                type="select"
                name="verify"
                value={verify}
                required
                onChange={(e) => onChangeHandler(e)}
              >
                <option value="applied">Applied </option>
                <option value="not_applied">Not Applied </option>
              </Input>
            </FormGroup>
            <Button color="primary" className="button_btn" type="submit">
              Submit
            </Button>
            <Link to="/pages/recruiter">
              <Button color="secondary">Cancel</Button>
            </Link>
          </Form>
        </Col>
      <Col md="4"></Col>
    </Row>
  </Container>
        </CardBody>
      </Card>

    </>
  );
};

export default CreateCompany;
