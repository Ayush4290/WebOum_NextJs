export default function productSupport() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 189px 189px 189px",
        background: "linear-gradient(180deg, #4B0082 0%, #FFFFFF 100%)",
        minHeight: "400px",
      }}
    >
      <div
        style={{
          maxWidth: "50%",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Product Support
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          Our global strategic partner enables us to create next generation
          robust products and IT consulting, efficiently and make us quickly
          technical support solutions for any upcoming complexity.
        </p>
      </div>
      <div
        style={{
          maxWidth: "45%",
        }}
      >
        <img
          src="https://weboum.com/wp-content/uploads/2021/04/mobile-application.jpg"
          alt="Developer Illustration"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
}
