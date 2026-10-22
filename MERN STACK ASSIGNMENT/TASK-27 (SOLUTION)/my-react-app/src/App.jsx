
import useFetch from "./useFetch";
import "./App.css";

const API = "https://jsonplaceholder.typicode.com/photos";

const colors = [
  "#92c94f",
  "#791797",
  "#14ed4c",
  "#d62272",
  "#f06598",
  "#55a8bf",
  "#a5f4c9",
  "#50166c",
  "#4a9b85",
  "#9e1525",
  "#10b981",
  "#438da8",
];

function App() {
  const { data, loading, error } = useFetch(API);

  if (loading) {
    return <h2 className="status">Loading photos...</h2>;
  }

  if (error) {
    return <h2 className="status">Error: {error}</h2>;
  }

  return (
    <div className="gallery">
      <h1>Photos</h1>

      <div className="photo-grid">
        {data.slice(0, 40).map((photo, index) => (
          <div className="photo-card" key={photo.id}>
            <div
              className="photo-placeholder"
              style={{
                backgroundColor: colors[index % colors.length],
              }}
            >
              <span>600 x 600</span>
            </div>

            <p className="photo-title">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
