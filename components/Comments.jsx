import React, { useState, useEffect } from "react";
import moment from "moment";
import { getComments } from "../services";
import { FaRegCommentDots, FaBookmark } from 'react-icons/fa';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <section
      id="comments"
      className="container mx-auto bg-white shadow rounded mt-12"
    >
      <div className="xl:w-full border-b border-gray-100 py-5">
        <div className="w-11/12 mx-auto">
          <hr className="mb-6 border-t border-gray-300" />
          <div className="flex items-center justify-between">
            <div className="text-gray-800 flex items-center">
              <FaRegCommentDots className="w-8 h-8" />
              <p className="lg:text-2xl text-xl text-gray-800 font-bold ml-4">{comments.length} Comentarios</p>
            </div>
            <div className="text-gray-800 flex items-center">
              <FaBookmark className="w-8 h-8" />
            </div>
          </div>
          <hr className="mt-6 border-t border-gray-300" />
          <div className="overflow-y-scroll h-64 my-6">
            {comments.map((comment) => (
              <div className="flex mb-10 px-2 py-2" key={comment.createdAt}>
                <div className="ml-2 w-full">
                  <div className="mb-3 flex justify-between">
                    <p className="text-gray-700 font-bold">{comment.name}</p>
                    <p className="text-gray-700 text-xs">{moment(comment.createdAt).format('MMM DD, YYYY')}</p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {comment.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
