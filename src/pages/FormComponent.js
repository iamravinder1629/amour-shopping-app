import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import './formcomponent.css'
import { useDispatch } from 'react-redux'
import { setUserData } from '../store/userSlice'
function FormComponent() {
    // const userData = useSelector(state => state.user.data);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onSubmit = (values) => {
        dispatch(setUserData(values))
        navigate("home")

    }

    const initialValues = {
        name: "",
        email: "",
        address: "",
        contact: ""
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("*Name field is required"),
        email: Yup.string().email("*Enter the valied email address").required("*Email is required"),
        address: Yup.string().required("*Address field is required"),
        contact: Yup.string().required("*Contact field is required")
            .matches(/^[0-9]{10}$/, "*Must be exactly 10 digits"),
    })
    return (
        <div className='d-flex align-items-center form-background'>
            <div className="col-lg-6 col-md-8 col-sm-12 col-11 col-xs-12 m-auto p-4 form-container">
                <h3>My login</h3>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <label className='mt-4'>Name:</label>
                        <Field type="text" className='form-control transparent-field' name="name" />
                        <ErrorMessage name='name'>
                            {(error) => <p className='text-warning'>{error}</p>}
                        </ErrorMessage>

                        <label className='mt-4'>Email:</label>
                        <Field type="email" className='form-control transparent-field' name="email" />
                        <ErrorMessage name='email'>
                            {(error) => <p className='text-warning'>{error}</p>}
                        </ErrorMessage>

                        <label className='mt-4'>Address:</label>
                        <Field type="text" className='form-control transparent-field' name="address" />
                        <ErrorMessage name='address'>
                            {(error) => <p className='text-warning'>{error}</p>}
                        </ErrorMessage>

                        <label className='mt-4'>contact:</label>
                        <Field type="number" className='form-control transparent-field' name="contact" />
                        <ErrorMessage name='contact'>
                            {(error) => <p className='text-warning'>{error}</p>}
                        </ErrorMessage>

                        <button type="submit" className=' btn btn-outline-light rounded-0 mt-4 mt-2'>
                            Log-in
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default FormComponent
