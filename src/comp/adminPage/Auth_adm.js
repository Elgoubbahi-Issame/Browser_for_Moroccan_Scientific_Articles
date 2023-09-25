import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Auth_adm() {
    var history = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [IsPending, setIsPending] = useState(false);
    const [isValidate, setisValidate] = useState(true)
    const Login = (e) => {
        e.preventDefault();
        let i = 0;

        setIsPending(true);
        setTimeout(() => {
            const data = [
                { email: 'issam@gmail.com', password: '12345678', id_admin: 1 },
                { email: 'mohamed@gmail.com', password: '12345678', id_admin: 2 },
                { email: 'sanae@gmail.com', password: '12345678', id_admin: 3 }
            ]
            data.forEach(d => {
                if (d.email.toLowerCase() == email.toLowerCase() && d.password.toLowerCase() == password.toLowerCase()) {
                    // console.log(email.toLowerCase(), password);
                    setisValidate(true)
                    localStorage.setItem('id_Admin', d.id_admin)
                    history("/Admin/Dashboard");
                }
                else i++;
            })
            setIsPending(false)
            if (i == 3) {
                setisValidate(false);
                alert("ERROR !!!");
            }
        }, 1000);
    }

    return (
        <div className='auth-form'>
            <div className="title" style={{ background: isValidate ? `linear-gradient(-135deg,#1827ce,#8d95f2)` : `linear-gradient(-135deg,#ce1818,#e67070)` }}>
                <h2>Login</h2>
            </div>
            <form onSubmit={Login}>
                <div className="field">
                    <input type="text" onChange={(e) => { setemail(e.currentTarget.value); }} required />
                    <label>Email Address</label>
                </div>
                <div className="field">
                    <input type="password" onChange={(e) => { setpassword(e.currentTarget.value); }} required />
                    <label>Password</label>
                </div>

                <div className="field" >
                    {!IsPending && <input style={{ background: isValidate ? `linear-gradient(-135deg,#1827ce,#8d95f2)` : `linear-gradient(-135deg,#ce1818,#e67070)` }} type="submit" value="Login" />}
                    {IsPending && <input style={{ opacity: 0.6, background: isValidate ? `linear-gradient(-135deg,#1827ce,#8d95f2)` : `linear-gradient(-135deg,#ce1818,#e67070)` }} type="submit" value="Wait ..." />}
                </div>
            </form>
        </div>

    )
}

export default Auth_adm