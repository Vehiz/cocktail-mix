import { Form, redirect } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';



export const action = async({request})=>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const response = await axios.post( data)
  console.log(response)
  return null
}
const Newsletter = () => {
  return (
    <Form className="form" method='POST'>
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our newsletter
      </h4>
      {/**name */}
      <div className="form-row">
        <label htmlFor="firstName" className="form-label">
          first name
        </label>
        <input
          type="text"
          className="form-input"
          name="firstName"
          id="firstName"
          defaultValue="Ehiz"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="Ehiz"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@email.com"
        />
      </div>
      <button type="submit" className="btn btn-block" style={{marginTop: '0.5rem'}}>
        submit
      </button>
    </Form>
  );
};

export default Newsletter;
