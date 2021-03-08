 import { useField } from 'formik';

 const SelectBox = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
    <div className="form__textbox-field">
       <label htmlFor={props.id || props.name} className="form__label">{label}</label>
       <div className="selectbox">
        <select {...field} {...props} className="selectbox__select"/>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
     </div>
   );
 };

 export default SelectBox;
