import axios from './axios';


export const checkValidity = (value, rules) => {
    let isValid = true
    if (!rules) {
        return true
    }
    //should not be empty
    if (rules.required) {
        isValid = value.trim() !== '' && isValid
    }
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }
    if (rules.numeric) {
        const pattern = /^\d+$/
        isValid = pattern.test(value) && isValid
    }
    if (rules.isEmail) {
        const pattern = /^[a-zA-Z0-9][a-zA-Z0-9-_.]+@([a-zA-Z]|[a-zA-Z0-9]?[a-zA-Z0-9-]+[a-zA-Z0-9])\.[a-zA-Z0-9]{2,10}(?:\.[a-zA-Z]{2,10})?$/
        isValid = pattern.test(value) && isValid
    }
    return isValid
}

export const updateObject = (oldObject, updateObject) => {
    return {
        ...oldObject,
        ...updateObject
    }
}

export const downloadResume = () => {
    axios({
            url: '/api/download',
            method: 'GET',
            responseType: 'blob',
        })
        .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Olesia_Guidu_resume.pdf');
            document.body.appendChild(link);
            link.click();
        })
        .catch((err) => console.log(err.message));
};
