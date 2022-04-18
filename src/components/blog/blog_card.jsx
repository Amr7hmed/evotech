import React from "react";

function BlogCard(props) {
  const { Title, Img } = props;
  return (
    <section className="blog__card">
      <div className="blog__card__header">
        <div className="detiles">
          <h5>{Title}</h5>
          <p>
            Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
            quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed
            odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan
            ipsum velit. Nam nec tellus a odio tincidunt mauris.
          </p>
          <p>
            auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit
            amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit.
            Nam nec tellus a odio tincidunt mauris
          </p>
        </div>
        <div
          className="img"
          style={{
            backgroundImage: `url('${Img}')`,
          }}
        >
          <div className="category">category</div>
        </div>
      </div>
      <div className="blog__card__data">
        <p>
          Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
          quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum
          velit. Nam nec tellus a odiotincidunt mauris.
        </p>
        <p>
          auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet
          nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec
          tellus a odio tincidunt mauris Lorem ipsum gravida nibh vel velit
          auctor aliquetn sollicitudirem quibibendum auci elit cons equat
          ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
          a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a
          odiotincidunt mauris. Lorem ipsum gravida nibh vel velit auctor
          aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem
          nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
          . Morbi accumsan ipsum velit. Nam nec tellus a odiotincidunt mauris.
        </p>
        <p>
          auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet
          nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec
          tellus a odio tincidunt mauris Lorem ipsum gravida nibh vel velit
          auctor aliquetn sollicitudirem quibibendum auci elit cons equat
          ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
          a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a
          odiotincidunt mauris auci elit cons equat ipsutis sem nibh id elit.
          Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi
          accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris Lorem
          ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
          quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum
          velit. Nam nec tellus a odiotincidunt mauris. auci elit cons equat
          ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
          a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
          tincidunt mauris Lorem ipsum gravida nibh vel velit auctor aliquetn
          sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id
          elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi
          accumsan ipsum velit. Nam nec tellus a odiotincidunt mauris.
        </p>
      </div>
    </section>
  );
}

export default BlogCard;
