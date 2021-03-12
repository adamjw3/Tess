 import { useField } from 'formik';

 const SelectBox = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   const cssClass = meta.touched && meta.error ? "selectbox__select error" : "selectbox__select"

   return (
    <div className="form__textbox-field">
       <label htmlFor={props.id || props.name} className="form__label">{label}</label>
       <div className="selectbox">
        <select {...field} {...props} className={cssClass}/>
      </div>
      {meta.touched && meta.error ? (
          <div className="form__validation--error">{meta.error}</div>
        ) : null}
     </div>
   );
 };

 export default SelectBox;
