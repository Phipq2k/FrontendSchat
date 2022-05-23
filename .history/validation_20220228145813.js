import * as Yup from 'yup'

// const formatString = /^[a-zA-Z ']{1,25}$/
const formatString =
    /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ_ ']{1,25}$/

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(25, 'Vui lòng nhập dưới 25 ký tự')
        .matches(formatString, 'Vui lòng nhập đúng định dạng')
        .required('Vui lòng nhập Họ và tên đệm'),
    lastName: Yup.string()
        .max(25, 'Vui lòng nhập dưới 25 ký tự')
        .matches(formatString, 'Vui lòng nhập đúng định dạng')
        .required('Vui lòng nhập tên'),
})
