import React, { useState } from "react";
import { Divider, Input, Button } from 'antd';

export default function FormForFeedback ({ saveFeedback }) {
  const [feedbackText, setFeedbackText ] = useState('');

  const onChange = (e) => {
    setFeedbackText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    saveFeedback(feedbackText);
    setFeedbackText('');
  }

  return (
    <div>
      <Divider orientation='left'>FEEDBACK</Divider>
      <form onSubmit={onSubmit} className="user-modal-form">
        <Input onChange={onChange} value={feedbackText} placeholder="Leave a feedback..." />
        <Button htmlType="submit" className="user-modal-form-btn">Save</Button>
      </form>
    </div>
  )
}