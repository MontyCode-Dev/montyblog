import React, { useState, useEffect, useRef } from "react";

import { submitComment } from "../services";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setlocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []);

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if(!comment || !name || !email) {
      setError(true);
      return;
    };

    const commentObj = { name, email, comment, slug };

    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);

        }, 3000);
      })
  };

  return (
    <section
      id="commentForm"
      className="container mx-auto bg-white shadow rounded mt-12"
    >
      <div className="xl:w-full border-b border-gray-100 py-5">
        <div className="w-11/12 mx-auto">
          <h1 className="lg:text-3xl text-2xl text-gray-800 font-bold">
            Deja tu feedback 🙌
          </h1>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="container mx-auto">
          <div className="my-8 mx-auto xl:w-full xl:mx-0">
            <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
              <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                <input
                  ref={nameEl}
                  type="text"
                  name="name"
                  className="border border-gray-100 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-400 text-gray-800"
                  placeholder="Nombre"
                />
              </div>
              <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                <div className="relative">
                  <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                    <img
                      className="dark"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_card_with_inputs-svg2.svg"
                      alt="mail"
                    />
                  </div>
                  <input
                    ref={emailEl}
                    name="email"
                    required
                    className="border border-gray-100 pl-16 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-400 text-gray-800 w-full"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="mt-8 w-full">
                <textarea
                  ref={commentEl}
                  name="comment"
                  className="border border-gray-100 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-400 resize-none w-full"
                  placeholder="Comentario"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="mt-8">
              <div className="py-4 flex items-center">
                  <div className="border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative cursor-pointer">
                      <input 
                        type="checkbox"
                        className="focus:outline-none focus:ring-2 focus:ring-gray-700 checkbox focus:opacity-100 opacity-0 absolute cursor-pointer w-full h-full" 
                        ref={storeDataEl}
                        name="storeData"
                        id="storeData"
                      />
                      <div className="check-icon hidden bg-violet-400 text-white rounded-sm">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_layout-svg1.svg" alt="check-icon"/>
                      </div>
                  </div>
                  <p className="focus:outline-none text-sm leading-none ml-2">Recordar mis datos para mi proximo comentario.</p>
              </div>
            </div>
            {error && (
              <div className="flex items-center justify-center px-4 sm:px-0">
                <div
                  role="alert"
                  id="alert"
                  className="w-full transition duration-150 ease-in-out bg-red-100 shadow rounded-md md:flex justify-between items-center top-0 mt-12 mb-8 py-4 px-4"
                >
                  <div className="sm:flex items-center">
                    <div className="flex items-end">
                      <div className="mr-2 mt-0.5 sm:mt-0 text-red-700">
                        <img
                          className="focus:outline-none"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/color-coded-with-icon-error-svg1.svg"
                          alt="cross"
                        />
                      </div>
                      <p className="mr-2 text-base font-bold text-red-700">Error</p>
                    </div>
                    <div className="h-1 w-1 bg-red-700 rounded-full mr-2 hidden xl:block"></div>
                    <p className="text-base text-red-700">
                      Todos los campos son requeridos.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {showSuccessMessage && (
              <div className="flex items-center justify-center px-4 sm:px-0">
                <div
                  role="alert"
                  id="alert"
                  className="w-full transition duration-150 ease-in-out bg-green-100 shadow rounded-md md:flex justify-between items-center top-0 mt-12 mb-8 py-4 px-4"
                >
                  <div className="sm:flex items-center">
                    <div className="flex items-end">
                      <div className="mr-2 mt-0.5 sm:mt-0 text-green-700">
                        <img
                          className="focus:outline-none"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/color-coded-with-icon-success-svg1.svg"
                          alt="success"
                        />
                      </div>
                      <p className="mr-2 text-base font-bold text-green-700">
                        Enviado
                      </p>
                    </div>
                    <div className="h-1 w-1 bg-green-700 rounded-full mr-2 hidden xl:block"></div>
                    <p className="text-base text-green-700">
                      Tu comentario ha sido publicado exitosamente.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 mt-6 flex justify-end rounded-bl rounded-br">
        <button
          className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
          type="button"
          onClick={handleCommentSubmission}
        >
          Enviar
        </button>
      </div>
      <style dangerouslySetInnerHTML={{ __html: "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      " }} />
    </section>
  );
};

export default CommentForm;
