import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import TextField from "../components/TextField"
import SelectBox from "../components/SelectBox"
import TextAreaField from "../components/TextAreaField"
import DateField from "../components/DateField"

import Layout from '../components/Layout'
import styles from '../styles/components/booking.module.scss'

function booking() {
     useEffect( () => { 
        document.querySelector("body").classList.remove("light-mode") 
        document.querySelector("body").classList.add("dark-mode") 
    });

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className={styles.header}>
                        <h1>Contact</h1>
                    </div>
                </div>
                <div className="row">
                    <div className={styles.intro}>
                        <p>Thank you for contacting our London Escort Agency Eva Noir. Please see below the booking form where you can book any of our beautiful girls.</p>
                        <p>If you would rather call us then please call +447828886654.
                        We guarantee that we will answer your questions quickly and confidentially.</p>
                        <p>We are open from 10am – 3am, 7days a week. We will do our best to find the most perfect escort for you.</p>
                        <p>Once again thank you for choosing London Party Girl the number one London Escort Agency.</p>
                    </div>
                    <div className={styles.formWrapper}>
                        <Formik
                            initialValues={{
                                customerName: '',
                                phone: '',
                                email: '',
                                escort: '', // added for our select
                                incallOutcall: '',
                                duration: '',
                                dateTime: '',
                                specialInstructions: ''
                                }}
                            validationSchema={Yup.object({
                                customerName: Yup.string()
                                    .required('Required'),
                                phone: Yup.string()
                                    .required('Required'),
                                email: Yup.string()
                                    .email('Invalid email address')
                                    .required('Required'),
                                escort: Yup.string()
                                    .oneOf(
                                    ['designer', 'development', 'product', 'other'],
                                    'Invalid Job Type'
                                    ).required('Required'),
                                incallOutcall: Yup.string()
                                    .oneOf(
                                    ['incall', 'outcall'],
                                    'Invalid Type'
                                    )
                                    .required('Required'),
                                duration: Yup.string()
                                    .required('Required'),
                                dateTime: Yup.string()
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
                                        dateTime: values.dateTime,
                                        duration: values.duration,
                                        specialInstructions: values.specialInstructions,
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
                                <TextField label="Customer Name"
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
                                <DateField 
                                    selected={(values.dateTime && new Date(values.dateTime)) || null}
                                    onChange={dateTime => setFieldValue("dateTime", dateTime)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    className="form__textbox"
                                    name="dateTime"
                                    label="Date and Time"
                                />
                                <TextField
                                    label="Duration"
                                    name="duration"
                                    type="text"
                                    placeholder="duration"
                                />
                                <TextAreaField
                                    label="Special Instructions"
                                    name="specialInstructions"
                                    placeholder="Any speacil request or instructions"
                                />
                                <button type="submit" className="btn">Submit</button>
                            </Form>
                        )}}
                        </Formik>
                    </div>
            </div>
        </div>
    </Layout>
    )
}

export default booking
