import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";
import './jL.css'

const JobsList = (props) => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visits: 1250,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visits: 2500,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visits: 850,
    },
  ]);
  
  const isSpanish = props.locale.startsWith('es');

  return (
    <div>
      <table className="table">
        <thead className={isSpanish ? "thead-light" : "thead-dark"}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position" defaultMessage="Position" />
            </th>
            <th scope="col">
              <FormattedMessage id="Company" defaultMessage="Company" />
            </th>
            <th scope="col">
              <FormattedMessage id="Salary" defaultMessage="Salary" />
            </th>
            <th scope="col">
              <FormattedMessage id="City" defaultMessage="City" />
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate" defaultMessage="Publication Date" />
            </th>
            <th scope="col">
              <FormattedMessage id="Views" defaultMessage="No. of Visits" />
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, index) => (
            <Job key={index} offer={offer} locale={props.locale} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
