

const GeneralInfoDisplay = ({name,email,phone,address}) => {

  return (
    <div className="general-info-display">
      <h3>{ name}</h3>
      <h4> { email}</h4>
      <h4>{phone}</h4>
      <h4>{address}</h4>
    </div>
  )
}

export default GeneralInfoDisplay
