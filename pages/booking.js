import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import TextField from "../components/TextField"
import SelectBox from "../components/SelectBox"

function booking() {
    return (
        <div>
            <Formik
                initialValues={{
                    customerName: '',
                    phone: '',
                    email: '',
                    acceptedTerms: false, // added for our checkbox
                    escort: '', // added for our select
                    incallOutcall: '',
                    }}
                validationSchema={Yup.object({
                    customerName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    phone: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    escort: Yup.string()
                        .oneOf(
                        ['designer', 'development', 'product', 'other'],
                        'Invalid Job Type'
                        ),
                    incallOutcall: Yup.string()
                        .oneOf(
                        ['incall', 'outcall'],
                        'Invalid Type'
                        )
                        .required('Required'),
                })}
                onSubmit={async(values, { setSubmitting }) => {
                    await fetch("/api/booking", {
                        body: JSON.stringify({
                            escort: values.escort,
                            customerName: values.customerName,
                            incallOutcall: values.incallOutcall,
                            phone: values.phone,
                            email: values.email,
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST'
                }
            )}}>
                {props => {
        const {
          values,
          setFieldValue
        } = props;
        return (
            <Form>
                <SelectBox label="Escort" name="escort">
                    <option value="">Select escort</option>
                    <option value="designer">Jess</option>
                    <option value="development">Tess</option>
                    <option value="product">Maggie</option>
                    <option value="other">Other</option>
                </SelectBox>

                <SelectBox label="Incall/Outcall" name="incallOutcall">
                    <option value="">Select</option>
                    <option value="incall">Incall</option>
                    <option value="outcall">Outcall</option>
                </SelectBox>

                <TextField
                    label="Customer Name"
                    name="customerName"
                    type="text"
                    placeholder="John"
                />

                <TextField
                    label="Phone Number"
                    name="phone"
                    type="text"
                    placeholder="07909765432"
                />

                <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="John@gmail.com"
                />

                <DatePicker
                    selected={(values.date && new Date(values.date)) || null}
                    onChange={date => setFieldValue("date", date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    />

                <button type="submit">Submit</button>
            </Form>
        )}}
        </Formik>
    </div>
    )
}

export default booking
