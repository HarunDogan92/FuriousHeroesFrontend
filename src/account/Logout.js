

export default function Logout() {
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.reload(false);
  }
  return (
    <button
      className="btn"
      onClick={() => {
        logout();
      }}
    >
      Logout
    </button>
  );
}
