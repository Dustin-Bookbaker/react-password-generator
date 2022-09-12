import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import validate from "../utils/validate";
import generate from "../utils/generate";
import "./PasswordField.css"
import FeedbackField from "./FeedbackField";

const PasswordField = () => {
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => setIsValid(validate(password)), [password]);

    return (
        <div className="PasswordField">
            <div className="PasswordRow">
                <input
                    className="InputField"
                    type={isVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="ToggleButton"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                </button>
                {isValid ? <FontAwesomeIcon className="valid" icon={faCheck} /> : <FontAwesomeIcon className="invalid" icon={faXmark} />}
            </div >
            <FeedbackField value={password} />
            <div>
                <button
                    className="GenerateButton"
                    onClick={() => setPassword(generate(8))}
                >
                    Generate Password!
                </button>
            </div>
        </div>
    )
}

export default PasswordField;
