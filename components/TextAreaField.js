import { useField } from 'formik';

const TextAreaField = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   const cssClass = meta.touched && meta.error ? "form__textarea error" : "form__textarea"

   return (
     <div className="form__textbox-field">
       <label htmlFor={props.id || props.name} className="form__label">{label}</label>
       <textarea className={cssClass} {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="form__validation--error">{meta.error}</div>
       ) : null}
     </div>
   );
 };

 export default TextAreaField;
