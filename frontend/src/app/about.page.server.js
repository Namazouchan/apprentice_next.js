// app/about.page.server.js
export async function loader() {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();
  return { props: { articles } };
}