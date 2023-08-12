import { useState } from "react";
import GeneralInfoDisplay from "./GerneralInfoDisplay";

const GeneralInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [accordian, setAccordian] = useState(false);

  return (
    <div className="general-info">
      <div className="general-info-left ">
        <div className="header">
          <h2>General Information</h2>
          <button onClick={() => setAccordian((prev) => !prev)}>{accordian?"-":"+"} </button>
        </div>
        {accordian ? (
          <>
            <input
              type="text"
              name="Fullname"
              placeholder="Enter your Full Name"
              id="full-name"
              value={name}
              disabled={submitted}
              required
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              disabled={submitted}
              onChange={(event) => setEmail(event.target.value)}
            />

            <input
              type="tel"
              name="phone"
              id="phone"
              maxLength={10}
              placeholder="Phone"
              value={phone}
              disabled={submitted}
              onChange={(event) => setPhone(event.target.value)}
            />

            <input
              type="Address"
              name="address"
              id="address"
              placeholder="Street, City, Postal Code"
              value={address}
              disabled={submitted}
              onChange={(event) => setAddress(event.target.value)}
            />
            <button type="submit" onClick={() => setSubmitted((prev) => !prev)}>
              {submitted ? "Edit" : "Submit"}
            </button>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="general-info-right">
        { (
          <GeneralInfoDisplay
            name={name}
            email={email}
            phone={phone}
            address={address}
          />
       
        )}
      </div>
    </div>
  );
};

export default GeneralInfo;
