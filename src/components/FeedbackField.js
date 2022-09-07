import React from "react";
import "./FeedbackField.css";

const FeedbackField = (password) => {
    const count = new RegExp("^(?=.{8,})");
    const lower = new RegExp("^(?=.*[a-z])");
    const upper = new RegExp("^(?=.*[A-Z])");
    const nums = new RegExp("^(?=.*[0-9])");
    const special = new RegExp("^(?=.*[!#$%&*+-.:;=?@_])");
    return (
        <div className="FeedbackField">
            {count.test(password.value) ? null : <div>Password must be at least 8 characters</div>}
            {lower.test(password.value) ? null : <div>Password must contain at least 1 lower case character</div>}
            {upper.test(password.value) ? null : <div>Password must contain at least 1 upper case character</div>}
            {nums.test(password.value) ? null : <div>Password must contain at least 1 number</div>}
            {special.test(password.value) ? null : <div>Password must contain at least 1 special character (!#$%&*+-.:;=?@_)</div>}
        </div>
    );
}

export default FeedbackField;