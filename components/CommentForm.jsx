import React, { useState, useEffect } from 'react';

const CommentForm = ({ slug }) => {
  
  const [ error, setError ] = useState(false);
  const [ localStorage, setlocalStorage ] = useState(null);
  const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);

  return (
    <div>CommentForm</div>
  )
}

export default CommentForm;