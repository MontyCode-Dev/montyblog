import React from "react";

const Author = ({ author }) => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container relative mx-auto">
        <section>
          <figure>
            <div className="w-11/12 mx-auto bg-white py-10 sm:px-16 px-10 relative">
              <div className="flex items-center justify-between pb-8">
                <div className="xl:flex md:flex lg:flex sm:flex items-center">
                  <div className="h-20 w-20">
                    <img
                      src={author.photo.url}
                      alt={author.name}
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow"
                    />
                  </div>
                  <div className="xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 pt-4">
                    <p className="text-xl text-gray-600 font-bold">{author.name}</p>
                    <p className="sm:text-xl text-sm text-gray-600">
                      Role @ Location
                    </p>
                  </div>
                </div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full-width-card-with-chevron-svg2.svg"
                  alt="commas"
                />
              </div>
              <p className="text-base text-gray-600 w-full sm:w-10/12">
                {author.bio}
              </p>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Author;
