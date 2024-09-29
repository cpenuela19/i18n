import React from "react";
import { FormattedDate, FormattedNumber } from "react-intl";

const Job = (props) => {
  const isSpanish = (props.locale || 'en').startsWith('es'); 

  const formatSalary = (salary) => {
    if (salary >= 1) {
      return isSpanish
        ? salary === 1
          ? `${salary} millón`
          : `${salary} millones`
        : `${salary} million`;
    }
    return salary;
  };

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{formatSalary(props.offer.salary)}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber 
          value={props.offer.visits} 
          style="decimal" 
          minimumFractionDigits={0} 
        />
      </td>
    </tr>
  );
};

export default Job;
