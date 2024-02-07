
import {toast} from "react-hot-toast";

let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;//change=\{1} \{1}

class FormHelper {
    IsEmpty(value){
        return value.length===0;
    }
    IsEmail(value){
        return !EmailRegx.test(value)
    }
    IsMobile(value){
        return !MobileRegx.test(value)
    }

    ErrorToast(msg){
        toast.error(msg,{position:"bottom-center"})
    }
    SuccessToast(msg){
        toast.success(msg,{position:"bottom-center"})
    }
    getBase64(file){
        return new Promise((resolve,reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
}
export const {
    IsEmpty,
    IsEmail,
    IsMobile,
    ErrorToast,
    getBase64,
    SuccessToast
}=new FormHelper();

// react quill toolbar modules
/*
export const quillModule = () => {
    return {
        toolbar:  [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // out-dent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                         // remove formatting button
        ]
    }

}*/
