export default function SideScrollableWrapper({ children }) {
  return (
    <div style={{
      width: "100%",
      maxWidth: "100%",
      overflowX: "auto",
      overflowY: "hidden"
    }}>
      {children}
    </div>
  );
}
