/* eslint-disable react/prop-types */
function Post(props) {
  return (
    <><strong>{props.author}</strong>
    <p>{props.content}</p></>
  )
}

export default Post;