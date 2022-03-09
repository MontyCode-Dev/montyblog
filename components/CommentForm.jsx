import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { submitComment } from "../services";
import { MdCheckCircle, MdError } from "react-icons/md";
import * as Yup from "yup";

const CommentForm = ({ slug }) => {
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
      <Formik
        initialValues={{
          name: "",
          email: "",
          comment: "",
          slug: slug,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("*Es necesario completar este campo."),
          comment: Yup.string().required(
            "*Es necesario ingresar un comentario."
          ),
          email: Yup.string()
            .email("Formato de correo invalido.")
            .required("*Es necesario ingresar un correo."),
        })}
        onSubmit={(values, { setStatus, setSubmitting }) => {
          setStatus();
          submitComment(values).then(
            (result) => {
              setSubmitting(false);
              setStatus({
                sent: true,
                msg: "Tu comentario se ha enviado a un administrador para ser aprobado.",
              });
              console.log(result);
              setTimeout(() => {
                setStatus(false);
              }, 3000);
            },
            (error) => {
              setSubmitting(false);
              console.log(error);
              setStatus({
                sent: false,
                msg: "Algo salió mal, intenta de nuevo.",
              });
            }
          );
        }}
      >
        {({ errors, status, touched, isSubmitting }) => (
          <Form className="w-full">
            <div className="w-11/12 mx-auto">
              <div className="container mx-auto">
                <div className="my-8 mx-auto xl:w-full xl:mx-0">
                  <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className={
                          "border pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-400 text-gray-800" +
                          (errors.name && touched.name
                            ? " border-red-500"
                            : "border-gray-100")
                        }
                        placeholder="Nombre"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 italic"
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
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          className={
                            "w-full border pl-16 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-400 text-gray-800" +
                            (errors.email && touched.email
                              ? " border-red-500"
                              : "border-gray-100")
                          }
                          placeholder="Correo"
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 italic"
                      />
                    </div>
                    <div className="mt-8 w-full">
                      <Field
                        as="textarea"
                        id="comment"
                        name="comment"
                        className={
                          "w-full border pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-400 resize-none" +
                          (errors.comment && touched.comment
                            ? " border-red-500"
                            : "border-gray-100")
                        }
                        placeholder="Comentario"
                        rows="5"
                      />
                      <ErrorMessage
                        name="comment"
                        component="div"
                        className="text-red-500 italic"
                      />
                    </div>
                  </div>
                  {status && status.msg && (
                    <div className="flex items-center justify-center px-4 sm:px-0">
                      <div
                        role="alert"
                        id="alert"
                        className={`w-full transition duration-150 ease-in-out ${
                          status.sent ? "bg-green-100" : "bg-red-100"
                        } shadow rounded-md md:flex justify-between items-center top-0 mt-12 mb-8 py-4 px-4`}
                      >
                        <div className="sm:flex items-center">
                          <div className="flex items-end">
                            <p
                              className={`mr-2 text-base font-bold ${
                                status.sent ? "text-green-500" : "text-red-700"
                              }`}
                            >
                              {status.sent ? <MdCheckCircle /> : <MdError />}
                            </p>
                          </div>
                          <div className="h-1 w-1 bg-green-700 rounded-full mr-2 hidden xl:block"></div>
                          <p
                            className={`text-base ${
                              status.sent ? "text-green-500" : "text-red-700"
                            }`}
                          >
                            {status.msg}
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
                type="submit"
              >
                {" "}
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default CommentForm;
