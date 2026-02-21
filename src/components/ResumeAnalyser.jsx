import{ useState } from "react";

const ResumeAnalyzer = ()=> {
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume || !jobDesc) {
      alert("Please upload resume and enter job description");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("job_desc", jobDesc);

    try {
      setLoading(true);

      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);
      
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h2>Resume Analyzer</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setResume(e.target.files[0])}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <textarea
            rows="5"
            placeholder="Enter Job Description"
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? (
            <>
              <i className="fa fa-spinner fa-spin"></i> Analyzing...
            </>
          ) : (
            "Analyze"
          )}
        </button>
      </form>

      {/* Loading Spinner Center */}
      {loading && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <i
            className="fa fa-spinner fa-spin"
            style={{ fontSize: "40px" }}
          ></i>
          <p>Loading...</p>
        </div>
      )}

      {response && (
        <div style={{ marginTop: "20px" }}>
          <h3>Response:</h3>
          <p>{JSON.stringify(response)}</p>
        </div>
      )}
    </div>
  );
}

export default ResumeAnalyzer;