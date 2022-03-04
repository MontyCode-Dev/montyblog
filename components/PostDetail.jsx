import React from "react";
import moment from 'moment';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-two':
        return <h3 key={index} className="mb-6 text-3xl text-gray-800 font-bold">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-three':
        return <h3 key={index} className="mb-6 text-2xl text-gray-800 font-bold">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-four':
        return <h4 key={index} className="mb-4 text-xl text-gray-800 font-bold">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'paragraph':
        return <p key={index} className="mb-5 text-gray-800 text-xl">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'code-block':
        return <pre key={index} ><code className='mb-5 overflow-x-scroll'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</code></pre>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="container mx-auto">
        <p className="mb-4 mb-3 text-red-500 text-lg">Categoria</p>
        <h1 className="text-5xl text-gray-800 font-medium mb-6">
          {post.title}
        </h1>
        <p className="text-gray-700 text-2xl">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        <div className="flex items-center mb-8">
            <img src={post.author.photo.url} alt={post.author.name} className="w-10 h-10 object-cover" />
            <div>
                <p className="text-base text-gray-800 ml-4">Por <span className="underline cursor-pointer">{post.author.name}</span></p>
            </div>
        </div>
        <div className="h-96 w-full relative border-b border-gray-300 mb-12">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="h-full w-full object-cover overflow-hidden shadow"
          />
        </div>
        <article className="prose lg:prose-xl mx-auto mb-6">
            {post.content.raw.children.map((typeObj, index ) => {
              const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

              return getContentFragment(index, children, typeObj, typeObj.type)
            })}
        </article>
    </div>
  );
};

export default PostDetail;
