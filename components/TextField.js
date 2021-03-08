import { useField } from 'formik';

const TextField = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     <div className="form__textbox-field">
       <label htmlFor={props.id || props.name} className="form__label">{label}</label>
       <input className="form__textbox" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };

 export default TextField;
