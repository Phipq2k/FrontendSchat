import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(25, 'Too Long!')
        .required('Vui lòng nhập Họ và tên đệm'),
    lastName: Yup.string().max(25, 'Too Long!').required('Vui lòng nhập Tên'),
})
