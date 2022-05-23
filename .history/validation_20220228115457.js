import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Vui lòng nhập Họ và tên đệm'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Vui lòng nhập tên'),
})
