import axios from "axios";

async function getData(id) {
  try {
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    return { ...user, posts };
  } catch (error) {
    console.log(error);
  }
}

export default getData;
