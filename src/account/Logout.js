

export default function Logout() {
  function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
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
