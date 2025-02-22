'use client'
import React,{useState} from "react";
import styles from './mainpage.module.css'

export interface MainpageProps{
}

export const Mainpage: React.FC<MainpageProps> = (props) => {

    const {} = {...props}
    const [mainState, setmainState] = useState({
        Name:'',
        Email:'',
        Phone:'',
        CommunicationPrefer:'',
        messageText:'',
        Agree:false,
        NameError:'',
        EmailError:'',
        PhoneError:'',
        CommunicationPreferError:'',
        messageTextError:'',
    })
    const validateField = (name: string, value:string) => {
        switch (name) {
            case 'Name':
                if(!value){
                    return 'This field is required'
                }
                if (value.length < 2){
                    return 'Min lenght should be 2'
                }
                if (value.length > 10){
                    return 'Max lenght should be 10'
                }
                return ;
            case 'Email':
                if(!value){
                    return 'This field is required'
                }
                return ;
            case  'Phone':
                if(!value){
                    return 'This field is required'
                }
                if (value.length != 11){
                    return 'Lenght should be 11'
                } 
                return ;
            case 'CommunicationPrefer':
                if(!value){
                    return 'This field is required'
                }
                return ;   
            case 'messageText':
                if(!value){
                    return 'This field is required'
                }
                if (value.length < 10){
                    return 'Min lenght should be 10'
                }
                if (value.length > 255){
                    return 'Max lenght should be 255'
                }
                return ;   
            default:
                return ''        
        }
    }

    const onChangeCheckBox = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setmainState({...mainState, Agree:!mainState.Agree})
    }

    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setmainState({...mainState, [name]:value})
    }

    const onChangeTextArea = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name,value} = e.target
        setmainState({...mainState, [name]:value})
    }

    const onSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = {
            NameError: validateField('Name', mainState.Name),
            EmailError: validateField('Email', mainState.Email),
            PhoneError: validateField('Phone', mainState.Phone),
            CommunicationPreferError: validateField('CommunicationPrefer', mainState.CommunicationPrefer),
            messageTextError: validateField('messageText', mainState.messageText),
        }
        setmainState((prev) => ({
            ...prev,
            ...errors
        }))

        const hasErrors: boolean = Object.values(errors).some((error) => error)

        if (hasErrors){
            console.log('НЕПРАВИЛЬНО')
            return
        }

        console.log(Object(mainState))
        alert(`
            Name: ${Object.values(mainState)[0]}  
            Email: ${Object.values(mainState)[1]}  
            Phone: ${Object.values(mainState)[2]} 
            Prefer communication: ${Object.values(mainState)[3]} 
            Message text: ${Object.values(mainState)[4]}
            Agree: ${Object.values(mainState)[5]}`)
        setmainState({
            Name:'',
            Email:'',
            Phone:'',
            CommunicationPrefer:'',
            messageText:'',
            Agree:false,
            NameError:'',
            EmailError:'',
            PhoneError:'',
            CommunicationPreferError:'',
            messageTextError:'',
        })
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setmainState((prev) => ({
            ...prev,
            [name + 'Error']: validateField(name, value)
        }))
    }

    return(   
    <div className={styles.mainDiv}>
        
        <p className={styles.mainP}><p className={styles.headingP}>Contact Us</p>Get in touch with us! Whether you have
                a questions, feedback, or just want to say hello,
                we`re here for you</p>
        <form onSubmit={onSubmit} className={styles.mainform}>
            <label htmlFor='heading' className={styles.heading}>Send us a Message</label>
            <input className={styles.input} name='Name'  placeholder='Name' value={mainState.Name} onChange={onChange} onBlur={onBlur}/>
            {mainState.NameError && <span className={styles.span}>{mainState.NameError}</span>}
            <input className={styles.input} name='Email' type="email" placeholder='Email' value={mainState.Email} onChange={onChange} onBlur={onBlur}/>
            {mainState.EmailError && <span className={styles.span}>{mainState.EmailError}</span>}
            <input className={styles.input} name='Phone'  placeholder='Phone' value={mainState.Phone} onChange={onChange} onBlur={onBlur}/>
            {mainState.PhoneError && <span className={styles.span}>{mainState.PhoneError}</span>}
            <label htmlFor='heading' className={styles.preferred}>Preferred contact method of communicaton</label>
            <div className={styles.Communication}>
            <input type='radio' title="email" id='Email' name='CommunicationPrefer' value='email' onChange={onChange} onBlur={onBlur}/>
            <label>Email</label>
            <input type='radio' title="phone" id='Phone' name='CommunicationPrefer' value='phone' onChange={onChange} onBlur={onBlur}/>
            <label>Phone</label>
            </div>
            {mainState.CommunicationPreferError && <span className={styles.span}>{mainState.CommunicationPreferError}</span>}
            <label><input className={styles.inputCheckBox} type='checkbox' id='Agree' name='Agree' checked = {mainState.Agree} onChange={onChangeCheckBox} onBlur={onBlur}/>I agree to the processing of my data</label>
            <textarea className={styles.inputMessage} placeholder='Message' rows={9} onChange={onChangeTextArea} value={mainState.messageText} name='messageText' onBlur={onBlur}/>
            {mainState.messageTextError && <span className={styles.span}>{mainState.messageTextError}</span>}
            <button type='submit' className={styles.btn}>Submit</button>
        </form>
    </div>
    )
}