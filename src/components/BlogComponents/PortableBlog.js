import React from "react";
import PortableText from "react-portable-text";

const PortableBlog = ({ portableTextContent }) => {
  const serializer = {
    types: {
      image: (props) => <img src={props.node.asset.url} alt={props.node.alt} />,
    },
  };

  return (
    <div>
      <PortableText content={portableTextContent} serializers={serializer} />
    </div>
  );
};

export default PortableBlog;
