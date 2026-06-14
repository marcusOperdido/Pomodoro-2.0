import "./botoes.css"
export default function Butoon({ children, onclick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
