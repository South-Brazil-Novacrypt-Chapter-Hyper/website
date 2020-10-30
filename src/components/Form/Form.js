import React from 'react'
import './Form.css'
import submit from '/./Users/joaoz/Desktop/pagina-cadastro-site/src/svg/submit.svg'

function Form() {
    return (
        <div className="form">
            <div className="form__description">
                <div className="form__descriptionName">
                    <span>Project Name</span>
                    <input type="text"/>
                </div>
                <div className="form__descriptionPlatform">
                    <span>Platform</span>
                    <input type="checkbox"/>
                    <span className="spanNoMargin">Web</span>
                    <input type="checkbox"/>
                    <span className="spanNoMargin">Mobile</span>
                    <input type="checkbox"/>
                    <span className="spanNoMargin">Desktop</span>
                </div>
                <div className="form__descriptionDescription">
                    <span>Description</span>
                    <textarea></textarea>
                </div>
            </div>
            <div className="form__descriptionTwo">
                <p>Scope</p>
                <img src={submit}/>
            </div>
        </div>
    )
}

export default Form
