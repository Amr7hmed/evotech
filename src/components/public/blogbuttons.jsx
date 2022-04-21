import React, { Component } from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

function BlogButtons(props) {
  const { ShareUrl } = props;
  return (
    <div className="blog__buttons">
      <FacebookShareButton
        url={ShareUrl}
        quote={"Title or jo bhi aapko likhna ho"}
        hashtag={"#portfolio..."}
        className="blog__button"
      >
        <FacebookIcon size={35} round={true} />
      </FacebookShareButton>

      <LinkedinShareButton
        url={ShareUrl}
        quote={"Title or jo bhi aapko likhna ho"}
        hashtag={"#portfolio..."}
        className="blog__button"
      >
        <LinkedinIcon size={35} round={true} />
      </LinkedinShareButton>

      <TwitterShareButton
        url={ShareUrl}
        quote={"Title or jo bhi aapko likhna ho"}
        hashtag={"#portfolio..."}
        className="blog__button"
      >
        <TwitterIcon size={35} round={true} />
      </TwitterShareButton>

      <WhatsappShareButton
        url={ShareUrl}
        quote={"Title or jo bhi aapko likhna ho"}
        hashtag={"#portfolio..."}
        className="blog__button"
      >
        <WhatsappIcon size={35} round={true} />
      </WhatsappShareButton>
    </div>
  );
}

export default BlogButtons;
