import React from "react";

export default function CompanyDetailsDisplay({
  selectedCompanyDetails,
  clearSelectedCompanyDetails,
}) {
  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={() => clearSelectedCompanyDetails()}>X</button>
    </div>
  );
}
