import * as React from 'react'
import './styles.scss'



export type fieldProps = {
  label?: string
  showError: boolean
  errMessage?: string
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

const Field: React.FC<fieldProps> = ({ label, showError, errMessage, inputProps }) => {
  const [allowError, setAllowError] = React.useState(false);
  return (
    <div className={`inputwith ${showError && allowError ? "inputwitherror" : ""}`}>
      <label>{label}</label>
      <input {...inputProps} onBlur={() => setAllowError(true)}></input>
      {allowError && showError && (
        <h6>
          {errMessage}
        </h6>
      )}
    </div>
  );
};





export default Field