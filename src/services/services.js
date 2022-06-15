const axios = require("axios");

export async function getAllPosts() {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/episode`
    );
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(postId) {
  await axios
    .get(`${process.env.REACT_APP_BASEURL}/posts/${postId}`, {
      method: "DELETE",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function updatePost(postId, title, body, userId) {
  await axios
    .put(
      `${process.env.REACT_APP_BASEURL}/posts/${postId}`,
      {
        postId: postId,
        title: title,
        body: body,
        userId: userId,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default { getAllPosts, deletePost, updatePost };